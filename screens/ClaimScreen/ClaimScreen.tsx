import * as React from 'react';
import { View, ViewStyle, TextInput, FlatList } from 'react-native';
import { color, spacing } from '../../theme';
import {
	Button,
	Screen,
	Text,
	AutoImage as Image,
	Header,
} from '../../components';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import {
	addUserSneaker,
	getSneakersFromUser,
	getSneakersFromDB,
	getListUser,
	getLeaderBoardByZipCode,
	getTopSellersByZipCode,
} from '../../aws-functions/aws-functions';
import { useToast } from '../../components/Toast';
import { useAuth } from '../../contexts/auth';

import styles from './Styles';

const search_icon = require('../../assets/images/searchIcon.png');

export default function ClaimScreen() {
	const navigation = useNavigation();
	const { authData: user } = useAuth();

	const toast = useToast();
	const [query, setQuery] = React.useState('');
	const [searchedArray, setSearchedArray] = React.useState<any>([]);
	const [collection, setCollection] = React.useState<any>([]);
	const [sneakerDb, setSneakerDb] = React.useState<any>([]);

	//contains a list of users
	const [users, setUsers] = React.useState<any>([]);
	// contains a list of searched users
	const [searchedUser, setSearchedUsers] = React.useState<any>([]);
	const isFocused = useIsFocused();

	React.useEffect(() => {
		// if there is nothing being search set the feed to be the list of sneakers from sneaker store
		if (query.length === 0) {
			setSearchedArray(sneakerDb);
		} else {
			const searchedObjects: any = [];
			sneakerDb
				.filter(
					(sneakerObject) =>
						sneakerObject.primaryName
							.toLowerCase()
							.replace(/\s+/g, '')
							.includes(query.toLowerCase().replace(/\s+/g, '')) ||
						sneakerObject.secondaryName
							.toLowerCase()
							.replace(/\s+/g, '')
							.includes(query.toLowerCase().replace(/\s+/g, ''))
				)
				.map((filteredSneaker) => {
					searchedObjects.push(filteredSneaker);
				});

			setSearchedArray(searchedObjects);
		}
	}, [query]);

	/**
	 * This useEffect filters the list of users
	 */
	React.useEffect(() => {
		const searchedObject: any = [];
		users
			.filter((contactObject) =>
				contactObject.username
					.toLowerCase()
					.replace(/\s+/g, '')
					.includes(query.toLowerCase().replace(/\s+/g, ''))
			)
			.map((filteredContact) => {
				searchedObject.push(filteredContact);
			});

		setSearchedUsers(searchedObject);
	}, [query]);

	/**
	 * getSneakers fetches sneakers that the user has claimed
	 * and the sneakers from the sneaker store
	 */
	const getSneakers = async () => {
		// sneakers from user
		const sneakerlist = await getSneakersFromUser(user!.id).catch((error) =>
			console.error(error)
		);
		// sneakers from sneaker store
		const sneakersData = await getSneakersFromDB().catch((error) =>
			console.error(error)
		);
		setSearchedArray(sneakersData);
		setSneakerDb(sneakersData);
		setCollection(sneakerlist);
	};

	/**
	 * checkClaimed checks whether the user has claimed the shoe so they dont claim the
	 * same sneaker multiple time
	 * @param item
	 * @returns
	 */
	const checkClaimed = (item: any) => {
		if (!collection) {
			return;
		}
		const found = collection.some(
			(sneaker) => sneaker.secondaryName == item.secondaryName
		);

		if (found) {
			return true;
		} else {
			return false;
		}
	};

	/**
	 * fetchUser fetches the list of users
	 */

	const fetchUsers = async () => {
		try {
			const userList = await getListUser();
			setUsers(userList.items);
		} catch (e) {
			console.log(e);
		}
	};
	/**
	 * fetchUser fetches the list of leader board by zipcode
	 */

	const fetchLeaderBoardByZipCode = async () => {
		try {
			const leaderBoard = await getLeaderBoardByZipCode('27330');
		} catch (e) {
			console.log('error:', e);
		}
	};
	/**
	 * fetchUser fetches the list of users
	 */

	const fetchTopSellersByZipCode = async () => {
		try {
			const topSellers = await getTopSellersByZipCode('27330');
		} catch (e) {
			console.log('error:', e);
		}
	};
	/**
	 * The useEffect will fetch for sneakers and user
	 */
	React.useEffect(() => {
		fetchUsers();
		getSneakers();
		fetchLeaderBoardByZipCode();
		fetchTopSellersByZipCode();
	}, [isFocused]);

	// React.useEffect(() => {}, [sneakerDb]);

	/**
	 *
	 * @param param0 This function renders the sneakers
	 * @returns
	 */
	const renderSneaker = ({ item }) => {
		if (checkClaimed(item)) {
			return (
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
						opacity: 0.5,
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
					</View>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Image
							source={{ uri: item.imageUrl }}
							style={{ height: 81, width: 100, resizeMode: 'contain' }}
						/>
					</View>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Button
							preset="none"
							disabled
							style={{
								justifyContent: 'center',
								width: '70%',
								height: 20,
								paddingVertical: 2,
								borderRadius: 10,
								marginBottom: 15,
							}}
							onPress={() => {
								addUserSneaker(item);

								// then grey out the sneaker card
							}}
						>
							<Text
								preset="bold"
								style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}
							>
								Claimed
							</Text>
						</Button>
					</View>
				</View>
			);
		} else {
			return (
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
					</View>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Image
							source={{ uri: item.imageUrl }}
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
								addUserSneaker(item)
									.then(() => {
										toast.show(`Sneaker has been added to your showcase.`);
										getSneakers();
									})
									.catch((error) => console.log(error));
							}}
						>
							<Text
								preset="bold"
								style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}
							>
								Claim
							</Text>
						</Button>
					</View>
				</View>
			);
		}
	};

	return (
		<Screen style={styles.CONTAINER}>
			<Header
				headerTx="Claim"
				leftIcon={'back'}
				onLeftPress={() => navigation.goBack()}
			/>

			<View style={styles.CLAIM_SEARCH}>
				<Image
					source={search_icon}
					style={{ marginLeft: 17, width: 16, height: 16 }}
				/>
				<TextInput
					style={{
						width: '100%',
						height: 48,
						borderWidth: 1,
						paddingLeft: 20,
						borderRadius: 32,
						borderColor: '#F4F6F9',
						backgroundColor: '#F4F6F9',
					}}
					value={query}
					autoCorrect={false}
					onChangeText={(text) => setQuery(text)}
					placeholder="Search"
					placeholderTextColor={'#878C90'}
				/>
			</View>

			<View style={styles.COLLECTION_CONTAINER}>
				<FlatList
					data={searchedArray}
					renderItem={renderSneaker}
					keyExtractor={(sneaker) => String(sneaker.id)}
					numColumns={2}
					contentContainerStyle={{
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				/>
			</View>
		</Screen>
	);
}
