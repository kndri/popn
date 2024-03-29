import React from 'react';
import { ViewStyle, View, Pressable } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import Svg, { Circle } from 'react-native-svg';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

import { Text } from '../text/text';
import { AutoImage as Image } from '../auto-image/auto-image';

import { useAuth } from '../../contexts/auth';
import { updateChatRoom } from '../../src/graphql/mutations';

const newMessage = require('../../assets/images/verified_badge.png');

const CARD: ViewStyle = {
	width: '100%',
	display: 'flex',
	flexDirection: 'row',
	padding: 16,
	justifyContent: 'flex-end',
	borderBottomWidth: 0.5,
	borderBottomColor: '#7A7A7A',
	backgroundColor: 'white',
	height: 80,
	paddingBottom: 20,
};
const LEFT_SIDE: ViewStyle = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	paddingRight: 10,
};
const CARD_DATA: ViewStyle = {
	display: 'flex',
	flexDirection: 'column',
	flex: 1,
};
export type MessageChatListItemProps = {
	chatRoom: any;
};

export default function MessageChatListItem(props: MessageChatListItemProps) {
	const { chatRoom } = props;
	const { authData: user } = useAuth();
	const [otherUser, setOtherUser] = React.useState<any>({});

	const navigation = useNavigation();
	const [otherProfilePic, setOtherProfilePic] = React.useState('');
	React.useEffect(() => {
		getOtherUser();
	}, []);

	const getOtherUser = async () => {
		if (
			chatRoom.chatRoom.chatRoomUsers.items[0].user.username === user?.username
		) {
			setOtherUser(chatRoom.chatRoom.chatRoomUsers.items[1].user);
			if (
				chatRoom.chatRoom.chatRoomUsers.items[1].user.avatarImageURL ===
				'https://popn-app.s3.amazonaws.com/default_images/defaultUser.png'
			) {
				setOtherProfilePic(
					'https://popn-app.s3.amazonaws.com/default_images/defaultUser.png'
				);
			} else {
				setOtherProfilePic(
					chatRoom.chatRoom.chatRoomUsers.items[1].user.avatarImageURL.substring(
						0,
						chatRoom.chatRoom.chatRoomUsers.items[1].user.avatarImageURL.indexOf(
							'.jpeg'
						) + '.jpeg'.length
					)
				);
			}
		} else {
			setOtherUser(chatRoom.chatRoom.chatRoomUsers.items[0].user);
			if (
				chatRoom.chatRoom.chatRoomUsers.items[0].user.avatarImageURL ===
				'https://popn-app.s3.amazonaws.com/default_images/defaultUser.png'
			) {
				setOtherProfilePic(
					'https://popn-app.s3.amazonaws.com/default_images/defaultUser.png'
				);
			} else {
				setOtherProfilePic(
					chatRoom.chatRoom.chatRoomUsers.items[0].user.avatarImageURL.substring(
						0,
						chatRoom.chatRoom.chatRoomUsers.items[0].user.avatarImageURL.indexOf(
							'.jpeg'
						) + '.jpeg'.length
					)
				);
			}
		}
	};
	/**
	 * When message room is clicked change receiverHasRead to true
	 */
	const chatRoomPressed = async () => {
		// if user is not the owner of the last message sent then change receiverHasRead to true
		if (
			user?.id != chatRoom.chatRoom.lastMessage.userID &&
			chatRoom.chatRoom.receiverHasRead == false
		) {
			try {
				await API.graphql(
					graphqlOperation(updateChatRoom, {
						input: {
							id: chatRoom.chatRoom.id,
							receiverHasRead: true,
						},
					})
				);
			} catch (e) {
				console.log('Error', e);
			}
		}

		return;
	};

	/**
	 * The purpose of this stateless function is to conditionally render a preset
	 * for the text when there is a unread message
	 * @returns JSX Element
	 */
	const ChangeToBold = () =>
		user?.id != chatRoom.chatRoom.lastMessage.userID &&
		chatRoom.chatRoom.receiverHasRead == false ? (
			<Text style={{ marginTop: 3 }} preset="bold">
				{chatRoom.chatRoom.lastMessage.text}
			</Text>
		) : (
			<Text style={{ marginTop: 3 }} preset="secondary">
				{chatRoom.chatRoom.lastMessage.text}
			</Text>
		);

	return (
		<>
			<Pressable
				style={CARD}
				onPress={() => {
					chatRoomPressed();
					navigation.navigate('MessageRoom', {
						id: chatRoom.chatRoomID,
						name: otherUser.username,
						offerID: chatRoom.chatRoom.offerID,
					});
				}}
			>
				<View style={LEFT_SIDE}>
					<Image
						source={{ uri: otherProfilePic }}
						style={{
							resizeMode: 'contain',
							height: 40,
							width: 40,
							marginRight: 5,
							borderRadius: 360,
						}}
					/>
					{user?.id != chatRoom.chatRoom.lastMessage.userID &&
						chatRoom.chatRoom.receiverHasRead == false && (
							<Svg height="10px" width="10px" viewBox="0 0 100 100">
								<Circle
									cx="50"
									cy="50"
									r="50"
									stroke="black"
									strokeWidth=".5"
									fill="black"
								/>
							</Svg>
						)}
				</View>
				<View style={CARD_DATA}>
					{user?.id != chatRoom.chatRoom.lastMessage.userID &&
					chatRoom.chatRoom.receiverHasRead == false ? (
						<Text preset="bold">{otherUser.username}</Text>
					) : (
						<Text preset="default">{otherUser.username}</Text>
					)}

					{chatRoom.chatRoom.lastMessage.text != null && <ChangeToBold />}
				</View>
				<View>
					<Text style={{ marginTop: 3 }} preset="secondary">
						{moment(chatRoom.updatedAt).format('MM/DD/YYYY')}
					</Text>
				</View>
			</Pressable>
		</>
	);
}
