import React, { FC, useState } from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import {
    Screen,
    Text,
    TextField,
    Header,
    Button
} from "../components"
import { spacing, typography } from "../theme"
import { useNavigation } from '@react-navigation/native';
import {
    Auth,
} from 'aws-amplify';
import { useToast } from "../components/Toast";


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
    width: '100%',
    marginTop: 100,
    marginBottom: 90,
    alignItems: 'center',
}

const INPUT: TextStyle = {
    fontFamily: typography.primaryBold,
    borderBottomWidth: 2,
    borderColor: "black",
}


export default function EmailVerificationCodeScreen() {
    const toast = useToast();
    const navigation = useNavigation();
    const [verifcationCode, setVerifcationCode] = useState("");
    const goBack = () => navigation.goBack()


    return (
        <View style={FULL}>
            <Screen style={CONTAINER}>
                <Header
                    leftIcon="back"
                    onLeftPress={goBack}
                />
                <View style={{ flexDirection: 'column', backgroundColor: 'white', }}>
                    <Text style={HEADER_TITLE} preset="header" text="Check your email inbox for a verifcation code." />

                    <TextField
                        style={INPUTSTYLE_CONTAINER}
                        inputStyle={INPUT}
                        placeholder="Enter your verification code"
                        keyboardType="default"
                        value={verifcationCode}
                        onChangeText={setVerifcationCode}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />


                    <View style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center', marginTop: 150 }}>
                        <Button
                            text="Complete Verification"
                            preset="primary"
                            onPress={async () => {
                                await Auth.verifyCurrentUserAttributeSubmit('email', verifcationCode)
                                toast.show(`Your email has been updated & verified.`);
                                navigation.navigate('UserProfile')
                            }}
                        />
                    </View>
                </View>
            </Screen>
        </View>
    )
}

