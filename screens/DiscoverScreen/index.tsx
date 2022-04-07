import * as React from 'react';
import {
	View,
	TextInput,
	ScrollView,
} from 'react-native';
import {
	Screen,
	Text,
	AutoImage as Image,
	ProductCard,
} from '../../components';

import styles from './styles';

const searchicon = require('../../assets/images/searchIcon.png');

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
];

interface DiscoverScreenProps {}

export const DiscoverScreen: React.FC<DiscoverScreenProps> = (
	props
): JSX.Element => {
	const [query, setQuery] = React.useState('');

	return (
		<Screen style={styles.CONTAINER}>
			<View style={{ paddingVertical: 20 }}>
				<Text preset="header">Discover</Text>
			</View>
			<View style={styles.SEARCH}>
				<Image source={searchicon} style={{ width: 16, height: 16 }} />
				<TextInput
					style={styles.SEARCH_INPUT}
					value={query}
					autoCorrect={false}
					onChangeText={(text) => setQuery(text)}
					placeholder="Search"
					placeholderTextColor={'#878C90'}
				/>
			</View>

			<View style={{marginBottom: 30}}>
				<Text preset="bold" style={{ fontSize: 18, paddingBottom: 20 }}>
					Hottest Sneakers Out
				</Text>
				<ScrollView horizontal nestedScrollEnabled={true}>
					{listingData.map((item, i) => (
						<View key={i} style={{ marginRight: 20 }}>
							<ProductCard product={item} sneakerPoint={180} />
						</View>
					))}
				</ScrollView>
			</View>

      <View style={{marginBottom: 30}}>
				<Text preset="bold" style={{ fontSize: 18, paddingBottom: 20 }}>
					Sellers To Follow
				</Text>
				<ScrollView horizontal nestedScrollEnabled={true}>
					{listingData.map((item, i) => (
						<View key={i} style={{ marginRight: 20 }}>
							<ProductCard product={item} sneakerPoint={180} />
						</View>
					))}
				</ScrollView>
			</View>
		</Screen>
	);
};
