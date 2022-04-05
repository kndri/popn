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
	const isFocused = useIsFocused();

	React.useEffect(() => {
		if (query.length === 0) {
			setSearchedArray(sneakerDb);
		} else {
			const searchedObjects: any = [];
			sneakerDb
				.filter(
					(sneakerObject) =>
						sneakerObject.primary_name
							.toLowerCase()
							.replace(/\s+/g, '')
							.includes(query.toLowerCase().replace(/\s+/g, '')) ||
						sneakerObject.secondary_name
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

	const getSneakers = async () => {
		const sneakerlist = await getSneakersFromUser(user!.id).catch((error) =>
			console.error(error)
		);
		const sneakersData = await getSneakersFromDB().catch((error) =>
			console.error(error)
		);
		setSearchedArray(sneakersData);
		setSneakerDb(sneakersData);
		setCollection(sneakerlist);
	};

	const checkClaimed = (item: any) => {
		if (!collection) {
			return;
		}
		const found = collection.some(
			(sneaker) => sneaker.secondaryName == item.secondary_name
		);

		if (found) {
			return true;
		} else {
			return false;
		}
	};

	React.useEffect(() => {
		getSneakers();
	}, [isFocused]);

	React.useEffect(() => {}, [sneakerDb]);

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
							text={`${item.primary_name}`}
							style={{ fontSize: 12, color: '#979797' }}
						/>
						<Text text={`${item.secondary_name}`} style={{ fontSize: 10 }} />
					</View>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Image
							source={{ uri: item.image_url }}
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
							text={`${item.primary_name}`}
							style={{ fontSize: 12, color: '#979797' }}
						/>
						<Text text={`${item.secondary_name}`} style={{ fontSize: 10 }} />
					</View>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Image
							source={{ uri: item.image_url }}
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