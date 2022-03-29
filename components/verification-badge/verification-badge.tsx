import * as React from 'react';
import { View } from 'react-native';

import styles from './verification-badge.styles';
import { Text, AutoImage as Image } from '..';
import { VerificationBadgeProps } from './verification-badge.props';

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
			{type == 'full' && <Text preset="bold" style={{ marginLeft: 5}}>Authenticated</Text>}
		</View>
	);
};
