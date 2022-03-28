import { View, TextInput } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
	Button,
	Screen,
	Text,
	AutoImage as Image,
	Header,
} from '../../components';

import styles from './styles';

interface ZipCodeProps {}
const ZipCodeScreen: FC<ZipCodeProps> = () => {
	const navigation = useNavigation();
	const [zipCode, setZipCode] = React.useState('');
	return (
		<Screen style={styles.CONTAINER}>
			<View style={styles.CENTERED_VIEW}>
				<View style={styles.MODAL_VIEW}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Header
							headerTx="ZIP Code"
							rightIcon="close"
							onRightPress={() => {
								// Fill in for the navigation
								navigation.goBack();
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
								// Fill in for the navigation
								navigation.goBack();
							}}
						/>
					</View>
				</View>
			</View>
		</Screen>
	);
};

export default ZipCodeScreen;
