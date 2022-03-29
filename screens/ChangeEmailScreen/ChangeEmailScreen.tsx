import React, { FC, useState } from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { Screen, Text, TextField, Header, Button } from '../../components';

import { useNavigation } from '@react-navigation/native';
import { getUser } from '../../src/graphql/queries';
import { updateUser } from '../../src/graphql/mutations';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { authService } from '../../services/auth-service';
import { useToast } from '../../components/Toast';
import { useAuth } from '../../contexts/auth';

import styles from './Styles';

export default function ChangeEmailScreen() {
	const { authData: user } = useAuth();
	const toast = useToast();
	const navigation = useNavigation();

	const [newEmail, setNewEmail] = useState('');
	const goBack = () => navigation.goBack();

	//2. perform mutation and show toast
	const updateEmail = async (userID: any) => {
		try {
			await API.graphql(
				graphqlOperation(updateUser, {
					input: {
						id: userID,
						email: newEmail,
					},
				})
			);
			const user = await Auth.currentAuthenticatedUser();
			await Auth.updateUserAttributes(user, {
				email: newEmail,
			});
			await Auth.confirmSignUp(newEmail, '420690');
		} catch (error) {
			console.log(error);
		}
		navigation.navigate('verifyEmail');
	};

	const validateEmailFormat = async () => {
		if (
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
				newEmail
			)
		) {
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
