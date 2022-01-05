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


    const renderChatRooms = ({ item }) => {
        return (
            <>
                {/* flat list item */}
                <TouchableOpacity style={CARD} onPress={() => { navigation.navigate('MessageRoom', { id: item.id, name: item.sender }); }}>
                    <View style={LEFT_SIDE}>
                        {console.log('data:', item)}
                        <Image
                            source={{ uri: `${item.chatRoom.chatRoomUsers.items[1].user.avatarImageURL}` }}
                            style={{
                                resizeMode: "contain",
                                height: 40,
                                width: 40,
                                marginRight: 5,
                                borderRadius: 360
                            }}
                        />
                    </View>
                    <View style={CARD_DATA}>
                        <Text preset="bold">{item.chatRoom.chatRoomUsers.items[1].user.username}</Text>
                        <Text style={{ marginTop: 3 }} preset="secondary">
                            {item.lastMessage}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ marginTop: 3 }} preset="secondary">
                            {item.createdAt}
                        </Text>
                    </View>

                </TouchableOpacity>

            </>
        );
    };

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
            <NewMessageButton excludedUsers={uniqueExcludedUsers} />
        </Screen>
    );
}
