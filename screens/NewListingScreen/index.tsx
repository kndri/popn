import { TextInput, View } from 'react-native';
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

interface NewListingProps { }
const NewListingScreen: FC<NewListingProps> = () => {
	const navigation = useNavigation();
	return (
		<Screen style={styles.CONTAINER}>
			<View style={styles.LISTING_HEADER}>
				<Header
					headerTx="New Listing"
					leftIcon="back"
					onLeftPress={() => navigation.goBack()}
				// Create a publish listing screen
				// onRightPress={() => navigation.navigate('PublishListing')}
				/>
			</View>

			<View style={styles.LISTING_CONTAINER}>
				{/* SECTION: for title input */}
				<Text text="Title" preset='bold' />
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<TextInput
						style={styles.TEXTFIELD_STYLE}
						// value={query}
						autoCorrect={false}
						// onChangeText={(text) => setQuery(text)}
						placeholder="Search"
						placeholderTextColor={'#878C90'}
					/>
				</View>
				{/* SECTION: for price input */}
				<Text text="Price" preset='bold' style={{ marginTop: 6 }} />
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<TextInput
						style={styles.TEXTFIELD_STYLE}
						// value={query}
						autoCorrect={false}
						// onChangeText={(text) => setQuery(text)}
						placeholder="Search"
						placeholderTextColor={'#878C90'}
					/>
				</View>
				{/* SECTION: for condition selection */}
				<Text text="Condition" preset='bold' style={{ marginTop: 6 }} />
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<TextInput
						style={styles.TEXTFIELD_STYLE}
						// value={query}
						autoCorrect={false}
						// onChangeText={(text) => setQuery(text)}
						placeholder="Search"
						placeholderTextColor={'#878C90'}
					/>
				</View>
				{/* SECTION: for shoe size selection */}
				<Text text="Size" preset='bold' style={{ marginTop: 6 }} />
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<TextInput
						style={styles.TEXTFIELD_STYLE}
						// value={query}
						autoCorrect={false}
						// onChangeText={(text) => setQuery(text)}
						placeholder="Search"
						placeholderTextColor={'#878C90'}
					/>
				</View>

				{/* SECTION: for inputing the descriptions */}
				<Text text="Description" preset='bold' style={{ marginTop: 6 }} />
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<TextInput
						style={styles.TEXTFIELD_STYLE}
						// value={query}
						autoCorrect={false}
						// onChangeText={(text) => setQuery(text)}
						placeholder="Search"
						placeholderTextColor={'#878C90'}
					/>
				</View>

				{/* SECTION: for importing images */}
				<Text text="Add Photos" preset='bold' style={{ marginTop: 6 }} />
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<TextInput
						style={styles.TEXTFIELD_STYLE}
						// value={query}
						autoCorrect={false}
						// onChangeText={(text) => setQuery(text)}
						placeholder="Search"
						placeholderTextColor={'#878C90'}
					/>
					{/* <Text>{'Make sure you include the following photos'}</Text> */}
				</View>
				<Text>{'Make sure you include the following photos'}</Text>
			</View>
		</Screen>
	);
};

export default NewListingScreen;
