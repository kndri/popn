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
    // width: '100%',
    marginTop: 100,
    marginBottom: 90,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red'

}

const INPUT: TextStyle = {
    fontFamily: typography.primaryBold,
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
            <Screen style={CONTAINER} >
                <Header
                    leftIcon="back"
                    onLeftPress={goBack}
                />
                <View style={{ flexDirection: 'column', backgroundColor: 'white', }}>
                    <Text style={HEADER_TITLE} preset="header" text="Change Email Address" />

                    <TextField
                        style={INPUTSTYLE_CONTAINER}
                        inputStyle={INPUT}
                        placeholder="Enter New Email Address"
                        keyboardType="default"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize='none'
                        autoCorrect={false}
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

export default ChangeEmailScreen;

