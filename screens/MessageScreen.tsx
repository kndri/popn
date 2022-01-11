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

    /**
  * This is a function.
  * @param {string} text - A string param
  * @param {string} color - A string param
  * @param {string} x - A string param
  * @param {progress} Animated.AnimatedInterpolation - A progress param
  * @param {object} item - A note or reminder object param
  * @return {SwipeableActions} - Adds buttons when a swipe action occurs
  *
  * @example
  *
  *     Button: Delete , Button: Remind
  */
    const renderRightAction = (
        text: string,
        color: string,
        x: number,
        progress: any,
        item: any
    ) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });

        // handles the onPress
        const pressHandler = () => {
            if (text == "Delete") {
                console.log('message deleted')
            }

        };
        return (
            <Animated.View style={{ flex: 1, transform: [{ translateX: 0 }] }}>
                <RectButton
                    style={[{ backgroundColor: color }]}
                    onPress={pressHandler}
                >
                    <Text>{text}</Text>
                </RectButton>
            </Animated.View>
        );
    };

    /**
       * This is a function.
       *
       * @param {progress} Animated.AnimatedInterpolation - A progress param
       * @param {object} item - A note or reminder object param
       * @return {JSX.element} - Adds buttons when a swipe action occurs
       *
       * @example
       *
       *     Button: Delete , Button: Remind
       */
    const renderRightActions = (progress: any, item: any) => (
        <View
            style={{
                width: 192,
                flexDirection: "row",
            }}
        >
            {renderRightAction("Delete", "red", 192, progress, item)}

        </View>
    );

    //TODO:
    const removeUserFromChatRoom = async () => {
        try {
            // 1. Remove 'user' from the chat room
            // Update chat room to remove authenicated user from chat room

            
        } catch (error) {
            
        }
    }

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const renderItem = data => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={'#AAA'}
        >
            <View>
                <Text>I am {data.item.text} in a SwipeListView</Text>
            </View>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <Text>Left</Text>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => closeRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Text style={styles.backTextWhite}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    const rowTranslateAnimatedValues = {};


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
            }).start(() => {
                const newData = [...listData];
                const prevIndex = listData.findIndex(item => item.key === key);
                newData.splice(prevIndex, 1);
                setListData(newData);
                this.animationIsRunning = false;
            });
        }
    };

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
                    data={chatRooms}
                    renderItem={({ item }) => <MessageChatListItem chatRoom={item} />}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-150}
                    onRowDidOpen={onRowDidOpen}
                />
                    // <FlatList
                    //     data={chatRooms}
                    //     renderItem={({ item }) =>
                    //         <Swipeable
                    //             friction={2}
                    //             rightThreshold={40}
                    //             renderRightActions={(progress) =>
                    //                 renderRightActions(progress, item)
                    //             }
                    //         >
                    //             <MessageChatListItem chatRoom={item} />
                    //         </Swipeable>
                    //     }
                    //     keyExtractor={item => item.id}
                    //     scrollEnabled={true}
                    // />
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
        height: 80,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
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
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
});
