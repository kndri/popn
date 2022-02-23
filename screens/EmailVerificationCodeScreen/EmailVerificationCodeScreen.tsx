import React, { FC, useState } from "react";
import { View, ViewStyle, TextStyle } from "react-native";
import { Screen, Text, TextField, Header, Button } from "../../components";
import { spacing, typography } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { useToast } from "../../components/Toast";

import styles from "./Styles";

export default function EmailVerificationCodeScreen() {
  const toast = useToast();
  const navigation = useNavigation();
  const [verifcationCode, setVerifcationCode] = useState("");
  const goBack = () => navigation.goBack();

  return (
    <View style={styles.FULL}>
      <Screen style={styles.CONTAINER}>
        <Header leftIcon="back" onLeftPress={goBack} />
        <View style={{ flexDirection: "column", backgroundColor: "white" }}>
          <Text
            style={styles.HEADER_TITLE}
            preset="header"
            text="Check your email inbox for a verifcation code."
          />

          <TextField
            style={styles.INPUTSTYLE_CONTAINER}
            inputStyle={styles.INPUT}
            placeholder="Enter your verification code"
            keyboardType="default"
            value={verifcationCode}
            onChangeText={setVerifcationCode}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <View
            style={{
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              marginTop: 150,
            }}
          >
            <Button
              text="Complete Verification"
              preset="primary"
              onPress={async () => {
                await Auth.verifyCurrentUserAttributeSubmit(
                  "email",
                  verifcationCode
                );
                toast.show(`Your email has been updated & verified.`);
                navigation.navigate("UserProfile");
              }}
            />
          </View>
        </View>
      </Screen>
    </View>
  );
}
