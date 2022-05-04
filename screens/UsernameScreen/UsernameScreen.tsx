import * as React from "react";
import { View, ViewStyle, TextStyle } from "react-native";

import { Button, Screen, Text, TextField, Header } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import { useFormState, useFormDispatch } from "../../contexts/form-context";
import { authService } from "../../services/auth-service";
import { useToast } from "../../components/Toast";

import styles from "./Style";

//username validation schema
const usernameValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required("")
    .min(4, "username must have at least 4 characters"),
});

export default function UserNameScreen() {
  const navigation = useNavigation();
  const toast = useToast();

  const form = React.useRef();
  const dispatch = useFormDispatch();
  const { values: formValues, errors: formErrors } = useFormState("user");

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
      validationSchema={usernameValidationSchema}
      initialValues={formValues}
      initialErrors={formErrors}
      enableReinitialize
      validateOnMount={true}
    >
      {({ values, handleChange, errors, isValid, touched }) => (
        <Screen style={styles.CONTAINER}>
          <View style={styles.CENTER}>
            <Header
              leftIcon="back"
              onLeftPress={() => {
                navigation.goBack();
              }}
            />
            <Text
              style={styles.TEXTCENTER}
              preset="header"
              text="Create your Username"
            />
          </View>

          <View style={styles.CENTER}>
            <TextField
              inputStyle={styles.INPUT}
              placeholder="username"
              keyboardType="default"
              value={values.username}
              onChangeText={handleChange("username")}
              autoCapitalize="none"
              autoCorrect={false}
            />

            {(errors.username || touched.username) && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.username}
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
              style={!isValid ? styles.DISABLED : null}
              text="Continue"
              preset="cta"
              onPress={async () => {
                const available = await authService.usernameAvailable(
                  values.username
                );
                if (!available) {
                  toast.show(`An account exists with this username already.`, {
                    color: "red",
                  });
                } else {
                  navigation.navigate("Email");
                }
              }}
            />
          </View>
        </Screen>
      )}
    </Formik>
  );
}

function onGoBack(arg0: { values: import("formik").FormikValues; "": any }) {
  throw new Error("Function not implemented.");
}