import { TextInput, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
	Screen,
	Text,
	Header,
	Button,
} from '../../components';

import styles from './styles';
import { spacing } from '../../theme';

interface NewListingProps { }

const ListingDescriptionScreen: FC<NewListingProps> = () => {
	const navigation = useNavigation();

	const [description, setDescription] = React.useState('');

	return (
		<Screen style={styles.CONTAINER}>

			<Header
				headerTx="New Listing"
				leftIcon="back"
				onLeftPress={() => navigation.goBack()}
			/>

			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>


				<View style={styles.LISTING_CONTAINER}>
					{/* SECTION: for description input */}

					<View >
						<Text text="Description" preset='bold' />
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
								autoCorrect={true}
								autoCapitalize='none'
								onChangeText={(text) => setDescription(text)}
								placeholder="Include details such as condition, colorway, retail price, and more! "
								placeholderTextColor={'#878C90'}
								keyboardType="default"
								multiline
								returnKeyType="none"
								textAlignVertical='top'
							/>
						</View>
					</View>




					{/* BUTTON leads to add listing images screen */}
					<View
						style={{
							marginTop: 340,
							paddingBottom: 50,
							backgroundColor: 'white'
						}}>
						<Button
							style={
								description ?
									styles.NEXT_BUTTON : styles.DISABLED_NEXT_BUTTON
							}
							text="Next"
							onPress={() => { navigation.navigate('ListingImages') }}
							disabled={description != '' ? false : true}
						/>
					</View>

				</View>
			</TouchableWithoutFeedback>
		</Screen>
	);
};

export default ListingDescriptionScreen;