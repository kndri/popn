import * as React from 'react';
import { View, TextInput, TouchableOpacity, Modal } from 'react-native';
import {
	Button,
	Screen,
	Text,
	AutoImage as Image,
	Header,
} from '../../components';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Feed from '../../components/feed';

import { useToast } from '../../components/Toast';

import styles from './Styles';

const search_icon = require('../../assets/images/searchIcon.png');
const location_icon = require('../../assets/images/zipcode-icon.png');
const close_icon = require('../../assets/images/closeIcon.png');
const right_icon = require('../../assets/images/rightArrowIcon.png');

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
		description: 'Some description',
		sellerID: '6513551651238216188',
		seller: {
			id: '6513551651238216188',
			age: '16',
			username: 'jimmy',
			email: 'jimmy@gmail.com',
			avatarImageURL: 'some url image',
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

export default function Home() {
	const navigation = useNavigation();
	const toast = useToast();
	const [distanceValue, setDistanceValue] = React.useState(30);
	const [query, setQuery] = React.useState('');

	return (
		<Screen style={styles.CONTAINER}>
			<View style={styles.CLAIM_SEARCH}>
				<Image source={search_icon} style={{ width: 16, height: 16 }} />
				<TextInput
					style={{
						flex: 1,
						width: '100%',
						height: 35,
						borderWidth: 1,
						paddingLeft: 10,
						borderRadius: 5,
						borderColor: '#FFFFFF',
						backgroundColor: 'white',
					}}
					value={query}
					autoCorrect={false}
					onChangeText={(text) => setQuery(text)}
					placeholder="Search"
					placeholderTextColor={'#878C90'}
				/>
			</View>

			<View style={{ marginTop: 20, marginBottom: 20 }}>
				<TouchableOpacity
					onPress={() => navigation.navigate('Location')}
					style={styles.LOCATION_CONTAINER}
				>
					<Image
						source={location_icon}
						style={{ width: 16, height: 16, marginRight: 5 }}
					/>
					<Text>Charlotte: {distanceValue} Miles</Text>
				</TouchableOpacity>
			</View>

			<View>{<Feed productData={listingData} />}</View>
		</Screen>
	);
}
