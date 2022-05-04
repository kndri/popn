/* eslint-disable sonarjs/no-identical-functions */
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify';
import { listUsers } from '../src/graphql/queries';
import { createUser } from '../src/graphql/mutations';
import * as Notifications from 'expo-notifications';

export type AuthData = {
	error: any;
	email: string;
	id: string;
	image: string;
	username: string;
	zipCode: string;
};
const signIn = (email: string, _password: string): Promise<AuthData> => {
	// variable to check if there is an error
	let errorMessage: any;

	// variable to store user id
	let userId: string, _username: string, image_url: string, _zipCode: string;

	Auth.signIn(email.toLowerCase(), _password)
		.then((response) => {
			userId = response.attributes.sub;
			_username = response.attributes['preferred_username'];
			image_url = response.attributes['custom:blob'];
			_zipCode = response.attributes['custom:zipCode'];
		})
		.catch((error) => {
			errorMessage = error.message;
			throw error;
		});

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				error: errorMessage,
				email: email,
				id: userId,
				username: _username,
				image: image_url,
				zipCode: _zipCode,
			});
		}, 1000);
	});
};
const uploadImage = async (username: string, imageUrl: string) => {

	const response = await fetch(imageUrl);
	const blob = await response.blob();

	const fileName = `${username}ProfileImage.jpeg`;
	const data = await Storage.put(fileName, blob, {
		contentType: 'image/jpeg',
	});
	return data;
};

const signUp = async (
	email: string,
	_password: string,
	age: string,
	_username: string,
	image_url: string,
	zipCode: string
): Promise<AuthData> => {
	// variable to check if there is an error
	let errorMessage: any;

	// variable to store user id
	let userId: any;
	let new_image: any;

	if (image_url.includes('defaultUser') === false) {
		new_image = await uploadImage(_username, image_url);
		const image = await Storage.get(new_image.key, {
			level: 'public',
		});
		const newImage = image.substring(
			0,
			image.indexOf('.jpeg') + '.jpeg'.length
		);
		image_url = newImage;
	}

	await Auth.signUp({
		username: email,
		password: _password,
		attributes: {
			'custom:age': age,
			'custom:blob': image_url,
			preferred_username: _username,
			'custom:zipCode': zipCode,
		},
	})
		.then(async (response) => {
			userId = response.userSub;

			const user = {
				id: response.userSub,
				age: age,
				username: _username,
				avatarImageURL: image_url,
				email: email,
				zipCode: zipCode,
				transactions: 0,
			};
			try {
				await Auth.signIn(email, _password);
				await API.graphql(graphqlOperation(createUser, { input: user }));
			} catch (error) {
				console.log('error', error);
				throw error;
			}
		})
		.catch((error) => {
			errorMessage = error.message;
			throw error;
		});

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				error: errorMessage,
				email: email,
				id: userId,
				username: _username,
				image: image_url,
				zipCode: zipCode,
			});
		}, 1000);
	});
};

const emailAvailable = async (email: string) => {
	// adapted from @herri16's solution: https://github.com/aws-amplify/amplify-js/issues/1067#issuecomment-436492775

	try {
		const resps = await Auth.confirmSignUp(email, '000000', {
			// If set to False, the API will throw an AliasExistsException error if the phone number/email used already exists as an alias with a different user
			forceAliasCreation: false,
		});

		// this should always throw an error of some kind, but if for some reason this succeeds then the user probably exists.
		return true;
	} catch (err: any) {
		switch (err.code) {
			case 'UserNotFoundException':
				return true;
			case 'NotAuthorizedException':
				return false;
			case 'AliasExistsException':
				// Email already exists
				return false;
			case 'CodeMismatchException':
				return false;
			case 'ExpiredCodeException':
				return false;
			default:
				return false;
		}
	}
};

const usernameAvailable = async (username: string) => {
	// 1. Get all the users
	let usernames: any[] = [];
	let isUsernameAvailable = true;

	try {
		const users = await API.graphql(graphqlOperation(listUsers));
		usernames = users.data.listUsers.items;

		// 2. Check if chosen username is available or not
		usernames.map((takenUsername) => {
			if (username == takenUsername.username) {
				console.log('TAKEN');
				isUsernameAvailable = false;
			}
		});

		// 3. Return isUsernameTaken
		return isUsernameAvailable;
	} catch (error) {
		console.log('usernameAvailable Error: ', error);
		if (error == 'Error: No current user') {
			return isUsernameAvailable;
		}
	}
};

const retrieveUser = async (): Promise<AuthData> => {
	let errorMessage: any;

	const user = await Auth.currentAuthenticatedUser({
		bypassCache: true,
	}).catch((error) => {
		console.log('error: ', error);
		errorMessage = error;
	});

	return {
		error: errorMessage,
		email: user.attributes.email,
		id: user.attributes.sub,
		username: user.attributes.preferred_username,
		image: user.attributes['custom:blob'],
		zipCode: user.attributes['custom:zipCode'],
	};
};

export const authService = {
	signIn,
	signUp,
	emailAvailable,
	usernameAvailable,
	retrieveUser,
};
