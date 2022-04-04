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
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

interface NewListingProps { }
const NewListingScreen: FC<NewListingProps> = () => {
	const [price, setPrice] = React.useState('');
	const [description, setDescription] = React.useState('');
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
					<Text preset='default'>Jordan 11 Retro Cool Gray</Text>
				</View>

				{/* SECTION: for price input */}
				<Text text="Price" preset='bold' style={{ marginTop: 6 }} />
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<FontAwesome name="dollar" size={20} color="black" />
					<TextInput
						style={styles.TEXTFIELD_STYLE}
						value={price}
						autoCorrect={false}
						onChangeText={(text) => setPrice(text)}
						placeholder="0"
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
				<View style={styles.MESSAGE_BOX}>
					<TextInput
						style={{
							flex: 1,
							width: '10%',
							height: '100%',
							borderWidth: 1,
							paddingLeft: 10,
							borderRadius: 5,
							borderColor: '#FFFFFF',
							backgroundColor: 'white',
						}}
						value={description}
						autoCorrect={false}
						onChangeText={(text) => setDescription(text)}
						placeholder=""
						placeholderTextColor={'#878C90'}
						keyboardType="default"
						multiline={true}
						blurOnSubmit={true}
						returnKeyType="done"
					/>
				</View>

				{/* SECTION: for importing images */}
				{/* <Text text="Add Photos" preset='bold' style={{ marginTop: 6 }} />
				<View style={styles.INPUT_FIELDS_CONTAINER}>
					<TextInput
						style={styles.TEXTFIELD_STYLE}
						// value={query}
						autoCorrect={false}
						// onChangeText={(text) => setQuery(text)}
						placeholder="Search"
						placeholderTextColor={'#878C90'}
					/>
					<Text>{'Make sure you include the following photos'}</Text>
				</View>
				<Text>{'Make sure you include the following photos'}</Text> */}
			</View>
		</Screen>
	);
};

export default NewListingScreen;
