import * as React from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Platform,
} from "react-native";
import { color, spacing, typography } from "../theme";
import {
  Button,
  Screen,
  Text,
  TextField,
  AutoImage as Image,
} from "../components";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import { useFormState, useFormDispatch } from "../contexts/form-context";
import * as ImagePicker from "expo-image-picker";

const defaultImg = require("../assets/images/defaultUser.png");

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[5],
  flex: 1,
  justifyContent: "space-between",
  marginTop: 50,
  paddingBottom: 90,
};

const CENTER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const HEADER: TextStyle = {
  textAlign: "center",
  marginBottom: 10,
};

const TEXTCENTER: TextStyle = {
  textAlign: "center",
  alignItems: "center",
};

const INPUT: TextStyle = {
  fontFamily: typography.primaryBold,
};

const DISABLED: ViewStyle = {
  backgroundColor: "rgba(52, 52, 52, 0.25)",
};

export default function ProfilePicScreen() {
  const navigation = useNavigation();
  const form = React.useRef();
  const dispatch = useFormDispatch();
  const { values: formValues, errors: formErrors } = useFormState("user");
  const [tempImage, setTempImage] = React.useState("");

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

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      if (form.current) {
        const { values, errors } = form.current;
        dispatch({
          type: "UPDATE_FORM",
          payload: {
            id: "user",
            data: { values, errors },
          },
        });
      }
    });

    return unsubscribe;
  }, [navigation]);

  const pickImage = async (handleChange) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      handleChange(result.uri);
    }
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
            {values.image && values.image.length > 0 ? (
              <Image
                source={{ uri: values.image }}
                style={{ width: 200, height: 200, borderRadius: 100 }}
              />
            ) : (
              <Image source={defaultImg} />
            )}
          </View>

          <View style={CENTER}>
            <Button
              // disabled={!isValid}
              // style={!isValid ? DISABLED : null}
              text="Choose from Library"
              preset="cta"
              onPress={() => pickImage(handleChange("image"))}
            />

            {/* <Button
                    // disabled={!isValid}
                    // style={!isValid ? DISABLED : null}
                    text="Take Photo"
                    preset="cta"
                // onPress={() => navigation.navigate('Password')} 
                /> */}

            {/* <TextField
                            inputStyle={INPUT}
                            placeholder="Enter Age"
                            keyboardType="numeric"
                            maxLength={2}
                            // value={values.age}
                            onChangeText={handleChange("age")}
                        /> */}
          </View>

          <View
            style={{
              flexDirection: "row",
              alignContent: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Button
              // disabled={!isValid}
              // style={!isValid ? DISABLED : null}
              text="Continue"
              preset="cta"
              onPress={() => navigation.navigate("Password")}
            />
          </View>
        </Screen>
      )}
    </Formik>
  );
}
