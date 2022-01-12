import * as React from "react";
import {
    View,
    ViewStyle,
    TextStyle,
    StyleSheet,
    Dimensions,
    Animated,
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
import { useNavigation } from "@react-navigation/native";
import {
    API,
    graphqlOperation,
    Auth,
} from 'aws-amplify';
import { getUser } from '../src/graphql/queries';

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

    React.useEffect(() => {
        const fetchChatRooms = async () => {
            try {
                const userInfo = await Auth.currentAuthenticatedUser();

                const userData = await API.graphql(
                    graphqlOperation(
                        getUser, {
                        id: userInfo.attributes.sub,
                    }
                    )
                )
                setUserData(userData);
                let chatRoomsArr = userData.data.getUser.chatRoomUser.items;

                chatRoomsArr.map((room) => {
                    room.chatRoom.chatRoomUsers.items.map((item) => {
                        setExcludedUsers(excludedUsers => [...excludedUsers, item.user.username])

                    })
                })
                setChatRooms(userData.data.getUser.chatRoomUser.items)
            } catch (e) {
                console.log(e);
            }
        }
        fetchChatRooms();
    }, []);

    const uniqueExcludedUsers = [...new Set(excludedUsers)]
    // swipe all the way UI
    // const rowTranslateAnimatedValues: any = {};

    // Array(chatRooms.length)
    //     .fill('')
    //     .forEach((_, i) => {
    //         rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
    //     });

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
            console.log('this message has been closed')
            console.log('deleted chatroom:', rowKey)
            // removeUserFromChatRoom(rowKey);
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
            {console.log("data:", data.item.chatRoom.id)}
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.chatRoom.id)}
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

            let userArr: any[] = [];
            chatRoomUsers.map((item) => (
                userArr.push(item.id)
            ))

            // 2. Remove 'user' from the chat room
            userArr.map(async (id) => {
                if (userInfo.attributes.sub == id) {
                    await API.graphql(
                        graphqlOperation(
                            deleteChatRoomUser, {
                            input: {
                                id: id
                            }
                        }
                        )
                    )
                }

            })
        } catch (error) {
            console.log(error);
        }
    }

    // swipe all the way UI
    // const animationIsRunning = React.useRef(false)
    // const onSwipeValueChange = swipeData => {
    //     const { key, value } = swipeData;
    //     if (
    //         value < -Dimensions.get('window').width &&
    //         !animationIsRunning.current
    //     ) {
    //         animationIsRunning.current = true
    //         Animated.timing(rowTranslateAnimatedValues[key], {
    //             toValue: 0,
    //             duration: 200,
    //             useNativeDriver: false,
    //         }).start(() => {
    //             console.log("swiped")
    //             // removeUserFromChatRoom(key);
    //             animationIsRunning.current = false;
    //         });
    //     }
    // };



    // swipe all the way UI
    // const renderHiddenItem = () => (
    //     <View style={styles.rowBack}>
    //         <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
    //             <Text style={styles.backTextWhite}>Delete</Text>
    //         </View>
    //     </View>
    // );





    return (
        <Screen style={CONTAINER}>
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
