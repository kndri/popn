import * as React from 'react';
import { View, ViewStyle, TextStyle, Alert } from "react-native"
import { color, spacing } from "../theme"
import {
  Button,
  Screen,
  Text,
  Header,
  TextField,
  AutoImage as Image
} from "../components"

import { useNavigation } from '@react-navigation/native';
import { forgotPassword } from '../aws-functions/forgot-password';

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[7],
  flex: 1,
  justifyContent: 'space-between',
  paddingBottom: 90
}

const HEADER: ViewStyle = {
  alignItems: 'flex-start',
}

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");

  return (
    <Screen style={CONTAINER}>
      <Header
        headerTx="demoScreen.howTo"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />

      <View style={HEADER}>
        <Image source={require("../assets/images/forgot_password_illustration.png")} />
        <Text style={{marginBottom: 15}} preset="header" text="Forget your password?"  />
        <Text text="Enter your email to reset password" />
      </View>

      <View>
        <TextField
          onChangeText={(value) => setEmail(value)}
          value={email}
          label="Email"
          placeholder="Enter your email"
          inputStyle={{
            padding: 16,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: "black",
            marginTop: 6
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button style={{ width: 160 }} text="Next" preset="primary" onPress={() => forgotPassword(email)} />
      </View>
    </Screen>
  );
}


