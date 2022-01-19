import * as React from "react";
import { View, ViewStyle, TextStyle, Alert } from "react-native";
import { color, spacing, typography } from "../theme";
import {
  Button,
  Screen,
  Text,
  Header,
  TextField,
  AutoImage as Image,
} from "../components";
import { Auth } from 'aws-amplify';
import { useNavigation } from "@react-navigation/native";
import { forgotPassword } from "../aws-functions/aws-functions";

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[7],
  flex: 1,
  justifyContent: "space-between",
  paddingBottom: 90,
};

const HEADER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const CENTER: ViewStyle = {
  justifyContent: "center", //Centered horizontally
  flex: 1,
};


export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");

  return (
    <Screen style={CONTAINER}>
      <Header
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />

      <View style={HEADER}>
        <Text
          style={{ marginBottom: 15 }}
          preset="header"
          text="Forgot your password?"
        />
        <Text preset="secondary" text="Enter your email to reset password" />
      </View>

      <View style={CENTER}>
        <TextField
          onChangeText={(value) => setEmail(value)}
          value={email}
          label="Email"
          placeholder="Enter your email"
          autoCapitalize="none"
          autoCorrect={false}
          inputStyle={{
            padding: 16,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: "black",
            marginTop: 6,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignContent: "flex-end",
          justifyContent: "flex-end",
          top: 32,
        }}
      >
        {/* <Button style={{ width: 160 }} text="Continue" preset="primary" onPress={() => forgotPassword(email)} /> */}
        <Button
          style={{ width: 160 }}
          text="Continue"
          preset="cta"
          onPress={() => navigation.navigate("ResetPassword")}
        />
      </View>
    </Screen>
  );
}
