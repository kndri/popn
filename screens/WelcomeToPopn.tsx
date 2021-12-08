import * as React from 'react';
import { View, ViewStyle, TextStyle, TouchableOpacity, Alert } from "react-native";
import { color, spacing, typography } from "../theme"
import {
	Button,
	Screen,
	Text,
	TextField,
} from "../components"
import { useNavigation } from '@react-navigation/native';

// Styles
const CONTAINER: ViewStyle = {
	backgroundColor: color.transparent,
	paddingHorizontal: spacing[7],
	flex: 1,
	justifyContent: 'space-between',
	marginTop: 50,
	paddingBottom: 90
}

const HEADER: ViewStyle = {
	alignItems: 'center',
	justifyContent: 'center',
}

const CENTER: ViewStyle = {
	alignItems: 'center',
	justifyContent: 'center',
}

const TEXTCENTER: TextStyle = {
	textAlign: 'center'
}

const INPUT: TextStyle = {
	fontFamily: typography.primaryBold,
}

export default function WelcomeToPopn() {
	const navigation = useNavigation();
	return (
		<Screen style={CONTAINER}>
			<View style={CENTER}>
				<Text preset="logo" text="Welcome to POPN!" />
			</View>

			<View style={CENTER}>
				<Text style={{fontSize: 16}}>
					POPN is a sneakehead’s dream. A digital place to store your sneakers.
					{"\n"}{"\n"}
					Cop, POP (verify), and flex — we’re all about making it easier to show off your verified kicks and soon be able to trade them 👀
					{"\n"}{"\n"}
					Engaging with the community in a whole new way. Welcome to POPN.
				</Text>
			</View>
			<Button text="Create Account" preset="primary" onPress={() => navigation.navigate('Age')} />
		</Screen>
	);
}


