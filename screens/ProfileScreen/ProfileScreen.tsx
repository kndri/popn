import * as React from 'react';
import { View, Image, Alert, FlatList, TouchableOpacity } from 'react-native';
import {
	useIsFocused,
	useNavigation,
	CommonActions,
} from '@react-navigation/native';

import { spacing } from '../../theme';
import { Button, Screen, Text, Header } from '../../components';
import {
	getSneakersFromUser,
	deleteUserSneaker,
	getFollowingFromUser,
	getFollowersFromUser,
} from '../../aws-functions/aws-functions';
import { useAuth } from '../../contexts/auth';

import styles from './styles';

//required images
const verified = require('../../assets/images/verified_badge.png');

//
export default function ProfileScreen() {
	const { authData: user } = useAuth();
	const navigation = useNavigation();
	const [sneakerCollection, setSneakerCollection] = React.useState<any>([]);
	const [following, setFollowing] = React.useState<number>(0);
	const [followers, setFollowers] = React.useState<number>(0);
	const [selection, setSelection] = React.useState(1);
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

	// refacter this code
	const renderSneaker = ({ item }) => {
		const { id, image, primaryName, secondaryName, claim } = item;

		return (
			<TouchableOpacity
				onLongPress={() => {
					createDeleteAlert(id);
				}}
				onPress={() => {
					navigation.navigate('ShoeDetails', { shoeID: id });
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
							text={`${primaryName}`}
							style={{ fontSize: 12, color: '#979797' }}
						/>
						<Text text={`${secondaryName}`} style={{ fontSize: 10 }} />
						{claim.item != undefined && claim.items.length > 0 ? (
							<>
								{claim.items[0].status === 'verified' ? (
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
							source={{ uri: image }}
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
								navigation.navigate('ShoeDetails', { shoeID: id });
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
	};

	const renderPosts = () => {
		return (
			<View style={styles.CENTER}>
				<Text>You have no posts!</Text>
			</View>
		);
	};

	const renderEmptyCollection = () => {
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

	return (
		<Screen style={styles.CONTAINER}>
			<View style={styles.PROFILE_HEADER}>
				<Header
					headerTx={`${user?.username}`}
					leftIcon="message"
					rightIcon="settings"
					onLeftPress={() => navigation.navigate('Message')}
					onRightPress={() => navigation.navigate('Settings')}
				/>
			</View>
			<View style={styles.PROFILE_DATA}>
				<Image style={styles.PROFILE_IMAGE} source={{ uri: user?.image }} />
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.PROFILE_DETAILS}>
						<Text preset="bold" text={`${sneakerCollection.length}`} />
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
	);
}
