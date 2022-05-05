import * as React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { color, spacing, typography } from '../../theme';
import { Button, Screen, Text, AutoImage as Image } from '../../components';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const logo = require('../../assets/images/logo.png');

export default function WelcomeToPopn() {
	const navigation = useNavigation();
	return (
		<Screen style={styles.CONTAINER}>
			<View style={styles.LOGO_CONTAINER}>
				<Image source={logo} />
				<Text style={{ marginTop: 10 }}>display the hype.</Text>
			</View>

			<View>
				<Button
					text="Get Started"
					preset="primary"
					onPress={() => navigation.navigate('Username')}
				>
					<Text
						style={{
							color: color.palette.white,
							fontFamily: typography.primarySemiBold,
							fontSize: 16,
						}}
					>
						Get Started
					</Text>
				</Button>

				<View
					style={{
						flexDirection: 'row',
						marginTop: 20,
						justifyContent: 'center',
					}}
				>
					<Button preset="link" onPress={() => navigation.navigate('SignIn')}>
						<Text style={{ color: color.dim }}>I already have an account</Text>
					</Button>
				</View>
			</View>
		</Screen>
	);
}
