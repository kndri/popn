/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Screen, Text, Header, Button } from '../../components';
import { useAuth } from '../../contexts/auth';

import styles from './Styles';

const arrow = require('../../assets/images/arrow-ios-forward-outline.png');

const settings = [
	{
		id: '1',
		pageSrc: 'changeEmail',
		name: 'Email',
	},
	{
		id: '2',
		pageSrc: 'changePassword',
		name: 'Password',
	},
	{
		id: '3',
		pageSrc: 'changeUsername',
		name: 'Username',
	},
	{
		id: '4',
		pageSrc: 'ChangeProfileImage',
		name: 'Profile Picture',
	},
	{
		id: '5',
		pageSrc: 'changeZipCode',
		name: 'Zip Code',
	},
];

const about = [
	{
		id: '4',
		pageSrc: 'privacyPolicy',
		name: 'Privacy Policy',
	},
	{
		id: '5',
		pageSrc: 'termsOfUse',
		name: 'Terms of Use',
	},
];

const actions = [
	{
		id: '8',
		pageSrc: 'rating',
		name: 'Rate POPN',
	},
	{
		id: '9',
		pageSrc: 'signOut',
		name: 'Sign Out',
	},
];

interface SettingsProps { }
const SettingsScreen: FC<SettingsProps> = () => {
	const { signOut } = useAuth();
	const navigation = useNavigation();
	const onSignOutPress = () => {
		signOut();
	};

	return (
		<Screen style={styles.CONTAINER}>
			<View style={styles.CENTER}>
				<Header leftIcon="back" onLeftPress={() => navigation.goBack()} headerTx={"Settings"} />
			</View>
			<View style={{ flex: 1, justifyContent: 'space-between', marginBottom: '30%' }}>
				<View>
					<View>
						<Text style={styles.HEADING_TITLE} preset="h4" text="My Account" />
						{/* flat list of settings options */}
						<View style={styles.FLATLIST}>
							<FlatList
								scrollEnabled={false}
								numColumns={1}
								showsVerticalScrollIndicator={false}
								data={settings}
								renderItem={({ item }) => (
									<View
									>
										<TouchableOpacity
											onPress={() => navigation.navigate(item.pageSrc)}
										>
											<View
												style={{
													flex: 1,
													flexDirection: 'row',
													padding: 5,
													backgroundColor: 'white',
													alignItems: 'center',
													alignContent: 'center',
													borderRadius: 5,
												}}
											>
												<View
													style={{
														flex: 1,
														flexDirection: 'row',
														height: 35,
														alignItems: 'center',
														justifyContent: 'space-between',
													}}
												>
													{/* settings page name */}
													<Text
														style={styles.SETTINGS_NAME}
														preset="h3"
														text={item.name}
													/>
													{/* <Text style={SETTINGS_NAME}>{item.name}</Text> */}
													<TouchableOpacity>
														<Image source={arrow} style={styles.ARROW_ICON} />
													</TouchableOpacity>
												</View>
											</View>
										</TouchableOpacity>
									</View>
								)}
							/>
						</View>
					</View>

					<View>
						<Text style={styles.HEADING_TITLE} preset="h4" text="About" />
						{/* flat list of about section */}
						<View style={styles.FLATLIST}>
							<FlatList
								scrollEnabled={false}
								numColumns={1}
								showsVerticalScrollIndicator={false}
								// keyExtractor={(item, index) => index.toString()}
								data={about}
								renderItem={({ item }) => (
									<View
										style={{
											backgroundColor: 'white',
										}}
									>
										<TouchableOpacity
										// onPress={() => navigation.navigate(item.pageSrc)}
										>
											<View
												style={{
													flex: 1,
													flexDirection: 'row',
													padding: 5,
													backgroundColor: 'white',
													alignItems: 'center',
													alignContent: 'center',
													borderRadius: 20,
												}}
											>
												<View
													style={{
														flex: 1,
														flexDirection: 'row',
														height: 35,
														alignItems: 'center',
														justifyContent: 'space-between',
													}}
												>
													{/* settings page name */}
													<Text
														style={styles.SETTINGS_NAME}
														preset="h3"
														text={item.name}
													/>
													<TouchableOpacity>
														<Image source={arrow} style={styles.ARROW_ICON} />
													</TouchableOpacity>
												</View>
											</View>
										</TouchableOpacity>
									</View>
								)}
							/>
						</View>
					</View>
				</View>
				<Button preset="link" text="Sign Out" textStyle={{ color: '#FF4C5E', fontSize: 22, fontWeight: 'bold' }} onPress={() => onSignOutPress()} />
			</View>
		</Screen>
	);
};

export default SettingsScreen;
