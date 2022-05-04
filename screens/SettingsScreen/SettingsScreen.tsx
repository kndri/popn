/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Screen, Text, Header } from '../../components';
import { useAuth } from '../../contexts/auth';

import styles from './styles';

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
];

const about = [
	{
		id: '6',
		pageSrc: 'privacyPolicy',
		name: 'Privacy Policy',
	},
	{
		id: '7',
		pageSrc: 'termsOfUse',
		name: 'Terms of Use',
	},
];

const actions = [
	{
		id: '8',
		pageSrc: 'signOut',
		name: 'Sign Out',
	},
];

interface SettingsProps { }
const SettingsScreen: FC<SettingsProps> = () => {
	const { signOut } = useAuth();
	const navigation = useNavigation();
	const handleClick = () => {
		signOut();
	};

	return (
		<Screen style={styles.CONTAINER}>
			<View style={styles.CENTER}>
				<Header leftIcon="back" onLeftPress={() => navigation.goBack()} />
			</View>

			<Text style={styles.HEADING_TITLE} preset="h1" text="Settings" />
			{/* flat list of settings options */}
			<View style={styles.FLATLIST}>
				<FlatList
					scrollEnabled={false}
					numColumns={1}
					showsVerticalScrollIndicator={false}
					data={settings}
					renderItem={({ item }) => (
						<View
							style={{
								backgroundColor: 'white',
								paddingHorizontal: 20,
								borderRadius: 4,
							}}
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
											preset="bold"
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

			<Text style={styles.HEADING_TITLE} preset="h1" text="About" />
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
								paddingHorizontal: 20,
								borderRadius: 4,
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
											preset="bold"
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

			<Text style={styles.HEADING_TITLE} preset="h1" text="Actions" />
			{/* flat list of Actions options */}
			<View style={styles.FLATLIST}>
				<FlatList
					scrollEnabled={false}
					numColumns={1}
					showsVerticalScrollIndicator={false}
					// keyExtractor={(item, index) => index.toString()}
					data={actions}
					renderItem={({ item }) => (
						<View
							style={{
								backgroundColor: 'white',
								paddingHorizontal: 20,
								borderRadius: 4,
							}}
						>
							<TouchableOpacity
								onPress={() => {
									if (item.name === 'Sign Out') {
										handleClick();
									}
								}}
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
											preset="bold"
											text={item.name}
										/>
										<TouchableOpacity
											onPress={() => {
												if (item.name === 'Sign Out') {
													handleClick();
												}
											}}
										>
											<Image source={arrow} style={styles.ARROW_ICON} />
										</TouchableOpacity>
									</View>
								</View>
							</TouchableOpacity>
						</View>
					)}
				/>
			</View>
		</Screen>
	);
};

export default SettingsScreen;
