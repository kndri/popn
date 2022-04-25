import React from 'react';
import { View, Modal, TouchableOpacity, TextInput } from 'react-native';

import { API, graphqlOperation } from 'aws-amplify';
import { FontAwesome } from '@expo/vector-icons';
import { SliderBox } from 'react-native-image-slider-box';
import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import {
	AutoImage as Image,
	Button,
	Header,
	Screen,
	Text,
	VerificationBage,
} from '../../components';

import {
	addChatRoom,
	addChatRoomUser,
	addOffer,
	getUserFromDb,
} from '../../aws-functions/aws-functions';

import {
	createMessage,
	pinpoint,
	updateChatRoom,
	updateUser,
} from '../../src/graphql/mutations';
import { spacing } from '../../theme';
import { useAuth } from '../../contexts/auth';

import styles from './styles';

const example = require('../../assets/images/verify_example.png');
const verified = require('../../assets/images/verified_badge.png');
const Seller = require('../../assets/images/UserImage.png');

const ListingDetailsScreen = (props: any) => {
	const listing = props.route.params;
	const { sneakerData, seller } = listing;
	const { authData: user } = useAuth();
	const navigation = useNavigation();
	const [offerModalVisible, setOfferModalVisible] = React.useState(false);
	const [authenticationModalVisible, setAuthenticationModalVisible] =
		React.useState(false);
	const [offerAmount, setOfferAmount] = React.useState('');
	const [offerMessage, setOfferMessage] = React.useState('');
	const [expoToken, setExpoToken] = React.useState<any>();

	React.useEffect(() => {
		// There is no expoToken available yet, so we will request that and save it into the profile
		const CheckNotificationToken = async () => {
			const profile = await getUserFromDb(user?.id as string).catch((err) =>
				console.log('error:', err)
			);

			if (profile.expoToken === null) {
				const { status } = await Permissions.askAsync(
					Permissions.NOTIFICATIONS
				);
				if (status !== 'granted') {
					alert('No notification permissions!');
					return;
				}
				let token = (await Notifications.getExpoPushTokenAsync()).data;

				// let token = (
				// 	await Notifications.getExpoPushTokenAsync({
				// 		experienceId: `${user?.username}/example`,
				// 	})
				// ).data;
				console.log('token', token);

				// Only update the profile with the expoToken if it not exists yet
				if (token !== undefined) {
					const inputParams = {
						id: user?.id,
						expoToken: token,
					};
					setExpoToken(token);

					try {
						await API.graphql(
							graphqlOperation(updateUser, { input: inputParams })
						);
					} catch (err) {
						console.log('error:', err);
					}
				}
			}

			setExpoToken(profile.expoToken);
		};
		CheckNotificationToken();
	}, []);

	const createNotification = async (message: string) => {
		console.log('expoToken', expoToken);
		const inputParams = {
			token: expoToken,
			username: user?.username,
			email: user?.email,
			message: message,
			id: user?.id,
		};
		try {
			const respose = await API.graphql(
				graphqlOperation(pinpoint, { input: inputParams })
			);
			console.log('response', respose);
		} catch (err) {
			console.log('error:', err);
		}
	};

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
			await createNotification(automatedMessage);

			navigation.navigate('MessageRoom', {
				id: newChatRoom.id,
				name: seller.username,
				offerID: offer.createOffer.id,
			});
		} catch (e) {
			console.log(e);
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
				onLeftPress={() => navigation.goBack()}
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
						<TouchableOpacity>
							<Text
								preset="default"
								style={{ textDecorationLine: 'underline' }}
							>
								11 items for sale
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
						setOfferModalVisible(!offerModalVisible);
					}}
				/>
			</View>
		</Screen>
	);
};

export default ListingDetailsScreen;
