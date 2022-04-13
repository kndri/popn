import { TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import { useNavigation } from '@react-navigation/native';

import {
	Screen,
	Button,
	Text,
	AutoImage as Image,
	Header,
} from '../../components';

import styles from './styles';

// required icons
const right_icon = require('../../assets/images/rightArrowIcon.png');

interface LocationProps {}
const LocationScreen: FC<LocationProps> = () => {
	const navigation = useNavigation();
	const [distanceValue, setDistanceValue] = React.useState(30);
	return (
		<Screen style={styles.CONTAINER}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Header
							headerTx="Location"
							rightIcon="close"
							onRightPress={() => navigation.goBack()}
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
								navigation.navigate('ZipCode');
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

					{/* TODO: @Ant - Remove the marginTop, and position this relative to bottom of the screen */}
					<Button
						style={{
							width: '100%',
							borderRadius: 4,
							marginTop: 224,
						}}
						text="See Listings"
						onPress={() => navigation.goBack()}
					/>
		</Screen>
	);
};

export default LocationScreen;
