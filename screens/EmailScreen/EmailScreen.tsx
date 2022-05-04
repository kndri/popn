import * as React from "react";
import { View, ViewStyle, TextStyle } from "react-native";
import { color, spacing, typography } from "../../theme";
import { Button, Screen, Text, TextField, Header } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import { useFormState, useFormDispatch } from "../../contexts/form-context";
import { authService } from "../../services/auth-service";
import { useToast } from "../../components/Toast";

import styles from "./styles";

//email validation schema
const emailValidationSchema = yup.object().shape({
  email: yup.string().email("Please enter valid email").required(""),
});

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
              text="Enter your email"
            />
          </View>

          <View style={styles.CENTER}>
            <TextField
              inputStyle={styles.INPUT}
              placeholder="johndoe@email.com"
              keyboardType="email-address"
              value={values.email}
              onChangeText={handleChange("email")}
              autoCapitalize="none"
              autoCorrect={false}
            />

            {(errors.email || touched.email) && (
              <Text style={{ fontSize: 10, color: "red" }}>{errors.email}</Text>
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
                const available = await authService.emailAvailable(
                  values.email
                );
                if (!available) {
                  toast.show(`An account exists with this email already.`, {
                    color: "red",
                  });
                } else {
                  navigation.navigate("Age");
                }
              }}
            />
          </View>
        </Screen>
      )}
    </Formik>
  );
}
