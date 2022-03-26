import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Text, AutoImage as Image } from '..';

import { getPostFromDB } from '../../aws-functions/aws-functions';

const Feed = ({ productData }) => {
	const [loading, setLoading] = useState(false);

	const fetchPosts = async () => {
		try {
			const postData = await getPostFromDB().catch((error) =>
				console.error(error)
			);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		// fetchPosts();
	}, []);

	// useFocusEffect(
	// 	React.useCallback(() => {
	// 		fetchPosts();
	// 	}, [post])
	// );

	const verifiedImage = require('../../assets/images/Verified.png');
	const VerificationBage = (type: string) => {
		if (type == 'icon') {
			return (
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'flex-end',
					}}
				>
					<Image source={verifiedImage} style={{ width: 20, height: 20 }} />
				</View>
			);
		} else if (type == 'full') {
			return (
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Image source={verifiedImage} />
					<Text preset="bold">Authenticated</Text>
				</View>
			);
		} else {
			return <></>;
		}
	};

	/* 
 shoeData contains the following data:
   {
    "id": 5,
    "brand": "Jordan",
    "primary_name": "Jordan 2 Retro Low SP",
    "secondary_name": "Off-White Black Blue",
    "price": "$250.00"
    "image_url": "https://popn-app.s3.amazonaws.com/sneakers/jordan_2_retro_low_sp_off_white_black_blue.png"
  },
*/

	const ProductCard = ({ shoeData }) => {
		return (
			<View
				style={{
					// justifyContent: 'space-evenly',
					height: 150,
					width: 150,
					marginVertical: 40,
					marginHorizontal: 10,
				}}
			>
				<View
					style={{
						backgroundColor: '#E7E7E7',
						borderRadius: 20,
						padding: 10,
					}}
				>
					{VerificationBage('icon')}

					<Image
						source={{ uri: shoeData.image_url }}
						style={{
							height: 60,
							width: 100,
							alignSelf: 'center',
							marginVertical: 20,
							marginHorizontal: 35,
						}}
					/>
				</View>
				<View style={{ paddingTop: 5 }}>
					<Text preset="secondary">{shoeData.primary_name} </Text>
					<Text preset="bold">{shoeData.secondary_name} </Text>
					<Text preset="bold">{shoeData.price}</Text>
				</View>
			</View>
		);
	};

	return (
		<View>
			<FlatList
				data={productData}
				renderItem={({ item }) => <ProductCard shoeData={item} />}
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
