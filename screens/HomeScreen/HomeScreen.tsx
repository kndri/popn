import * as React from 'react';
import { View, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
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
	const toast = useToast();
	const [locationModalVisible, setLocationModalVisible] = React.useState(false);
	const [zipCodeModalVisible, setZipCodeModalVisible] = React.useState(false);
	const [distanceValue, setDistanceValue] = React.useState(30);
	const [query, setQuery] = React.useState('');
	const [zipCode, setZipCode] = React.useState('');

	return (
		<Screen style={styles.CONTAINER}>
			<Modal
				presentationStyle="fullScreen"
				animationType="slide"
				// transparent={true}
				visible={locationModalVisible}
				onRequestClose={() => {
					setLocationModalVisible(!locationModalVisible);
				}}
			>
				<View style={styles.CENTERED_VIEW}>
					<View style={styles.MODAL_VIEW}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Header
								headerTx="Location"
								rightIcon="close"
								onRightPress={() =>
									setLocationModalVisible(!locationModalVisible)
								}
							/>
						</View>

						<View style={{ width: '100%', marginTop: 59 }}>
							<Text preset="bold">ZIP Code</Text>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									marginTop: 13,
								}}
								onPress={() => {
									setZipCodeModalVisible(!zipCodeModalVisible),
										setLocationModalVisible(!locationModalVisible);
								}}
							>
								<Text preset="default">Charlotte, NC, 28215</Text>
								<Image source={right_icon} style={{ width: 14, height: 14 }} />
							</TouchableOpacity>
						</View>

						<View style={{ width: '100%', marginTop: 100 }}>
							<Text preset="bold" style={{ paddingTop: 20 }}>
								Distance
							</Text>
							<Slider
								value={distanceValue}
								onValueChange={(value) => setDistanceValue(value)}
								minimumValue={10}
								maximumValue={100}
								step={5}
								trackClickable={true}
							/>

							<Text preset="default">{distanceValue} miles</Text>
						</View>

						<Button
							style={{
								width: '100%',
								height: 50,
								borderRadius: 4,
								marginTop: 224,
							}}
							text="See Listings"
							onPress={() => setLocationModalVisible(!locationModalVisible)}
						/>
					</View>
				</View>
			</Modal>

			<Modal
				presentationStyle="fullScreen"
				animationType="slide"
				// transparent={true}
				visible={zipCodeModalVisible}
				onRequestClose={() => {
					setZipCodeModalVisible(!zipCodeModalVisible);
				}}
			>
				<View style={styles.CENTERED_VIEW}>
					<View style={styles.MODAL_VIEW}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Header
								headerTx="ZIP Code"
								rightIcon="close"
								onRightPress={() => {
									setLocationModalVisible(!locationModalVisible),
										setZipCodeModalVisible(!zipCodeModalVisible);
								}}
							/>
						</View>

						<View
							style={{
								width: '100%',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Text preset="bold" style={{ marginTop: 65 }}>
								Where are you searching?
							</Text>
							<Button
								style={{
									width: 193,
									height: 50,
									borderRadius: 4,
									marginTop: 23,
								}}
								text="Get My Location"
								onPress={() => console.log('clicked')}
							/>
							<Text preset="default" style={{ marginTop: 13 }}>
								or
							</Text>
							<View style={styles.ZIPCODE}>
								<TextInput
									style={{
										flex: 1,
										width: 193,
										height: 35,
										borderWidth: 1,
										paddingLeft: 10,
										borderRadius: 5,
										borderColor: '#FFFFFF',
										backgroundColor: 'white',
									}}
									value={zipCode}
									autoCorrect={false}
									onChangeText={(text) => setZipCode(text)}
									placeholder="Enter ZIP Code"
									placeholderTextColor={'#878C90'}
								/>
							</View>
							<Text preset="default" style={{ marginTop: 23 }}>
								Charlotte, NC
							</Text>
							<Button
								style={{
									width: '100%',
									height: 50,
									borderRadius: 4,
									marginTop: 270,
								}}
								text="Apply"
								onPress={() => {
									console.log('clicked'),
										setZipCodeModalVisible(!zipCodeModalVisible),
										setLocationModalVisible(!locationModalVisible);
								}}
							/>
						</View>
					</View>
				</View>
			</Modal>

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
					onPress={() => setLocationModalVisible(true)}
					style={styles.LOCATION_CONTAINER}
				>
					<Image
						source={location_icon}
						style={{ width: 16, height: 16, marginRight: 5 }}
					/>
					<Text>Charlotte: {distanceValue} Miles</Text>
				</TouchableOpacity>
			</View>

			<View >{<Feed productData={shoeData} />}</View>
		</Screen>
	);
}
