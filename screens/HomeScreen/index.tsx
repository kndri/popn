import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Screen, Text, AutoImage as Image } from '../../components';
import { useNavigation } from '@react-navigation/native';
import Feed from '../../components/feed';
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify';
import * as Notifications from 'expo-notifications';
import { getUser } from '../../src/graphql/queries';
import { updateChatRoom, updateUser } from '../../src/graphql/mutations';

import { useToast } from '../../components/Toast';

import styles from './styles';
import { getListingByAvailablity } from '../../aws-functions/aws-functions';
import { useApp } from '../../contexts/app-context';
const search_icon = require('../../assets/images/searchIcon.png');

export default function Home() {
	const navigation = useNavigation();
	const toast = useToast();
	const { updateUnreadCount, unreadCount } = useApp();
	const [listingData, setListingData] = React.useState([]);
	const [distanceValue, setDistanceValue] = React.useState(30);
	const [query, setQuery] = React.useState('');
	const notificationListener: any = React.useRef();
	const responseListener: any = React.useRef();

	const getListing = async () => {
		const data = await getListingByAvailablity();

		setListingData(data);
	};

	const checkNotificationToken = async () => {
		console.log('i am in checkNotificationToken');

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
	}, [listingData]);

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
