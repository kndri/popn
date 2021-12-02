import * as React from 'react';
import { View, ViewStyle, TextStyle, TouchableOpacity, } from "react-native";
import { color, spacing, typography } from "../theme"
import {
    Button,
    Screen,
    Text,
    TextField,
} from "../components"
import { useNavigation } from '@react-navigation/native';

// Styles
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[7],
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 50,
    paddingBottom: 90
}

const HEADER: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
}

const CENTER: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
}

const TEXTCENTER: TextStyle = {
    textAlign: 'center',
    alignItems: 'center'
}

const INPUT: TextStyle = {
    fontFamily: typography.primaryBold,
}


export default function PhoneNumberScreen() {
    const navigation = useNavigation();

    return (
        <Screen style={CONTAINER}>
            <View style={CENTER}>
                <Text preset="header" text="Verify your phone number." />
            </View>

            <View style={CENTER}>
                <TextField
                    inputStyle={INPUT}
                    placeholder="704.444.4444"
                    keyboardType="phone-pad"
                />
            </View>

            <View style={CENTER}>
                <Text style={TEXTCENTER} preset="secondary">
                    By continuing, you are confirming that you have read and understood the
                    <TouchableOpacity>
                        <Text style={{ textDecorationLine: 'underline' }} preset="secondary"> Privacy Policy</Text>
                    </TouchableOpacity>
                </Text>
                <Button style={{ width: '100%' }} text="Next" preset="primary" onPress={() => navigation.navigate('VerifyNumber')} />
            </View>

        </Screen>
    );
}


