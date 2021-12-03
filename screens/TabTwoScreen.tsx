import * as React from 'react';
import { View, ViewStyle, TextStyle, TouchableOpacity, TextInput } from "react-native";
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
  marginTop: 44,
}
const CENTER: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
}
const CLAIM_HEADER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: 17,
}
const CLAIM_SEARCH: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
}
const COLLECTION_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: 'red',
}
const TEXTCENTER: TextStyle = {
  textAlign: 'center',
  alignItems: 'center',
}
const INPUT: TextStyle = {
  fontFamily: typography.primaryBold,
}
const INPUTSTYLE_CONTAINER: ViewStyle = {
  width: '100%',
  height: 55,
  marginBottom: 30,
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 10,
};


export default function TabTwoScreen() {
  const navigation = useNavigation();

  return (
    <Screen style={CONTAINER}>
      <View style={CLAIM_HEADER}>
        <Text preset="header" text="Claim" />
      </View>

      <View style={CLAIM_SEARCH}>
        <TextInput
          style={{
            width: '100%',
            height: 54,
            borderWidth: 1,
            paddingLeft: 20,
            borderRadius: 10,
            margin: 5,
            borderColor: 'black',
            backgroundColor: 'white',
          }}
          placeholder="Search"
        />
        {/* <TextField
          style={INPUTSTYLE_CONTAINER}
          inputStyle={INPUT}
          placeholder="Search"
          keyboardType="default"
        /> */}
      </View>

      <View style={COLLECTION_CONTAINER}>

        <View style={{ flex: 1, justifyContent: 'center' }}>

        </View>

      </View>



    </Screen>
  );
}

