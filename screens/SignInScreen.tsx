import * as React from "react";
import { View, ViewStyle, TextStyle, Alert } from "react-native";
import { color, spacing, typography } from "../theme";
import { Button, Screen, Text, Header, TextField } from "../components";

import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/auth";
import { useToast } from "../components/Toast";

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[7],
  flex: 1,
  // justifyContent: "space-between",
  paddingBottom: 90,
};

const HEADER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
};

export default function SignInScreen() {
  const navigation = useNavigation();
  const toast = useToast();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signIn } = useAuth();

  const onLoginPressed = () => {
    //Generate User Token Server-Side
    if (email === "" || password === "") {
      toast.show("You must provide an email and password");
    } else {
      signIn(email, password);
    }
  };

  return (
    <Screen style={CONTAINER}>
      <Header
        headerTx="demoScreen.howTo"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />

      <View style={HEADER}>
        <Text preset="header" text="Sign in to POPN" />
        <Text style={{ color: color.dim }} text="display the hype." />
      </View>

      <View>
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
            borderRadius: 4,
            borderColor: "black",
            marginTop: 6,
          }}
        />

        <TextField
          onChangeText={(value) => setPassword(value)}
          value={password}
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
          inputStyle={{
            padding: 16,
            borderWidth: 2,
            borderRadius: 4,
            borderColor: "black",
            marginTop: 6,
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Button
            style={{ marginLeft: 5 }}
            preset="link"
            text="Forgot Password?"
            onPress={() => navigation.navigate("ForgotPassword")}
          ></Button>
        </View>
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
          text="Sign in"
          preset="cta"
          onPress={onLoginPressed}
        />
      </View>
    </Screen>
  );
}
