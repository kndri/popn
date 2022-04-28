import * as React from 'react';
import {
	View,
	Image,
	Alert,
	FlatList,
	TouchableOpacity,
	ActivityIndicator,
	Dimensions,
} from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { Button, Screen, Text, Header } from '../../components';
import {
	getUserFromDb,
	getFollowersFromUser,
} from '../../aws-functions/aws-functions';
//required images
const verified = require('../../assets/images/verified_badge.png');
const location_icon = require('../../assets/images/zipcode-icon.png');

// NOTE: This should be refactored
import styles from './Styles';

export default function UserProfileScreen(props?: any) {
	const userID = props.route.params;
	const navigation = useNavigation();
	const [sneakerCollection, setSneakerCollection] = React.useState<any>([]);
	const [followers, setFollowers] = React.useState<number>(0);
	const [transactions, setTransactions] = React.useState<number>(0);
	const [user, setUser] = React.useState<any>();
	const [isLoading, setIsLoading] = React.useState(true);
	const isFocused = useIsFocused();
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'collection', title: 'Collection' },
		{ key: 'listings', title: 'Listings' },
	]);

	const getUserData = async () => {
		const user = await getUserFromDb(userID);
		setUser(user);
		const followers = await getFollowersFromUser(user!.id).catch((error) =>
			console.log('error', error)
		);
		setFollowers(followers.length);
		setSneakerCollection(user.sneakers.items);
		setIsLoading(false);
	};

	React.useEffect(() => {
		getUserData();
	}, [isFocused]);

	const renderSneaker = ({ item }) => (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('ShoeDetails', { shoeID: item.id });
			}}
		>
			<View
				style={{
					justifyContent: 'space-evenly',
					height: 150,
					width: 150,
					borderWidth: 1,
					borderColor: '#EBEBEB',
					borderRadius: 10,
					marginBottom: 40,
					marginHorizontal: 10,
				}}
			>
				<View
					style={{
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
						marginLeft: 10,
						marginTop: 10,
					}}
				>
					<Text
						text={`${item.primaryName}`}
						style={{ fontSize: 12, color: '#979797' }}
					/>
					<Text text={`${item.secondaryName}`} style={{ fontSize: 10 }} />
					{item.claim.items.length > 0 ? (
						<>
							{item.claim?.items[0].status === 'verified' ? (
								<Image
									source={verified}
									style={{ marginTop: 5, height: 20, width: 20 }}
								/>
							) : null}
						</>
					) : null}
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image
						source={{ uri: item.image }}
						style={{ height: 81, width: 100, resizeMode: 'contain' }}
					/>
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Button
						preset="none"
						style={{
							justifyContent: 'center',
							width: '70%',
							height: 20,
							paddingVertical: 2,
							borderRadius: 10,
							marginBottom: 15,
						}}
						onPress={() => {
							navigation.navigate('ShoeDetails', { shoeID: item.id });
						}}
					>
						<Text
							preset="bold"
							style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}
						>
							View
						</Text>
					</Button>
				</View>
			</View>
		</TouchableOpacity>
	);

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

	const renderEmptyCollection = () => {
		return (
			<>
				<Text
					style={styles.TEXTCENTER}
					preset="bold"
					text="Collection is empty."
				/>
			</>
		);
	};

	const renderCollection = () => {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				{sneakerCollection.length == 0 ? (
					renderEmptyCollection()
				) : (
					<View style={styles.DATA_CONTAINER}>
						<FlatList
							data={sneakerCollection}
							renderItem={renderSneaker}
							keyExtractor={(sneaker) => String(sneaker.id)}
							numColumns={2}
							contentContainerStyle={{
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						/>
					</View>
				)}
			</View>
		);
	};

	const CollectionRoute = () => (
		<View style={styles.DATA_CONTAINER}>{renderCollection()}</View>
	);

	const ListingsRoute = () => (
		<View style={styles.DATA_CONTAINER}>{renderEmptyListings()}</View>
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
						<Header leftIcon="back" onLeftPress={() => navigation.goBack()} />
					</View>

					<View style={styles.PROFILE_DATA}>
						<View style={styles.IMAGE_AND_FOllOW_BUTTON_VIEW}>
							<Image
								style={styles.PROFILE_IMAGE}
								source={{ uri: user.avatarImageURL }}
							/>
							<Button
								preset="primary"
								style={styles.FOLLOW_BUTTON}
								text="Follow"
								// onPress={() => { }}
							/>
						</View>

						<View style={{ alignSelf: 'flex-start', marginTop: 6 }}>
							<Text preset="h1" text={`${user.username}`} />
							<View
								style={{
									flexDirection: 'row',
									alignItems: 'center',
									marginTop: 10,
								}}
							>
								<Image
									source={location_icon}
									style={{ width: 16, height: 16, marginRight: 5 }}
								/>
								<Text>Charlotte, NC</Text>
								<Text style={{ marginLeft: 10 }}>Joined in 2022</Text>
							</View>

							<View style={{ flexDirection: 'row', marginTop: 10 }}>
								<View style={styles.PROFILE_DETAILS}>
									<Text preset="bold" text={'267'} />
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
								renderLabel={({ route, focused, color }) => (
									<Text preset="bold" style={{ color: 'black', fontSize: 16 }}>
										{route.title}
									</Text>
								)}
							/>
						)}
					/>
				</Screen>
			)}
		</>
	);
}
