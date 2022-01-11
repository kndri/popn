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
import { useIsFocused, useNavigation } from "@react-navigation/native";
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
    const [chatRooms, setChatRooms] = React.useState([]);
    const [excludedUsers, setExcludedUsers] = React.useState<any[]>([]);
    const [userData, setUserData] = React.useState({});
    const isFocused = useIsFocused();

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
                // console.log('chatRooms: ', chatRoomsArr);
                chatRoomsArr.map((room) => {
                    room.chatRoom.chatRoomUsers.items.map((item) => {
                        if (item.user.username) {
                            setExcludedUsers(excludedUsers => [...excludedUsers, item.user.username])
                        }
                    })
                })
                setChatRooms(userData.data.getUser.chatRoomUser.items)
            } catch (e) {
                console.log(e);
            }
        }
        fetchChatRooms();
    }, [isFocused]);


    const uniqueExcludedUsers = [...new Set(excludedUsers)]

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
                        renderItem={({ item }) => <MessageChatListItem chatRoom={item} />}
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
