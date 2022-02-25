import * as React from "react";
import { View, ViewStyle, TouchableOpacity } from "react-native";
import { color, spacing } from "../../theme";
import {
  Button,
  Screen,
  Text,
  Header,
  TextField,
  AutoImage as Image,
} from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { confirmNewPassword } from "../../aws-functions/aws-functions";
import { useToast } from "../../components/Toast";

import styles from "./Styles";

const eye = require("../../assets/images/reveal.png");

export default function ResetPasswordScreen(props: any) {
  const username = props.route.params;
  const navigation = useNavigation();
  const [code, setCode] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmedPassword, setConfirmedPassword] = React.useState("");
  const [reveal, setReveal] = React.useState<boolean>(true);
  const [reveal2, setReveal2] = React.useState<boolean>(true);

  const toast = useToast();

  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
      scrollEnabled={false}
    >
      <Screen style={styles.CONTAINER} preset="scroll">
        <Header leftIcon="back" onLeftPress={() => navigation.goBack()} />

        <View style={styles.HEADER}>
          <Text
            style={{ marginBottom: 15, textAlign: "center" }}
            preset="header"
            text="Check your email inbox for a verifcation code."
          />
          <Text preset="secondary" text="Enter and confirm your new password" />
        </View>

        <View style={styles.CENTER}>
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
              marginTop: 6,
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <TextField
              onChangeText={(value) => setPassword(value)}
              value={password}
              label="New Password"
              placeholder="Enter Your New Password"
              secureTextEntry={reveal}
              autoCapitalize="none"
              autoCorrect={false}
              inputStyle={{
                padding: 16,
                borderWidth: 2,
                borderRadius: 4,
                borderColor: "black",
                marginTop: 6,
              }}
              style={{ width: "100%" }}
            />
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
              onPress={() => setReveal((prev) => !prev)}
            >
              <Image
                source={eye}
                style={[
                  {
                    marginLeft: 10,
                    justifyContent: "center",
                    marginTop: 15,
                  },
                  reveal == true ? { opacity: 0.3 } : null,
                ]}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <TextField
              onChangeText={(value) => setConfirmedPassword(value)}
              value={confirmedPassword}
              label="Confirm Password"
              placeholder="Confirm Your Password"
              secureTextEntry={reveal2}
              autoCapitalize="none"
              autoCorrect={false}
              inputStyle={{
                padding: 16,
                borderWidth: 2,
                borderRadius: 4,
                borderColor: "black",
                marginTop: 6,
              }}
              style={{ width: "100%" }}
            />
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
              }}
              onPress={() => setReveal2((prev) => !prev)}
            >
              <Image
                source={eye}
                style={[
                  {
                    marginLeft: 10,
                    justifyContent: "center",
                    marginTop: 15,
                  },
                  reveal2 == true ? { opacity: 0.3 } : null,
                ]}
              />
            </TouchableOpacity>
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
            text="Continue"
            preset="primary"
            onPress={() => {
              if (password === "" || confirmedPassword === "" || code === "") {
                toast.show("'Don't leave anything blank'", { color: "red" });
              } else if (password != confirmedPassword) {
                toast.show("'Your passwords don't match'", { color: "red" });
              } else {
                confirmNewPassword(username, code, password);
                toast.show("Your password has been reset");
                navigation.navigate("SignIn");
              }
            }}
          />
        </View>
      </Screen>
    </KeyboardAwareScrollView>
  );
}
