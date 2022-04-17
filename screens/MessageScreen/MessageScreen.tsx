import * as React from 'react';
import { View, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { color, spacing } from '../../theme';
import { SwipeListView } from 'react-native-swipe-list-view';

import { Screen, Text, NewMessageButton, Header } from '../../components';
import MessageChatListItem from '../../components/message-chat-list-item';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import {
	getUser,
	getChatRoom,
	chatRoomUserByUser,
} from '../../src/graphql/queries';
import { deleteChatRoomUser } from '../../src/graphql/mutations';

import styles from './Styles';
import { useAuth } from '../../contexts/auth';

export default function MessageScreen() {
	const { authData: user } = useAuth();
	const navigation = useNavigation();
	const [chatRooms, setChatRooms] = React.useState<any>([]);
	const [excludedUsers, setExcludedUsers] = React.useState<any[]>([]);
	const [userData, setUserData] = React.useState({});
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

			const chatRoomUsers = await API.graphql(
				graphqlOperation(chatRoomUserByUser, {
					userID: user?.id,
				})
			);
			let chatRoomsArr = chatRoomsByUser.data.chatRoomUserByUser.items;
			{
				/*TODO: make is so users of deleted messages go back to contacts screen;
				 currently only happens when all messages are deleted
			*/
			}
			// console.log('chatRoomsArr.length : ', chatRoomsArr.length )
			if (chatRoomsArr.length > 0) {
				chatRoomsArr.map((room) => {
					room.chatRoom.chatRoomUsers.items.map((item) => {
						// console.log('item: ', item);
						if (item.user.username) {
							setExcludedUsers((excludedUsers) => [
								...excludedUsers,
								item.user.username,
							]);
						}
					});
				});

				chatRoomsArr.sort((a, b) => {
					return b.chatRoom.lastMessage.updatedAt.localeCompare(
						a.chatRoom.lastMessage.updatedAt
					);
				});

				setChatRooms(chatRoomsArr);
			} else {
				setExcludedUsers([]);
				setChatRooms(chatRoomsArr);
			}
		} catch (e) {
			console.log(e);
		}
	};

	// const uniqueE xcludedUsers = [...new Set(excludedUsers)];

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
						renderItem={({ item }) => <MessageChatListItem chatRoom={item} />}
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
			<NewMessageButton excludedUsers={excludedUsers} currentUser={userData} />
		</Screen>
	);
}
