import * as React from 'react';
import { View, ViewStyle, TextStyle, TouchableOpacity, } from "react-native";
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

export default function AgeScreen() {
    const navigation = useNavigation();

    return (
			<Screen style={CONTAINER}>
				<View style={CENTER}>
					<Text preset="header" text="How old are you?" />
					<Text preset="secondary" text="You must be  13 or older to use POPN" />
				</View>

				<View style={CENTER}>
					<TextField
						inputStyle={INPUT}
						placeholder="Enter Age"
						keyboardType="numeric"
					/>
				</View>

				<View style={CENTER}>
					<Text style={TEXTCENTER} preset="secondary">
						By continuing, you are confirming that you have read and understood the <TouchableOpacity><Text>Privacy Policy</Text></TouchableOpacity>
					</Text>
					<Button style={{width: '100%'}} text="Next" preset="primary" onPress={() => navigation.navigate('Username')} />
				</View>

			</Screen>
    );
}


