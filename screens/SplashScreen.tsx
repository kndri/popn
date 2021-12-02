import * as React from 'react';
import { View, ViewStyle, TextStyle, ImageStyle, Platform, TouchableOpacity, Alert } from "react-native"
import { color, spacing } from "../theme"
import {
    Button,
    Screen,
    Text,
    AutoImage as Image,
  } from "../components"

import { useNavigation } from '@react-navigation/native';

const FULL: ViewStyle = { flex: 1 }

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
}

const LOGO: TextStyle = {
	paddingBottom: spacing[1]
}

export default function WelcomeToPopn() {
    const navigation = useNavigation();
    return (
        <Screen style={CONTAINER}>
        	<View style={HEADER}>
            <Text preset="logo" text="POPN" />
		        <Text text="display the hype." />
          </View>
					<Button text="Get Started" preset="primary" onPress={() => Alert.alert("pressed")} />
        </Screen>
    );
}


