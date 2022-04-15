import React from 'react'
import { TouchableOpacity, ViewStyle, View, Pressable } from 'react-native'
import { Text } from "../text/text";
import { AutoImage as Image } from '../auto-image/auto-image';
import { useNavigation } from "@react-navigation/native";
import { Auth, } from 'aws-amplify';
import moment from "moment";

const CARD: ViewStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 16,
    justifyContent: 'flex-end',
    borderBottomWidth: 0.5,
    borderBottomColor: '#7A7A7A',
    backgroundColor: 'white',
    height: 80

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
export type MessageChatListItemProps = {
    chatRoom: any
}

export default function MessageChatListItem(props: MessageChatListItemProps) {
    const { chatRoom } = props;
    const [otherUser, setOtherUser] = React.useState<any>({});
    const [user, setUser] = React.useState<any>({});
    const navigation = useNavigation();
    const [otherProfilePic, setOtherProfilePic] = React.useState("");

    React.useEffect(() => {
        console.log('chatRoom: ', chatRoom)
        getOtherUser();
    }, [])

    const getOtherUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        setUser(userInfo);
        if (chatRoom.chatRoom.chatRoomUsers.items[0].user.id === userInfo.attributes.sub) {
            setOtherUser(chatRoom.chatRoom.chatRoomUsers.items[1].user);
            if (chatRoom.chatRoom.chatRoomUsers.items[1].user.avatarImageURL === "https://popn-app.s3.amazonaws.com/default_images/defaultUser.png") {
                setOtherProfilePic("https://popn-app.s3.amazonaws.com/default_images/defaultUser.png")
            } else {
                setOtherProfilePic(chatRoom.chatRoom.chatRoomUsers.items[1].user.avatarImageURL.substring(0, chatRoom.chatRoom.chatRoomUsers.items[1].user.avatarImageURL.indexOf('.jpeg') + '.jpeg'.length))
            }
        } else {
            setOtherUser(chatRoom.chatRoom.chatRoomUsers.items[0].user);
            if (chatRoom.chatRoom.chatRoomUsers.items[0].user.avatarImageURL === "https://popn-app.s3.amazonaws.com/default_images/defaultUser.png") {
                setOtherProfilePic("https://popn-app.s3.amazonaws.com/default_images/defaultUser.png")
            } else {
                setOtherProfilePic(chatRoom.chatRoom.chatRoomUsers.items[0].user.avatarImageURL.substring(0, chatRoom.chatRoom.chatRoomUsers.items[0].user.avatarImageURL.indexOf('.jpeg') + '.jpeg'.length))
            }
        }
    }

    return (
        <>
            < Pressable style={CARD} onPress={() => { navigation.navigate('MessageRoom', { id: chatRoom.chatRoomID, name: otherUser.username, offerID: chatRoom.offerID}); }
            }>
                <View style={LEFT_SIDE}>
                    <Image
                        source={{ uri: otherProfilePic }}
                        style={{
                            resizeMode: "contain",
                            height: 40,
                            width: 40,
                            marginRight: 5,
                            borderRadius: 360,

                        }}
                    />
                </View>
                <View style={CARD_DATA}>
                    <Text preset="bold">{otherUser.username}</Text>
                    {chatRoom.chatRoom.lastMessage.text != null && (
                        <Text style={{ marginTop: 3 }} preset="secondary">
                            {chatRoom.chatRoom.lastMessage.text}
                        </Text>
                    )}
                </View>
                <View>
                    <Text style={{ marginTop: 3 }} preset="secondary">
                        {moment(chatRoom.updatedAt).format("MM/DD/YYYY")}
                    </Text>
                </View>
            </Pressable>
        </>

    )
}
