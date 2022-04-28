import * as React from 'react';
import { View, Modal, TouchableOpacity, Platform } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { Feather } from '@expo/vector-icons';
import { v4 as uuidv4 } from 'uuid';


import { Header, AutoImage as Image, TextField } from '../../../components';
import { useToast } from '../../../components/Toast';

import { API, graphqlOperation, Auth, Storage } from 'aws-amplify';
import { useAuth } from '../../../contexts/auth';
import { authService } from '../../../services/auth-service';
import { updateUser } from '../../../src/graphql/mutations';

import styles from './styles';



interface EditProfileModalProps {
    editProfileModalVisible: boolean;
    setEditProfileModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProfileModal: React.FunctionComponent<EditProfileModalProps> = ({ editProfileModalVisible, setEditProfileModalVisible, }) => {
    const { authData: user, updateAuth } = useAuth();
    const toast = useToast();
    const [profilePic, setProfilePic] = React.useState('');
    const [newUsername, setNewUsername] = React.useState('');
    const [newLocation, setNewLocation] = React.useState('');
    console.log(profilePic)

    //useEffect to setUserImage
    React.useEffect(() => {
        setProfilePic(user.image)
    }, [user])

    //ask for user image permission
    React.useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } =
                    await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert("Sorry, we need camera roll permissions to make this work!");
                }
            }
        })();
    }, []);

    //allow user to pick an image from library
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setProfilePic(result.uri);
        }
    };


    //perfom mutation to update their image
    const uploadImage = async () => {

        //s3 bucket
        const response = await fetch(profilePic);
        const blob = await response.blob();

        const fileName = `${user?.username + uuidv4()}ProfileImage.jpeg`;
        const data = await Storage.put(fileName, blob, {
            contentType: 'image/jpeg',
        });
        return data;
    };

    // check if they have a non default user image
    const submitImage = async () => {
        if (profilePic.includes('defaultUser') === false) {
            let new_image = await uploadImage();
            const image = await Storage.get(new_image.key, {
                level: 'public',
            });
            const newImage = image.substring(
                0,
                image.indexOf('.jpeg') + '.jpeg'.length
            );


            try {
                //dynomo
                await API.graphql(
                    graphqlOperation(updateUser, {
                        input: {
                            id: user?.id,
                            avatarImageURL: newImage,
                        },
                    })
                );
                const currentUser = await Auth.currentAuthenticatedUser();
                await Auth.updateUserAttributes(currentUser, {
                    'custom:blob': newImage,
                });
                updateAuth();
                setEditProfileModalVisible(!editProfileModalVisible);
                setProfilePic('')
            } catch (error) {
                console.log(error);
            }
        }
    }


    //1. used to validate the length & availability of username
    const validateUsernameFormat = async () => {
        if (newUsername.length >= 4) {
            const available = await authService.usernameAvailable(newUsername);
            if (!available) {
                toast.show(`This username is being used by another user.`, {
                    color: 'red',
                });
            } else {
                updateUsername(user?.id);
            }
        } else {
            toast.show(`username must have at least 4 characters!`, {
                color: 'red',
            });
        }
    };

    // 2. perform mutation and show toast
    const updateUsername = async (userID: any) => {
        try {
            await API.graphql(
                graphqlOperation(updateUser, {
                    input: {
                        id: userID,
                        username: newUsername,
                    },
                })
            );
            const user = await Auth.currentAuthenticatedUser();
            await Auth.updateUserAttributes(user, {
                preferred_username: newUsername,
            });
            updateAuth();
            setEditProfileModalVisible(!editProfileModalVisible);
            setNewUsername('')
        } catch (error) {
            console.log(error);
        }
    };

    //1 validate zipcode
    const validateZipFormat = async () => {
        if (/^[0-9]{5,5}$/.test(newLocation)) {
            updateLocation();
        } else {
            toast.show(`You have entered an invalid zip code!`, {
                color: 'red',
            });
        }
    };


    //2. perform mutation and show toast
    const updateLocation = async () => {
        try {
            // changes in Dynomo DB
            await API.graphql(
                graphqlOperation(updateUser, {
                    input: {
                        id: user?.id,
                        zipCode: newLocation,
                    },
                })
            );
            // Changes attribute on Cognito
            await Auth.currentAuthenticatedUser().then(async (response) => {
                await Auth.updateUserAttributes(response, {
                    'custom:zipCode': newLocation,
                }).catch((error) => {
                    console.log('error: ', error);
                });
            });
            updateAuth();
            setEditProfileModalVisible(!editProfileModalVisible);
            setNewLocation('')
        } catch (error) {
            console.log('error:', error);
        }
    };

    return (
        <>
            {/* EDIT PROFILE MODAL CODE*/}
            {editProfileModalVisible && (
                <Modal
                    animationType="slide"
                    // transparent={true}
                    presentationStyle="pageSheet"
                    visible={editProfileModalVisible}
                    onRequestClose={() => {
                        setEditProfileModalVisible(!editProfileModalVisible);
                    }}
                >

                    <View style={styles.MODAL_CONTAINER}>
                        <Header
                            headerTx="Edit Profile"
                            leftIcon="close"
                            onLeftPress={() => {
                                setEditProfileModalVisible(!editProfileModalVisible);
                            }}
                            rightIcon="save"
                            onRightPress={() => {
                                // validateUsernameFormat()
                                // validateZipFormat()
                                submitImage()
                            }}
                        />
                        <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                            <TouchableOpacity style={{ width: 100, height: 100 }} onPress={() => { pickImage() }}>
                                <Image
                                    resizeMode='contain'
                                    source={{ uri: profilePic }}
                                    style={{ borderRadius: 100, alignSelf: 'center', opacity: 0.8, width: '100%', height: '100%' }}
                                />
                                <Feather name="camera" size={48} color="white" style={{ alignSelf: 'center', position: 'absolute', top: '22%' }} />
                            </TouchableOpacity>
                        </View>


                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TextField
                                style={styles.INPUTSTYLE_CONTAINER}
                                inputStyle={styles.INPUT}
                                placeholder={`${user?.username}`}
                                keyboardType="default"
                                value={newUsername}
                                onChangeText={(value) => setNewUsername(value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                label="Username"
                            />
                        </View>


                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextField
                                style={styles.INPUTSTYLE_CONTAINER}
                                inputStyle={styles.INPUT}
                                placeholder={`${user?.zipCode}`}
                                keyboardType="numeric"
                                value={newLocation}
                                onChangeText={(value) => setNewLocation(value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                label="Location"
                                maxLength={5}
                            />
                        </View>

                    </View>
                </Modal>
            )}
        </>
    );
};

export default EditProfileModal;
