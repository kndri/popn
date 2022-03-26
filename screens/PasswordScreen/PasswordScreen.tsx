import * as React from 'react';
import {
	View,
	ViewStyle,
	TextStyle,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';

import {
	Button,
	Screen,
	Text,
	TextField,
	AutoImage as Image,
	Header,
} from '../../components';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useFormState, useFormDispatch } from '../../contexts/form-context';
import { useAuth } from '../../contexts/auth';
import { useToast } from '../../components/Toast';

import styles from './Styles';

const eye = require('../../assets/images/reveal.png');

//password validation schema
const passwordValidationSchema = yup.object().shape({
	password: yup
		.string()
		.matches(/\w*[a-z]\w*/, 'Password must have a small letter')
		.matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
		.matches(/\d/, 'Password must have a number')
		.min(6, ({ min }) => `Password must be at least ${min} characters`)
		.required(''),
});

export default function PasswordScreen() {
	const navigation = useNavigation();
	const toast = useToast();

	const form = React.useRef();
	const dispatch = useFormDispatch();
	const { values: formValues, errors: formErrors } = useFormState('user');
	const { signUp } = useAuth();
	const [reveal, setReveal] = React.useState<boolean>(true);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

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
			validationSchema={passwordValidationSchema}
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
							text="Create a password"
						/>
					</View>

					<View style={styles.CENTER}>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								width: '100%',
								justifyContent: 'center',
							}}
						>
							<TextField
								inputStyle={styles.INPUT}
								style={{ width: '70%' }}
								placeholder="Password"
								secureTextEntry={reveal}
								onChangeText={handleChange('password')}
							/>
							<TouchableOpacity
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									margin: 'auto',
								}}
								onPress={() => setReveal((prev) => !prev)}
							>
								<Image
									source={eye}
									style={[
										{
											marginLeft: 10,
											justifyContent: 'center',
											marginTop: 15,
										},
										reveal == true ? { opacity: 0.3 } : null,
									]}
								/>
							</TouchableOpacity>
						</View>

						{(errors.password || touched.password) && (
							<Text style={{ fontSize: 10, color: 'red' }}>
								{errors.password}
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
						{isLoading ? (
							<ActivityIndicator size="large" color="black" />
						) : (
							<Button
								disabled={!isValid}
								style={!isValid ? styles.DISABLED : null}
								text="Continue"
								preset="cta"
								onPress={() => {
									if (values.email === '' || values.password === '') {
										toast.show(`You must provide an email and password`, {
											color: 'red',
										});
									} else {
										signUp(
											values.email,
											values.password,
											values.age,
											values.username,
											values.image
										);
										// .then(() => {
										// 	dispatch({
										// 		type: 'RESET_FORM',
										// 		payload: {
										// 			id: 'user',
										// 			data: {},
										// 		},
										// 	});
										// });
										setIsLoading(true);
									}
								}}
							/>
						)}
					</View>
				</Screen>
			)}
		</Formik>
	);
}
