import React, { FC, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Screen, Text, TextField, Header, Button } from '../../components';
import { useToast } from '../../components/Toast';


import { updateUser } from '../../src/graphql/mutations';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { useAuth } from '../../contexts/auth';

import styles from './styles';

export default function ChangeZipCode() {
	const { authData: user, updateAuth } = useAuth();
	const toast = useToast();
	const navigation = useNavigation();

	const [newZip, setNewZip] = useState('');
	const goBack = () => navigation.goBack();

	//2. perform mutation and show toast
	const updateZip = async () => {
		try {
			// changes in Dynomo DB
			await API.graphql(
				graphqlOperation(updateUser, {
					input: {
						id: user?.id,
						zipCode: newZip,
					},
				})
			);
			// Changes attribute on Cognito
			await Auth.currentAuthenticatedUser().then(async (response) => {
				await Auth.updateUserAttributes(response, {
					'custom:zipCode': newZip,
				}).catch((error) => {
					console.log('error: ', error);
				});
			});
			updateAuth();
			navigation.goBack();
			toast.show(`Zip Code Updated`);
		} catch (error) {
			console.log('error:', error);
		}
	};

	const validateZipFormat = async () => {
		if (/^[0-9]{5,5}$/.test(newZip)) {
			updateZip();
			//TODO: if zip is in format use google location autocomplete
		} else {
			toast.show(`You have entered an invalid zip code!`, {
				color: 'red',
			});
		}
	};

	return (
		<View testID="ChangeZipCodeScreen" style={styles.FULL}>
			<Screen style={styles.CONTAINER}>
				<Header leftIcon="back" onLeftPress={goBack} />
				<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
					<View style={{ flexDirection: 'column', backgroundColor: 'white' }}>
						<Text
							style={styles.HEADER_TITLE}
							preset="header"
							text="Change Zip Code"
						/>

						<TextField
							autoCapitalize="none"
							autoCorrect={false}
							inputStyle={styles.INPUT}
							keyboardType="number-pad"
							maxLength={5}
							onChangeText={(value) => setNewZip(value)}
							placeholder="Enter New Zip Code"
							style={styles.INPUTSTYLE_CONTAINER}
							value={newZip}
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
									validateZipFormat();
								}}
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>

			</Screen>
		</View>
	);
}
