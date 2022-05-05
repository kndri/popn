import * as Notifications from 'expo-notifications';
import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getListingByAvailablity } from '../../aws-functions/aws-functions';
import { getUser } from '../../src/graphql/queries';
import { updateUser } from '../../src/graphql/mutations';

import Feed from '../../components/feed';
import { Screen, Text, AutoImage as Image } from '../../components';

import styles from './styles';

const search_icon = require('../../assets/images/searchIcon.png');

export default function Home() {
	const navigation = useNavigation();
	const [listingData, setListingData] = React.useState([]);
	const isFocused = useIsFocused();

	const getListing = async () => {
		const dataAvailable = await getListingByAvailablity();

		setListingData(dataAvailable);
	};

	const checkNotificationToken = async () => {
		// Get current authenticated user
		const userInfo = await Auth.currentAuthenticatedUser({
			bypassCache: true,
		}).catch((error) => {
			console.log('error', error);
		});
		const profile = await API.graphql(
			graphqlOperation(getUser, { id: userInfo.attributes.sub })
		);

		if (profile.data.getUser.expoToken === null) {
			const { status } = await Notifications.requestPermissionsAsync();
			if (status !== 'granted') {
				alert('No notification permissions!');
				return;
			}
			let token = (await Notifications.getExpoPushTokenAsync()).data;

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

	React.useEffect(() => {
		checkNotificationToken();
	}, []);

	React.useEffect(() => {
		getListing();
	}, [isFocused]);

	return (
		<Screen style={styles.CONTAINER}>
			<TouchableOpacity
				style={styles.CLAIM_SEARCH}
				onPress={() => navigation.navigate('UserSearch')}
			>
				<Image source={search_icon} style={{ width: 16, height: 16 }} />
				<View style={styles.TEXTFIELD_STYLE}>
					<Text style={styles.TEXT_STYLE}> Search</Text>
				</View>
			</TouchableOpacity>
			<View>{<Feed productData={listingData} />}</View>
		</Screen>
	);
}
