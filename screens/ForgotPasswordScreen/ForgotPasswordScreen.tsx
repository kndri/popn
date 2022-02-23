import * as React from "react";
import { View, ViewStyle, TextStyle, Alert } from "react-native";
import { color, spacing, typography } from "../../theme";
import {
  Button,
  Screen,
  Text,
  Header,
  TextField,
  AutoImage as Image,
} from "../../components";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import { forgotPassword } from "../../aws-functions/aws-functions";

import styles from "./Styles";

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");

  return (
    <Screen style={styles.CONTAINER}>
      <Header leftIcon="back" onLeftPress={() => navigation.goBack()} />

      <View style={styles.HEADER}>
        <Text
          style={{ marginBottom: 15 }}
          preset="header"
          text="Forgot your password?"
        />
        <Text preset="secondary" text="Enter your email to reset password" />
      </View>

      <View style={styles.CENTER}>
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
        <Button
          style={{ width: 160 }}
          text="Continue"
          preset="primary"
          onPress={() => {
            // forgotPassword(email)
            navigation.navigate("ResetPassword", email);
          }}
        />
      </View>
    </Screen>
  );
}
