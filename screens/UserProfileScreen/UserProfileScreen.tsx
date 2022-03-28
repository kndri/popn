import * as React from 'react';
import { View, Image, Alert, FlatList, TouchableOpacity } from 'react-native';
import { color, spacing } from '../../theme';
import { Button, Screen, Text, Header } from '../../components';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import {
	getSneakersFromUser,
	checkLoggedUser,
	getPostFromUser,
	deleteUserSneaker,
	getUserFromDb,
	getFollowingFromUser,
	getFollowersFromUser,
} from '../../aws-functions/aws-functions';
import { SneakerList } from '../../types';
// NOTE: This should be refactored
import { API, graphqlOperation } from 'aws-amplify';
import { createFollowers, createFollowing } from '../../src/graphql/mutations';
import NewPostButton from '../../components/new-post-button';

import styles from './Styles';
import Feed from '../../components/feed';
import { int } from 'aws-sdk/clients/datapipeline';

//required images
const messageIcon = require('../../assets/images/message-button.png');
const verified = require('../../assets/images/verified_badge.png');

export default function UserProfileScreen(props?: any) {
	const userID = props.route.params;
	const navigation = useNavigation();
	const [collection, setCollection] = React.useState<any>([]);
	const [posts, setPosts] = React.useState<any>([]);
	const [username, setUsername] = React.useState(String);
	const [profileImage, setprofileImage] = React.useState(String);
	const [followers, setFollowers] = React.useState(String);
	const [following, setFollowing] = React.useState(String);
	const [user, setUser] = React.useState<any>();
	const [selection, setSelection] = React.useState(1);
	const [mainUserID, setMainUserID] = React.useState(String);
	const [isMainUser, setIsMainUser] = React.useState(true);
	const isFocused = useIsFocused();

	const getSneakers = async () => {
		const sneakerlist = await getSneakersFromUser();
		const user = await checkLoggedUser();
		const followingList = await getFollowingFromUser();
		const followerList = await getFollowersFromUser();

		setFollowers(String(followerList.length));
		setFollowing(String(followingList.length));
		setUsername(user.attributes.preferred_username);
		setprofileImage(user.attributes['custom:blob']);
		setCollection(sneakerlist);
	};

	/*
	This is the following function

	First the main user needs to be added to the followers array of the other user.
	
	Then the second user needs to be added to the Main users following array.
	*/
	const Follow = async () => {
		//@TO-DO We need to store the main users ID so we dont have to keep fetching it

		// main user
		const mainUser = await checkLoggedUser();

		// second user
		const user = await getUserFromDb(userID);

		try {
			//adding user to main user Following Array
			await API.graphql(
				graphqlOperation(createFollowing, {
					input: { secondUserID: user.id, mainUserID: mainUser.attributes.sub },
				})
			);

			// adding main user to second user Followers array
			await API.graphql(
				graphqlOperation(createFollowers, {
					input: { mainUserID: mainUser.attributes.sub, secondUserID: user.id },
				})
			);
		} catch (error) {
			console.log(error);
		} finally {
			getUserData();
		}
	};
	const unFollow = async () => {
		console.log('unfollowed');
	};

	const isFollowing = () => {
		// find the object in the array that contains the userID
		const isFound = user.follower.items.find(
			(value: any, index: int, array: any) => {
				if (value.mainUserID === mainUserID) {
					return true;
				}
				return false;
			}
		);
		if (isFound) {
			return true;
		} else {
			return false;
		}
	};

	const getUserData = async () => {
		const user = await getUserFromDb(userID);
		const postList = await getPostFromUser(userID);

		setPosts(postList);
		setUser(user);
		setCollection(user.sneakers.items);
	};

	const check = async () => {
		var currentUser = await checkLoggedUser();
		setMainUserID(currentUser.attributes.sub);
		if (userID === undefined || userID === currentUser.attributes.sub) {
			getSneakers();
			setIsMainUser(true);
		} else {
			getUserData();
			setIsMainUser(false);
		}
	};

	React.useEffect(() => {
		// checks whether it is a different user
		check();
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
						deleteUserSneaker(shoeID).then(() => getSneakers());
					},
				},
			]
		);

	const renderSneaker = ({ item }) => (
		<TouchableOpacity
			onLongPress={() => {
				if (isMainUser) {
					createDeleteAlert(item.id);
				}
			}}
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
					{item.claim?.items !== undefined && item.claim.items.length > 0 ? (
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

	const renderPosts = () => {
		if (posts.length > 0) {
			return <View>{<Feed post={posts} />}</View>;
		}

		return (
			<View style={styles.CENTER}>
				<Text>You have no posts!</Text>
			</View>
		);
	};

	const renderEmptyCollection = () => {
		if (isMainUser === false) {
			return (
				<>
					<Text
						style={styles.TEXTCENTER}
						preset="bold"
						text="Collection is empty."
					/>
				</>
			);
		} else {
			return (
				<>
					<Text
						style={styles.TEXTCENTER}
						preset="bold"
						text="Your collection is empty."
					/>
					<Button
						style={{ marginTop: 20 }}
						text="Start Collecting"
						preset="primary"
						onPress={() => navigation.navigate('Claim')}
					/>
				</>
			);
		}
	};

	const renderCollection = () => {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				{collection.length == 0 ? (
					renderEmptyCollection()
				) : (
					<View style={styles.DATA_CONTAINER}>
						<FlatList
							data={collection}
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

	return (
		<Screen style={styles.CONTAINER}>
			<View style={styles.PROFILE_HEADER}>
				{isMainUser ? (
					<Header
						headerTx="Profile"
						leftIcon="back"
						onLeftPress={() => navigation.goBack()}
						rightIcon="settings"
						onRightPress={() =>
							navigation.navigate('Settings', { screen: 'settings' })
						}
					/>
				) : (
					<Header
						headerTx="Profile"
						leftIcon="back"
						onLeftPress={() => navigation.goBack()}
					/>
				)}
			</View>
			{user ? (
				// second user
				<View style={styles.PROFILE_DATA}>
					<Image
						style={styles.PROFILE_IMAGE}
						source={{ uri: user.avatarImageURL }}
					/>

					<View style={{}}>
						<Text preset="header" text={`${user.username}`} />
						<Text preset="secondary" text={`${user.username}`} />

						<View style={{ flexDirection: 'row' }}>
							<Text preset="bold" text="Following: " />
							<Text preset="bold" text={String(user.following.items.length)} />
						</View>

						<View style={{ flexDirection: 'row' }}>
							<Text preset="bold" text="Followers: " />
							<Text preset="bold" text={String(user.follower.items.length)} />
						</View>
					</View>
				</View>
			) : (
				// main User
				<View style={styles.PROFILE_DATA}>
					<Image
						style={styles.PROFILE_IMAGE}
						source={{ uri: `${profileImage}` }}
					/>

					<View style={{}}>
						<Text preset="header" text={`${username}`} />
						<Text preset="secondary" text={`${username}`} />

						<View style={{ flexDirection: 'row' }}>
							<Text preset="bold" text="Following: " />
							<Text preset="bold" text={following} />
						</View>

						<View style={{ flexDirection: 'row' }}>
							<Text preset="bold" text="Followers: " />
							<Text preset="bold" text={followers} />
						</View>
					</View>
				</View>
			)}

			<View style={{ flexDirection: 'row', paddingHorizontal: spacing[5] }}>
				<Button
					style={{ backgroundColor: 'transparent', width: 48, height: 48 }}
					onPress={() => navigation.navigate('TabThree')}
				>
					<Image source={messageIcon} />
				</Button>
				{user ? (
					// add a check if the user already follows this person
					<>
						{isFollowing() ? (
							<Button
								style={{
									width: 262,
									height: 50,
									borderRadius: 4,
									marginLeft: 10,
									paddingVertical: 0,
									backgroundColor: '#00A542',
								}}
								text="Following"
								preset="primary"
								onPress={() => unFollow()}
							/>
						) : (
							<Button
								style={{
									width: 262,
									height: 50,
									borderRadius: 4,
									marginLeft: 10,
								}}
								text="Follow"
								preset="primary"
								onPress={() => Follow()}
							/>
						)}
					</>
				) : (
					<Button
						style={{ width: 262, height: 50, borderRadius: 4, marginLeft: 10 }}
						text="Edit Profile"
						preset="primary"
						// onPress={() => navigation.navigate("")}
					/>
				)}
			</View>

			<View style={styles.COLLECTION_CONTAINER}>
				<View style={styles.BUTTON_VIEW}>
					<Button
						onPress={() => setSelection(1)}
						style={[
							selection === 1
								? {
										borderRadius: 34,
										width: 101,
										margin: 2,
								  }
								: {
										backgroundColor: 'white',
										borderRadius: 34,
										width: 101,
										borderColor: '#E8EDF2',
										borderWidth: 1,
										margin: 2,
								  },
						]}
					>
						<Text
							preset="bold"
							style={[
								selection === 1 ? { color: 'white' } : { color: 'black' },
							]}
						>
							Collection
						</Text>
					</Button>
					<Button
						onPress={() => setSelection(2)}
						style={[
							selection === 2
								? {
										borderRadius: 34,
										width: 101,
										margin: 2,
								  }
								: {
										backgroundColor: 'white',
										borderRadius: 34,
										width: 101,
										borderColor: '#E8EDF2',
										borderWidth: 1,
										margin: 2,
								  },
						]}
					>
						<Text
							preset="bold"
							style={[
								selection === 2 ? { color: 'white' } : { color: 'black' },
							]}
						>
							Posts
						</Text>
					</Button>
				</View>

				<View style={styles.DATA_CONTAINER}>
					{selection === 1
						? renderCollection()
						: selection === 2
						? renderPosts()
						: null}
				</View>
			</View>
			<NewPostButton />
		</Screen>
	);
}
