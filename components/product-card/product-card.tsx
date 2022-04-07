import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './product-card.styles';
// import { ProductCardProps } from './product-card.props';
import { Text } from "../text/text"
import { AutoImage as Image } from "../auto-image/auto-image"
import { VerificationBage } from "../verification-badge/verification-badge"

interface ProductCardProps {
	product: any,
	showVerificationBage?: any,
	sneakerPoint?: any,
	showPrice?: any
};
// I will fix the props later
export const ProductCard: React.FC<ProductCardProps> = (
	props
): JSX.Element => {
	const { product } = props;
	const navigation = useNavigation();
	const sneakerPointIcon = require('../../assets/images/sneakerpoint_icon.png');

	return (
		// <TouchableOpacity
		// 	onPress={() => {
		// 		navigation.navigate('ListingDetails', product);
		// 	}}
		// >
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('NewListing');
			}}
		>
			<View style={styles.CARD}>
				<View style={styles.BADGE}>
					{props.showVerificationBage && <VerificationBage type="icon" />}
				</View>
				<Image source={{ uri: product.images[0] }} style={styles.PRODUCT} />
			</View>
			<View style={styles.CONTENT_CONTAINER}>
				<Text preset="secondary">{product.sneakerData.primary_name} </Text>
				<Text preset="bold">{product.sneakerData.secondary_name} </Text>
				{props.showPrice && (
					<Text preset="bold">{product.sneakerData.price}</Text>
				)}
				{props.sneakerPoint && (
					<View style={{ flexDirection: 'row' }}>
						<Image
							source={sneakerPointIcon}
							style={{
								width: 15,
								height: 20,
								resizeMode: 'contain',
								marginRight: 5,
							}}
						/>
						<Text preset="bold">{props.sneakerPoint}</Text>
					</View>
				)}
			</View>
		</TouchableOpacity>
	);
};
