import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API, graphqlOperation, Auth } from 'aws-amplify';

import { Screen, Text, TextField, Header, Button } from '../../components';
import { useToast } from '../../components/Toast';
import { useAuth } from '../../contexts/auth';
import { authService } from '../../services/auth-service';
import { updateUser } from '../../src/graphql/mutations';

import styles from './styles';

export default function ChangeUsernameScreen() {
	const { authData: user, updateAuth } = useAuth();
	const toast = useToast();
	const navigation = useNavigation();
	const [newUsername, setNewUsername] = useState('');
	const goBack = () => navigation.goBack();

	// 2. perform mutation and show toast
	const updateUsername = async (userID: any) => {
		try {
			await API.graphql(
				graphqlOperation(updateUser, {
					input: {
						id: userID,
						username: newUsername,
					},
				})
			);
			const user = await Auth.currentAuthenticatedUser();
			await Auth.updateUserAttributes(user, {
				preferred_username: newUsername,
			});
			updateAuth();
			navigation.navigate('Profile');
			toast.show(`Your username has been changed!`);
		} catch (error) {
			console.log(error);
		}
	};

	const validateUsernameFormat = async () => {
		if (newUsername.length > 4) {
			const available = await authService.usernameAvailable(newUsername);
			if (!available) {
				toast.show(`This username is being used by another account.`, {
					color: 'red',
				});
			} else {
				updateUsername(user?.id);
			}
		} else {
			toast.show(`username must have at least 4 characters!`, {
				color: 'red',
			});
		}
	};

	return (
		<View testID="ChangeUsernameScreen" style={styles.FULL}>
			<Screen style={styles.CONTAINER}>
				<Header leftIcon="back" onLeftPress={goBack} />
				<View style={{ flexDirection: 'column', backgroundColor: 'white' }}>
					<Text
						style={styles.HEADER_TITLE}
						preset="header"
						text="Change Username"
					/>
					<Text
						style={{ textAlign: 'center', bottom: 40 }}
						preset="secondary"
						text="Enter your new Username below."
					/>

					<TextField
						style={styles.INPUTSTYLE_CONTAINER}
						inputStyle={styles.INPUT}
						placeholder="new username"
						keyboardType="default"
						value={newUsername}
						onChangeText={(value) => setNewUsername(value)}
						autoCapitalize="none"
						autoCorrect={false}
					/>

					<View
						style={{
							flexDirection: 'column',
							alignContent: 'center',
							justifyContent: 'center',
							marginTop: 150,
						}}
					>
						<Button
							text="Confirm Changes"
							preset="primary"
							onPress={() => {
								validateUsernameFormat();
							}}
						/>
					</View>
				</View>
			</Screen>
		</View>
	);
}
