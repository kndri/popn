import * as React from 'react';
import { View } from 'react-native';

import styles from './sneaker-card.styles';
import { SneakerCardProps } from './sneaker-card.props';

import { AutoImage as Image } from '../auto-image/auto-image';
import { Text } from '../text/text';
import { VerificationBage } from '../verification-badge/verification-badge';

// I will fix the props later
export const SneakerCard: React.FC<SneakerCardProps> = (props): JSX.Element => {
	const { sneaker } = props;
	const sneakerPointIcon = require('../../assets/images/sneakerpoint_icon.png');
	return (
		<>
			<View style={styles.CARD}>
				{sneaker.claim.items != undefined &&
					sneaker.claim.items[0].status == 'verified' && (
						<View style={styles.BADGE}>
							<VerificationBage type="icon" />
						</View>
					)}

				<Image source={{ uri: sneaker.image }} style={styles.PRODUCT} />
			</View>
			<View style={styles.CONTENT_CONTAINER}>
				<Text preset="secondary">{sneaker.primaryName} </Text>
				<Text preset="primaryProduct">{sneaker.secondaryName} </Text>

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
		</>
	);
};
