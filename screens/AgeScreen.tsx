import * as React from 'react';
import { View, ViewStyle, TextStyle, TouchableOpacity, } from "react-native";
import { color, spacing, typography } from "../theme"
import {
	Button,
	Screen,
	Text,
	TextField,
} from "../components"
import { useNavigation } from '@react-navigation/native';
import { Formik } from "formik";
import * as yup from 'yup'
import { useFormState, useFormDispatch } from "../contexts/form-context";


// Styles
const CONTAINER: ViewStyle = {
	backgroundColor: color.transparent,
	paddingHorizontal: spacing[5],
	flex: 1,
	justifyContent: 'space-between',
	marginTop: 50,
	paddingBottom: 90
}

const CENTER: ViewStyle = {
	alignItems: 'center',
	justifyContent: 'center',
}

const HEADER: TextStyle = {
	textAlign: 'center',
	marginBottom: 10
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

//age validation schema
const ageValidationSchema = yup.object().shape({
	age: yup
		.number()
		.required("Please supply your age")
		.min(13, "You must be at least 13 years")
})

export default function AgeScreen() {
	const navigation = useNavigation();

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
			validateOnBlur={true}
			validationSchema={ageValidationSchema}
			initialValues={formValues}
			initialErrors={formErrors}
			enableReinitialize
		>
			{({ values, handleChange, errors, isValid, touched }) => (
				<Screen style={CONTAINER}>
					<View style={CENTER}>
						<Text style={HEADER} preset="header" text="How old are you?" />
						<Text preset="secondary" text="You must be 13 years old or older" />
					</View>

					<View style={CENTER}>
						<TextField
							inputStyle={INPUT}
							placeholder="Enter Age"
							keyboardType="numeric"
							maxLength={2}
							value={values.age}
							onChangeText={handleChange("age")}
						/>
						{(errors.age || touched.age) &&
							<Text style={{ fontSize: 10, color: 'red' }}>{errors.age}</Text>
						}
					</View>

          <View style={{ flexDirection: 'row', alignContent: 'flex-end', justifyContent: 'flex-end' }}>
							<Button
								disabled={!isValid}
								style={!isValid ? DISABLED : null}
								text="Continue"
								preset="cta"
								onPress={() => navigation.navigate('Username')} />
					</View>
				</Screen>
			)}
		</Formik>
	);
}


