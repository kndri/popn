import * as React from "react";
import {
    View,
    ViewStyle,
    TextStyle,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    Animated
} from "react-native";
import { color, spacing } from "../theme";
import { SwipeListView } from 'react-native-swipe-list-view';

import {
    Screen,
    Text,
    AutoImage as Image,
    Button,
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
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";


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

const rowTranslateAnimatedValues = {};

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



    //TODO:
    const removeUserFromChatRoom = async () => {
        try {
            // 1. Remove 'user' from the chat room
            // Update chat room to remove authenicated user from chat room


        } catch (error) {

        }
    }


    // const rowTranslateAnimatedValues = {};

    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        if (
            value < -Dimensions.get('window').width &&
            !this.animationIsRunning
        ) {
            this.animationIsRunning = true;
            Animated.timing(rowTranslateAnimatedValues[key], {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start(() => {
                const newData = [...listData];
                const prevIndex = listData.findIndex(item => item.key === key);
                // newData.splice(prevIndex, 1);
                // setListData(newData);
                console.log("this was deleted")
                // this.animationIsRunning = false;
            });
        }
    };




    const renderHiddenItem = () => (
        <View style={styles.rowBack}>
            <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
                <Text style={styles.backTextWhite}>Delete</Text>
            </View>
        </View>
    );





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
                        rightOpenValue={-Dimensions.get('window').width}
                        // onSwipeValueChange={onSwipeValueChange}
                        useNativeDriver={false}

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
