import React from 'react'
import { TouchableOpacity, ViewStyle, View } from 'react-native'
import { Text, AutoImage as Image, } from '../../components';
import { useNavigation } from "@react-navigation/native";
import { Auth, } from 'aws-amplify';
import moment from "moment";


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
export type MessageChatListItemProps = {
    chatRoom: any
}

export default function MessageChatListItem(props: MessageChatListItemProps) {
    const { chatRoom } = props;
    const [otherUser, setOtherUser] = React.useState<any>({});
    const [user, setUser] = React.useState<any>({});
    const navigation = useNavigation();

    React.useEffect(() => {
        const getOtherUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setUser(userInfo);
            if (chatRoom.chatRoom.chatRoomUsers.items[0].user.id === userInfo.attributes.sub) {
                setOtherUser(chatRoom.chatRoom.chatRoomUsers.items[1].user);
            } else {
                setOtherUser(chatRoom.chatRoom.chatRoomUsers.items[0].user);
            }
        }
        getOtherUser();
    }, [])


    return (
        <>
            < TouchableOpacity style={CARD} onPress={() => { navigation.navigate('MessageRoom', { id: chatRoom.chatRoomID, name: otherUser.username, currentUser: user }); }
            }>
                <View style={LEFT_SIDE}>
                    {/* {console.log('ourUser data:', user)} */}
                    {/* {console.log('first user:', chatRoom.chatRoom.chatRoomUsers.items[0])} */}
                    {console.log('chatroom data: ', chatRoom)}
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

            </TouchableOpacity >
        </>
    )
}
