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

const shoeData = [
	{
		id: 1,
		brand: 'Jordan',
		primary_name: 'Jordan 11 Retro',
		secondary_name: 'Cool Grey',
		price: '$235.00',
		image_url:
			'https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png',
	},
	{
		id: 2,
		brand: 'Nike',
		primary_name: 'Nike Dunk Low',
		secondary_name: 'Retro White Black',
		price: '$235.00',
		image_url:
			'https://popn-app.s3.amazonaws.com/sneakers/nike_dunk_low_retro_white_black.png',
	},
	{
		id: 3,
		brand: 'Nike',
		primary_name: 'Nike Air Force 1 Low',
		secondary_name: 'White',
		price: '$235.00',
		image_url:
			'https://popn-app.s3.amazonaws.com/sneakers/nike_air_force_1_low_white.png',
	},
	{
		id: 4,
		brand: 'Jordan',
		primary_name: 'Jordan 1 Retro High OG',
		secondary_name: 'Bordeaux',
		price: '$235.00',
		image_url:
			'https://popn-app.s3.amazonaws.com/sneakers/jordan_1_retro_high_og_bordeaux.png',
	},
	{
		id: 5,
		brand: 'Jordan',
		primary_name: 'Jordan 2 Retro Low SP',
		secondary_name: 'Off-White Black Blue',
		price: '$235.00',
		image_url:
			'https://popn-app.s3.amazonaws.com/sneakers/jordan_2_retro_low_sp_off_white_black_blue.png',
	},
	{
		id: 6,
		brand: 'Jordan',
		primary_name: 'Jordan 12 Retro',
		secondary_name: 'Royalty Taxi',
		price: '$235.00',
		image_url:
			'https://popn-app.s3.amazonaws.com/sneakers/jordan_12_retro_royalty_taxi.png',
	},
	{
		id: 7,
		brand: 'Jordan',
		primary_name: 'Jordan 4 Retro',
		secondary_name: 'Lightning',
		price: '$235.00',
		image_url:
			'https://popn-app.s3.amazonaws.com/sneakers/jordan_4_retro_lightning.png',
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

			<View>{<Feed productData={shoeData} />}</View>
		</Screen>
	);
}
