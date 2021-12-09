import * as React from "react";
import { View, ViewStyle, TextStyle, TouchableOpacity, Alert } from "react-native";
import { color, spacing, typography } from "../theme";
import { Button, Screen, Text, TextField } from "../components";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from 'yup'
import { useFormState, useFormDispatch } from "../contexts/form-context";
import { authService } from "../services/auth-service";
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
  textAlign: 'center',
  marginBottom: 10
}

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

//email validation schema
const emailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
})

export default function EmailScreen() {
  const navigation = useNavigation();
  const toast = useToast();

  const form = React.useRef();
  const dispatch = useFormDispatch();
  const { values: formValues, errors: formErrors } = useFormState("user");

  React.useEffect(() => {

    const unsubscribe = navigation.addListener("blur", async () => {
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
      validationSchema={emailValidationSchema}
      initialValues={formValues}
      initialErrors={formErrors}
      enableReinitialize
    >
      {({ values, handleChange, errors, isValid, touched }) => (
        <Screen style={CONTAINER}>
          <View style={CENTER}>
            <Text style={HEADER} preset="header" text="Enter your email." />
          </View>

          <View style={CENTER}>
            <TextField
              inputStyle={INPUT}
              placeholder="johndoe@email.com"
              keyboardType="email-address"
              value={values.email}
              onChangeText={handleChange("email")}
              autoCapitalize='none'
              autoCorrect={false}
            />

            {(errors.email || touched.email) &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
            }
          </View>

          <View style={CENTER}>
            {/* <Text style={TEXTCENTER} preset="secondary">
              By continuing, you are confirming that you have read and
              understood the
              <TouchableOpacity>
                <Text
                  style={{ textDecorationLine: "underline" }}
                  preset="secondary"
                >
                  {" "}
                  Privacy Policy
                </Text>
              </TouchableOpacity>
            </Text> */}

            <Button
              disabled={!isValid}
              style={{ width: "100%" }}
              text="Next"
              preset="primary"
              onPress={async () => {
                console.log('formValues.email', values.email );
                const available = await authService.usernameAvailable(values.email);
                if (!available) {
                  toast.show(`An account exists with this email already.`);
                } else {
                  navigation.navigate('Password');
                }
                }}
            />
          </View>
        </Screen>
      )}
    </Formik>
  );
}
