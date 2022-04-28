import * as React from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { View } from '../../components/Themed';
import SearchedUserListItem from '../../components/searched-users-list-item';
import {
	Text,
	Screen,
	Header,
	ProductCard,
	AutoImage as Image,
} from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { listUsers } from '../../src/graphql/queries';

import styles from './Styles';
import { getListingByAvailablity } from '../../aws-functions/aws-functions';
import { TouchableOpacity } from 'react-native-gesture-handler';

const search_icon = require('../../assets/images/searchIcon.png');

export default function SearchUserScreen() {
	const navigation = useNavigation();
	const [query, setQuery] = React.useState('');
	const [searchedContacts, setSearchedContacts] = React.useState<any>([]);
	const [searchedSneakers, setSearchedSneakers] = React.useState<any>([]);
	const [listingData, setListingData] = React.useState<any>([]);
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
	const fetchSneakersByZipCode = async () => {
		const listings = await getListingByAvailablity();
		setListingData(listings);
	};

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
					sneakerObject.sneakerData.primaryName
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(query.toLowerCase().replace(/\s+/g, '')) ||
					sneakerObject.sneakerData.secondaryName
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
				<Header leftIcon="back" onLeftPress={() => navigation.goBack()} />
			</View>
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
					keyboardAppearance="default"
					autoFocus
				/>
			</View>
			{query.length === 0 ||
			(searchedContacts.length === 0 && searchedSneakers.length === 0) ? (
				<View style={{ alignItems: 'center', backgroundColor: 'transparent' }}>
					{searchedContacts.length < 1 &&
						searchedSneakers.length < 1 &&
						query.length > 0 && <Text>Results Not Found</Text>}
				</View>
			) : (
				<View style={{ backgroundColor: 'white' }}>
					<View style={{ backgroundColor: 'white' }}>
						<FlatList
							style={{
								width: '100%',
								backgroundColor: 'white',
								marginHorizontal: 20,
							}}
							contentContainerStyle={{
								paddingRight: 50,
							}}
							horizontal
							data={searchedSneakers}
							renderItem={({ item }) => (
								<TouchableOpacity
									onPress={() => {
										navigation.navigate('ListingDetails', item);
									}}
								>
									<ProductCard product={item} />
								</TouchableOpacity>
							)}
							keyExtractor={(item) => String(item.id)}
						/>
					</View>

					<FlatList
						style={{
							width: '100%',
							backgroundColor: 'white',
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
