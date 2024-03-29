import React from 'react';
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';

export type NewMessageButtonProps = {
    excludedUsers: any[];
    currentUser: any;
}

export const NewMessageButton = (props: NewMessageButtonProps) => {
    const { excludedUsers, currentUser } = props;
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('MessageContactsScreen', { excludedUsers: excludedUsers, currentUser: currentUser });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons
                    name="message-reply-text"
                    size={28}
                    color="white"
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
})