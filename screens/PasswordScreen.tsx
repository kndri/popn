import * as React from "react";
import {
  View,
  ViewStyle,
  TextStyle,
} from "react-native";
import { color, spacing, typography } from "../theme";
import { Button, Screen, Text, TextField } from "../components";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from 'yup'
import { useFormState, useFormDispatch } from "../contexts/form-context";
import { useAuth } from "../contexts/auth";
import { useToast } from "../components/Toast";

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

//password validation schema
const passwordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

export default function PasswordScreen() {
  const navigation = useNavigation();
  const toast = useToast();

  const form = React.useRef();
  const dispatch = useFormDispatch();
  const { values: formValues, errors: formErrors } = useFormState("user");
  const { signUp } = useAuth();


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
            <TextField
              inputStyle={INPUT}
              placeholder="Password"
              secureTextEntry
              onChangeText={handleChange("password")}
            />

            {(errors.password || touched.password) &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
            }
          </View>

          <View style={CENTER}>
            <Button
              disabled={!isValid}
              style={{ width: "100%" }}
              text="Next"
              preset="primary"
              onPress={() => {
                if (values.email === "" || values.password === "") {
                  toast.show(`You must provide an email and password`);
                } else {
                  signUp(
                    values.email,
                    values.password,
                    values.age,
                    values.username
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
