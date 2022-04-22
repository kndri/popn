import * as React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Screen, Text, AutoImage as Image } from '../../components';
import { useNavigation } from '@react-navigation/native';
import Feed from '../../components/feed';

import { useToast } from '../../components/Toast';

import styles from './styles';
import { getListingByAvailablity } from '../../aws-functions/aws-functions';
const search_icon = require('../../assets/images/searchIcon.png');
const location_icon = require('../../assets/images/zipcode-icon.png');

export default function Home() {
	const navigation = useNavigation();
	const toast = useToast();
	const [listingData, setListingData] = React.useState([]);
	const [distanceValue, setDistanceValue] = React.useState(30);
	const [query, setQuery] = React.useState('');

	const getListing = async () => {
		const data = await getListingByAvailablity();

		setListingData(data);
	};

	console.log('listing data: ', listingData);

	React.useEffect(() => {
		getListing();
	}, []);

	return (
		<Screen style={styles.CONTAINER}>
			<View style={styles.CLAIM_SEARCH}>
				<Image source={search_icon} style={{ width: 16, height: 16 }} />
				<TextInput
					style={styles.TEXTFIELD_STYLE}
					value={query}
					autoCorrect={false}
					onChangeText={(text) => setQuery(text)}
					placeholder="Search"
					placeholderTextColor={'#878C90'}
					onPressIn={() => navigation.navigate('UserSearch')}
				/>
			</View>
			<View>{<Feed productData={listingData} />}</View>
		</Screen>
	);
}
