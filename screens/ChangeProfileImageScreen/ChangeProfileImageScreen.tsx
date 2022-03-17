import React, { FC, useState } from "react";
import { View, Platform } from "react-native";
import { Screen, Text, TextField, Header, Button } from "../../components";

import { useNavigation } from "@react-navigation/native";
import { getUser } from "../../src/graphql/queries";
import { updateUser } from "../../src/graphql/mutations";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { authService } from "../../services/auth-service";
import { useToast } from "../../components/Toast";

import * as ImagePicker from "expo-image-picker";
import styles from "./Styles";

export default function ChangeProfileImageScreen() {
    const toast = useToast();
    const navigation = useNavigation();
    const [image, setImage] = React.useState("");
    const goBack = () => navigation.goBack();

    //ask for user image permission
    React.useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } =
                    await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert("Sorry, we need camera roll permissions to make this work!");
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    // React.useEffect(() => {
    //     fetchCurrentUser();
    // }, []);

    //1.get current user
    //TODO: refactor to use from aws-function
    // const fetchCurrentUser = async () => {
    //     try {
    //         const userInfo = await Auth.currentAuthenticatedUser();
    //         const userData = await API.graphql(
    //             graphqlOperation(getUser, {
    //                 id: userInfo.attributes.sub,
    //             })
    //         );
    //         setUserData(userData);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    // 2. perform mutation and show toast
    // const updateUsername = async (userID: any) => {
    //     try {
    //         await API.graphql(
    //             graphqlOperation(updateUser, {
    //                 input: {
    //                     id: userID,
    //                     username: newUsername,
    //                 },
    //             })
    //         );
    //         const user = await Auth.currentAuthenticatedUser();
    //         await Auth.updateUserAttributes(user, {
    //             preferred_username: newUsername,
    //         });
    //         toast.show(`Your username has been changed!`);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const validateUsernameFormat = async () => {
    //     if (newUsername.length > 4) {
    //         const available = await authService.usernameAvailable(newUsername);
    //         if (!available) {
    //             toast.show(`This username is being used by another account.`, {
    //                 color: "red",
    //             });
    //         } else {
    //             updateUsername(userData.data.getUser.id);
    //         }
    //     } else {
    //         toast.show(`username must have at least 4 characters!`, {
    //             color: "red",
    //         });
    //     }
    // };

    return (
        <View testID="ChangeProfileImageScreen" style={styles.FULL}>
            <Screen style={styles.CONTAINER}>
                <Header leftIcon="back" onLeftPress={goBack} />
                <View style={{ flexDirection: "column", backgroundColor: "white" }}>
                    <Text
                        style={styles.HEADER_TITLE}
                        preset="header"
                        text="Change Profile Image"
                    />

                    {/* <Image></Image> */}

                    <Button
                        text="Choose from Library"
                        preset="cta"
                        style={{ width: "75%", marginTop: 50, alignSelf: 'center' }}
                    // onPress={() => pickImage(handleChange("image"))}
                    />

                    <View
                        style={{
                            flexDirection: "column",
                            alignContent: "center",
                            justifyContent: "center",
                            marginTop: 150,
                        }}
                    >
                        <Button
                            text="Confirm Changes"
                            preset="primary"
                            onPress={() => {
                                // validateUsernameFormat();
                            }}
                        />
                    </View>
                </View>
            </Screen>
        </View>
    );
}
