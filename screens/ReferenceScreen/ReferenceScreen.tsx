import React from "react";
import { View, ViewStyle, TextStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Screen, Text, TextField, Header } from "../../components";
import { color, spacing, typography } from "../../theme";
import { addClaim } from "../../aws-functions/aws-functions";

import styles from "./styles";

const ReferenceScreen = (props: any) => {
  const { shoeID } = props.route.params;
  const navigation = useNavigation();
  const [refNumber, setRefNumber] = React.useState("");

  return (
    <Screen style={styles.CONTAINER}>
      <Header leftIcon="back" onLeftPress={() => navigation.goBack()}
      />

      <View style={{ flexDirection: 'column', backgroundColor: 'white' }}>
        <Text
          style={styles.HEADER_TITLE}
          preset="header"
          text="Enter your reference number"
        />


        <TextField
          style={styles.INPUTSTYLE_CONTAINER}
          inputStyle={styles.INPUT}
          placeholder="#123456"
          keyboardType="default"
          value={refNumber}
          onChangeText={(value) => setRefNumber(value)}
          autoCapitalize="none"
          autoCorrect={false}
        />



        <View
          style={{
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            marginTop: 150,
          }}
        >
          <Button
            text="Submit Claim"
            preset="primary"
            onPress={() => {
              addClaim(shoeID, refNumber).then(() =>
                navigation.navigate("ShoeDetails", { shoeID: shoeID })
              );
            }}
          />
        </View>
      </View>
    </Screen>
  );
};

export default ReferenceScreen;
