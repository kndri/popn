import { View, Image, ScrollView } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { useFormState, useFormDispatch } from '../../contexts/form-context';

import { Screen, Text, Header, Button } from '../../components';

import styles from './styles';
import { addListedItem } from '../../aws-functions/aws-functions';
import { useToast } from '../../components/Toast';

const ListingImagesScreen = (props) => {
	const photos = props.route.params;
	const navigation = useNavigation();
	const [images, setImages] = React.useState([]);
	const form = React.useRef();
	const dispatch = useFormDispatch();
	const { values: formValues, errors: formErrors } = useFormState('user');
	const toast = useToast();

	React.useEffect(() => {
		const unsubscribe = navigation.addListener('blur', async () => {
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
		if (photos) {
			setImages(photos);
		} else {
			null;
		}
	}, [photos]);

	const renderImage = (item, i) => {
		return (
			<Image
				style={{ height: 150, width: 135 }}
				source={{ uri: item.uri }}
				key={i}
			/>
		);
	};

	const setFormikImages = (setFieldValue) => {
		setFieldValue('images', images);
	};

	return (
		<Formik
			innerRef={form}
			validateOnBlur={true}
			initialValues={formValues}
			initialErrors={formErrors}
			enableReinitialize
		>
			{({ values, setFieldValue }) => (
				<Screen style={styles.CONTAINER}>
					<Header
						headerTx="New Listing"
						leftIcon="back"
						onLeftPress={() => {
							navigation.goBack();
						}}
					/>

					{/* SECTION: for description input */}
					<View style={styles.LISTING_CONTAINER}>
						<Text
							text="Please provide the photos you sent to CheckCheck for verification."
							preset="bold"
						/>
						{images.length > 0 ? (
							<View style={{ height: 150 }}>
								<ScrollView
									// centerContent
									horizontal
									style={{
										borderWidth: 2,
										borderColor: 'black',
										borderRadius: 5,
									}}
								>
									{images.map((item, i) => renderImage(item, i))}
								</ScrollView>
							</View>
						) : null}

						<Button
							text="Choose Photos"
							style={{ marginTop: 90 }}
							onPress={() => {
								navigation.navigate('ImageBrowser', {
									setFormikImages: setFieldValue,
								});
							}}
						/>

						{/* BUTTON uploads the listing to the marketplace and navigates to ... */}
						<View
							style={{
								marginTop: 175,
								paddingBottom: 50,
								backgroundColor: 'white',
							}}
						>
							<Button
								style={
									images.length > 0
										? styles.NEXT_BUTTON
										: styles.DISABLED_NEXT_BUTTON
								}
								text="Next"
								onPress={async () => {
									//have to call the mutation to create the listing
									await addListedItem(values).then(() =>
										navigation.navigate('Home')
									);
									// navigation.navigate("ListingDescription")
								}}
								disabled={images.length != 0 ? false : true}
							/>
						</View>
					</View>
				</Screen>
			)}
		</Formik>
	);
};

export default ListingImagesScreen;
