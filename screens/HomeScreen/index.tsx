import * as React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Screen, Text, AutoImage as Image } from '../../components';
import { useNavigation } from '@react-navigation/native';
import Feed from '../../components/feed';
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify';
import * as Notifications from 'expo-notifications';
import { getUser } from '../../src/graphql/queries';
import { updateUser } from '../../src/graphql/mutations';

import { useToast } from '../../components/Toast';

import styles from './styles';
import { getListingByAvailablity } from '../../aws-functions/aws-functions';
const search_icon = require('../../assets/images/searchIcon.png');
const location_icon = require('../../assets/images/zipcode-icon.png');

export default function Home() {
	const navigation = useNavigation();
	const toast = useToast();
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
					console.log('errpor:', err);
				}
			}
		}
	};

	React.useEffect(() => {
		checkNotificationToken();
	}, []);
	React.useEffect(() => {
		// This listener is fired whenever a notification is received while the app is foregrounded
		notificationListener.current =
			Notifications.addNotificationReceivedListener((notification) => {
				console.log('Notification Received', notification);
			});

		// This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
		responseListener.current =
			Notifications.addNotificationResponseReceivedListener((response) => {
				navigation.navigate('MessageRoom', {
					id: response.notification.request.content.data.chatRoomID,
					name: response.notification.request.content.data.username,
					offerID: response.notification.request.content.data.offerID,
				});
			});

		return () => {
			Notifications.removeNotificationSubscription(
				notificationListener.current
			);
			Notifications.removeNotificationSubscription(responseListener.current);
		};
	}, []);

	React.useEffect(() => {
		getListing();
	}, [listingData]);

	return (
		<Screen style={styles.CONTAINER}>
			<View style={styles.CLAIM_SEARCH}>
				<Image source={search_icon} style={{ width: 16, height: 16 }} />
				<TextInput
					style={styles.TEXTFIELD_STYLE}
					value={query}
					autoCorrect={false}
					onChangeText={(text) => setQuery(text)}
					placeholder="Search"
					placeholderTextColor={'#878C90'}
					onPressIn={() => navigation.navigate('UserSearch')}
				/>
			</View>
			<View>{<Feed productData={listingData} />}</View>
		</Screen>
	);
}
