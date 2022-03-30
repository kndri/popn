import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { AuthProvider } from './contexts/auth';
import { FormProvider } from './contexts/form-context';
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports.js';
import ToastContainer from './components/Toast';
import { createUser } from './src/graphql/mutations';
import { getUser } from './src/graphql/queries';

Amplify.configure(awsconfig);

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	const saveUserToDB = async (user) => {
		await API.graphql(graphqlOperation(createUser, { input: user }));
	};

	useEffect(() => {
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
				} else {
					console.log('User already exists');
				}
			}

			// If it doesn't, create the user in the database
		};
		updateUser();
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
