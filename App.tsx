import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { AuthProvider } from './contexts/auth';
import { FormProvider } from './contexts/form-context';
import Amplify, { API, Auth, graphqlOperation, Analytics } from 'aws-amplify';
import awsconfig from './src/aws-exports.js';
import ToastContainer from './components/Toast';
import { createUser } from './src/graphql/mutations';
import { getUser } from './src/graphql/queries';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { useAuth } from './contexts/auth';

Amplify.configure(awsconfig);
Analytics.disable();

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();
	const { authData: user } = useAuth();

	const saveUserToDB = async (user) => {
		await API.graphql(graphqlOperation(createUser, { input: user }));
	};

	const updateUser = async () => {
		// Get current authenticated user
		const userInfo = await Auth.currentAuthenticatedUser({
			bypassCache: true,
		}).catch((error) => {
			console.log('error', error);
		});

		if (userInfo) {
			// Check if user already exists in database
			const userData = await API.graphql(
				graphqlOperation(getUser, { id: userInfo.attributes.sub })
			);
			if (!userData.data.getUser) {
				const user = {
					id: userInfo.attributes.sub,
					username: userInfo.attributes.preferred_username,
					age: userInfo.attributes['custom:age'],
					email: userInfo.attributes.email,
					avatarImageURL: userInfo.attributes['custom:blob'],
				};
				await saveUserToDB(user);
			}
		}

		// If it doesn't, create the user in the database
	};

	const checkNotificationToken = async () => {
		console.log('i am in checkNotificationToken');
		// Get current authenticated user
		const userInfo = await Auth.currentAuthenticatedUser({
			bypassCache: true,
		}).catch((error) => {
			console.log('error', error);
		});

		const profile = await API.graphql(
			graphqlOperation(getUser, { id: userInfo.attributes.sub})
		);

		console.log('profile: ', profile);

		if (profile.expoToken === null) {
			const { status } = await Permissions.askAsync(
				Permissions.NOTIFICATIONS
			);
			if (status !== 'granted') {
				alert('No notification permissions!');
				return;
			}
			let token = (await Notifications.getExpoPushTokenAsync()).data;

			console.log('token: ', token);

			// Only update the profile with the expoToken if it does not exists yet
			if (token !== undefined) {
				const inputParams = {
					id: userInfo.attributes.sub,
					expoToken: token,
				};

				try {
					await API.graphql(
						graphqlOperation(updateUser, { input: inputParams })
					);
				} catch (err) {
					console.log('error:', err);
				}
			}
		}
	};

	useEffect(() => {
		console.log('App.tsx is running');

		updateUser();
		checkNotificationToken();

	}, []);

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<AuthProvider>
				<FormProvider>
					<SafeAreaProvider>
						<Navigation colorScheme={colorScheme} />
						<StatusBar />
						<ToastContainer />
					</SafeAreaProvider>
				</FormProvider>
			</AuthProvider>
		);
	}
}
