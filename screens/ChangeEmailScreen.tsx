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

const NEW_EMAIL_BUTTON: ViewStyle = {
    borderRadius: 5,
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: color.palette.black,
    marginTop: 240
};
const NEW_EMAIL_TEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    color: color.palette.white,
    fontSize: 20,
    letterSpacing: -0.5,
};

const INPUTSTYLE_CONTAINER: ViewStyle = {
    height: 20,
    marginBottom: 30,
    marginTop: 40
}

const INPUTSTYLE: TextStyle = {
    color: "black",
    borderBottomWidth: 2,
    borderColor: "black",
}

interface ChangeEmailProps { }
 const ChangeEmailScreen: FC<ChangeEmailProps> = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const goBack = () => navigation.goBack()

    return (
        <View testID="ChangeEmailScreen" style={FULL}>
            <Screen style={CONTAINER} preset="scroll" backgroundColor={color.palette.black}>
                <Header
                    leftIcon="back"
                    onLeftPress={goBack}
                />
                <Text style={HEADER_TITLE}>Change Email Address</Text>
                <TextField
                    style={INPUTSTYLE_CONTAINER}
                    inputStyle={INPUTSTYLE}
                    placeholder="Enter New Email Address"
                    value={email}
                    onChangeText={setEmail}
                />
                <Button
                    testID="confirm-email-button"
                    style={NEW_EMAIL_BUTTON}
                    textStyle={NEW_EMAIL_TEXT}
                    text="Confirm New Email"
                // onPress={}
                />

            </Screen>
        </View>

    )
}

export default ChangeEmailScreen;

