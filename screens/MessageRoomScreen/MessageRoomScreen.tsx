import * as React from 'react';
import { View, ViewStyle, Image, ActivityIndicator, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GiftedChat, Bubble, Send, Composer } from 'react-native-gifted-chat';
import { IMessage } from '../../types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { API, graphqlOperation } from 'aws-amplify';
import { createMessage, updateChatRoom, updateOffer, updateSneaker } from '../../src/graphql/mutations';
import {
	messagesByChatRoom,
	getOffer,
	getListedItem,
} from '../../src/graphql/queries';
import { onCreateMessage, onUpdateOffer } from '../../src/graphql/subscriptions';
import { spacing } from '../../theme';
import { Header, Text, Button } from '../../components';
import { useToast } from '../../components/Toast';



import styles from './Styles';
import { useAuth } from '../../contexts/auth';
import { ListedItem, Offer } from '../../src/API';

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
	const { offerID, id, name } = route.params;
	const insets = useSafeAreaInsets();
	const [isLoading, setIsLoading] = React.useState(true);
	const [offer, setOffer] = React.useState<{}>({});
	const [seller, setSeller] = React.useState('');
	const [listing, setListing] = React.useState<{}>({});
	const [messages, setMessages] = React.useState<IMessage[]>([]);
	const [buyerModalVisible, setBuyerModalVisible] = React.useState(false);
	const [sellerModalVisible, setSellerModalVisible] = React.useState(false);
	const toast = useToast();

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

	React.useEffect(() => {
		fetchMessages();
		fetchOffer(offerID);
	}, []);

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

	React.useEffect(() => {
		const subscription = API.graphql(
			graphqlOperation(onUpdateOffer)
		).subscribe({
			next: (data) => {
				const updatedOffer = data.value.data.onUpdateOffer;
				setOffer(updatedOffer)
			},
		});
		return () => subscription.unsubscribe();
	}, []);

	const updateChatRoomLastMessage = async (messageId: string) => {
		try {
			await API.graphql(
				graphqlOperation(updateChatRoom, {
					input: {
						id: id,
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
						chatRoomID: id,
					},
				})
			);
			await updateChatRoomLastMessage(newMessageData.data.createMessage.id);
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

				await updateChatRoomLastMessage(acceptedMessageData.data.createMessage.id);
			}
			catch (error) {
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
				await updateChatRoomLastMessage(declinedMessageData.data.createMessage.id);
			}
			catch (error) {
				console.log(error);
			}
		} catch (error) {
			console.log(error);
		}
	};

	//switching owership of shoes to the buyer via seller confirmation
	const sellerConfirmation = async (offer) => {

		//updating offer status to completed
		try {
			await API.graphql(
				graphqlOperation(updateOffer, {
					input: {
						id: offer.id,
						status: 'completed',
					},
				})
			);


			//add the seller to prevSellers array
			await API.graphql(
				graphqlOperation(updateSneaker, {
					input: {
						id: offer.listedItem.sneakerData.id,
						prevSellers: offer.listedItem.seller.username,
					},
				})
			);

			//make buyer the new owner of shoe 
			await API.graphql(
				graphqlOperation(updateSneaker, {
					input: {
						id: offer.listedItem.sneakerData.id,
						userID: offer.buyingUserID,
					},
				})
			);

			//close modal 
			setSellerModalVisible(!sellerModalVisible)

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

				await updateChatRoomLastMessage(confirmedMessageData.data.createMessage.id);
				toast.show(`Successful Transfer.`);
			}
			catch (error) {
				console.log(error);
			}
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
					{console.log('offer data:', offer)}

					{/* BUYER CONFIRMATION MODAL CODE*/}
					<Modal
						animationType="slide"
						// transparent={true}
						presentationStyle="pageSheet"
						visible={buyerModalVisible}
						onRequestClose={() => {
							setBuyerModalVisible(!buyerModalVisible);
						}}
					>
						<View style={styles.MODAL_CONTAINER}>
							<Header
								headerTx="BUYER MODAL"
								rightIcon="close"
								onRightPress={() => {
									setBuyerModalVisible(!buyerModalVisible);
								}}
							/>

							<View style={styles.MODAL_HEADING_TEXT}>
								<Text preset="default">
									Want to let people know your sneakers are legit? 🤔 {'\n'}
									{'\n'}
									The green verified badge on sneakers lets people know that your
									sneaker were legit checked and are authentic.{'\n'}
									{'\n'}
									Example:
								</Text>
							</View>


							<View style={styles.MODAL_PROCESS}>
								<Text preset="bold">Are you ready to finalize the transaction?</Text>
								<View style={{ marginTop: 30 }}>
									<Text preset="default">
										1. You've met with the seller{'\n'}
										{'\n'}
										2. You've paid the seller{'\n'}
										{'\n'}
										3. You've received your shoes{'\n'}
										{'\n'}
										4. You're satisfied{'\n'}
										{'\n'}
									</Text>
								</View>
							</View>

							{/* <View style={{ alignSelf: 'center', marginTop: 5 }}> */}
							<Button
								style={{
									borderRadius: 4,
									width: "100%",
								}}
								text="Confirm Transaction"
								onPress={() => { setBuyerModalVisible(!buyerModalVisible) }}
							/>
							{/* </View> */}
						</View>
					</Modal>
					{/* END OF BUYER CONFIRMATION MODAL CODE*/}

					{/* SELLER CONFIRMATION MODAL CODE*/}
					<Modal
						animationType="slide"
						// transparent={true}
						presentationStyle="pageSheet"
						visible={sellerModalVisible}
						onRequestClose={() => {
							setSellerModalVisible(!sellerModalVisible);
						}}
					>
						<View style={styles.MODAL_CONTAINER}>
							<Header
								headerTx="SELLER MODAL"
								rightIcon="close"
								onRightPress={() => {
									setSellerModalVisible(!sellerModalVisible);
								}}
							/>

							<View style={styles.MODAL_HEADING_TEXT}>
								<Text preset="default">
									Want to let people know your sneakers are legit? 🤔 {'\n'}
									{'\n'}
									The green verified badge on sneakers lets people know that your
									sneaker were legit checked and are authentic.{'\n'}
									{'\n'}
									Example:
								</Text>
							</View>


							<View style={styles.MODAL_PROCESS}>
								<Text preset="bold">How to get your sneaker verified?</Text>
								<View style={{ marginTop: 30 }}>
									<Text preset="default">
										1. You've met with the buyer{'\n'}
										{'\n'}
										2. You've received payment{'\n'}
										{'\n'}
										3. You've given the shoes to the buyer{'\n'}
										{'\n'}
										4. You're satisfied{'\n'}
										{'\n'}
									</Text>
								</View>
							</View>
							<View style={{ alignSelf: 'center', marginTop: 5 }}>
								<Button
									style={{
										borderRadius: 4,
										width: 319,
									}}
									text="Confirm Transaction"
									onPress={() => { sellerConfirmation(offer) }}
								/>
							</View>
						</View>
					</Modal>
					{/* END OF SELLER CONFIRMATION MODAL CODE*/}

					{/* header view */}
					<View style={[styles.CENTER, { marginTop: insets.top }]}>
						<Header
							headerTx={`${name}`}
							leftIcon="back"
							onLeftPress={() => navigation.navigate('Message')}
						/>
					</View>

					{/* view for offer data */}
					{user.id == offer.sellingUserID && (
						<>
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
											onPress={() => { acceptOFfer(offer.id) }}
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
											onPress={() => { declineOFfer(offer.id) }}
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
										setSellerModalVisible(!sellerModalVisible)
									} else {
										setBuyerModalVisible(!buyerModalVisible)
									}
								}}
							/>
						</View>
					)}
					{/* end view for offer data */}

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
				</View>
			)}
		</>
	);
}