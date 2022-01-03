import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from "react-native";
import { MessageContactUser } from "../../types";
import { AutoImage as Image } from '../';
import { useNavigation } from '@react-navigation/native';

import {
    API,
    graphqlOperation,
    Auth,
} from "aws-amplify";
import {
    createChatRoom,
    createChatRoomUser
} from '../../src/graphql/mutations';

export type MessageContactListItemProps = {
    user: MessageContactUser;
}

const MessageContactListItem = (props: MessageContactListItemProps) => {
    const { user } = props;

    const navigation = useNavigation();

    const onClick = async () => {
        try {

            //  1. Create a new Chat Room
            const newChatRoomData = await API.graphql(
                graphqlOperation(
                    createChatRoom, {
                    input: {
                        lastMessageID: "zz753fca-e8c3-473b-8e85-b14196e84e16"
                    }
                }
                )
            )

            if (!newChatRoomData.data) {
                console.log(" Failed to create a chat room");
                return;
            }

            const newChatRoom = newChatRoomData.data.createChatRoom;

            // 2. Add `user` to the Chat Room
            await API.graphql(
                graphqlOperation(
                    createChatRoomUser, {
                    input: {
                        userID: user.id,
                        chatRoomID: newChatRoom.id,
                    }
                }
                )
            )

            //  3. Add authenticated user to the Chat Room
            const userInfo = await Auth.currentAuthenticatedUser();
            await API.graphql(
                graphqlOperation(
                    createChatRoomUser, {
                    input: {
                        userID: userInfo.attributes.sub,
                        chatRoomID: newChatRoom.id,
                    }
                }
                )
            )

            navigation.navigate('MessageRoom', {
                id: newChatRoom.id,
                name: "Hardcoded name",
            })

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri: `${user.avatarImageURL}` }} style={styles.avatar} />

                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.username}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
    },
    lefContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 15,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    status: {
        fontSize: 16,
        color: 'grey',
    },
});


export default MessageContactListItem;