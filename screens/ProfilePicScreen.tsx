import * as React from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  Platform,
} from "react-native";
import { color, spacing, typography } from "../theme";
import {
  Button,
  Screen,
  Text,
  AutoImage as Image,
  Header
} from "../components";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
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
  bottom: 40
};

const HEADER: ViewStyle = {
  bottom: 50
}

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
        <Screen style={CONTAINER}>
          <View style={HEADER}>
            <Header
              headerTx="Add a Profile Picture"
              leftIcon="back"
              onLeftPress={() => navigation.goBack()}
            />
          </View>
          <View style={CENTER}>
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
              style={{ width: '75%', marginTop: 50 }}
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
