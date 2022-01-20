import * as React from "react";
import { View, ViewStyle, TextStyle, Alert } from "react-native";
import { color, spacing } from "../theme";
import {
  Button,
  Screen,
  Text,
  Header,
  TextField,
  AutoImage as Image,
} from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { confirmNewPassword } from "../aws-functions/aws-functions";
import { useToast } from "../components/Toast";
// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[7],
  flex: 1,
  // justifyContent: 'space-between',
  paddingBottom: 90,
};

const HEADER: ViewStyle = {
  alignItems: "center",
};
const CENTER: ViewStyle = {
  justifyContent: "center", //Centered horizontally
  flex: 1,
  marginTop: 15,
};

export default function ResetPasswordScreen(props: any) {
  const username = props.route.params;
  const navigation = useNavigation();
  const [code, setCode] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmedPassword, setConfirmedPassword] = React.useState("");
  const toast = useToast();

  return (
    // <KeyboardAwareScrollView>
    <Screen style={CONTAINER} preset="scroll">
      <Header
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />

      <View style={HEADER}>
        <Text
          style={{ marginBottom: 15, textAlign: 'center' }}
          preset="header"
          text="Check your email inbox for a verifcation code."
        />
        <Text preset="secondary" text="Enter and confirm your new password" />
      </View>

      <View style={CENTER}>
        <TextField
          onChangeText={(value) => setCode(value)}
          value={code}
          label="Verification Code"
          placeholder="Enter Your Verification Code"
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
          placeholder="Enter Your New Password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          inputStyle={{
            padding: 16,
            borderWidth: 2,
            borderRadius: 4,
            borderColor: "black",
            marginTop: 6,
          }}
        />

        <TextField
          onChangeText={(value) => setConfirmedPassword(value)}
          value={confirmedPassword}
          label="Confirm Password"
          placeholder="Confirm Your Password"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          inputStyle={{
            padding: 16,
            borderWidth: 2,
            borderRadius: 4,
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
        <Button
          style={{ width: 160 }}
          text="Continue"
          preset="primary"
          onPress={() => {
            if (password === '' || confirmedPassword === '' || code === '') {
              toast.show("'Don't leave anything blank'", { color: 'red' })
            }
            else if (password != confirmedPassword) {
              toast.show("'Your passwords don't match'", { color: 'red' })
            }
            else {
              confirmNewPassword(username, code, password)
              toast.show('Your password has been reset')
              navigation.navigate('SignIn')
            }

          }}
        />
      </View>
    </Screen>
    /* </KeyboardAwareScrollView> */
  );
}
