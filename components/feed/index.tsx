import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ProductCard } from '..';

const Feed = ({ productData }) => {
	const [loading] = useState(false);
	const navigation = useNavigation();

	return (
		<View>
			<FlatList
				data={productData}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('ListingDetails', item);
						}}
					>
						<ProductCard product={item} showPrice showVerificationBage />
					</TouchableOpacity>
				)}
				keyExtractor={(item) => String(item.id)}
				refreshing={loading}
				numColumns={2}
				columnWrapperStyle={{
					justifyContent: 'space-between',
					marginBottom: 15,
				}}
				contentContainerStyle={{
					paddingBottom: 125,
				}}
			/>
		</View>
	);
};

export default Feed;
