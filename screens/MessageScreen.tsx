import * as React from "react";
import {
    View,
    ViewStyle,
    TextStyle,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { color, spacing } from "../theme";
import { SwipeListView } from 'react-native-swipe-list-view';

import {
    Screen,
    Text,
    NewMessageButton,
    Header,
} from "../components";
import MessageChatListItem from '../components/message-chat-list-item';
import { useIsFocused, useNavigation } from "@react-navigation/native";
import {
    API,
    graphqlOperation,
    Auth,
} from 'aws-amplify';
import { getUser, getChatRoom } from '../src/graphql/queries';
import { deleteChatRoomUser } from '../src/graphql/mutations';


// Styles
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    flex: 1,
};

const TEXTCENTER: TextStyle = {
    textAlign: "center",
    alignItems: "center",
    textAlignVertical: "center",
};

export default function MessageScreen() {
    const navigation = useNavigation();
    const [chatRooms, setChatRooms] = React.useState<any>([]);
    const [excludedUsers, setExcludedUsers] = React.useState<any[]>([]);
    const [userData, setUserData] = React.useState({});
    const isFocused = useIsFocused();
    const [userInfo, setUserInfo] = React.useState<any>([]);

    React.useEffect(() => {
        fetchChatRooms();
    }, [isFocused]);

    const fetchChatRooms = async () => {
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            setUserInfo(userInfo)
            const userData = await API.graphql(
                graphqlOperation(
                    getUser, {
                    id: userInfo.attributes.sub,
                }
                )
            )
            setUserData(userData);
            let chatRoomsArr = userData.data.getUser.chatRoomUser.items;
            {/*TODO: make is so users of deleted messages go back to contacts screen;
                 currently only happens when all messages are deleted
            */}
            if (chatRoomsArr.length > 0) {
                chatRoomsArr.map((room) => {
                    room.chatRoom.chatRoomUsers.items.map((item) => {
                        if (item.user.username) {
                            setExcludedUsers(excludedUsers => [...excludedUsers, item.user.username])
                        }
                    })
                })

                chatRoomsArr.sort((a, b) => {
                    return b.
                        chatRoom.lastMessage.updatedAt.localeCompare(a.chatRoom.lastMessage.updatedAt)
                });

                setChatRooms(chatRoomsArr)
            } else {
                setExcludedUsers([]);
                setChatRooms(chatRoomsArr)
            }
        } catch (e) {
            console.log(e);
        }
    }

    const uniqueExcludedUsers = [...new Set(excludedUsers)]

    Array(chatRooms.length)
        .fill('')
        .map((_, i) => ({ key: `${i}` }))

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        try {
            closeRow(rowMap, rowKey);
            removeUserFromChatRoom(rowKey);
        }
        catch (error) {
            console.log(error);
        }

    };


    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;

    };

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.chatRoomID)}
            >
                <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    const removeUserFromChatRoom = async (chatRoomID: any) => {
        try {
            // 1. Get Chat Room Data
            const chatRoomData = await API.graphql(
                graphqlOperation(
                    getChatRoom, {
                    id: chatRoomID
                }
                )
            )

            let chatRoomUsers = chatRoomData.data.getChatRoom.chatRoomUsers.items;
            let userID;
            chatRoomUsers.map((item) => {
                if (userInfo.attributes.sub == item.userID) {
                    userID = item.id
                }
            })

            // 2. Remove 'user' from the chat room
            await API.graphql(
                graphqlOperation(
                    deleteChatRoomUser, {
                    input: {
                        id: userID
                    }
                }
                )
            )

        } catch (error) {
            console.log(error);
        }
        fetchChatRooms();
    }

    return (
        <Screen style={CONTAINER}>
            {/* {console.log('CHATROOMS AVAILABLE: ', chatRooms)} */}
            <View style={{ height: '100%' }}>
                <Header
                    style={{ paddingHorizontal: spacing[3] }}
                    headerTx="Messages"
                    leftIcon="profile"
                    onLeftPress={() => navigation.navigate("UserProfile")}
                />
                {chatRooms.length === 0 ? (
                    <View style={{ height: '100%', justifyContent: 'center' }}>
                        <Text
                            style={TEXTCENTER}
                            preset="bold"
                            text="No Messages Found."
                        />
                    </View>

                ) : (
                    <SwipeListView
                        disableRightSwipe
                        data={chatRooms}
                        renderItem={({ item }) => <MessageChatListItem chatRoom={item} />}
                        renderHiddenItem={renderHiddenItem}
                        onSwipeValueChange={onSwipeValueChange}
                        useNativeDriver={false}
                        keyExtractor={(item) => item.id}
                        scrollEnabled={true}
                        rightOpenValue={-75}
                        previewRowKey={'0'}
                        previewOpenValue={-20}
                        previewOpenDelay={3000}
                    />

                )
                }
            </View>
            <NewMessageButton excludedUsers={uniqueExcludedUsers} currentUser={userData} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});
