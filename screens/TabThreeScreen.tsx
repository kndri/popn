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
    Button
} from "../components";
import { useNavigation } from "@react-navigation/native";


// List of chat rooms
const CHATROOMS = [
    {
        id: "1",
        users: "https://placeimg.com/140/140/any",
        sender: 'daniel atkins',
        lastMessage: "This is the last message I sent.",
        createdAt: '11/12/2021'
    },
    {
        id: "2",
        users: "https://placeimg.com/140/140/any",
        sender: 'erin yeager',
        lastMessage: "I need to get this to work.",
        createdAt: '11/11/2021'
    },
    {
        id: "3",
        users: "https://placeimg.com/140/140/any",
        sender: 'Captian america',
        lastMessage: "This is the latest message of the day.",
        createdAt: '10/3/2021'
    },
    {
        id: "4",
        users: "https://placeimg.com/140/140/any",
        sender: 'weatherman',
        lastMessage: "This weather is so stupid, we're not making it to 2040.",
        createdAt: '05/15/2021'
    },
    {
        id: "5",
        users: "https://placeimg.com/140/140/any",
        sender: 'daniel atkins',
        lastMessage: "This is the last message I sent.",
        createdAt: '11/12/2021'
    },
    {
        id: "6",
        users: "https://placeimg.com/140/140/any",
        sender: 'erin yeager',
        lastMessage: "I need to get this to work.",
        createdAt: '11/11/2021'
    },
    {
        id: "7",
        users: "https://placeimg.com/140/140/any",
        sender: 'Captian america',
        lastMessage: "This is the latest message of the day.",
        createdAt: '10/3/2021'
    },
    {
        id: "8",
        users: "https://placeimg.com/140/140/any",
        sender: 'weatherman',
        lastMessage: "This weather is so stupid, we're not making it to 2040.",
        createdAt: '05/15/2021'
    },


]


// Styles
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    // paddingHorizontal: spacing[3],
    flex: 1,
    // marginTop: 44,
};
const CENTER: ViewStyle = {
    alignItems: "center",
    justifyContent: "center",

};
const CLAIM_HEADER: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 17,
    paddingHorizontal: spacing[4],

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

    // const onClick = () => {
    //     navigation.navigate('ChatRoom', {
    //         id: chatRoom.id,
    //         name: otherUser.name,
    //     })
    // }

    const chatRooms = ({ item }) => {
        return (
            // Flat List Item
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
                            // flex: 1,
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
        );
    };

    return (
        <Screen style={CONTAINER}>
            <View style={{ height: '100%' }}>
                <Text preset="header" text="Messages" />
                {/* seperator */}
                <View
                    style={{
                        height: 2,
                        width: "100%",
                        backgroundColor: "black",
                        marginTop: 15
                    }}
                />

                <FlatList
                    data={CHATROOMS}
                    renderItem={chatRooms}
                    keyExtractor={item => item.id}
                    scrollEnabled={true}
                />

            </View>



        </Screen>
    );
}
