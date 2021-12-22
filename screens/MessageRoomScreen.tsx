import * as React from "react";
import {
    View,
    ViewStyle,
    TextStyle,
} from "react-native";
import { color, spacing, typography } from "../theme";
import {
    Screen,
    Text,
    AutoImage as Image,
    Header
} from "../components";
import { useNavigation } from "@react-navigation/native";
import { GiftedChat } from 'react-native-gifted-chat'
import { IMessage } from "../types";



// Styles
const CONTAINER: ViewStyle = {
    backgroundColor: 'white',
    // paddingHorizontal: spacing[3],
    flex: 1,
};

const MESSAGE_VIEW: ViewStyle = {
    backgroundColor: 'red',
    // paddingHorizontal: spacing[3],
    flex: 1,
};
const CENTER: ViewStyle = {
    flexDirection: 'row',
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 45,
    // backgroundColor: 'red',
    paddingHorizontal: spacing[3],
};
const TEXTCENTER: TextStyle = {
    textAlign: "center",
    alignItems: "center",
};


export default function MessageRoomScreen() {
    const navigation = useNavigation();
    const [messages, setMessages] = React.useState<IMessage[]>([]);

    React.useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
                image: 'https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png/revision/latest?cb=20210223094656',
            },
            {
                _id: 2,
                text: 'This is the second message',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
                // image: 'https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png/revision/latest?cb=20210223094656',
            },
            {
                _id: 3,
                text: 'This is the third message',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
                // image: 'https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png/revision/latest?cb=20210223094656',
            },
        ])
    }, [])

    const onSend = React.useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])


    return (
        <View style={CONTAINER}>
            <View style={CENTER}>
                <Header
                    headerTx="demoScreen.howTo"
                    leftIcon="back"
                    onLeftPress={() => navigation.goBack()}
                />
                <Text preset="header" text="Message Room" style={{ left: 65 }} />
            </View>

            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
    );
}
