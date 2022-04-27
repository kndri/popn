import * as React from 'react';
import { View } from 'react-native';

import styles from './verification-badge.styles';
import { VerificationBadgeProps } from './verification-badge.props';

import { AutoImage as Image } from '../auto-image/auto-image';
import { Text } from '../text/text';

export const VerificationBage: React.FC<VerificationBadgeProps> = (
	props
): JSX.Element => {
	const { type = 'icon' } = props;
	const badge = require('../../assets/images/verified_badge.png');

	return (
		<View
			style={type == 'icon' ? styles.ICON_CONTAINER : styles.FULL_CONTAINER}
		>
			<Image source={badge} style={styles.ICON} />
			{type == 'full' && (
				<Text preset="bold" style={{ marginLeft: 5 }}>
					Authenticated
				</Text>
			)}
		</View>
	);
};
