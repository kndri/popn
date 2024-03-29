import * as React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button, Screen, Text, TextField, Header } from '../../components';
import { useFormState, useFormDispatch } from '../../contexts/form-context';
import { useToast } from '../../components/Toast';

import styles from './styles';

//age validation schema
const ageValidationSchema = yup.object().shape({
	age: yup.number().required('').min(13, 'You must be at least 13 years'),
});

export default function AgeScreen() {
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
							text="How old are you?"
						/>
					</View>

					<View style={styles.CENTER}>
						<TextField
							inputStyle={styles.INPUT}
							placeholder="Enter Age"
							keyboardType="numeric"
							maxLength={2}
							value={values.age}
							onChangeText={handleChange('age')}
						/>
						{(errors.age || touched.age) && (
							<Text style={{ fontSize: 10, color: 'red' }}>{errors.age}</Text>
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
									toast.show(`You must enter your age to continue.`, {
										color: 'red',
									});
								} else {
									navigation.navigate('ZipScreen');
								}
							}}
						/>
					</View>
				</Screen>
			)}
		</Formik>
	);
}
