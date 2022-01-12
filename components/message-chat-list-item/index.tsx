import * as React from "react";
import { TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ViewStyle, View } from 'react-native'
import { Text } from "../text/text";
import { AutoImage as Image } from "../auto-image/auto-image";
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
    backgroundColor:'white',
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
    const navigation = useNavigation();

    React.useEffect(() => {
        console.log('chatRoom: ', chatRoom)
        const getOtherUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            if (chatRoom.chatRoom.chatRoomUsers.items[0].user.id === userInfo.attributes.sub) {
                setOtherUser(chatRoom.chatRoom.chatRoomUsers.items[1].user);
            } else {
                setOtherUser(chatRoom.chatRoom.chatRoomUsers.items[0].user);
            }
        }
        getOtherUser();
    }, [])

    return (
            <TouchableHighlight style={CARD} onPress={() => { navigation.navigate('MessageRoom', { id: chatRoom.chatRoomID, name: otherUser.username }); }
            }>
                <>
                <View style={LEFT_SIDE}>    
                    <Image
                        source={{ uri: `${otherUser!.avatarImageURL}` }}
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
                    <Text preset="bold">{otherUser.username}</Text>
                    <Text style={{ marginTop: 3 }} preset="secondary">
                        {chatRoom.lastMessage}
                    </Text>
                </View>
                <View>
                    <Text style={{ marginTop: 3 }} preset="secondary">
                        {moment(chatRoom.createdAt).format("MM/DD/YYYY")}
                    </Text>
                </View>
                </>
            </TouchableHighlight>
    )
}
