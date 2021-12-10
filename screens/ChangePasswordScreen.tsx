import React, { FC, useState } from "react"
import { View, ViewStyle, TextStyle, Image, Platform, TouchableOpacity } from "react-native"
import {
    Screen,
    Text,
    TextField,
    Header,
    Button
} from "../components"
import { color, spacing } from "../theme"
import { useNavigation } from '@react-navigation/native';


const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
    backgroundColor: "#FEFAE0",
    paddingHorizontal: spacing[6],
    height: "100%"
}

const TEXT: TextStyle = {
    color: color.palette.black,
    fontFamily: Platform.select({
        ios: "Poppins", // The font family name
        android: "Poppins-Regular", // The file name
    }),
}

const BOLD: TextStyle = {
    fontFamily: Platform.select({
        ios: "Poppins-Bold", // The font family name
        android: "Poppins-Bold", // The file name
    }),
}

const HEADER: TextStyle = {
    paddingTop: spacing[8],
    paddingBottom: spacing[2],
    paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
    ...HEADER,
    ...TEXT,
    ...BOLD,
    fontSize: 24,
    lineHeight: 35.54,
    textAlign: "center",
    top: 45,
    marginBottom: 90
}

const NEW_PASSWORD_BUTTON: ViewStyle = {
    borderRadius: 5,
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: color.palette.black,
    marginTop: 190
};
const NEW_PASSWORD_TEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    color: color.palette.white,
    fontSize: 20,
    letterSpacing: -0.5,
};

const INPUTSTYLE_CONTAINER: ViewStyle = {
    height: 20,
    marginBottom: 30,
    marginTop: 20
}

const INPUTSTYLE: TextStyle = {
    color: "black",
    borderBottomWidth: 2,
    borderColor: "black",
}

interface changePasswordProps { }
 const ChangePasswordScreen: FC<changePasswordProps> = () => {
    const navigation = useNavigation();
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const goBack = () => navigation.goBack()

    return (
        <View testID="ChangePasswordScreen" style={FULL}>
            <Screen style={CONTAINER} preset="scroll" backgroundColor={color.palette.black}>
                <Header
                    leftIcon="back"
                    onLeftPress={goBack}
                />
                <Text style={HEADER_TITLE}>Change Your Password</Text>
                <TextField
                    style={INPUTSTYLE_CONTAINER}
                    inputStyle={INPUTSTYLE}
                    placeholder="Enter New Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />

                <TextField
                    style={INPUTSTYLE_CONTAINER}
                    inputStyle={INPUTSTYLE}
                    placeholder="Confirm New Password"
                    value={confirmedPassword}
                    onChangeText={setConfirmedPassword}
                    secureTextEntry={true}
                />
                <Button
                    testID="confirm-email-button"
                    style={NEW_PASSWORD_BUTTON}
                    textStyle={NEW_PASSWORD_TEXT}
                    text="Confirm New Password"
                // onPress={}
                />
            </Screen>
        </View>
    )
}

export default ChangePasswordScreen;

