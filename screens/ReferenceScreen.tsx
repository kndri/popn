import React from "react";
import { View, ViewStyle, TextStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Screen, Text, TextField } from "../components";
import { color, spacing, typography } from "../theme";

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[7],
  flex: 1,
  justifyContent: "space-between",
  marginTop: 50,
  paddingBottom: 90,
};

const HEADER: TextStyle = {
  textAlign: "center",
  marginBottom: 10,
};

const CENTER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
};

const TEXTCENTER: TextStyle = {
  textAlign: "center",
  alignItems: "center",
};

const INPUT: TextStyle = {
  fontFamily: typography.primaryBold,
};

const ReferenceScreen = () => {
  const navigation = useNavigation();
  const [refNumber, setRefNumber] = React.useState("");

  return (
    <Screen style={CONTAINER}>
      <View style={CENTER}>
        <Text
          style={HEADER}
          preset="header"
          text="Enter your reference number"
        />
      </View>

      <View style={CENTER}>
        <TextField
          inputStyle={INPUT}
          placeholder="#reference"
          secureTextEntry
          onChangeText={(value) => setRefNumber(value)}
        />
      </View>

      <View style={CENTER}>
        <Button
          //   disabled={!isValid}
          style={{ width: "100%" }}
          text="Claim"
          preset="primary"
          onPress={() => navigation.navigate("ShoeDetails")}
        />
      </View>
    </Screen>
  );
};

export default ReferenceScreen;
