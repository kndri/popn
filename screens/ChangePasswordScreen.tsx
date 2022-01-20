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
    marginBottom: 30,
    marginTop: 20,
    alignItems: 'center',
    width: '100%'
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
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [currentUser, setCurrentUser] = useState({});
    const toast = useToast();
    const goBack = () => navigation.goBack()


    React.useEffect(() => {
        fetchCurrentUser();

    }, []);

    //1.get current user 
    //TODO: refactor to use from aws-function
    const fetchCurrentUser = async () => {
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            // console.log(userInfo)
            setCurrentUser(userInfo)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View testID="ChangePasswordScreen" style={FULL}>
            <Screen style={CONTAINER} >
                <Header
                    leftIcon="back"
                    onLeftPress={goBack}
                />

                <View style={{ flexDirection: 'column', backgroundColor: 'white', }}>
                    <Text style={HEADER_TITLE} preset="header" text="Change Your Password" />
                    <View style={{ top: 15 }}>
                        <TextField
                            style={INPUTSTYLE_CONTAINER}
                            inputStyle={INPUT}
                            placeholder="Enter old Password"
                            keyboardType="default"
                            value={password}
                            onChangeText={(value) => setPassword(value)}
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
                            onChangeText={(value) => setNewPassword(value)}
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                        />

                        <TextField
                            style={INPUTSTYLE_CONTAINER}
                            inputStyle={INPUT}
                            placeholder="Confirm new Password"
                            keyboardType="default"
                            value={confirmNewPassword}
                            onChangeText={(value) => setConfirmNewPassword(value)}
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                        />

                    </View>



                    <View style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center', marginTop: 155 }}>
                        <Button
                            // style={!isValid ? DISABLED : null}
                            text="Confirm Changes"
                            preset="primary"
                            onPress={async () => {
                                if (password === '' || newPassword === '' || confirmNewPassword === '') {
                                    toast.show('passwords cannot be empty', { color: 'red' })
                                }
                                else if (newPassword != confirmNewPassword) {
                                    toast.show('Make sure you confirmed correctly', { color: 'red' })
                                }
                                else {
                                    await Auth.changePassword(currentUser, password, newPassword)
                                        .then(() => { toast.show('Your password has been changed.') })
                                        .then(() => { navigation.navigate('UserProfile') })
                                }
                            }}
                        />
                    </View>
                </View>

            </Screen>
        </View>
    )
}

export default ChangePasswordScreen;

