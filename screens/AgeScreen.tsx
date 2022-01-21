import * as React from 'react';
import { View, ViewStyle, TextStyle, TouchableOpacity, } from "react-native";
import { color, spacing, typography } from "../theme"
import {
	Button,
	Screen,
	Text,
	TextField,
	Header
} from "../components"
import { useNavigation } from '@react-navigation/native';
import { Formik } from "formik";
import * as yup from 'yup'
import { useFormState, useFormDispatch } from "../contexts/form-context";
import { useToast } from "../components/Toast";

// Styles
const CONTAINER: ViewStyle = {
	backgroundColor: color.transparent,
	paddingHorizontal: spacing[5],
	flex: 1,
	justifyContent: 'space-between',
	paddingBottom: 90
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

//age validation schema
const ageValidationSchema = yup.object().shape({
	age: yup
		.number()
		.required("Please supply your age")
		.min(13, "You must be at least 13 years")
})

export default function AgeScreen() {
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
			validateOnBlur={true}
			validationSchema={ageValidationSchema}
			initialValues={formValues}
			initialErrors={formErrors}
			// isInitialValid={false}
			enableReinitialize
			validateOnMount={true}
		>
			{({ values, handleChange, errors, isValid, touched }) => (
				<Screen style={CONTAINER}>
					<View style={CENTER}>
						<Header
							leftIcon="back"
							onLeftPress={() => navigation.goBack()}
						/>
						<Text style={TEXTCENTER} preset="header" text="How old are you?" />

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
							onPress={() => {
								if (!values.age) {
									toast.show(`You must enter your age to continue.`, { color: 'red' });
								} else {
									navigation.navigate('ProfilePicture');
								}
							}}
						/>
					</View>
				</Screen>
			)}
		</Formik>
	);
}


