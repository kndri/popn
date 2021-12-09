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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native';
import { confirmNewPassword } from '../aws-functions/forgot-password';

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

export default function ResetPasswordScreen(props: any) {
  const username = props.route.params;
  const navigation = useNavigation();
  const [code, setCode] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmedPassword, setConfirmedPassword] = React.useState("");

  return (
    <KeyboardAwareScrollView>
    <Screen style={CONTAINER} preset="scroll">
      <Header
        headerTx="demoScreen.howTo"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />

      <View style={HEADER}>
        <Image source={require("../assets/images/reset_password_illustration.png")} />
        <Text style={{ marginBottom: 15 }} preset="header" text="Reset your password?" />
        <Text text="Enter the verification code and your new password" />
      </View>

      <View>
        <TextField
          onChangeText={(value) => setCode(value)}
          value={code}
          label="Verification Code"
          placeholder="4015"
          inputStyle={{
            padding: 16,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: "black",
            marginTop: 6
          }}
        />

        <TextField
          onChangeText={(value) => setPassword(value)}
          value={password}
          label="New Password"
          secureTextEntry
          autoCapitalize='none'
          autoCorrect={false}
          inputStyle={{
            padding: 16,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: "black",
            marginTop: 6
          }}
        />

        <TextField
          onChangeText={(value) => setConfirmedPassword(value)}
          value={confirmedPassword}
          label="Confirm Password"
          secureTextEntry
          autoCapitalize='none'
          autoCorrect={false}
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
        <Button style={{ width: 160 }} text="Sign in" preset="primary" onPress={() => confirmNewPassword(username ,code, password)} />
      </View>
    </Screen>
    </KeyboardAwareScrollView>
  );
}


