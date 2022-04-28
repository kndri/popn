import React, { FC, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
	Screen,
	Text,
	TextField,
	Header,
	Button,
	AutoImage as Image,
} from '../../components';

import { Auth } from 'aws-amplify';

import { useToast } from '../../components/Toast';

import styles from './styles';

const eye = require('../../assets/images/reveal.png');

interface changePasswordProps {}
const ChangePasswordScreen: FC<changePasswordProps> = () => {
	const navigation = useNavigation();
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [currentUser, setCurrentUser] = useState({});
	const [reveal, setReveal] = React.useState<boolean>(true);
	const [reveal2, setReveal2] = React.useState<boolean>(true);
	const [reveal3, setReveal3] = React.useState<boolean>(true);

	const toast = useToast();
	const goBack = () => navigation.goBack();

	React.useEffect(() => {
		fetchCurrentUser();
	}, []);

	//1.get current user
	const fetchCurrentUser = async () => {
		try {
			const userInfo = await Auth.currentAuthenticatedUser();
			// console.log(userInfo)
			setCurrentUser(userInfo);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View testID="ChangePasswordScreen" style={styles.FULL}>
			<Screen style={styles.CONTAINER}>
				<Header leftIcon="back" onLeftPress={goBack} />

				<View style={{ flexDirection: 'column', backgroundColor: 'white' }}>
					<Text
						style={styles.HEADER_TITLE}
						preset="header"
						text="Change Your Password"
					/>
					<View style={{ top: 15 }}>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								width: '100%',
							}}
						>
							<TextField
								style={styles.INPUTSTYLE_CONTAINER}
								inputStyle={styles.INPUT}
								placeholder="Enter old Password"
								keyboardType="default"
								value={password}
								onChangeText={(value) => setPassword(value)}
								autoCapitalize="none"
								autoCorrect={false}
								secureTextEntry={reveal}
							/>
							<TouchableOpacity
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									margin: 'auto',
								}}
								onPress={() => {
									setReveal((prev) => !prev);
								}}
							>
								<Image
									source={eye}
									style={[
										{
											marginLeft: 10,
											justifyContent: 'center',
											marginTop: 15,
										},
										reveal == true ? { opacity: 0.3 } : null,
									]}
								/>
							</TouchableOpacity>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								width: '100%',
							}}
						>
							<TextField
								style={styles.INPUTSTYLE_CONTAINER}
								inputStyle={styles.INPUT}
								placeholder="Enter new Password"
								keyboardType="default"
								value={newPassword}
								onChangeText={(value) => setNewPassword(value)}
								autoCapitalize="none"
								autoCorrect={false}
								secureTextEntry={reveal2}
							/>
							<TouchableOpacity
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									margin: 'auto',
								}}
								onPress={() => {
									setReveal2((prev) => !prev);
								}}
							>
								<Image
									source={eye}
									style={[
										{
											marginLeft: 10,
											justifyContent: 'center',
											marginTop: 15,
										},
										reveal2 == true ? { opacity: 0.3 } : null,
									]}
								/>
							</TouchableOpacity>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								width: '100%',
							}}
						>
							<TextField
								style={styles.INPUTSTYLE_CONTAINER}
								inputStyle={styles.INPUT}
								placeholder="Confirm new Password"
								keyboardType="default"
								value={confirmNewPassword}
								onChangeText={(value) => setConfirmNewPassword(value)}
								autoCapitalize="none"
								autoCorrect={false}
								secureTextEntry={reveal3}
							/>
							<TouchableOpacity
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									margin: 'auto',
								}}
								onPress={() => {
									setReveal3((prev) => !prev);
								}}
							>
								<Image
									source={eye}
									style={[
										{
											marginLeft: 10,
											justifyContent: 'center',
											marginTop: 15,
										},
										reveal3 == true ? { opacity: 0.3 } : null,
									]}
								/>
							</TouchableOpacity>
						</View>
					</View>

					<View
						style={{
							flexDirection: 'column',
							alignContent: 'center',
							justifyContent: 'center',
							marginTop: 155,
						}}
					>
						<Button
							// style={!isValid ? DISABLED : null}
							text="Confirm Changes"
							preset="primary"
							onPress={async () => {
								if (
									password === '' ||
									newPassword === '' ||
									confirmNewPassword === ''
								) {
									toast.show('passwords cannot be empty', { color: 'red' });
								} else if (newPassword != confirmNewPassword) {
									toast.show('Make sure you confirmed correctly', {
										color: 'red',
									});
								} else {
									await Auth.changePassword(currentUser, password, newPassword)
										.then(() => {
											toast.show('Your password has been changed.');
										})
										.then(() => {
											navigation.navigate('UserProfile');
										});
								}
							}}
						/>
					</View>
				</View>
			</Screen>
		</View>
	);
};

export default ChangePasswordScreen;
