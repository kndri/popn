import { TextInput, View } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';


import {
	Screen,
	Text,
	Header,
	Button,
} from '../../components';

import styles from './styles';
import { spacing } from '../../theme';

interface NewListingProps { }

const NewListingScreen: FC<NewListingProps> = () => {
	const navigation = useNavigation();
	const [price, setPrice] = React.useState('');
	const [description, setDescription] = React.useState('');

	const [openCondition, setOpenCondition] = React.useState(false);
	const [conditionValue, setConditionValue] = React.useState(null);
	const [conditionItems, setCondtiionItems] = React.useState([
		{ label: 'New/Never Worn', value: 'New/Never Worn' },
		{ label: 'Gently Used', value: 'Gently Used' },
		{ label: 'Used', value: 'Used' },
		{ label: 'Very Worn', value: 'Very Worn' },
	]);

	const [openSize, setOpenSize] = React.useState(false);
	const [sizeValue, setSizeValue] = React.useState(null);
	const [sizeItems, setSizeItems] = React.useState([
		{ label: '5', value: '5' },
		{ label: '5.5', value: '5.5' },
		{ label: '6', value: '6' },
		{ label: '6.5', value: '6.5' },
		{ label: '7', value: '7' },
		{ label: '7.5', value: '7.5' },
		{ label: '8', value: '8' },
		{ label: '8.5', value: '8.5' },
		{ label: '9', value: '9' },
		{ label: '9.5', value: '9.5' },
		{ label: '10', value: '10' },
		{ label: '10.5', value: '10.5' },
		{ label: '11', value: '11' },
		{ label: '11.5', value: '11.5' },
		{ label: '12', value: '12' },
		{ label: '12.5', value: '12.5' },
		{ label: '13', value: '13' },
		{ label: '14', value: '14' },
		{ label: '15', value: '15' },

	]);

	return (
		<Screen style={styles.CONTAINER}>

			<Header
				headerTx="New Listing"
				leftIcon="back"
				onLeftPress={() => navigation.goBack()}
			/>


			<View style={styles.LISTING_CONTAINER}>

				{/* SECTION: for title input */}
				<View>
					<Text text="Title" preset='bold' />
					<View style={styles.INPUT_FIELDS_CONTAINER}>
						<Text preset='default'>Jordan 11 Retro Cool Gray</Text>
					</View>
				</View>


				{/* SECTION: for price input */}
				<View style={{ marginTop: 20 }}>
					<Text text="Price" preset='bold' style={{ marginTop: 6 }} />
					<View style={styles.INPUT_FIELDS_CONTAINER}>
						<FontAwesome name="dollar" size={15} color="black" />
						<TextInput
							style={styles.TEXTFIELD_STYLE}
							value={price}
							autoCorrect={false}
							onChangeText={(text) => setPrice(text)}
							placeholder="0"
							placeholderTextColor={'#878C90'}
							keyboardType="numeric"
							returnKeyType="done"
						/>
					</View>
				</View>


				{/* SECTION: for condition selection */}
				<Text text="Condition" preset='bold' style={{ marginTop: 26 }} />
				<DropDownPicker
					open={openCondition}
					value={conditionValue}
					items={conditionItems}
					setOpen={setOpenCondition}
					setValue={setConditionValue}
					setItems={setCondtiionItems}
					containerStyle={{
						borderWidth: 2,
						borderRadius: 5,
						height: 48,
					}}
					style={{
						backgroundColor: "white",
						borderColor: 'white',
						height: 42
					}}
					zIndex={3000}
					zIndexInverse={1000}
				/>


				{/* SECTION: for shoe size selection */}
				<Text text="Size" preset='bold' style={{ marginTop: 26 }} />
				<DropDownPicker
					open={openSize}
					value={sizeValue}
					items={sizeItems}
					setOpen={setOpenSize}
					setValue={setSizeValue}
					setItems={setSizeItems}
					containerStyle={{
						borderWidth: 2,
						borderRadius: 5,
						height: 48,
					}}
					style={{
						backgroundColor: "white",
						borderColor: 'white',
						height: 42
					}}
					zIndex={2000}
					zIndexInverse={2000}
				/>



				{/* BUTTON leads to description screen */}
				<View
					style={{
						marginTop: 156,
						paddingBottom: 50,
					}}>
					<Button
						style={
							price != '' && conditionValue != null && sizeValue != null ?
								styles.NEXT_BUTTON : styles.DISABLED_NEXT_BUTTON
						}
						text="Next"
						onPress={() => { navigation.navigate('ListingDescription') }}
						disabled={price != '' && conditionValue != null && sizeValue != null ? false : true}
					/>
				</View>


				{/* SECTION: for inputing the descriptions */}
				{/* <Text text="Description" preset='bold' style={{ marginTop: 6 }} />
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
				</View> */}

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
