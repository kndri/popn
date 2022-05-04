import * as React from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './product-card.styles';
import { ProductCardProps } from './product-card.props';

import { AutoImage as Image } from '../auto-image/auto-image';
import { Text } from '../text/text';
import { VerificationBage } from '../verification-badge/verification-badge';

// I will fix the props later
export const ProductCard: React.FC<ProductCardProps> = (props): JSX.Element => {
	const { product } = props;
	const sneakerPointIcon = require('../../assets/images/sneakerpoint_icon.png');

	return (
		<>
			<View style={styles.CARD}>
				<View style={styles.BADGE}>
					{props.showVerificationBage && <VerificationBage type="icon" />}
				</View>
				{/* <Image source={{ uri: product.images[0] }} style={styles.PRODUCT} /> */}
				<Image
					source={{ uri: product.sneakerData.image }}
					style={styles.PRODUCT}
				/>
			</View>
			<View style={styles.CONTENT_CONTAINER}>
				<Text preset="secondary">{product.sneakerData.primaryName} </Text>
				<Text preset="primaryProduct">{product.sneakerData.secondaryName}</Text>
				<Text preset="secondary">{product.condition}</Text>
				{props.showPrice && (
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<FontAwesome name="dollar" size={13} color="black" />
						<Text preset="extraBold">{product.price}</Text>
					</View>
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
						<Text preset="bold" style={{}}>
							{props.sneakerPoint}
						</Text>
					</View>
				)}
			</View>
		</>
	);
};
