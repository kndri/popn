import { View } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
	Screen,
	Text,
	Header,
	AutoImage as Image,
	TextField,
} from '../../components';

import styles from './styles';

interface NewListingProps {}
const NewListingScreen: FC<NewListingProps> = () => {
	const navigation = useNavigation();
	return (
		<Screen style={styles.CONTAINER}>
			<View style={styles.LISTING_HEADER}>
				<Header
					headerTx="New Listing"
					leftIcon="back"
					rightIcon="next"
					onLeftPress={() => navigation.goBack()}
					// Create a publish listing screen
					// onRightPress={() => navigation.navigate('PublishListing')}
				/>
			</View>

			<View style={styles.LISTING_CONTAINER}>
				{/* SECTION: for title input */}
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<Text text="Title" />
					<TextField />
				</View>
				{/* SECTION: for price input */}
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<Text text="Price" />
					<TextField />
				</View>
				{/* SECTION: for condition selection */}
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<Text text="Condition" />
					<TextField />
				</View>
				{/* SECTION: for shoe size selection */}
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<Text text="Size" />
					<TextField />
				</View>

				{/* SECTION: for inputing the descriptions */}
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<Text text="Description" />
					<TextField />
				</View>

				{/* SECTION: for importing images */}
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<Text text="Add Photos" />
					<TextField />
					<Text>{'Make sure you include the following photos'}</Text>
				</View>
			</View>
		</Screen>
	);
};

export default NewListingScreen;
