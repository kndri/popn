import * as React from 'react';
import {
	View,
	Image,
	Alert,
	FlatList,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import {
	useIsFocused,
	useNavigation,
	CommonActions,
} from '@react-navigation/native';

import { Button, Screen, Text, Header, SneakerCard } from '../../components';

import {
	getSneakersFromUser,
	deleteUserSneaker,
	getFollowingFromUser,
	getFollowersFromUser,
} from '../../aws-functions/aws-functions';

import { useAuth } from '../../contexts/auth';

import styles from './styles';
import { spacing } from '../../theme';

export default function ProfileScreen() {
	const { authData: user } = useAuth();
	const navigation = useNavigation();
	const [sneakerCollection, setSneakerCollection] = React.useState<any>([]);
	const [following, setFollowing] = React.useState<number>(0);
	const [followers, setFollowers] = React.useState<number>(0);
	const [isLoading, setIsLoading] = React.useState(true);
	const isFocused = useIsFocused();

	/**
	 * getUserData() will retrieve sneaker and following/followers data
	 */
	const getUserData = async () => {
		const sneakerlist = await getSneakersFromUser(user!.id).catch((error) =>
			console.log('error', error)
		);
		const following = await getFollowingFromUser(user!.id).catch((error) =>
			console.log('error', error)
		);
		const followers = await getFollowersFromUser(user!.id).catch((error) =>
			console.log('error', error)
		);

		setSneakerCollection(sneakerlist);
		setFollowing(following.length);
		setFollowers(followers.length);
		setIsLoading(false);
	};

	React.useEffect(() => {
		getUserData();
		return () => {
			navigation.dispatch({
				...CommonActions.setParams({}),
			});
		};
	}, [isFocused]);

	// Alerts when long pressed on shoe items
	const createDeleteAlert = (shoeID) =>
		Alert.alert(
			'Delete Shoe',
			'Are you sure you want to delete this Shoe? If this is a verified shoe you will need to reverify the shoe through check check',
			[
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{
					text: 'OK',
					onPress: () => {
						deleteUserSneaker(shoeID).then(() => getUserData());
					},
				},
			]
		);

	const renderEmptyCollection = () => {
		return (
			<View style={{ paddingHorizontal: spacing[8] }}>
				<Text
					style={styles.TEXTCENTER}
					preset="bold"
					text="Your collection is empty."
				/>
				<Button
					style={{ marginTop: 20, alignSelf: 'center', width: '100%' }}
					text="Start Collecting"
					preset="cta"
					onPress={() => navigation.navigate('Claim')}
				/>
			</View>
		);
	};

	const renderCollection = () => {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				{sneakerCollection != undefined && sneakerCollection.length == 0 ? (
					renderEmptyCollection()
				) : (
					<View style={styles.DATA_CONTAINER}>
						<FlatList
							data={sneakerCollection}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() => {
										navigation.navigate('ShoeDetails', { shoeID: item.id });
									}}
								>
									<SneakerCard sneaker={item} sneakerPoint={100} />
								</TouchableOpacity>
							)}
							keyExtractor={(sneaker) => String(sneaker.id)}
							numColumns={2}
							columnWrapperStyle={{
								justifyContent: 'space-between',
								marginBottom: 15,
							}}
						/>
					</View>
				)}
			</View>
		);
	};

	return (
		<>
			{isLoading && (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<ActivityIndicator size="large" color="black" />
				</View>
			)}

			{!isLoading && (
				<Screen style={styles.CONTAINER}>
					<View style={styles.PROFILE_HEADER}>
						<Header
							headerTx={`${user?.username}`}
							rightIcon="settings"
							onRightPress={() => navigation.navigate('Settings')}
						/>
					</View>
					<View style={styles.PROFILE_DATA}>
						<Image style={styles.PROFILE_IMAGE} source={{ uri: user?.image }} />
						<View style={{ flexDirection: 'row', marginLeft: 20 }}>
							<View style={styles.PROFILE_DETAILS}>
								{sneakerCollection != undefined ? (
									<Text preset="bold" text={`${sneakerCollection.length}`} />
								) : (
									<Text preset="bold" text="0" />
								)}

								<Text preset="default" text={'Collection'} />
							</View>
							<View style={styles.PROFILE_DETAILS}>
								<Text preset="bold" text={`${following}`} />
								<Text preset="default" text={'Following'} />
							</View>
							<View style={styles.PROFILE_DETAILS}>
								<Text preset="bold" text={`${followers}`} />
								<Text preset="default" text={'Followers'} />
							</View>
						</View>
					</View>
					<View
						style={{ flexDirection: 'row', paddingHorizontal: spacing[3] }}
					></View>

					<View style={styles.COLLECTION_CONTAINER}>
						<View style={styles.DATA_CONTAINER}>{renderCollection()}</View>
					</View>
				</Screen>
			)}
		</>
	);
}
