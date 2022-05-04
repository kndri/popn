import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Screen, Text, TextField, Header, Button } from '../../components';
import { useAuth } from '../../contexts/auth';
import { useToast } from '../../components/Toast';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import { authService } from '../../services/auth-service';
import { updateUser } from '../../src/graphql/mutations';

import styles from './styles';

export default function ChangeEmailScreen() {
	const navigation = useNavigation();
	const toast = useToast();
	const { authData: user } = useAuth();
	const [newEmail, setNewEmail] = useState('');
	const goBack = () => navigation.goBack();

	const updateEmail = async (userID: any) => {
		try {
			// 1. Update users email on dynomodb.
			await API.graphql(
				graphqlOperation(updateUser, {
					input: {
						id: userID,
						email: newEmail,
					},
				})
			);

			// 2. Get current authenticated user.
			const user = await Auth.currentAuthenticatedUser();

			// 3. Update the user's email in cognito.
			await Auth.updateUserAttributes(user, {
				email: newEmail,
			});

			// 4. Confirm the user's email.
			await Auth.confirmSignUp(newEmail, '420690');

			// 5. Navigate to verify email screen
			navigation.navigate('verifyEmail');
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * validateEmailFormat: Checks if the email is in the correct format
	 * and if the email is available.
	 */
	const validateEmailFormat = async () => {
		if (
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
				newEmail
			)
		) {
			// Check if email exist in Cognito
			const available = await authService.emailAvailable(newEmail);
			if (!available) {
				toast.show(`This email is being used by another account.`, {
					color: 'red',
				});
			} else {
				updateEmail(user?.id);
			}
		} else {
			toast.show(`You have entered an invalid email address!`, {
				color: 'red',
			});
		}
	};

	return (
		<View testID="ChangeEmailScreen" style={styles.FULL}>
			<Screen style={styles.CONTAINER}>
				<Header leftIcon="back" onLeftPress={goBack} />
				<View style={{ flexDirection: 'column', backgroundColor: 'white' }}>
					<Text
						style={styles.HEADER_TITLE}
						preset="header"
						text="Change Email Address"
					/>
					<Text
						style={{ textAlign: 'center', bottom: 40 }}
						preset="secondary"
						text="We'll send you a verification code."
					/>

					<TextField
						style={styles.INPUTSTYLE_CONTAINER}
						inputStyle={styles.INPUT}
						placeholder="Enter New Email Address"
						keyboardType="default"
						value={newEmail}
						onChangeText={(value) => setNewEmail(value)}
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
								validateEmailFormat();
							}}
						/>
					</View>
				</View>
			</Screen>
		</View>
	);
}
