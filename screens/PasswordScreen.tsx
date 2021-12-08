import * as React from "react";
import { View, ViewStyle, TextStyle, TouchableOpacity } from "react-native";
import { color, spacing, typography } from "../theme";
import { Button, Screen, Text, TextField } from "../components";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { useFormState, useFormDispatch } from "../contexts/form-context";

import { signUp } from "../aws-functions/sign-up";
import { signIn } from "../aws-functions/sign-in";
import { checkLoggedUser } from "../aws-functions/check-logged-user";

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

export default function EmailScreen() {
  const navigation = useNavigation();

  const form = React.useRef();
  const dispatch = useFormDispatch();
  const { values: formValues, errors: formErrors } = useFormState("user");

  React.useEffect(() => {
    console.log("values: ", formValues);
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
      initialValues={formValues}
      initialErrors={formErrors}
      enableReinitialize
    >
      {({ values, handleChange }) => (
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
              style={{ width: "100%" }}
              text="Next"
              preset="primary"
              onPress={() => {

                var isError = false;
                try {
                  signUp(
                    values.email,
                    values.password,
                    values.age,
                    values.username
                  ).then(() => {
                    signIn(values.email, values.password);        
                  });
                } catch (error) {
                  isError = true;
                  console.error("unable to sign up", error);
                }
                
              }}
            />
          </View>
        </Screen>
      )}
    </Formik>
  );
}
