import * as React from "react";
import { View, ViewStyle, TextStyle, TouchableOpacity } from "react-native";
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
import { useAuth } from "../contexts/auth";
import { useToast } from "../components/Toast";

const eye = require("../assets/images/reveal.png");

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[7],
  flex: 1,
  justifyContent: "space-between",
  marginTop: 50,
  paddingBottom: 90,
};

const HEADER: TextStyle = {
  textAlign: "center",
  marginBottom: 10,
};

const CENTER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
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

//password validation schema
const passwordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export default function PasswordScreen() {
  const navigation = useNavigation();
  const toast = useToast();

  const form = React.useRef();
  const dispatch = useFormDispatch();
  const { values: formValues, errors: formErrors } = useFormState("user");
  const { signUp } = useAuth();
  const [reveal, setReveal] = React.useState<boolean>(true);
  const [texts, setText] = React.useState<string>("");

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

  return (
    <Formik
      innerRef={form}
      validateOnBlur={true}
      validationSchema={passwordValidationSchema}
      initialValues={formValues}
      initialErrors={formErrors}
      enableReinitialize
    >
      {({ values, handleChange, errors, isValid, touched }) => (
        <Screen style={CONTAINER}>
          <View style={CENTER}>
            <Text style={HEADER} preset="header" text="Create a password" />
          </View>

          <View style={CENTER}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <TextField
                inputStyle={INPUT}
                placeholder="Password"
                secureTextEntry={reveal}
                onChangeText={handleChange("password")}
              />
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "auto",
                }}
                onPress={() => setReveal((prev) => !prev)}
              >
                <Image
                  source={eye}
                  style={[
                    {
                      marginLeft: 10,
                      justifyContent: "center",
                      marginTop: 15,
                    },
                    reveal == false ? { opacity: 0.3 } : null,
                  ]}
                />
              </TouchableOpacity>
            </View>

            {(errors.password || touched.password) && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.password}
              </Text>
            )}
          </View>

          <View
            style={{
              flexDirection: "row",
              alignContent: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Button
              disabled={!isValid}
              style={!isValid ? DISABLED : null}
              text="Continue"
              preset="cta"
              onPress={() => {
                if (values.email === "" || values.password === "") {
                  toast.show(`You must provide an email and password`, {
                    color: "red",
                  });
                } else {
                  signUp(
                    values.email,
                    values.password,
                    values.age,
                    values.username,
                    values.image
                  );
                }
              }}
            />
          </View>
        </Screen>
      )}
    </Formik>
  );
}
