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
			navigation.navigate('Settings');
		} catch (error) {
			console.log('error:', error);
		}
	};

	const validateZipFormat = async () => {
		if (/^[0-9]{5,5}$/.test(newZip)) {
			updateZip();

			toast.show(`Zip Code Updated`);

			//TODO: if zip is in format use google location autocomplete

			// const available = await authService.emailAvailable(newZip);
			// if (!available) {
			// 	toast.show(`This email is being used by another account.`, {
			// 		color: 'red',
			// 	});
			// } else {
			// 	updateZip(user?.id);
			// }
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
				<View style={{ flexDirection: 'column', backgroundColor: 'white' }}>
					<Text
						style={styles.HEADER_TITLE}
						preset="header"
						text="Change Zip Code"
					/>

					<TextField
						style={styles.INPUTSTYLE_CONTAINER}
						inputStyle={styles.INPUT}
						placeholder="Enter New Zip Code"
						keyboardType="number-pad"
						value={newZip}
						onChangeText={(value) => setNewZip(value)}
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
								validateZipFormat();
							}}
						/>
					</View>
				</View>
			</Screen>
		</View>
	);
}
