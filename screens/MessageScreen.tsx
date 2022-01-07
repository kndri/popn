import * as React from "react";
import {
    View,
    ViewStyle,
    TextStyle,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { color, spacing, typography } from "../theme";
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
import Animated from "react-native-reanimated";


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

//flatlist styles
const CARD: ViewStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    justifyContent: 'flex-end',
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#7A7A7A',

};

const LEFT_SIDE: ViewStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
};

const CARD_DATA: ViewStyle = {
    display: "flex",
    flexDirection: "column",
    flex: 1,

};

export default function MessageScreen() {
    const navigation = useNavigation();
    const [chatRooms, setChatRooms] = React.useState([]);
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
                    <FlatList
                        data={chatRooms}
                        renderItem={({ item }) =>
                            <Swipeable
                                friction={2}
                                rightThreshold={40}
                                renderRightActions={(progress) =>
                                    renderRightActions(progress, item)
                                }
                            >
                                <MessageChatListItem chatRoom={item} />
                            </Swipeable>
                        }
                        keyExtractor={item => item.id}
                        scrollEnabled={true}
                    />
                )
                }
            </View>
            <NewMessageButton excludedUsers={uniqueExcludedUsers} currentUser={userData} />
        </Screen>
    );
}
