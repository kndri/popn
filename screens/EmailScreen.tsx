import * as React from "react";
import { View, ViewStyle, TextStyle, TouchableOpacity, Alert } from "react-native";
import { color, spacing, typography } from "../theme";
import { Button, Screen, Text, TextField, Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from 'yup'
import { useFormState, useFormDispatch } from "../contexts/form-context";
import { authService } from "../services/auth-service";
import { useToast } from "../components/Toast";

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[5],
  flex: 1,
  justifyContent: "space-between",
  marginTop: 50,
  paddingBottom: 90,
};


const HEADER: ViewStyle = {
  bottom: 50
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

const DISABLED: ViewStyle = {
  backgroundColor: 'rgba(52, 52, 52, 0.25)',
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
          <View style={HEADER}>
            <Header
              headerTx="Enter your email"
              leftIcon="back"
              onLeftPress={() => navigation.goBack()}
            />
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

          <View style={{ flexDirection: 'row', alignContent: 'flex-end', justifyContent: 'flex-end' }}>
            <Button
              disabled={!isValid}
              style={!isValid ? DISABLED : null}
              text="Continue"
              preset="cta"
              onPress={async () => {
                const available = await authService.emailAvailable(values.email);
                if (!available) {
                  toast.show(`An account exists with this email already.`, { color: 'red' });
                } else {
                  navigation.navigate('Age');
                }
              }}
            />
          </View>
        </Screen>
      )}
    </Formik>
  );
}
