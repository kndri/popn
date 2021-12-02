import * as React from 'react';
import { View, ViewStyle, TextStyle, } from "react-native"
import { color, spacing } from "../theme"
import {
  Button,
  Screen,
  Text
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
}

export default function WelcomeToPopn() {
  const navigation = useNavigation();
  return (
    <Screen style={CONTAINER}>
      <View style={HEADER}>
        <Text preset="logo" text="POPN" />
        <Text text="display the hype." />
      </View>
      <Button text="Get Started" preset="primary" onPress={() => navigation.navigate('Age')} />
    </Screen>
  );
}


