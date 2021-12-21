import React, { FC, useState } from "react"
import { View, ViewStyle, TextStyle, Image, Platform, TouchableOpacity } from "react-native"
import {
    Screen,
    Text,
    TextField,
    Header,
    Button
} from "../components"
import { color, spacing, typography } from "../theme"
import { useNavigation } from '@react-navigation/native';


const FULL: ViewStyle = { flex: 1 }

const CONTAINER: ViewStyle = {
    backgroundColor: "white",
    paddingHorizontal: spacing[6],
    height: "100%"
}






const HEADER_TITLE: TextStyle = {
    textAlign: "center",
    top: 45,
    marginBottom: 90
}




const INPUTSTYLE_CONTAINER: ViewStyle = {
    height: 20,
    marginBottom: 30,
    marginTop: 20
}

const INPUT: TextStyle = {
    fontFamily: typography.primaryBold,
    borderBottomWidth: 2,
    borderColor: "black",

}

interface changePasswordProps { }
const ChangePasswordScreen: FC<changePasswordProps> = () => {
    const navigation = useNavigation();
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const goBack = () => navigation.goBack()

    return (
        <View testID="ChangePasswordScreen" style={FULL}>
            <Screen style={CONTAINER} >
                <Header
                    leftIcon="back"
                    onLeftPress={goBack}
                />

                <View style={{ flexDirection: 'column', backgroundColor: 'white', }}>
                    <Text style={HEADER_TITLE} preset="header" text="Change Your Password" />

                    <TextField
                        style={INPUTSTYLE_CONTAINER}
                        inputStyle={INPUT}
                        placeholder="Enter current Password"
                        keyboardType="default"
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                    />

                    <TextField
                        style={INPUTSTYLE_CONTAINER}
                        inputStyle={INPUT}
                        placeholder="Enter new Password"
                        keyboardType="default"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                    />

                    <TextField
                        style={INPUTSTYLE_CONTAINER}
                        inputStyle={INPUT}
                        placeholder="Confirm New Password"
                        keyboardType="default"
                        value={confirmedPassword}
                        onChangeText={setConfirmedPassword}
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                    />

                    <View style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center', marginTop: 150 }}>
                        <Button
                            // style={!isValid ? DISABLED : null}
                            text="Confirm Changes"
                            preset="primary"
                        />
                    </View>
                </View>

            </Screen>
        </View>
    )
}

export default ChangePasswordScreen;

