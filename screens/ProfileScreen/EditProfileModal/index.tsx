import * as React from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import { Header, Text, Button, AutoImage as Image, TextField } from '../../../components';

import { useAuth } from '../../../contexts/auth';

import styles from './styles';

interface EditProfileModalProps {
    editProfileModalVisible: boolean;
    setEditProfileModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProfileModal: React.FunctionComponent<EditProfileModalProps> = ({ editProfileModalVisible, setEditProfileModalVisible, }) => {
    const { authData: user, updateAuth } = useAuth();
    const [newUsername, setNewUsername] = React.useState('');
    const [newLocation, setNewLocation] = React.useState('');

    return (
        <>
            {/* {console.log('modal data: ', user)} */}

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
                    <Header
                        headerTx="Edit Profile"
                        rightIcon="close"
                        onRightPress={() => {
                            setEditProfileModalVisible(!editProfileModalVisible);
                        }}
                    />

                    <View style={styles.MODAL_CONTAINER}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text>Username</Text>
                            <TextField
                                style={styles.INPUTSTYLE_CONTAINER}
                                inputStyle={styles.INPUT}
                                placeholder={`${user?.username}`}
                                keyboardType="default"
                                value={newUsername}
                                onChangeText={(value) => setNewUsername(value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>


                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>Location</Text>
                            <TextField
                                style={styles.INPUTSTYLE_CONTAINER}
                                inputStyle={styles.INPUT}
                                placeholder={`${user?.zipCode}`}
                                keyboardType="numeric"
                                value={newLocation}
                                onChangeText={(value) => setNewLocation(value)}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>

                    </View>
                </Modal>
            )}
        </>
    );
};

export default EditProfileModal;
