import * as React from 'react';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { View } from 'react-native';

import { Button, Screen, Text, TextField, Header } from '../../components';
import { useFormState, useFormDispatch } from '../../contexts/form-context';
import { useToast } from '../../components/Toast';

import styles from './styles';

//age validation schema
const ageValidationSchema = yup.object().shape({
	zipCode: yup
		.string()
		.required('')
		.matches(/^[0-9]+$/, 'Must be only digits')
		.min(5, 'Must be exactly 5 digits')
		.max(5, 'Must be exactly 5 digits'),
});

export default function ZipScreen() {
	const navigation = useNavigation();
	const toast = useToast();
	const form = React.useRef();
	const dispatch = useFormDispatch();
	const { values: formValues, errors: formErrors } = useFormState('user');

	React.useEffect(() => {
		const unsubscribe = navigation.addListener('blur', () => {
			if (form.current) {
				const { values, errors } = form.current;
				dispatch({
					type: 'UPDATE_FORM',
					payload: {
						id: 'user',
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
			validationSchema={ageValidationSchema}
			initialValues={formValues}
			initialErrors={formErrors}
			enableReinitialize
			validateOnMount={true}
		>
			{({ values, handleChange, errors, isValid, touched }) => (
				<Screen style={styles.CONTAINER}>
					<View style={styles.CENTER}>
						<Header leftIcon="back" onLeftPress={() => navigation.goBack()} />
						<Text
							style={styles.TEXTCENTER}
							preset="header"
							text="What is your zip code?"
						/>
					</View>

					<View style={styles.CENTER}>
						<TextField
							inputStyle={styles.INPUT}
							placeholder="Enter Zip Code"
							keyboardType="numeric"
							maxLength={5}
							value={values.zipCode}
							onChangeText={handleChange('zipCode')}
						/>
						{(errors.zipCode || touched.zipCode) && (
							<Text style={{ fontSize: 10, color: 'red' }}>
								{errors.zipCode}
							</Text>
						)}
					</View>

					<View
						style={{
							flexDirection: 'row',
							alignContent: 'flex-end',
							justifyContent: 'flex-end',
						}}
					>
						<Button
							disabled={!isValid}
							style={!isValid ? styles.DISABLED : null}
							text="Continue"
							preset="cta"
							onPress={() => {
								if (!values.age) {
									toast.show(`You must enter your zip code to continue.`, {
										color: 'red',
									});
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
