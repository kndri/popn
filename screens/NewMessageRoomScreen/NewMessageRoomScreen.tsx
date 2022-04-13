import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { spacing } from '../../theme';

import { API, Auth, graphqlOperation } from 'aws-amplify';

import { createMessage, updateChatRoom } from '../../src/graphql/mutations';

import { messagesByChatRoom, getChatRoom } from '../../src/graphql/queries';
import {
	deleteChatRoomUser,
	deleteChatRoom,
} from '../../src/graphql/mutations';
import { onCreateMessage } from '../../src/graphql/subscriptions';

import { Header } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { GiftedChat, Bubble, Send, Composer } from 'react-native-gifted-chat';
import { IMessage } from '../../types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import styles from './Styles';
// Styles
const CONTAINER: ViewStyle = {
	backgroundColor: 'white',
	flex: 1,
};

const CENTER: ViewStyle = {
	flexDirection: 'row',
	alignItems: 'center',
	paddingHorizontal: spacing[3],
	borderBottomWidth: 2,
	borderColor: 'black',
};

export type NewMessageRoomScreenProps = {
	id: string;
	name: string;
	user: object;
};

export default function NewMessageRoomScreen(props: NewMessageRoomScreenProps) {
	/*TODO: deconstruct route, Reason: I see you are using an ID 
          but it is not clears who's ID it is
            */
	const route = useRoute();
	/**
	 * What is in route.params is the product, name of chatroom and id
	 */
	console.log('Params: ', route.params);
	const navigation = useNavigation();
	const insets = useSafeAreaInsets();
	const [messages, setMessages] = React.useState<IMessage[]>([]);
	const [myUserId, setMyUserId] = React.useState('');
	const [myName, setMyName] = React.useState('');

	React.useEffect(() => {
		const fetchUser = async () => {
			const user = await Auth.currentAuthenticatedUser();
			setMyUserId(user.attributes.sub);
			setMyName(user.attributes.preferred_username);
		};
		fetchUser();
	}, []);

	React.useEffect(() => {
		fetchMessages();
	}, []);

	const fetchMessages = async () => {
		const messagesData = await API.graphql(
			graphqlOperation(messagesByChatRoom, {
				chatRoomID: route.params?.id,
				sortDirection: 'DESC',
			})
		);

		let localMessages = messagesData.data.messagesByChatRoom.items;
		let giftedChatMessages = localMessages.map((chatMessage) => {
			let gcm = {
				_id: chatMessage.id,
				text: chatMessage.text,
				createdAt: chatMessage.createdAt,
				user: {
					_id: chatMessage.userID,
					name: chatMessage.user.username,
				},
			};
			return gcm;
		});

		setMessages(giftedChatMessages);
	};

	React.useEffect(() => {
		const subscription = API.graphql(
			graphqlOperation(onCreateMessage)
		).subscribe({
			next: (data) => {
				const newMessage = data.value.data.onCreateMessage;

				if (newMessage.chatRoomID !== route.params?.id) {
					console.log('Message is in another room!');
					return;
				}

				fetchMessages();
			},
		});

		return () => subscription.unsubscribe();
	}, []);

	const updateChatRoomLastMessage = async (messageId: string) => {
		try {
			await API.graphql(
				graphqlOperation(updateChatRoom, {
					input: {
						id: route.params?.id,
						lastMessageID: messageId,
					},
				})
			);
		} catch (e) {
			console.log(e);
		}
	};

	const onSend = React.useCallback(async (messages = []) => {
		try {
			const newMessageData = await API.graphql(
				graphqlOperation(createMessage, {
					input: {
						text: messages[0].text,
						userID: messages[0].user._id,
						chatRoomID: route.params?.id,
					},
				})
			);

			await updateChatRoomLastMessage(newMessageData.data.createMessage.id);
			setMessages((prevState) => GiftedChat.append(prevState, messages));
		} catch (e) {
			console.log(e);
		}
	}, []);

	const renderBubble = (props: any) => {
		return (
			<Bubble
				{...props}
				wrapperStyle={{
					right: { backgroundColor: 'black' },
				}}
			/>
		);
	};

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
			textStyle={[
				props.text
					? { color: '#000000', marginTop: 12 }
					: { color: '#c2c2c2', marginTop: 12 },
			]}
		></Send>
	);

	const onNaivgateBack = async () => {
		try {
			// check if messages is empty
			if (messages.length == 0) {
				// 1. Get ChatRoom data
				const chatRoomData = await API.graphql(
					graphqlOperation(getChatRoom, {
						id: route.params!.id,
					})
				);

				let chatRoomUsers = chatRoomData.data.getChatRoom.chatRoomUsers.items;

				let userArr: any[] = [];
				chatRoomUsers.map((item) => userArr.push(item.id));

				// 2. Remove chatRoomUsers from chat room
				userArr.map(async (id) => {
					await API.graphql(
						graphqlOperation(deleteChatRoomUser, {
							input: {
								id: id,
							},
						})
					);
				});

				// 3. Delete the chatRoom
				await API.graphql(
					graphqlOperation(deleteChatRoom, {
						input: {
							id: route.params!.id,
						},
					})
				);

				// 4. Navigate back to the Messages Screen
				navigation.navigate('Message');
			} else {
				navigation.navigate('Message');
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={styles.CONTAINER}>
			<View style={[styles.CENTER, { marginTop: insets.top }]}>
				<Header
					headerTx={`${route.params?.name}`}
					leftIcon="back"
					onLeftPress={onNaivgateBack}
				/>
			</View>

			<GiftedChat
				isTyping={true}
				alignTop={false}
				alwaysShowSend={true}
				renderBubble={renderBubble}
				renderComposer={renderComposer}
				renderSend={renderSend}
				messages={messages}
				onSend={(messages) => onSend(messages)}
				user={{
					_id: myUserId,
					name: myName,
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
