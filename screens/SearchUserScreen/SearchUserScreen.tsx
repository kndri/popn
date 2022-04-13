import * as React from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { View } from '../../components/Themed';
import SearchedUserListItem from '../../components/searched-users-list-item';
import { Text, Screen, Header, ProductCard } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { listUsers } from '../../src/graphql/queries';

import styles from './Styles';

const listingData = [
	{
		id: '46321348',
		sneakerID: '65463166351',
		sneakerData: {
			id: 1,
			brand: 'Jordan',
			primary_name: 'Jordan 11 Retro',
			secondary_name: 'Cool Grey',
			price: '$235.00',
			image_url:
				'https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png',
		},
		zipCode: '28215',
		// THIS IS JUST AN EXAMPLE OF HOW IMAGES WILL LOOK LIKE!
		images: [
			'https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png',
			'https://popn-app.s3.amazonaws.com/sneakers/nike_dunk_low_retro_white_black.png',
		],
		size: '9 1/2',
		condition: 'New',
		price: '$200',
		brand: 'Jordan',
		description:
			'I have the box in great condition. I have never worn the shoes, they are brand new. The shoes have no creases. I have the receipt for proof of purchase as well. I have the box in great condition. I have never worn the shoes, they are brand new. The shoes have no creases. I have the receipt for proof of purchase as well.',
		sellerID: '6513551651238216188',
		seller: {
			id: '6513551651238216188',
			age: '16',
			username: 'jimmy',
			email: 'jimmy@gmail.com',
			avatarImageURL:
				'https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png',
			sneakers: [
				{
					//sneakers object
				},
			],
			soldSneakers: [
				{
					//sold sneakers object
				},
			],
			offers: [
				{
					// offers object
				},
			],
			following: [{}],
			follower: [{}],
			status: 'Verified',
			chatRoomUser: [
				{
					// chatRoomUsers object
				},
			],
		},
		prevSellers: ['3486321864', '68435186615665', '435431321531313331'],
	},
	{
		id: '463218348',
		sneakerID: '65463166351',
		sneakerData: {
			id: 1,
			brand: 'Jordan',
			primary_name: 'Jordan 11 Retro',
			secondary_name: 'Cool Grey',
			price: '$235.00',
			image_url:
				'https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png',
		},
		zipCode: '28215',
		// THIS IS JUST AN EXAMPLE OF HOW IMAGES WILL LOOK LIKE!
		images: [
			'https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png',
			'https://popn-app.s3.amazonaws.com/sneakers/nike_dunk_low_retro_white_black.png',
		],
		size: '9 1/2',
		condition: 'New',
		price: '$200',
		brand: 'Jordan',
		description:
			'I have the box in great condition. I have never worn the shoes, they are brand new. The shoes have no creases. I have the receipt for proof of purchase as well. I have the box in great condition. I have never worn the shoes, they are brand new. The shoes have no creases. I have the receipt for proof of purchase as well.',
		sellerID: '6513551651238216188',
		seller: {
			id: '6513551651238216188',
			age: '16',
			username: 'jimmy',
			email: 'jimmy@gmail.com',
			avatarImageURL:
				'https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png',
			sneakers: [
				{
					//sneakers object
				},
			],
			soldSneakers: [
				{
					//sold sneakers object
				},
			],
			offers: [
				{
					// offers object
				},
			],
			following: [{}],
			follower: [{}],
			status: 'Verified',
			chatRoomUser: [
				{
					// chatRoomUsers object
				},
			],
		},
		prevSellers: ['3486321864', '68435186615665', '435431321531313331'],
	},
	{
		id: '463251348',
		sneakerID: '65463166351',
		sneakerData: {
			id: 1,
			brand: 'Jordan',
			primary_name: 'Jordan 11 Retro',
			secondary_name: 'Cool Grey',
			price: '$235.00',
			image_url:
				'https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png',
		},
		zipCode: '28215',
		// THIS IS JUST AN EXAMPLE OF HOW IMAGES WILL LOOK LIKE!
		images: [
			'https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png',
			'https://popn-app.s3.amazonaws.com/sneakers/nike_dunk_low_retro_white_black.png',
		],
		size: '9 1/2',
		condition: 'New',
		price: '$200',
		brand: 'Jordan',
		description:
			'I have the box in great condition. I have never worn the shoes, they are brand new. The shoes have no creases. I have the receipt for proof of purchase as well. I have the box in great condition. I have never worn the shoes, they are brand new. The shoes have no creases. I have the receipt for proof of purchase as well.',
		sellerID: '6513551651238216188',
		seller: {
			id: '6513551651238216188',
			age: '16',
			username: 'jimmy',
			email: 'jimmy@gmail.com',
			avatarImageURL:
				'https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png',
			sneakers: [
				{
					//sneakers object
				},
			],
			soldSneakers: [
				{
					//sold sneakers object
				},
			],
			offers: [
				{
					// offers object
				},
			],
			following: [{}],
			follower: [{}],
			status: 'Verified',
			chatRoomUser: [
				{
					// chatRoomUsers object
				},
			],
		},
		prevSellers: ['3486321864', '68435186615665', '435431321531313331'],
	},
	{
		id: '463214348',
		sneakerID: '65463166351',
		sneakerData: {
			id: 1,
			brand: 'Jordan',
			primary_name: 'Jordan 11 Retro',
			secondary_name: 'Cool Grey',
			price: '$235.00',
			image_url:
				'https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png',
		},
		zipCode: '28215',
		// THIS IS JUST AN EXAMPLE OF HOW IMAGES WILL LOOK LIKE!
		images: [
			'https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png',
			'https://popn-app.s3.amazonaws.com/sneakers/nike_dunk_low_retro_white_black.png',
		],
		size: '9 1/2',
		condition: 'New',
		price: '$200',
		brand: 'Jordan',
		description:
			'I have the box in great condition. I have never worn the shoes, they are brand new. The shoes have no creases. I have the receipt for proof of purchase as well. I have the box in great condition. I have never worn the shoes, they are brand new. The shoes have no creases. I have the receipt for proof of purchase as well.',
		sellerID: '6513551651238216188',
		seller: {
			id: '6513551651238216188',
			age: '16',
			username: 'jimmy',
			email: 'jimmy@gmail.com',
			avatarImageURL:
				'https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png',
			sneakers: [
				{
					//sneakers object
				},
			],
			soldSneakers: [
				{
					//sold sneakers object
				},
			],
			offers: [
				{
					// offers object
				},
			],
			following: [{}],
			follower: [{}],
			status: 'Verified',
			chatRoomUser: [
				{
					// chatRoomUsers object
				},
			],
		},
		prevSellers: ['3486321864', '68435186615665', '435431321531313331'],
	},
];

export default function UserSearchScreen() {
	const navigation = useNavigation();
	const [query, setQuery] = React.useState('');
	const [searchedContacts, setSearchedContacts] = React.useState<any>([]);
	const [searchedSneakers, setSearchedSneakers] = React.useState<any>([]);
	const [users, setUsers] = useState<any>([]);

	const fetchUsers = async () => {
		let setUniqueUsers: any;
		try {
			const usersData = await API.graphql(graphqlOperation(listUsers));
			setUniqueUsers = usersData.data.listUsers.items;

			setUsers(setUniqueUsers);
		} catch (e) {
			console.log(e);
		}
	};

	/**
	 * This fuction will fetch the sneakers by zip code
	 */
	const fetchSneakersByZipCode = async () => {};

	React.useEffect(() => {
		fetchSneakersByZipCode();
		fetchUsers();
	}, []);

	// useEffect to filter out the searched contact
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

		const findings: any = [];
		listingData
			.filter(
				(sneakerObject) =>
					sneakerObject.sneakerData.primary_name
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, '')) ||
					sneakerObject.sneakerData.secondary_name
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, ''))
			)
			.map((filteredSneaker) => {
				findings.push(filteredSneaker);
			});

		setSearchedSneakers(findings);
		setSearchedContacts(searchedObject);
	}, [query]);

	return (
		<Screen style={styles.CONTAINER}>
			<View style={styles.HEADER}>
				<Header
					headerTx="Search"
					leftIcon="back"
					onLeftPress={() => navigation.goBack()}
				/>
			</View>
			<View style={styles.SEARCH}>
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
			{query.length === 0 ||
			(searchedContacts.length === 0 && searchedSneakers.length === 0) ? (
				<View style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
					{searchedContacts.length < 1 &&
					searchedSneakers.length < 1 &&
					query.length > 0 ? (
						<Text>Results Not Found</Text>
					) : (
						<Text>Search Something</Text>
					)}
				</View>
			) : (
				<View>
					<View>
						<FlatList
							style={{
								width: '100%',
								backgroundColor: 'transparent',
								marginHorizontal: 20,
							}}
							contentContainerStyle={{
								paddingRight: 50,
							}}
							horizontal
							data={searchedSneakers}
							renderItem={({ item }) => (
								<ProductCard product={item} screenName={'ListingDetails'} />
							)}
							keyExtractor={(item) => String(item.id)}
						/>
					</View>

					<FlatList
						style={{
							width: '100%',
							backgroundColor: 'transparent',
							height: '100%',
							marginTop: 20,
							borderTopColor: 'black',
							borderTopWidth: 2,
						}}
						data={searchedContacts}
						renderItem={({ item }) => <SearchedUserListItem user={item} />}
						keyExtractor={(item) => String(item.id)}
					/>
				</View>
			)}
		</Screen>
	);
}
