import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import {
	createSneaker,
	deleteSneaker,
	createClaim,
} from '../src/graphql/mutations';
import {
	listSneakerStores,
	sneakerByUser,
	getUser,
	getSneaker,
	followersByUser,
	followingByUser,
	listUsers,
	donScoreByZipCode,
	totalSoldSneakersByZipCode,
} from '../src/graphql/queries';

export const getUserFromDb = async (userID: string) => {
	let user: any;

	const postData = await API.graphql(
		graphqlOperation(getUser, {
			id: userID,
		})
	);

	user = postData.data.getUser;

	return user;
};
export const getListUser = async () => {
	const userList = await API.graphql(graphqlOperation(listUsers));

	return userList.data.listUsers;
};

//stores shoes
export const addUserSneaker = async (sneakerObject: Object) => {
	console.log('sneaker', sneakerObject);
	try {
		// const currentUser = checkLoggedUser();
		const currentUser = await Auth.currentAuthenticatedUser({
			bypassCache: true,
		});

		const newSneaker = {
			brand: sneakerObject.brand,
			primaryName: sneakerObject.primary_name,
			secondaryName: sneakerObject.secondary_name,
			image: sneakerObject.image_url,
			userID: currentUser.attributes.sub,
		};
		await API.graphql(graphqlOperation(createSneaker, { input: newSneaker }));
	} catch (e) {
		console.log(e);
	}
};

//deletes shoe from user
export const deleteUserSneaker = async (id: string) => {
	try {
		// const currentUser = checkLoggedUser();
		const currentUser = await Auth.currentAuthenticatedUser({
			bypassCache: true,
		});

		const newSneaker = {
			id: id,
		};
		await API.graphql(graphqlOperation(deleteSneaker, { input: newSneaker }));
	} catch (e) {
		console.log(e);
	}
};

export const checkLoggedUser = async (): Promise<any> => {
	const data = await Auth.currentAuthenticatedUser({
		bypassCache: true,
	}).catch((error) => {
		console.log(error);
	});

	return data;
};

export const forgotPassword = (username: string) => {
	// Send confirmation code to user's email

	// then navigate back
	if (username === '') {
		Alert.alert('You must provide an email address');
	} else {
		Auth.forgotPassword(username);
	}
};

export const confirmNewPassword = (
	username: string,
	code: string,
	new_password: string
) => {
	// Collect confirmation code and new password, then
	Auth.forgotPasswordSubmit(username, code, new_password);
};

export type SneakerData = {
	sneakerList: any;
};

//stores shoes
export const getSneakersFromDB = async (): Promise<SneakerData> => {
	let sneakerList: any;

	const sneakersData = await API.graphql(graphqlOperation(listSneakerStores));

	sneakerList = sneakersData.data.listSneakerStores.items;

	return sneakerList;
};

export const sendCustomChallenge = async (user: string, OTP: string) => {
	try {
		const cognitoUser = await Auth.sendCustomChallengeAnswer(user, OTP);
	} catch {
		// Handle 3 error thrown for 3 incorrect attempts.
		console.error('You have exceeded the amount of tries');
	}
};

//stores shoes
export const getSneakersFromUser = async (
	userId: string
): Promise<SneakerData> => {
	let sneakerList: any;

	const sneakersData = await API.graphql(
		graphqlOperation(sneakerByUser, {
			userID: userId,
		})
	);

	sneakerList = sneakersData.data.sneakerByUser.items;

	return sneakerList;
};

export const getFollowersFromUser = async (userId: string) => {
	let followersList: any;

	const followers = await API.graphql(
		graphqlOperation(followersByUser, {
			secondUserID: userId,
		})
	);
	followersList = followers.data.followersByUser.items;

	return followersList;
};

export const getFollowingFromUser = async (userId: string) => {
	let followingList: any;

	const following = await API.graphql(
		graphqlOperation(followingByUser, {
			mainUserID: userId,
		})
	);
	followingList = following.data.followingByUser.items;

	return followingList;
};

export const getCurrentSneaker = async (shoeID: any) => {
	let shoe: any;

	const shoeData = await API.graphql(
		graphqlOperation(getSneaker, {
			id: shoeID,
		})
	);

	shoe = shoeData.data.getSneaker;

	return shoe;
};

export const addClaim = async (sneakerID: any, refNumber: any) => {
	try {
		// const currentUser = checkLoggedUser();
		const currentUser = await Auth.currentAuthenticatedUser({
			bypassCache: true,
		});

		const newClaim = {
			userID: currentUser.attributes.sub,
			sneakerID: sneakerID,
			status: 'pending',
			refNumber: refNumber,
			claimMessage: 'Sneaker is processing',
		};
		await API.graphql(graphqlOperation(createClaim, { input: newClaim }));
	} catch (e) {
		console.log(e);
	}
};

export const getLeaderBoardByZipCode = async (zipCode: string) => {
	try {
		const scores = await API.graphql(
			graphqlOperation(donScoreByZipCode, {
				zipCode: zipCode,
				limit: 10,
				sortDirection: 'DESC',
			})
		);

		return scores.data.donScoreByZipCode.items;
	} catch (e) {
		console.log('error: ', e);
	}
};

export const getTopSellersByZipCode = async (zipCode: string) => {
	try {
		const topSellers = await API.graphql(
			graphqlOperation(totalSoldSneakersByZipCode, {
				zipCode: zipCode,
				limit: 10,
				sortDirection: 'DESC',
			})
		);

		return topSellers.data.totalSoldSneakersByZipCode.items;
	} catch (e) {
		console.log('error: ', e);
	}
};
