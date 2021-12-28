import * as React from "react";
import {
    View,
    ViewStyle,
    TextStyle,
    Platform
} from "react-native";
import { color, spacing, typography } from "../theme";
import {
    Screen,
    Text,
    AutoImage as Image,
    Header,
} from "../components";
import { useNavigation } from "@react-navigation/native";
import { GiftedChat, Bubble, Send, Actions, Composer } from 'react-native-gifted-chat';
// import * as ImagePicker from 'expo-image-picker';
import { ChatMessage } from "../types";
import { FontAwesome } from "@expo/vector-icons";


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

    // marginTop: 15,
    // backgroundColor: 'red',
    paddingHorizontal: spacing[3],
    borderBottomWidth: 2,
    borderColor: 'black'
};
const TEXTCENTER: TextStyle = {
    textAlign: "center",
    alignItems: "center",
};


export default function MessageRoomScreen() {
    const navigation = useNavigation();
    const [messages, setMessages] = React.useState<ChatMessage[]>([]);


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

    //follow up task, being able to send pictures 
    // const pickImage = async () => {
    //     // No permissions request is necessary for launching the image library
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });

    //     console.log(result);

    //     if (!result.cancelled) {
    //         onSend([{ image: result.uri }])
    //         return result.uri
    //     }
    // };

    const onSend = React.useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    const renderBubble = (props: any) => {
        return <Bubble {...props}
            wrapperStyle={{
                right: { backgroundColor: 'black' },
            }}
        />
    }

    //used to render the plus icon in order to send images: follow up 
    // const renderActions = (props: any) => (
    //     <Actions
    //         {...props}
    //         containerStyle={{
    //             width: 44,
    //             height: 44,
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //             marginLeft: 4,
    //             marginRight: 4,
    //             marginBottom: 0,
    //         }}
    //         icon={() => (
    //             <FontAwesome name="plus" size={18} color="black" />
    //         )}
    //         options={{
    //             'Choose From Library': () => {
    //                 pickImage()
    //             },
    //             Cancel: () => {
    //                 console.log('Cancel');
    //             },
    //         }}
    //         optionTintColor="#222B45"
    //     />
    // );

    const renderComposer = (props: any) => (
        <Composer
            {...props}
            textInputStyle={{
                color: '#222B45',
                backgroundColor: '#EDF1F7',
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#E4E9F2',
                paddingTop: 8.5,
                paddingHorizontal: 12,
                marginLeft: 0,
            }}
        />
    );

    const renderSend = (props: any) => (
        <Send
            {...props}
            disabled={!props.text}
            containerStyle={{
                width: 60,
                height: 44,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            textStyle={[props.text ? { color: '#000000', marginTop: 12 } : { color: '#c2c2c2', marginTop: 12 }]}
        >
        </Send>
    );


    return (
        <View style={CONTAINER}>
            <View style={CENTER}>
                <Header
                    headerTx="demoScreen.howTo"
                    leftIcon="back"
                    onLeftPress={() => navigation.goBack()}
                    style={{ top: 12 }}
                />
                <Text preset="header" text="Message Room" style={{ left: 65, top: 12 }} />
            </View>

            <GiftedChat
                isTyping={true}
                alignTop={false}
                alwaysShowSend={true}
                renderBubble={renderBubble}
                renderComposer={renderComposer}
                renderSend={renderSend}
                // renderActions={renderActions}
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                parsePatterns={(linkStyle) => [
                    {
                        pattern: /#(\w+)/,
                        style: linkStyle,
                        onPress: (tag) => console.log(`Pressed on hashtag: ${tag}`),
                    },
                ]}
            />
        </View>
    );
}
