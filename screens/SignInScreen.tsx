import * as React from 'react';
import { View, ViewStyle, TextStyle, Alert } from "react-native"
import { color, spacing } from "../theme"
import {
  Button,
  Screen,
  Text,
  Header,
  TextField
} from "../components"

import { useNavigation } from '@react-navigation/native';

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

export default function SignInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Screen style={CONTAINER}>
        <Header
        headerTx="demoScreen.howTo"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
        />

    <View style={HEADER}>
        <Text preset="header" text="Sign in to POPN" />
        <Text style={{color: color.dim}} text="display the hype." />
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

<TextField
              onChangeText={(value) => setPassword(value)}
              value={password}
              label="Password"
              placeholder="Enter your password"
              secureTextEntry
              inputStyle={{
                padding: 16,
                borderWidth: 2,
                borderRadius: 10,
                borderColor: "black",
                marginTop: 6
              }}
            />
<View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
<Button style={{marginLeft: 5}} preset="link" text="Forgot Password?"></Button>
</View>
    </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
        <Button style={{width: 160}} text="Sign in" preset="primary" onPress={() => Alert.alert("Sign in pressed!")}/>
      </View>
    </Screen>
  );
}


