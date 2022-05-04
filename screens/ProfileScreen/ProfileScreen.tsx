import * as React from 'react';
import {
	View,
	FlatList,
	TouchableOpacity,
	ActivityIndicator,
	Dimensions,
} from 'react-native';
import {
	useIsFocused,
	useNavigation,
} from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { spacing } from '../../theme';
import {
	Button,
	Screen,
	Text,
	Header,
	SneakerCard,
	AutoImage as Image,
} from '../../components';
import EditProfileModal from './EditProfileModal';
import {
	getSneakersFromUser,
	getFollowersFromUser,
	getUserFromDb,
} from '../../aws-functions/aws-functions';

import { useAuth } from '../../contexts/auth';

import styles from './styles';
import moment from 'moment';
const location_icon = require('../../assets/images/zipcode-icon.png');

export default function ProfileScreen() {
	const [editProfileModalVisible, setEditProfileModalVisible] = React.useState(false);
	const [followers, setFollowers] = React.useState<number>(0);
	const [index, setIndex] = React.useState(0);
	const [isLoading, setIsLoading] = React.useState(true);
	const [sneakerCollection, setSneakerCollection] = React.useState<any>([]);
	const [userData, setUserData] = React.useState<any>();
	const isFocused = useIsFocused();
	const navigation = useNavigation();
	const { authData: user, updateAuth } = useAuth();
	const [routes] = React.useState([
		{ key: 'collection', title: 'Collection' },
		{ key: 'listings', title: 'Listings' },
	]);

	/**
	 * getUserData() will retrieve sneaker and following/followers data
	 */
	const getUserData = async () => {
		const loggedUser = await getUserFromDb(user?.id);
		setUserData(loggedUser);
		const sneakerlist = await getSneakersFromUser(user?.id).catch((error) =>
			console.log('error', error)
		);
		const followers = await getFollowersFromUser(user?.id).catch((error) =>
			console.log('error', error)
		);
		setSneakerCollection(sneakerlist);
		setFollowers(followers.length);
		setIsLoading(false);
	};

	React.useEffect(() => {
		getUserData();
		updateAuth()
	}, [isFocused]);

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
									<SneakerCard
										sneaker={item}
										showVerificationBage
										sneakerPoint={item.sneaker.points}
									/>
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

	const renderListings = () => {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				{sneakerCollection.length == 0 ? (
					renderEmptyListings()
				) : (
					//needs to be refactored to a flatlist that shwos all listings of this user
					<Text
						style={styles.TEXTCENTER}
						preset="bold"
						text="Available Listings."
					/>
				)}
			</View>
		);
	};

	const renderEmptyListings = () => {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Text
					style={styles.TEXTCENTER}
					preset="bold"
					text="No Listings Available."
				/>
			</View>
		);
	};

	const CollectionRoute = () => (
		<View style={styles.DATA_CONTAINER}>{renderCollection()}</View>
	);

	const ListingsRoute = () => (
		<View style={styles.DATA_CONTAINER}>{renderListings()}</View>
	);

	const initialLayout = { width: Dimensions.get('window').width };

	const renderScene = SceneMap({
		collection: CollectionRoute,
		listings: ListingsRoute,
	});

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
							rightIcon="settings"
							onRightPress={() => navigation.navigate('Settings')}
							leftIcon='plus'
							onLeftPress={() => navigation.navigate('Claim')}
						/>
					</View>

					<View style={styles.PROFILE_DATA}>
						<View style={styles.IMAGE_AND_BUTTON_VIEW}>
							<Image
								style={styles.PROFILE_IMAGE}
								source={{ uri: user?.image }}
							/>
							<Button
								preset="primary"
								style={styles.EDIT_PROFILE_BUTTON}
								text="Edit Profile"
								onPress={() => {
									setEditProfileModalVisible(!editProfileModalVisible);
								}}
							/>
						</View>

						<View style={{ alignSelf: 'flex-start', marginTop: 6 }}>
							<Text preset="h1">{user?.username}</Text>
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									marginTop: 10,
								}}
							>
								<Text>Joined in {moment(userData.createdAt).format('YYYY')}</Text>
							</View>

							<View style={{ flexDirection: 'row', marginTop: 10 }}>
								<View style={styles.PROFILE_DETAILS}>
									<Text preset="bold" text={`${userData.transactions}`} />
									<Text
										preset="default"
										style={{ marginLeft: 6 }}
										text={'Transactions'}
									/>
								</View>

								<View style={styles.PROFILE_DETAILS}>
									<Text preset="bold" text={`${followers}`} />
									<Text
										preset="default"
										style={{ marginLeft: 6 }}
										text={'Followers'}
									/>
								</View>
							</View>
						</View>
					</View>

					<TabView
						navigationState={{ index, routes }}
						renderScene={renderScene}
						onIndexChange={setIndex}
						initialLayout={initialLayout}
						renderTabBar={(props) => (
							<TabBar
								{...props}
								indicatorStyle={{ backgroundColor: 'black' }}
								style={{ backgroundColor: 'white' }}
								renderLabel={({ route }) => (
									<Text preset="bold" style={{ color: 'black', fontSize: 16 }}>
										{route.title}
									</Text>
								)}
							/>
						)}
					/>
					<EditProfileModal
						editProfileModalVisible={editProfileModalVisible}
						setEditProfileModalVisible={setEditProfileModalVisible}
					/>
				</Screen>
			)}
		</>
	);
}
