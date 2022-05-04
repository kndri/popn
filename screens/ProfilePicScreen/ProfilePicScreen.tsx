import * as React from "react";
import { View, ViewStyle, TextStyle, Platform } from "react-native";
import { color, spacing, typography } from "../../theme";
import {
  Button,
  Screen,
  Text,
  AutoImage as Image,
  Header,
} from "../../components";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { useFormState, useFormDispatch } from "../../contexts/form-context";
import * as ImagePicker from "expo-image-picker";

import styles from "./styles";

const defaultImg = require("../../assets/images/defaultUser.png");

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

  const handlePress = (handleChange) => {
    handleChange(
      "https://popn-app.s3.amazonaws.com/default_images/defaultUser.png"
    );
  };

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
        <Screen style={styles.CONTAINER}>
          <View style={styles.CENTER}>
            <Header leftIcon="back" onLeftPress={() => navigation.goBack()} />
            <Text
              style={styles.TEXTCENTER}
              preset="header"
              text="Add a profile picture"
            />
          </View>
          <View style={styles.CENTER}>
            {values.image && values.image.length > 0 ? (
              <Image
                source={{ uri: values.image }}
                style={{ width: 150, height: 150, borderRadius: 100 }}
              />
            ) : (
              <Image source={defaultImg} style={{ width: 150, height: 150 }} />
            )}
            <Button
              text="Choose from Library"
              preset="cta"
              style={{ width: "75%", marginTop: 50 }}
              onPress={() => pickImage(handleChange("image"))}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignContent: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Button
              text="Continue"
              preset="cta"
              onPress={() => {
                if (values.image == undefined) {
                  handlePress(handleChange("image"));
                  navigation.navigate("Password");
                } else {
                  navigation.navigate("Password");
                }
              }}
            />
          </View>
        </Screen>
      )}
    </Formik>
  );
}
