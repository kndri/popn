import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import { View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Screen, Text, Header, Button } from '../../components';

import { useToast } from '../../components/Toast';
import { useAuth } from '../../contexts/auth';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import { authService } from '../../services/auth-service';
import { getUser } from '../../src/graphql/queries';
import { updateUser } from '../../src/graphql/mutations';

import styles from './styles';

export default function ChangeProfileImageScreen() {
	// Please use user from useAuth() to access user data
	const { authData: user } = useAuth();
	const toast = useToast();
	const navigation = useNavigation();
	const [image, setImage] = React.useState('');
	const goBack = () => navigation.goBack();

	//ask for user image permission
	React.useEffect(() => {
		(async () => {
			if (Platform.OS !== 'web') {
				const { status } =
					await ImagePicker.requestMediaLibraryPermissionsAsync();
				if (status !== 'granted') {
					alert('Sorry, we need camera roll permissions to make this work!');
				}
			}
		})();
	}, []);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	return (
		<View testID="ChangeProfileImageScreen" style={styles.FULL}>
			<Screen style={styles.CONTAINER}>
				<Header leftIcon="back" onLeftPress={goBack} />
				<View style={{ flexDirection: 'column', backgroundColor: 'white' }}>
					<Text
						style={styles.HEADER_TITLE}
						preset="header"
						text="Change Profile Image"
					/>

					{/* <Image></Image> */}

					<Button
						text="Choose from Library"
						preset="cta"
						style={{ width: '75%', marginTop: 50, alignSelf: 'center' }}
						// onPress={() => pickImage(handleChange("image"))}
					/>

					<View
						style={{
							flexDirection: 'column',
							alignContent: 'center',
							justifyContent: 'center',
							marginTop: 150,
						}}
					>
						<Button
							text="Confirm Changes"
							preset="primary"
							onPress={() => {
								// validateUsernameFormat();
							}}
						/>
					</View>
				</View>
			</Screen>
		</View>
	);
}
