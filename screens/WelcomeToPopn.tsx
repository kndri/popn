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
  marginTop: 50,
	justifyContent: 'space-between'
}

const LOGO: TextStyle = {
	paddingBottom: spacing[1]
}

export default function WelcomeToPopn() {
    const navigation = useNavigation();
    return (
        <Screen style={CONTAINER}>
        	<View>
            <Text preset="logo" text="POPN" />
						<Text text="display the hype." />
          </View>
					<Button text="Get Start" preset="primary" onPress={() => Alert.alert("pressed")} />
        </Screen>
    );
}


