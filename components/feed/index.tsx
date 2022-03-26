import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { ProductCard } from '..';

const Feed = ({ productData }) => {
	const [loading] = useState(false);

	return (
		<View>
			<FlatList
				data={productData}
				renderItem={({ item }) => <ProductCard product={item} />}
				keyExtractor={(item) => String(item.id)}
				refreshing={loading}
				numColumns={2}
				contentContainerStyle={{
					alignItems: 'center',
				}}
			/>
		</View>
	);
};

export default Feed;
