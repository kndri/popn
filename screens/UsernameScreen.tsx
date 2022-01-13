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
import { authService } from "../services/auth-service";
import { useToast } from "../components/Toast";

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

const DISABLED: ViewStyle = {
  backgroundColor: 'rgba(52, 52, 52, 0.25)',
};

//username validation schema
const usernameValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Must create username")
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
            <Text style={TEXTCENTER} preset="header" text="Choose a username" />
            <Text preset="secondary" text="This will be your POPN handle" />
          </View>

          <View style={CENTER}>
            <TextField
              inputStyle={INPUT}
              placeholder="username"
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


          <View style={{ flexDirection: 'row', alignContent: 'flex-end', justifyContent: 'flex-end' }}>
            <Button
              disabled={!isValid}
              style={!isValid ? DISABLED : null}
              text="Continue"
              preset="cta"
              onPress={async () => {
                const available = await authService.usernameAvailable(values.username);
                if (!available) {
                  toast.show(`An account exists with this username already.`, {color: 'red'});
                } else {
                  navigation.navigate('Email');
                }
              }}
            />
          </View>
        </Screen>
      )
      }
    </Formik >
  );
}


