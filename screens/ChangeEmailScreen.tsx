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
import { getUser } from '../src/graphql/queries';
import { updateUser } from '../src/graphql/mutations';
import {
    API,
    graphqlOperation,
    Auth,
} from 'aws-amplify';
import { authService } from "../services/auth-service";
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


export default function ChangeEmailScreen() {
    const toast = useToast();
    const navigation = useNavigation();
    const [userData, setUserData] = React.useState({});
    const [newEmail, setNewEmail] = useState("");
    // const [code, setCode] = useState("");
    const goBack = () => navigation.goBack()


    React.useEffect(() => {
        fetchCurrentUser();

    }, []);

    //1.get current user 
    //TODO: refactor to use from aws-function
    const fetchCurrentUser = async () => {
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const userData = await API.graphql(
                graphqlOperation(
                    getUser, {
                    id: userInfo.attributes.sub,
                }
                )
            )
            setUserData(userData);
        } catch (e) {
            console.log(e);
        }
    }

    //2. perform mutation and show toast  
    const updateEmail = async (userID: any) => {
        try {
            await API.graphql(
                graphqlOperation(
                    updateUser, {
                    input: {
                        id: userID,
                        email: newEmail
                    }
                }
                )
            )
            const user = await Auth.currentAuthenticatedUser();
            await Auth.updateUserAttributes(user, {
                'email': newEmail,
            });
            await Auth.confirmSignUp(newEmail, '420690');
        } catch (error) {
            console.log(error)
        }
        navigation.navigate("verifyEmail");
    }


    const validateEmailFormat = async () => {
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(newEmail)) {
            const available = await authService.emailAvailable(newEmail);
            if (!available) {
                toast.show(`This email is being used by another account.`, { color: 'red' });
            } else {
                updateEmail(userData.data.getUser.id)
            }
        } else {
            toast.show(`You have entered an invalid email address!`, { color: 'red' });
        }
    }


    return (
        <View testID="ChangeEmailScreen" style={FULL}>
            <Screen style={CONTAINER}>
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
                        value={newEmail}
                        onChangeText={setNewEmail}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />


                    <View style={{ flexDirection: 'column', alignContent: 'center', justifyContent: 'center', marginTop: 150 }}>
                        <Button
                            text="Confirm Changes"
                            preset="primary"
                            onPress={() => { validateEmailFormat() }}
                        />
                    </View>
                </View>
            </Screen>
        </View>
    )
}

