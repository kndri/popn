import * as React from 'react';
import { View, ViewStyle, TextStyle } from "react-native";
import { color, spacing, typography } from "../theme"
import {
    Button,
    Screen,
    Text,
    AutoImage as Image
} from "../components"
import { useNavigation } from '@react-navigation/native';
import { Formik } from "formik";
import { useFormState, useFormDispatch } from "../contexts/form-context";
import * as ImagePicker from 'expo-image-picker';

let defaultProfileImage = require("../assets/images/defaultUser.png");

// Styles
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[5],
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 50,
    paddingBottom: 90
}

const CENTER: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
}

const HEADER: TextStyle = {
    textAlign: 'center',
    marginBottom: 10
}

const TEXTCENTER: TextStyle = {
    textAlign: 'center',
    alignItems: 'center'
}

const INPUT: TextStyle = {
    fontFamily: typography.primaryBold,
}

const DISABLED: ViewStyle = {
    backgroundColor: 'rgba(52, 52, 52, 0.25)',
};


export default function ProfilePicScreen() {
    const navigation = useNavigation();
    const form = React.useRef();
    const dispatch = useFormDispatch();
    const { values: formValues, errors: formErrors } = useFormState("user");

    React.useEffect(() => {
        const unsubscribe = navigation.addListener("blur", () => {
            if (form.current) {
                const { values, errors } = form.current;
                console.log(values);
                dispatch({
                    type: "UPDATE_FORM",
                    payload: {
                        id: "user",
                        data: { values, errors }
                    }
                });
            }
        });

        return unsubscribe;
    }, [navigation]);

    const pickImage = async (handleChange) => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your photos!");
            return;
        }
        else {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            console.log(result)
            if (!result.cancelled) {
                handleChange(result.uri)
            }
        }
    };

    const openCamera = async (handleChange) => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your camera!");
            return;
        }
        else {
            let result = await ImagePicker.launchCameraAsync({
                aspect: [4, 3],
                quality: 1,
            });
            console.log(result)
            if (!result.cancelled) {
                handleChange(result.uri)
            }
        }
    };

    const skippedProfilePic = (handleChange) => {
        handleChange("https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png");
    };

    return (
        <Formik
            innerRef={form}
            validateOnBlur={true}
            initialValues={formValues}
            initialErrors={formErrors}
            enableReinitialize
        >
            {({ values, handleChange }) => (
                <Screen style={CONTAINER}>
                    <View style={CENTER}>
                        <Text style={HEADER} preset="header" text="Add a profile picture" />

                        {values.image && values.image.length > 0 ?
                            <Image source={{ uri: values.image }} style={{ width: 200, height: 200, borderRadius: 100 }} /> : <Image source={defaultProfileImage} />}
                    </View>

                    <View style={CENTER}>
                        <Button
                            // style={!isValid ? DISABLED : null}
                            text="Choose from Library"
                            preset="cta"
                            onPress={() => pickImage(handleChange('image'))}
                        />

                        <Button
                            // style={!isValid ? DISABLED : null}
                            text="Take Photo"
                            preset="cta"
                            onPress={() => openCamera(handleChange('image'))}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignContent: 'flex-end', justifyContent: 'flex-end' }}>
                        <Button
                            // disabled={!isValid}
                            // style={!isValid ? DISABLED : null}
                            text="Continue"
                            preset="cta"
                            onPress={() => {
                                if (!values.image) {
                                    skippedProfilePic(handleChange('image'))
                                    navigation.navigate('Password')
                                }
                                else {
                                    navigation.navigate('Password')
                                }
                            }}
                        />

                    </View>
                </Screen>
            )
            }
        </Formik>
    );
}
