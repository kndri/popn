import * as React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { SwipeListView } from 'react-native-swipe-list-view';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { getChatRoom, chatRoomUserByUser } from '../../src/graphql/queries';

import MessageChatListItem from '../../components/message-chat-list-item';
import { Screen, Text, Header } from '../../components';
import { deleteChatRoomUser } from '../../src/graphql/mutations';
import { spacing } from '../../theme';
import { useAuth } from '../../contexts/auth';

import styles from './styles';

export default function MessageScreen() {
	const { authData: user } = useAuth();
	const [chatRooms, setChatRooms] = React.useState<any>([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const isFocused = useIsFocused();

	React.useEffect(() => {
		fetchChatRooms();
	}, [isFocused]);

	const fetchChatRooms = async () => {
		try {
			const chatRoomsByUser = await API.graphql(
				graphqlOperation(chatRoomUserByUser, {
					userID: user?.id,
				})
			);

			let chatRoomsArr = chatRoomsByUser.data.chatRoomUserByUser.items;

			if (chatRoomsArr.length > 0) {
				chatRoomsArr.sort((a, b) => {
					return b.chatRoom.lastMessage.updatedAt.localeCompare(
						a.chatRoom.lastMessage.updatedAt
					);
				});

				setChatRooms(chatRoomsArr);
				setIsLoading(false);
			}
		} catch (e) {
			console.log(e);
		}
	};

	Array(chatRooms.length)
		.fill('')
		.map((_, i) => ({ key: `${i}` }));

	const closeRow = (rowMap, rowKey) => {
		if (rowMap[rowKey]) {
			rowMap[rowKey].closeRow();
		}
	};

	const deleteRow = (rowMap, rowKey) => {
		try {
			closeRow(rowMap, rowKey);
			removeUserFromChatRoom(rowKey);
		} catch (error) {
			console.log(error);
		}
	};

	const onSwipeValueChange = (swipeData) => {
		const { key, value } = swipeData;
	};

	const renderHiddenItem = (data, rowMap) => (
		<View style={styles.rowBack}>
			<TouchableOpacity
				style={[styles.backRightBtn, styles.backRightBtnRight]}
				onPress={() => deleteRow(rowMap, data.item.chatRoomID)}
			>
				<Text style={styles.backTextWhite}>Delete</Text>
			</TouchableOpacity>
		</View>
	);

	const removeUserFromChatRoom = async (chatRoomID: any) => {
		try {
			// 1. Get Chat Room Data
			const chatRoomData = await API.graphql(
				graphqlOperation(getChatRoom, {
					id: chatRoomID,
				})
			);

			let chatRoomUsers = chatRoomData.data.getChatRoom.chatRoomUsers.items;
			let userID;
			chatRoomUsers.map((item) => {
				if (user?.id == item.userID) {
					userID = item.id;
				}
			});

			// 2. Remove 'user' from the chat room
			await API.graphql(
				graphqlOperation(deleteChatRoomUser, {
					input: {
						id: userID,
					},
				})
			);
		} catch (error) {
			console.log(error);
		}
		fetchChatRooms();
	};

	return (
		<>
			{isLoading && (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<ActivityIndicator size="large" color="black" />
				</View>
			)}
			{!isLoading && (
				<Screen style={styles.CONTAINER}>
					<View style={{ height: '100%' }}>
						<Header
							style={{ paddingHorizontal: spacing[3] }}
							headerTx="Messages"
						/>
						{chatRooms.length === 0 ? (
							<View style={{ height: '100%', justifyContent: 'center' }}>
								<Text
									style={styles.TEXTCENTER}
									preset="bold"
									text="No Messages Found."
								/>
							</View>
						) : (
							<SwipeListView
								disableRightSwipe
								data={chatRooms}
								renderItem={({ item }) => (
									<MessageChatListItem chatRoom={item} />
								)}
								renderHiddenItem={renderHiddenItem}
								onSwipeValueChange={onSwipeValueChange}
								useNativeDriver={false}
								keyExtractor={(item) => item.id}
								scrollEnabled={true}
								rightOpenValue={-75}
								previewRowKey={'0'}
								previewOpenValue={-20}
								previewOpenDelay={3000}
							/>
						)}
					</View>
				</Screen>
			)}
		</>
	);
}
