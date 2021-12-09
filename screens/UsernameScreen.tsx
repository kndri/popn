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
            data: { values, errors }
          }
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
          </View>

          <View style={CENTER}>
            <Button
              style={{ width: '100%' }}
              text="Next"
              preset="primary"
              onPress={async () => {
                const available = await authService.usernameAvailable(values.username);
                console.log('available', available)
                if (!available) {
                  toast.show(`An account exists with this email already.`);
                } else {
                  navigation.navigate('Email');
                }
              }}
            />
          </View>

        </Screen>
      )}
    </Formik>
  );
}


