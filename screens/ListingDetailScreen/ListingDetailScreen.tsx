import React from 'react';
import {
	View,
	ViewStyle,
	ImageStyle,
	Modal,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import {
	Screen,
	Text,
	Header,
	AutoImage as Image,
	Button,
	TextField,
	VerificationBage,
} from '../../components';
import { useNavigation } from '@react-navigation/native';
import { color, spacing } from '../../theme';
import { SliderBox } from 'react-native-image-slider-box';
import { FontAwesome } from '@expo/vector-icons';

import styles from './Styles';

const example = require("../../assets/images/verify_example.png");
const verified = require('../../assets/images/verified_badge.png');
const Seller = require('../../assets/images/UserImage.png');

const ListingDetailsScreen = (props: any) => {
	const product = props.route.params;
	const { sneakerData, seller } = product;
	const navigation = useNavigation();
	const [offerModalVisible, setOfferModalVisible] = React.useState(false);
	const [authenticationModalVisible, setAuthenticationModalVisible] = React.useState(false);
	const [offerAmount, setOfferAmount] = React.useState('');
	const [offerMessage, setOfferMessage] = React.useState('');
	const [listingImages, setListingImages] = React.useState([
		'https://popnd82dea5bd54c4b12aa305515ccc9e5e8132355-dev.s3.amazonaws.com/public/test1ProfileImage.jpeg',
	]);

	return (
		<Screen preset="scroll">
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
								<FontAwesome name="dollar" size={20} color="black" />
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
							onPress={() => setOfferModalVisible(!offerModalVisible)}
							disabled={offerAmount ? false : true}
						/>
					</View>
				</View>
			</Modal>
			{/* END OF OFFER MODAL CODE*/}


			{/* AUTHENTICATION PROCESS MODAL CODE*/}
			<Modal
				animationType="slide"
				transparent={true}
				presentationStyle="formSheet"
				visible={authenticationModalVisible}
				onRequestClose={() => {
					setAuthenticationModalVisible(!authenticationModalVisible);
				}}
			>
				<View style={styles.MODAL_CONTAINER}>

					<Header
						headerTx='Sneaker Verification'
						rightIcon="close"
						onRightPress={() => {
							setAuthenticationModalVisible(!authenticationModalVisible);

						}}
					/>

					<View style={styles.MODAL_HEADING_TEXT}>
						<Text preset='default'>
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
						<Text preset="bold" >
							How to get your sneaker verified?
						</Text>
						<View style={{ marginTop: 30 }}>
							<Text preset='default'>
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
				images={product.images}
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

			{/* product details section  */}
			<View style={styles.LISTING_DETAILS}>
				<Text preset="bold" text={`#${product.brand}`} />
				<Text
					preset="default"
					text={`${sneakerData.primary_name} ${sneakerData.secondary_name}`}
					style={{ marginTop: 20 }}
				/>
				<Text preset="header" text={product.price} style={{ marginTop: 20 }} />

				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text preset="default" text="Condition" style={{ marginTop: 31 }} />
					<Text
						preset="default"
						text={product.condition}
						style={{ marginTop: 31 }}
					/>
				</View>

				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text preset="default" text="Size" style={{ marginTop: 31 }} />
					<Text
						preset="default"
						text={product.size}
						style={{ marginTop: 31 }}
					/>
				</View>


				<View style={{ justifyContent: 'space-between' }}>
					<Text preset="bold" text="Description" style={{ marginTop: 31, textDecorationLine: 'underline' }} />
					<Text
						preset="default"
						text={product.description}
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

					<Text preset="bold" style={{ textDecorationLine: 'underline', }} onPress={() => setAuthenticationModalVisible(!authenticationModalVisible)}> authentication process.</Text>

				</Text>

			</View>

			<View style={{ paddingHorizontal: spacing[4] }}>
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

			{/* <View style={{ marginTop: 36, paddingHorizontal: spacing[4], position: 'absolute', bottom: 50, alignSelf: 'center', width: '100%' }}> */}
			<View
				style={{
					marginTop: 36,
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