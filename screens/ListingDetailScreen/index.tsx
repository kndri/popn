import React from 'react';

import {
	View,
	Modal,
	TouchableOpacity,
	TextInput,
	ActionSheetIOS,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { SliderBox } from 'react-native-image-slider-box';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';

import {
	AutoImage as Image,
	Button,
	Header,
	Screen,
	Text,
	VerificationBage,
} from '../../components';

import { useToast } from '../../components/Toast';

import {
	addChatRoom,
	addChatRoomUser,
	addOffer,
	deleteUserListing,
	fetchListedItemByUser,
} from '../../aws-functions/aws-functions';

import { createMessage, updateChatRoom } from '../../src/graphql/mutations';
import { offerByUser } from '../../src/graphql/queries';
import { spacing } from '../../theme';
import { useAuth } from '../../contexts/auth';
import styles from './styles';

const example = require('../../assets/images/verify_example.png');
const verified = require('../../assets/images/verified_badge.png');

const ListingDetailsScreen = (props: any) => {
	const listing = props.route.params;
	const { sneakerData, seller } = listing;
	const { authData: user } = useAuth();
	const toast = useToast();
	const navigation = useNavigation();
	const [offerModalVisible, setOfferModalVisible] = React.useState(false);
	const [authenticationModalVisible, setAuthenticationModalVisible] =
		React.useState(false);
	const isFocused = useIsFocused();
	const [offerAmount, setOfferAmount] = React.useState('');
	const [offerMessage, setOfferMessage] = React.useState('');
	const [listingCount, setListingCount] = React.useState(0);

	const fetchSellersListedItems = async () => {
		const listings = await fetchListedItemByUser(seller.id).catch((err) =>
			console.log('error', err)
		);
		setListingCount(listings.length);
	};

	React.useEffect(() => {
		fetchSellersListedItems();
	}, [isFocused]);

	const createNotification = async (
		message: string,
		chatRoomID: string,
		offerID: string
	) => {
		const messageNotifcation = {
			to: seller.expoToken,
			sound: 'default',
			title: 'Offer Made!',
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

	const handleAction = () =>
		ActionSheetIOS.showActionSheetWithOptions(
			{
				options: ['Cancel', 'Delete Listing'],
				destructiveButtonIndex: 1,
				cancelButtonIndex: 0,
			},
			(buttonIndex) => {
				if (buttonIndex === 1) {
					//TO-DO: Change this function to update the status of listing to unavailable. Requires to updated the Schema.
					deleteUserListing(listing.id).then(() => {
						navigation.goBack();
					});
				}
			}
		);

	const onClick = async (offer: any) => {
		try {
			//  1. Create a new Chat Room
			const newChatRoomData = await addChatRoom(offer.createOffer.id);

			if (!newChatRoomData.data) {
				console.log(' Failed to create a chat room');
				return;
			}

			const newChatRoom = newChatRoomData.data.createChatRoom;

			// 2. Add `seller` to the Chat Room
			await addChatRoomUser(seller.id, newChatRoom.id);

			// 3. Add authenticated user/ buyer to the Chat Room
			await addChatRoomUser(user?.id as string, newChatRoom.id);

			// 4. Add first automated message

			const automatedMessage = `${user?.username} has offered $${offerAmount} for the item: ${sneakerData.primaryName} ${sneakerData.secondaryName}. Please accept or decline the offer.`;

			const firstMessage = await API.graphql(
				graphqlOperation(createMessage, {
					input: {
						text: automatedMessage,
						userID: user?.id,
						chatRoomID: newChatRoom.id,
					},
				})
			);

			const updateChatRoomLastMessage = async (messageId: string) => {
				try {
					await API.graphql(
						graphqlOperation(updateChatRoom, {
							input: {
								id: newChatRoom.id,
								lastMessageID: messageId,
								receiverHasRead: false,
							},
						})
					);
				} catch (e) {
					console.log(e);
				}
			};

			await updateChatRoomLastMessage(firstMessage.data.createMessage.id);

			// 5. Add second optional offer message
			if (offerMessage !== '') {
				const optionalMessage = await API.graphql(
					graphqlOperation(createMessage, {
						input: {
							text: offerMessage,
							userID: user?.id,
							chatRoomID: newChatRoom.id,
						},
					})
				);

				await updateChatRoomLastMessage(optionalMessage.data.createMessage.id);
			}

			//4 create Notification with message
			await createNotification(
				automatedMessage,
				newChatRoom.id,
				offer.createOffer.id
			);

			navigation.navigate('MessageRoom', {
				id: newChatRoom.id,
				name: seller.username,
				offerID: offer.createOffer.id,
			});
		} catch (e) {
			console.log(e);
		}
	};

	const doesOfferExist = async () => {
		try {
			let offerList: any;
			let offerExist = false;

			if (seller.id == user?.id) {
				return toast.show(`Cannot Make Yourself An Offer.`, {
					color: 'red',
				});
			}

			const offersMade = await API.graphql(
				graphqlOperation(offerByUser, {
					buyingUserID: user?.id,
				})
			);

			offerList = offersMade.data.offerByUser.items;
			offerList.map((item) => {
				if (item.listedItemID == listing.id) {
					if (item.status == 'pending') {
						return (offerExist = true);
					}
				}
			});

			if (offerExist) {
				return toast.show(`Offer Already In Progress. Go To Messages.`, {
					color: 'red',
				});
			}

			setOfferModalVisible(!offerModalVisible);
		} catch (err) {
			console.log('error:', err);
		}
	};

	/**
	 * use getOfferByUser(buyersID) to check if an offer already exist
	 * so user does not make another offer
	 */

	return (
		<Screen preset="scroll" statusBar="dark-content">
			{/* OFfER MODAL CODE*/}
			<Modal
				animationType="slide"
				// transparent={true}
				presentationStyle="pageSheet"
				visible={offerModalVisible}
				onRequestClose={() => {
					setOfferModalVisible(!offerModalVisible);
				}}
			>
				<View style={styles.CENTERED_VIEW}>
					<View style={styles.MODAL_VIEW}>
						<Header
							rightIcon="close"
							onRightPress={() => {
								setOfferModalVisible(!offerModalVisible);
							}}
						/>
						<View>
							<Text preset="bold">Your Offer</Text>
							<View style={styles.OFFER_BOX}>
								<FontAwesome name="dollar" size={15} color="black" />
								<TextInput
									style={{
										flex: 1,
										width: '100%',
										height: 35,
										borderWidth: 1,
										borderRadius: 5,
										borderColor: '#FFFFFF',
										backgroundColor: 'white',
										alignItems: 'flex-start',
										paddingLeft: 3,
									}}
									value={offerAmount}
									autoCorrect={false}
									onChangeText={(text) => setOfferAmount(text)}
									placeholder="0"
									placeholderTextColor={'#878C90'}
									keyboardType="numeric"
									returnKeyType="done"
								/>
							</View>
						</View>

						<View style={{ marginTop: 31 }}>
							<Text preset="bold">Add a Message (optional)</Text>
							<View style={styles.MESSAGE_BOX}>
								<TextInput
									style={{
										flex: 1,
										width: '10%',
										height: '100%',
										borderWidth: 1,
										paddingLeft: 10,
										borderRadius: 5,
										borderColor: '#FFFFFF',
										backgroundColor: 'white',
									}}
									value={offerMessage}
									autoCorrect={false}
									onChangeText={(text) => setOfferMessage(text)}
									placeholder=""
									placeholderTextColor={'#878C90'}
									keyboardType="default"
									multiline={true}
									blurOnSubmit={true}
									returnKeyType="done"
								/>
							</View>
						</View>

						<Button
							style={
								offerAmount ? styles.OFFER_BUTTON : styles.DISABLED_OFFER_BUTTON
							}
							text="Make Offer"
							onPress={() => {
								addOffer({
									offerAmount: offerAmount,
									buyingUserID: user?.id as string,
									sellingUserID: seller.id,
									listedItemID: listing.id,
								})
									.then((offer) => {
										onClick(offer);
										setOfferModalVisible(!offerModalVisible);
									})
									.catch((err) => console.log('error:', err));
							}}
							disabled={offerAmount ? false : true}
						/>
					</View>
				</View>
			</Modal>
			{/* END OF OFFER MODAL CODE*/}

			{/* AUTHENTICATION PROCESS MODAL CODE*/}
			<Modal
				animationType="slide"
				// transparent={true}
				presentationStyle="pageSheet"
				visible={authenticationModalVisible}
				onRequestClose={() => {
					setAuthenticationModalVisible(!authenticationModalVisible);
				}}
			>
				<View style={styles.MODAL_CONTAINER}>
					<Header
						headerTx="Sneaker Verification"
						rightIcon="close"
						onRightPress={() => {
							setAuthenticationModalVisible(!authenticationModalVisible);
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

					<View style={styles.MODAL_EXAMPLE}>
						<Image style={styles.MODAL_SHOE_IMAGE} source={example} />
					</View>

					<View style={styles.MODAL_PROCESS}>
						<Text preset="bold">How to get your sneaker verified?</Text>
						<View style={{ marginTop: 30 }}>
							<Text preset="default">
								1. Download the CheckCheck app to get started{'\n'}
								{'\n'}
								2. Go through the verficiation process on CheckCheck{'\n'}
								{'\n'}
								3. Enter your reference number on POPN
							</Text>
						</View>
					</View>
				</View>
			</Modal>

			<Header
				style={styles.BACK_BUTTON}
				leftIcon="back"
				rightIcon={user?.id == seller.id ? 'more' : undefined}
				onLeftPress={() => navigation.goBack()}
				onRightPress={() => handleAction()}
			/>

			{/* authenticated box heading */}
			<View style={styles.AUTHENTICATED_HEADING}>
				<View style={styles.AUTHENTICATED_HEADING_BOX}>
					<VerificationBage type="full" />
				</View>
			</View>

			{/* image slider */}
			<SliderBox
				images={listing.images}
				sliderBoxHeight={315}
				dotColor="black"
				inactiveDotColor="#90A4AE"
				circleLoop
				resizeMethod={'resize'}
				resizeMode={'contain'}
				paginationBoxStyle={{
					position: 'absolute',
					bottom: 0,
					padding: 0,
					alignItems: 'center',
					alignSelf: 'center',
					justifyContent: 'center',
					paddingVertical: 10,
				}}
				dotStyle={{
					width: 10,
					height: 10,
					borderRadius: 5,
					marginHorizontal: 0,
					padding: 0,

					backgroundColor: 'rgba(128, 128, 128, 0.92)',
				}}
				imageLoadingColor="black"
			/>
			{/* end of image slider */}

			{/* listing details section  */}
			<View style={styles.LISTING_DETAILS}>
				<Text preset="bold" text={`#${listing.brand}`} />
				<Text
					preset="default"
					text={`${sneakerData.primaryName} ${sneakerData.secondaryName}`}
					style={{ marginTop: 20 }}
				/>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<FontAwesome
						name="dollar"
						size={30}
						color="black"
						style={{ marginTop: 20 }}
					/>
					<Text
						preset="header"
						text={listing.price}
						style={{ marginTop: 20 }}
					/>
				</View>

				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text preset="default" text="Condition" style={{ marginTop: 31 }} />
					<Text
						preset="default"
						text={listing.condition}
						style={{ marginTop: 31 }}
					/>
				</View>

				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text preset="default" text="Size" style={{ marginTop: 31 }} />
					<Text
						preset="default"
						text={listing.size}
						style={{ marginTop: 31 }}
					/>
				</View>

				<View style={{ justifyContent: 'space-between' }}>
					<Text
						preset="bold"
						text="Description"
						style={{ marginTop: 31, textDecorationLine: 'underline' }}
					/>
					<Text
						preset="default"
						text={listing.description}
						style={{ marginTop: 5 }}
					/>
				</View>
			</View>

			{/* authenticated details box */}
			<View style={styles.AUTHENTICATED_INFO_BOX}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Image source={verified} style={{ height: 20, width: 20 }} />
					<Text preset="bold" style={{ marginLeft: 6, fontSize: 16 }}>
						Authenticated
					</Text>
				</View>
				<Text preset="default" style={{ marginTop: 5 }}>
					Our authentication partner has reviewed the images, title, and
					description of this listing to verify this item. Learn more about the
					partner's
					<Text
						preset="bold"
						style={{ textDecorationLine: 'underline' }}
						onPress={() =>
							setAuthenticationModalVisible(!authenticationModalVisible)
						}
					>
						{' '}
						authentication process.
					</Text>
				</Text>
			</View>

			<View style={{ paddingHorizontal: spacing[4], marginBottom: 36 }}>
				<Text preset="bold" style={{ fontSize: 16 }}>
					Seller
				</Text>
				<View style={{ flexDirection: 'row', marginTop: 4 }}>
					<Image
						source={{ uri: seller.avatarImageURL }}
						style={{ height: 35, width: 35, borderRadius: 50 }}
					/>
					<View style={{ marginLeft: 5 }}>
						<Text preset="bold">{seller.username}</Text>
						<TouchableOpacity
							onPress={() => {
								if (user?.id == seller.id) {
									navigation.navigate('Profile');
								} else {
									navigation.navigate('UserProfile', seller.id);
								}
							}}
						>
							<Text
								preset="default"
								style={{ textDecorationLine: 'underline' }}
							>
								{listingCount} items for sale
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View
				style={{
					paddingHorizontal: spacing[4],
					paddingBottom: 50,
				}}
			>
				<Button
					style={{
						height: 50,
						borderRadius: 4,
						flexDirection: 'row',
						alignSelf: 'center',
						width: '100%',
					}}
					text="Offer"
					onPress={() => {
						doesOfferExist();
					}}
				/>
			</View>
		</Screen>
	);
};

export default ListingDetailsScreen;
