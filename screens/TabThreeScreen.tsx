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
    Button, NewMessageButton
} from "../components";
import { useNavigation } from "@react-navigation/native";
import {
    API,
    graphqlOperation,
    Auth,
} from 'aws-amplify';
import { getUser } from '../src/graphql/queries';

const profile_icon = require("../assets/images/profile_icon.png");

// Styles
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    flex: 1,
};
const CENTER: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",

};
const HEADER: ViewStyle = {
    flexDirection: "row",
    paddingHorizontal: spacing[4],
    alignItems: "center",
};
const CLAIM_SEARCH: ViewStyle = {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: spacing[4],
};
const COLLECTION_CONTAINER: ViewStyle = {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
};
const TEXTCENTER: TextStyle = {
    textAlign: "center",
    alignItems: "center",
    textAlignVertical: "center",
};
const INPUT: TextStyle = {
    fontFamily: typography.primaryBold,
};
const INPUTSTYLE_CONTAINER: ViewStyle = {
    width: "100%",
    height: 55,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
};

const SHADOW: ViewStyle = {
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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




export default function TabThreeScreen() {
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
                let excludedUsersArr: any[];

                chatRoomsArr.map((room) => {
                    room.chatRoom.chatRoomUsers.items.map((item) => {
                        // excludedUsersArr => [...excludedUsersArr, item.user.username])
                        // excludedUsersArr.push(item.user.username);
                        setExcludedUsers(excludedUsers => [...excludedUsers, item.user.username])

                    })
                })

                // excludedUsersArr = [...new Set(excludedUsersArr)];
                // console.log('excludedUsersArr: ', excludedUsersArr)
                // excludedUsersArr => [...excludedUsersArr, item.user.username])
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
                        <Image
                            source={{ uri: `${item.users}` }}
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
                        <Text preset="bold">{item.sender}</Text>
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
                <View style={HEADER}>
                    <Button
                        style={{ backgroundColor: "transparent" }}
                        onPress={() => navigation.navigate("UserProfile")}
                    >
                        <Image source={profile_icon} />
                    </Button>
                    <Text preset="header" text="Messages" style={{ left: 80 }} />
                </View>
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
                        renderItem={renderChatRooms}
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
