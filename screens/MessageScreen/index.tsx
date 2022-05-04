import * as React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import {
	View,
	TouchableOpacity,
	ActivityIndicator,
	Dimensions,
} from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { API, graphqlOperation } from 'aws-amplify';
import { getChatRoom, chatRoomUserByUser } from '../../src/graphql/queries';
import {
	deleteChatRoomUser,
	updateChatRoom,
} from '../../src/graphql/mutations';

import { useAuth } from '../../contexts/auth';
import { useApp } from '../../contexts/app-context';

import MessageChatListItem from '../../components/message-chat-list-item';
import { Screen, Text, Header } from '../../components';
import { spacing } from '../../theme';

import styles from './styles';

export default function MessageScreen() {
	// auth and app context
	const { authData: user } = useAuth();
	const { updateUnreadCount } = useApp();
	const notificationListener: any = React.useRef();
	const responseListener: any = React.useRef();
	const navigation = useNavigation();
	const isFocused = useIsFocused();
	const [activeChatRooms, setActiveChatRooms] = React.useState<any>([]);
	const [archiveChatRooms, setArchiveChatRooms] = React.useState<any>([]);

	const [isLoading, setIsLoading] = React.useState(true);
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'active', title: 'Active' },
		{ key: 'archive', title: 'Archive' },
	]);

	React.useEffect(() => {
		fetchChatRooms();
	}, [isFocused]);

	React.useEffect(() => {
		// This listener is fired whenever a notification is received while the app is foregrounded
		notificationListener.current =
			Notifications.addNotificationReceivedListener((notification) => {
				if (
					notification.request.content.title == 'New Message' ||
					notification.request.content.title == 'Offer Made!'
				) {
					fetchChatRooms();
				}
			});

		// This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
		responseListener.current =
			Notifications.addNotificationResponseReceivedListener(
				async (response) => {
					try {
						await API.graphql(
							graphqlOperation(updateChatRoom, {
								input: {
									id: response.notification.request.content.data.chatRoomID,
									receiverHasRead: true,
								},
							})
						);
						navigation.navigate('MessageRoom', {
							id: response.notification.request.content.data.chatRoomID,
							name: response.notification.request.content.data.username,
							offerID: response.notification.request.content.data.offerID,
						});
						fetchChatRooms();
					} catch (err) {
						console.log('error:', err);
					}
				}
			);

		return () => {
			Notifications.removeNotificationSubscription(
				notificationListener.current
			);
			Notifications.removeNotificationSubscription(responseListener.current);
		};
	}, []);

	const fetchChatRooms = async () => {
		try {
			const chatRoomsByUser = await API.graphql(
				graphqlOperation(chatRoomUserByUser, {
					userID: user?.id,
				})
			);

			let chatRoomsArr = chatRoomsByUser.data.chatRoomUserByUser.items;

			let archiveChatRoomsArr: any;
			let activeChatRoomsArr: any;

			if (chatRoomsArr.length >= 0) {
				chatRoomsArr.sort((a, b) => {
					return b.chatRoom.lastMessage.updatedAt.localeCompare(
						a.chatRoom.lastMessage.updatedAt
					);
				});

				// filter by active status
				activeChatRoomsArr = chatRoomsArr.filter((chat) => {
					return chat.chatRoom.roomStatus == 'active';
				});

				// filter by archive status
				archiveChatRoomsArr = chatRoomsArr.filter((chat) => {
					return chat.chatRoom.roomStatus == 'archive';
				});

				// Counting unread messages
				let unreadCount = 0;
				activeChatRoomsArr.map((item: any) => {
					if (
						user?.id != item.chatRoom.lastMessage.userID &&
						item.chatRoom.receiverHasRead == false
					) {
						unreadCount = unreadCount + 1;
					}
				});

				// updating unread counter globally
				updateUnreadCount(unreadCount);
				setArchiveChatRooms(archiveChatRoomsArr);
				setActiveChatRooms(activeChatRoomsArr);
				setIsLoading(false);
			}
		} catch (e) {
			console.log(e);
		}
	};

	Array(activeChatRooms.length)
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

			await API.graphql(
				graphqlOperation(updateChatRoom, {
					input: {
						id: chatRoomID,
						roomStatus: 'archive',
					},
				})
			);
		} catch (error) {
			console.log(error);
		}
		fetchChatRooms();
	};

	const ActiveRoute = () => (
		<>
			{activeChatRooms.length === 0 ? (
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
					data={activeChatRooms}
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
		</>
	);

	const ArchiveRoute = () => (
		// pass in the messages that are labeled as archived
		<>
			{archiveChatRooms.length === 0 ? (
				<View style={{ height: '100%', justifyContent: 'center' }}>
					<Text
						style={styles.TEXTCENTER}
						preset="bold"
						text="No Archive Messages Found."
					/>
				</View>
			) : (
				<SwipeListView
					disableRightSwipe
					data={archiveChatRooms}
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
		</>
	);

	const initialLayout = { width: Dimensions.get('window').width };

	const renderScene = SceneMap({
		active: ActiveRoute,
		archive: ArchiveRoute,
	});

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
						<TabView
							navigationState={{ index, routes }}
							renderScene={renderScene}
							onIndexChange={setIndex}
							initialLayout={initialLayout}
							renderTabBar={(props) => (
								<TabBar
									{...props}
									indicatorStyle={{ backgroundColor: 'black' }}
									style={{ backgroundColor: 'white' }}
									renderLabel={({ route }) => (
										<Text
											preset="bold"
											style={{ color: 'black', fontSize: 16 }}
										>
											{route.title}
										</Text>
									)}
								/>
							)}
						/>
					</View>
				</Screen>
			)}
		</>
	);
}
