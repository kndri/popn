import { TextInput, View } from 'react-native';
import React, { FC } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import { useFormState, useFormDispatch } from '../../contexts/form-context';

import { Screen, Text, Header, Button } from '../../components';

import styles from './styles';
import { useAuth } from '../../contexts/auth';

interface NewListingProps {
	id: string;
	brand: string;
	primaryName: string;
	secondaryName: string;
	image: string;
	userID: string;
}

const NewListingScreen: FC<NewListingProps> = () => {
	const route = useRoute();
	const navigation = useNavigation();
	const { sneakerData }: any = route.params;
	const { authData: user } = useAuth();
	const form = React.useRef();
	const dispatch = useFormDispatch();
	const { values: formValues, errors: formErrors } = useFormState('user');

	const [title, setTitle] = React.useState('');

	const [openCondition, setOpenCondition] = React.useState(false);
	const [conditionValue, setConditionValue] = React.useState(null);
	// TODO: @Hasler - Create a constanst file for these values
	const [conditionItems, setCondtiionItems] = React.useState([
		{ label: 'New/Never Worn', value: 'New/Never Worn' },
		{ label: 'Gently Used', value: 'Gently Used' },
		{ label: 'Used', value: 'Used' },
		{ label: 'Very Worn', value: 'Very Worn' },
	]);
	const [openSize, setOpenSize] = React.useState(false);
	const [sizeValue, setSizeValue] = React.useState(null);
		// TODO: @Hasler - Create a constanst file for these values
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

	React.useEffect(() => {
		const unsubscribe = navigation.addListener('blur', () => {
			if (form.current) {
				const { values, errors } = form.current;
				dispatch({
					type: 'UPDATE_FORM',
					payload: {
						id: 'user',
						data: { values, errors },
					},
				});
			}
		});
		return unsubscribe;
	}, [navigation]);

	React.useEffect(() => {
		setTitle(`${sneakerData.primaryName} ${sneakerData.secondaryName}`);
	}, []);

	return (
		<Formik
			innerRef={form}
			validateOnBlur={true}
			initialValues={formValues}
			initialErrors={formErrors}
			enableReinitialize
		>
			{({ values, handleChange, setFieldValue }) => (
				<Screen style={styles.CONTAINER}>
					<Header
						headerTx="New Listing"
						leftIcon="back"
						onLeftPress={() => navigation.goBack()}
					/>

					<View style={styles.LISTING_CONTAINER}>
						{/* SECTION: for title input */}
						<View>
							<Text text="Title" preset="bold" />
							<View style={styles.INPUT_FIELDS_CONTAINER}>
								<Text preset="default">{title}</Text>
							</View>
						</View>

						{/* SECTION: for price input */}
						<View style={{ marginTop: 20 }}>
							<Text text="Price" preset="bold" style={{ marginTop: 6 }} />
							<View style={styles.INPUT_FIELDS_CONTAINER}>
								<FontAwesome name="dollar" size={15} color="black" />
								<TextInput
									style={styles.TEXTFIELD_STYLE}
									value={values.price}
									autoCorrect={false}
									onChangeText={handleChange('price')}
									placeholder="0"
									placeholderTextColor={'#878C90'}
									keyboardType="numeric"
									returnKeyType="done"
								/>
							</View>
						</View>

						{/* SECTION: for condition selection */}
						<Text
							text="Condition"
							preset="bold"
							style={{ marginTop: 26, marginBottom: 6 }}
						/>
						<DropDownPicker
							open={openCondition}
							value={conditionValue}
							onChangeValue={handleChange('condition')}
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
								backgroundColor: 'white',
								borderColor: 'white',
								height: 42,
							}}
							dropDownContainerStyle={{
								borderWidth: 2,
							}}
							zIndex={3000}
							zIndexInverse={1000}
						/>

						{/* SECTION: for shoe size selection */}
						<Text
							text="Size"
							preset="bold"
							style={{ marginTop: 26, marginBottom: 6 }}
						/>
						<DropDownPicker
							open={openSize}
							value={sizeValue}
							onChangeValue={handleChange('size')}
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
								backgroundColor: 'white',
								borderColor: 'white',
								height: 42,
							}}
							dropDownContainerStyle={{
								borderWidth: 2,
							}}
							zIndex={2000}
							zIndexInverse={2000}
						/>

						{/* BUTTON leads to description screen */}
						<View
							style={{
								marginTop: 156,
								paddingBottom: 50,
							}}
						>
							<Button
								style={
									values.price != '' &&
									conditionValue != null &&
									sizeValue != null
										? styles.NEXT_BUTTON
										: styles.DISABLED_NEXT_BUTTON
								}
								text="Next"
								onPress={() => {
									// We dont need the title since we are using SneakerData information
									// setFieldValue('title', title);
									setFieldValue('sneakerID', sneakerData.id);
									setFieldValue('brand', sneakerData.brand);
									setFieldValue('sellerID', sneakerData.userID);
									setFieldValue('zipCode', user?.zipCode);

									// navigation.navigate('ListingDescription');
								}}
								disabled={
									values.price != '' &&
									conditionValue != null &&
									sizeValue != null
										? false
										: true
								}
							/>
						</View>
					</View>
				</Screen>
			)}
		</Formik>
	);
};

export default NewListingScreen;
