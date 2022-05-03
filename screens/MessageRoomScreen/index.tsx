import * as React from 'react';
import { View, ViewStyle, Image, ActivityIndicator, Modal } from 'react-native';
import {
	useIsFocused,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import { GiftedChat, Bubble, Send, Composer } from 'react-native-gifted-chat';
import { IMessage } from '../../types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { API, graphqlOperation } from 'aws-amplify';
import {
	createMessage,
	updateChatRoom,
	updateOffer,
} from '../../src/graphql/mutations';
import {
	messagesByChatRoom,
	getOffer,
	getListedItem,
} from '../../src/graphql/queries';
import {
	onCreateMessage,
	onUpdateOffer,
} from '../../src/graphql/subscriptions';
import { spacing } from '../../theme';
import { Header, Text, Button } from '../../components';
import { useToast } from '../../components/Toast';

import styles from './styles';
import { useAuth } from '../../contexts/auth';

import ConfirmationModal from './ConfirmationModal';

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

export type MessageRoomScreenProps = {
	id: string;
	name: string;
	offerID: string;
};

export default function MessageRoomScreen(props: MessageRoomScreenProps) {
	const { authData: user } = useAuth();
	const navigation = useNavigation();
	const route = useRoute();
	const isFocused = useIsFocused();
	const { offerID, id, name } = route.params;
	const insets = useSafeAreaInsets();
	const [isLoading, setIsLoading] = React.useState(true);
	const [offer, setOffer] = React.useState({});
	const [seller, setSeller] = React.useState('');
	const [listing, setListing] = React.useState<{}>({});
	const [messages, setMessages] = React.useState<IMessage[]>([]);
	const [buyerModalVisible, setBuyerModalVisible] = React.useState(false);
	const [sellerModalVisible, setSellerModalVisible] = React.useState(false);
	const toast = useToast();

	/**
	 * createNotification will create a notification after a user accepts/declines/message a user
	 * @param message
	 * @param chatRoomID
	 * @param offerID
	 */
	const createNotification = async (
		message: string,
		chatRoomID: string,
		offerID: string,
		title: string,
		expoToken: string
	) => {
		const messageNotifcation = {
			to: expoToken,
			sound: 'default',
			title: title,
			body: message,
			data: {
				userId: user?.id,
				username: user?.username,
				offerID: offerID,
				chatRoomID: chatRoomID,
			},
		};

		await fetch('https://exp.host/--/api/v2/push/send', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Accept-encoding': 'gzip, deflate',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(messageNotifcation),
		});
	};

	const fetchMessages = async () => {
		const messagesData = await API.graphql(
			graphqlOperation(messagesByChatRoom, {
				chatRoomID: id,
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

	const fetchOffer = async (offerID: string) => {
		const offer = await API.graphql(
			graphqlOperation(getOffer, {
				id: offerID,
			})
		);

		const listing = await API.graphql(
			graphqlOperation(getListedItem, {
				id: offer.data.getOffer.listedItemID,
			})
		);

		Promise.all([offer, listing]).then(() => {
			setOffer(offer.data.getOffer),
				setListing(listing.data.getListedItem),
				setIsLoading(false);
		});
	};

	const completeOffer = async () => {
		// Complete the offer.
		try {
			await API.graphql(
				graphqlOperation(updateOffer, {
					input: {
						id: offer.id,
						status: 'completed',
					},
				})
			);
			await API.graphql(
				graphqlOperation(updateChatRoom, {
					input: {
						id: id,
						roomStatus: 'archive',
					},
				})
			);
		} catch (error) {
			console.log(error);
		}

		//send automated message indicating confirmation
		const automatedConfirmationMessage = `${user?.username} has confirmed this transaction of $${offer.offerAmount} for the item: ${offer.listedItem.sneakerData.primaryName} ${offer.listedItem.sneakerData.secondaryName}.`;

		try {
			const confirmedMessageData = await API.graphql(
				graphqlOperation(createMessage, {
					input: {
						text: automatedConfirmationMessage,
						userID: user?.id,
						chatRoomID: id,
					},
				})
			);

			await updateChatRoomLastMessage(
				confirmedMessageData.data.createMessage.id
			);

			// send notification to receiver
			let expoToken: string;
			const title = 'Offer Confirmed';
			if (user?.id == offer.sellingUserID) {
				expoToken = offer.buyer.expoToken;
			} else {
				expoToken = offer.seller.expoToken;
			}
			createNotification(
				automatedConfirmationMessage,
				id,
				offerID,
				title,
				expoToken
			);
			toast.show(`Successful Transfer.`);
		} catch (error) {
			console.log(error);
		}
	};

	React.useEffect(() => {
		fetchMessages();
		fetchOffer(offerID);
	}, [isFocused]);

	React.useEffect(() => {
		if (offer.sellerConfirmed && offer.buyerConfirmed) {
			completeOffer();
		}
	}, [offer]);

	React.useEffect(() => {
		const subscription = API.graphql(
			graphqlOperation(onCreateMessage)
		).subscribe({
			next: (data) => {
				const newMessage = data.value.data.onCreateMessage;

				if (newMessage.chatRoomID !== id) {
					return;
				}

				fetchMessages();
			},
		});

		return () => subscription.unsubscribe();
	}, []);

	React.useEffect(() => {
		const subscription = API.graphql(graphqlOperation(onUpdateOffer)).subscribe(
			{
				next: (data) => {
					const updatedOffer = data.value.data.onUpdateOffer;
					setOffer(updatedOffer);
				},
			}
		);
		return () => subscription.unsubscribe();
	}, []);

	const updateChatRoomLastMessage = async (messageId: string) => {
		try {
			await API.graphql(
				graphqlOperation(updateChatRoom, {
					input: {
						id: id,
						lastMessageID: messageId,
						receiverHasRead: false,
					},
				})
			);
		} catch (e) {
			console.log(e);
		}
	};

	const onSend = React.useCallback(async (messages = [], offer) => {
		try {
			const newMessageData = await API.graphql(
				graphqlOperation(createMessage, {
					input: {
						text: messages[0].text,
						userID: messages[0].user._id,
						chatRoomID: id,
					},
				})
			);
			await updateChatRoomLastMessage(newMessageData.data.createMessage.id);

			// send notification to the receiver
			const title = 'New Message';
			let expoToken: string;
			let messageInfo = `${user?.username} replied: ${messages[0].text}`;

			if (messages[0].user._id == offer.sellingUserID) {
				expoToken = offer.buyer.expoToken;
			} else {
				expoToken = offer.seller.expoToken;
			}
			createNotification(messageInfo, id, offerID, title, expoToken);
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

	//perform mutation and update offer status to accepted
	const acceptOFfer = async (offerID: string) => {
		try {
			await API.graphql(
				graphqlOperation(updateOffer, {
					input: {
						id: offerID,
						status: 'accepted',
					},
				})
			);
			//send automated message indicating the offer was accepted
			const automatedAcceptedMessage = `${user?.username} has accepted your offer of $${offer.offerAmount} for the item: ${offer.listedItem.sneakerData.primaryName} ${offer.listedItem.sneakerData.secondaryName}.`;

			//Create the notification after the offer has been updated
			const title = 'Offer Accepted';
			createNotification(
				automatedAcceptedMessage,
				id,
				offerID,
				title,
				offer.buyer.expoToken
			);

			try {
				const acceptedMessageData = await API.graphql(
					graphqlOperation(createMessage, {
						input: {
							text: automatedAcceptedMessage,
							userID: user?.id,
							chatRoomID: id,
						},
					})
				);

				await updateChatRoomLastMessage(
					acceptedMessageData.data.createMessage.id
				);
			} catch (error) {
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	};

	//perform mutation and update offer status to accepted
	const declineOFfer = async (offerID: string) => {
		try {
			await API.graphql(
				graphqlOperation(updateOffer, {
					input: {
						id: offerID,
						status: 'declined',
					},
				})
			);
			//send automated message indicating the offer was declined
			const automatedDeclinedMessage = `${user?.username} has declined your offer of $${offer.offerAmount} for the item: ${offer.listedItem.sneakerData.primaryName} ${offer.listedItem.sneakerData.secondaryName}.`;
			const title = 'Offer Declined';

			//Create the notification after the offer has been updated
			createNotification(
				automatedDeclinedMessage,
				id,
				offerID,
				title,
				offer.buyer.expoToken
			);

			try {
				const declinedMessageData = await API.graphql(
					graphqlOperation(createMessage, {
						input: {
							text: automatedDeclinedMessage,
							userID: user?.id,
							chatRoomID: id,
						},
					})
				);
				await updateChatRoomLastMessage(
					declinedMessageData.data.createMessage.id
				);

				// change the status to archived
				await API.graphql(
					graphqlOperation(updateChatRoom, {
						input: {
							id: id,
							roomStatus: 'archive',
						},
					})
				);
			} catch (error) {
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const buyerConfirmation = async (offer) => {
		try {
			await API.graphql(
				graphqlOperation(updateOffer, {
					input: {
						id: offer.id,
						buyerConfirmed: true,
					},
				})
			);
			//Create the notification after the offer has been updated
			const automatedConfirmedMessage = `${user?.username} has confirmed the item: ${offer.listedItem.sneakerData.primaryName} ${offer.listedItem.sneakerData.secondaryName}.`;

			const title = 'Buyer Confirmed';
			createNotification(
				automatedConfirmedMessage,
				id,
				offerID,
				title,
				offer.seller.expoToken
			);

			// Close buyer modal.
			setBuyerModalVisible(!buyerModalVisible);
		} catch (error) {
			console.log(error);
		}
	};

	//switching owership of shoes to the buyer via seller confirmation
	const sellerConfirmation = async (offer) => {
		// set sellerConfirmed to true
		try {
			await API.graphql(
				graphqlOperation(updateOffer, {
					input: {
						id: offer.id,
						sellerConfirmed: true,
					},
				})
			);

			//Create the notification after the offer has been updated
			const automatedConfirmedMessage = `${user?.username} has confirmed the item: ${offer.listedItem.sneakerData.primaryName} ${offer.listedItem.sneakerData.secondaryName}.`;

			const title = 'Seller Confirmed';
			createNotification(
				automatedConfirmedMessage,
				id,
				offerID,
				title,
				offer.buyer.expoToken
			);

			//close modal
			setSellerModalVisible(!sellerModalVisible);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{isLoading && (
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<ActivityIndicator size="large" color="black" />
				</View>
			)}

			{!isLoading && (
				<View style={styles.CONTAINER}>
					{/* header view */}
					<View style={[styles.CENTER, { marginTop: insets.top }]}>
						<Header
							headerTx={`${name}`}
							leftIcon="back"
							onLeftPress={() => navigation.navigate('Message')}
						/>
					</View>
					{/* view for offer data */}
					<View
						style={{
							backgroundColor: 'black',
							height: 62,
							flexDirection: 'row',
							alignItems: 'center',
							marginBottom: 5,
						}}
					>
						<View style={{ marginLeft: 17 }}>
							<Image
								source={{ uri: listing.sneakerData.image }}
								style={{ width: 52, height: 38 }}
							/>
						</View>

						<View style={{ marginLeft: 12 }}>
							<Text preset="bold" style={{ color: 'white' }}>
								{listing.sneakerData.primaryName}
							</Text>
							<Text preset="bold" style={{ color: 'white' }}>
								{listing.sneakerData.secondaryName}
							</Text>
						</View>

						<View style={{ position: 'absolute', left: 322 }}>
							<Text preset="bold" style={{ color: 'white' }}>
								${offer.offerAmount}
							</Text>
						</View>
					</View>
					{/* end view for offer data */}

					{/* View for Offer CTAs */}
					{user.id == offer.sellingUserID && (
						<>
							{offer.status == 'pending' && (
								<>
									<View
										style={{
											height: 62,
											flexDirection: 'row',
											alignItems: 'center',
											justifyContent: 'space-around',
										}}
									>
										<Button
											style={{
												borderRadius: 4,
												width: '45%',
												backgroundColor: 'black',
												borderWidth: 2,
											}}
											text="Accept"
											onPress={() => {
												acceptOFfer(offer.id);
											}}
										/>
										<Button
											style={{
												borderRadius: 4,
												width: '45%',
												backgroundColor: 'white',
												borderWidth: 2,
												borderColor: 'black',
											}}
											text="Decline"
											textStyle={{ color: 'black' }}
											onPress={() => {
												declineOFfer(offer.id);
											}}
										/>
									</View>
								</>
							)}
						</>
					)}

					{offer.status == 'accepted' && (
						<View style={{ alignSelf: 'center', marginTop: 5 }}>
							<Button
								style={{
									borderRadius: 4,
									width: 319,
								}}
								text="Confirm Transaction"
								onPress={() => {
									if (user.id == offer.sellingUserID) {
										setSellerModalVisible(!sellerModalVisible);
									} else {
										setBuyerModalVisible(!buyerModalVisible);
									}
								}}
							/>
						</View>
					)}
					{/* End of View for Offer CTAs */}

					<GiftedChat
						isTyping={true}
						alignTop={false}
						alwaysShowSend={true}
						renderBubble={renderBubble}
						renderComposer={renderComposer}
						renderSend={renderSend}
						messages={messages}
						onSend={(messages) => {
							onSend(messages, offer);
						}}
						user={{
							// _id is of type string or number
							// name is of type string or undefined
							// had an error for types
							_id: user?.id as any,
							name: user?.username as any,
						}}
						parsePatterns={(linkStyle) => [
							{
								pattern: /#(\w+)/,
								style: linkStyle,
								onPress: (tag) => console.log(`Pressed on hashtag: ${tag}`),
							},
						]}
					/>

					<ConfirmationModal
						offer={offer}
						buyerModalVisible={buyerModalVisible}
						setBuyerModalVisible={setBuyerModalVisible}
						buyerConfirmation={buyerConfirmation}
						sellerModalVisible={sellerModalVisible}
						setSellerModalVisible={setSellerModalVisible}
						sellerConfirmation={sellerConfirmation}
					/>
				</View>
			)}
		</>
	);
}
