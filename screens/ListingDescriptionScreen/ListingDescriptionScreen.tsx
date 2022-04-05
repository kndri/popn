import { TextInput, View } from 'react-native';
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


			<View style={styles.LISTING_CONTAINER}>
				{/* SECTION: for description input */}
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

				{/* BUTTON leads to add listing images screen */}
				<View
					style={{
						marginTop: 156,
						paddingBottom: 50,
					}}>
					<Button
						style={
							description ?
								styles.NEXT_BUTTON : styles.DISABLED_NEXT_BUTTON
						}
						text="Next"
						// onPress={() => { navigation.navigate('ListingDescription') }}
						disabled={description != '' ? false : true}
					/>
				</View>

			</View>
		</Screen>
	);
};

export default ListingDescriptionScreen;
