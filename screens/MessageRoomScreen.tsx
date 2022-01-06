/* tslint:disable */
import * as React from "react";
import {
  View,
  ViewStyle,
} from "react-native";
import { spacing } from "../theme";

import {
  API,
  Auth,
  graphqlOperation,
} from 'aws-amplify';

import {
  createMessage,
  updateChatRoom,
} from '../src/graphql/mutations';

import { messagesByChatRoom } from '../src/graphql/queries';
import { onCreateMessage } from '../src/graphql/subscriptions';

import {
  Header,
} from "../components";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { GiftedChat, Bubble, Send, Composer } from 'react-native-gifted-chat';
import { ChatMessage } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context"



// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: 'white',
  flex: 1,
};

const CENTER: ViewStyle = {
  flexDirection: 'row',
  alignItems: "center",
  paddingHorizontal: spacing[3],
  borderBottomWidth: 2,
  borderColor: 'black'
};

export type MessageRoomScreenProps = {
  id: string,
  name: string
}

export default function MessageRoomScreen(props: MessageRoomScreenProps) {

  const route = useRoute();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets()
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [myUserId, setMyUserId] = React.useState(null);
  const [myName, setMyName] = React.useState("");


  React.useEffect(() => {
    const fetchUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      console.log('user: ', user.attributes.sub)
      setMyUserId(user.attributes.sub);
      setMyName(user.attributes.preferred_username)
    }
    fetchUser();
  }, [])


  React.useEffect(() => {
    fetchMessages();
  }, [])

  const fetchMessages = async () => {
    const messagesData = await API.graphql(
      graphqlOperation(
        messagesByChatRoom, {
        chatRoomID: route.params?.id,
        sortDirection: "DESC",
      }
      )
    )

    console.log("FETCH MESSAGES")
    let localMessages = messagesData.data.messagesByChatRoom.items;
    console.log('localMessages: ', route.params?.id);
    // console.log('localMessages: ', localMessages);
    let giftedChatMessages = localMessages.map((chatMessage) => {
      let gcm = {
        _id: chatMessage.id,
        text: chatMessage.text,
        createdAt: chatMessage.createdAt,
        user: {
          _id: chatMessage.userID,
          name: chatMessage.user.username
        }
      };
      console.log('gcm: ', gcm)
      return gcm;
    });

    setMessages(giftedChatMessages);
  }


  React.useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: (data) => {
        const newMessage = data.value.data.onCreateMessage;

        if (newMessage.chatRoomID !== route.params?.id) {
          console.log("Message is in another room!")
          return;
        }

        fetchMessages();
      }
    });

    return () => subscription.unsubscribe();
  }, [])

  const updateChatRoomLastMessage = async (messageId: string) => {
    try {
      await API.graphql(
        graphqlOperation(
          updateChatRoom, {
          input: {
            id: chatRoomID,
            lastMessageID: messageId,
          }
        }
        )
      );
    } catch (e) {
      console.log(e);
    }
  }

  const onSend = React.useCallback(async (messages = [], myUserId) => {
    console.log("messages: ", messages);
    console.log("myUserId: ", myUserId);

    try {
      const newMessageData = await API.graphql(
        graphqlOperation(
          createMessage, {
          input: {
            text: messages[0].text,
            userID: myUserId,
            chatRoomID: route.params?.id
          }
        }
        )
      )

      await updateChatRoomLastMessage(newMessageData.data.createMessage.id)
    } catch (e) {
      console.log(e);
    }

    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const renderBubble = (props: any) => {
    return <Bubble {...props}
      wrapperStyle={{
        right: { backgroundColor: 'black' },
      }}
    />
  }

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
      {console.log('ui:', myUserId)}
      <View style={[CENTER, { marginTop: insets.top }]}>
        <Header
          headerTx={`${route.params?.name}`}
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
        />
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
        // onSend={messages => onSend(messages)}
        onSend={(messages, myUserId) => onSend(messages, myUserId)}
        user={{
          _id: myUserId,
          name: myName
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
