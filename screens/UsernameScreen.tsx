import * as React from 'react';
import { View, ViewStyle, TextStyle, TouchableOpacity } from "react-native";
import { color, spacing, typography } from "../theme"
import {
  Button,
  Screen,
  Text,
  TextField
} from "../components"
import { useNavigation } from '@react-navigation/native';
import { Formik } from "formik";
import * as yup from 'yup'
import { useFormState, useFormDispatch } from "../contexts/form-context";

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[7],
  flex: 1,
  justifyContent: 'space-between',
  marginTop: 50,
  paddingBottom: 90
}

const HEADER: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
}

const CENTER: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
}

const TEXTCENTER: TextStyle = {
  textAlign: 'center',
  alignItems: 'center'
}

const INPUT: TextStyle = {
  fontFamily: typography.primaryBold,
}

//username validation schema
const usernameValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Must create username")
    .min(4, "username must have at least 4 characters"),
});

export default function UserNameScreen() {
  const navigation = useNavigation();

  const form = React.useRef();
  const dispatch = useFormDispatch();
  const { values: formValues, errors: formErrors } = useFormState("user");
  const nameLength;

  React.useEffect(() => {

    const unsubscribe = navigation.addListener("blur", () => {
      if (form.current) {
        const { values, errors } = form.current;
        dispatch({
          type: "UPDATE_FORM",
          payload: {
            id: "user",
            data: { values, errors },
          }
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
    >
      {({ values, handleChange, errors, isValid, touched }) => (
        <Screen style={CONTAINER}>
          <View style={CENTER}>
            <Text style={TEXTCENTER} preset="header" text="What's your username?" />
          </View>

          <View style={CENTER}>
            <TextField
              inputStyle={INPUT}
              placeholder="@Username"
              keyboardType="default"
              value={values.username}
              onChangeText={handleChange("username")}
              autoCapitalize='none'
              autoCorrect={false}
            />

            {(errors.username || touched.username) &&
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.username}</Text>
            }
          </View>

          <View style={CENTER}>
            {/* <Text style={TEXTCENTER} preset="secondary">
              By continuing, you are confirming that you have read and understood the
              <TouchableOpacity>
                <Text style={{ textDecorationLine: 'underline' }} preset="secondary"> Privacy Policy</Text>
              </TouchableOpacity>
            </Text> */}

            {(values.username && values.username.length >= 4) ?
              <Button
                disabled={!isValid}
                style={{ width: '100%' }}
                text="Next"
                preset="primary"
                onPress={() => navigation.navigate('Email')}
              /> :
              null
            }



          </View>
        </Screen>
      )}
    </Formik>
  );
}


