import React from "react";
import { View, ViewStyle, TextStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Screen, Text, TextField } from "../../components";
import { color, spacing, typography } from "../../theme";
import { addClaim } from "../../aws-functions/aws-functions";

import styles from "./Styles";

const ReferenceScreen = (props: any) => {
  const { shoeID } = props.route.params;
  const navigation = useNavigation();
  const [refNumber, setRefNumber] = React.useState("");

  return (
    <Screen style={styles.CONTAINER}>
      <View style={styles.CENTER}>
        <Text
          style={styles.HEADER}
          preset="header"
          text="Enter your reference number"
        />
      </View>

      <View style={styles.CENTER}>
        <TextField
          inputStyle={styles.INPUT}
          placeholder="#reference"
          onChangeText={(value) => setRefNumber(value)}
        />
      </View>

      <View style={styles.CENTER}>
        <Button
          //   disabled={!isValid}
          style={{ width: "100%" }}
          text="Submit Claim"
          preset="primary"
          onPress={() => {
            addClaim(shoeID, refNumber).then(() =>
              navigation.navigate("ShoeDetails", { shoeID: shoeID })
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default ReferenceScreen;
