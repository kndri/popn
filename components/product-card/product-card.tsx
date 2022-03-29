import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './product-card.styles';
import { ProductCardProps } from './product-card.props';
import { Text, AutoImage as Image, VerificationBage } from '..';

export const ProductCard: React.FC<ProductCardProps> = (props): JSX.Element => {
	const { product } = props;
	const navigation = useNavigation();


	return (
		<TouchableOpacity onPress={() => {
			navigation.navigate("ListingDetails", product);
		}}>
			<View style={styles.CARD}>
				<View style={styles.BADGE}>
					<VerificationBage type='icon' />
				</View>
				<Image source={{ uri: product.image_url }} style={styles.PRODUCT} />
			</View>
			<View style={styles.CONTENT_CONTAINER}>
				<Text preset="secondary">{product.primary_name} </Text>
				<Text preset="bold">{product.secondary_name} </Text>
				<Text preset="bold">{product.price}</Text>
			</View>
		</TouchableOpacity>
	);
};