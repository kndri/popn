import React from 'react';
import { View, Modal, ActionSheetIOS } from 'react-native';
import {
	Screen,
	Text,
	Header,
	AutoImage as Image,
	Button,
} from '../../components';
import { useToast } from '../../components/Toast';
import {
	useIsFocused,
	useNavigation,
	useRoute,
} from '@react-navigation/native';

import {
	checkLoggedUser,
	deleteUserSneaker,
	getCurrentSneaker,
} from '../../aws-functions/aws-functions';

import styles from './Styles';
import { useAuth } from '../../contexts/auth';

const example = require('../../assets/images/verify_example.png');
const verified = require('../../assets/images/verified_badge.png');

const ShoeDetailsScreen = () => {
	const route = useRoute();
	const { shoeID }: any = route.params;
	const { authData: user } = useAuth();
	const isFocused = useIsFocused();
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = React.useState(false);
	const [sneaker, setSneaker] = React.useState<any>({});
	const [claim, setClaim] = React.useState<any>({});
	const [isSignedinUser, setIsSignedinUser] = React.useState<boolean>();
	const toast = useToast();

	/**
	 * If the signed in user ID matches with the current shoe owner
	 * then the signed in user is viewing its own shoe
	 * Else it is another user
	 */
	const getShoe = async () => {
		const sneaker = await getCurrentSneaker(shoeID);

		switch (sneaker.userID) {
			case user?.id:
				setIsSignedinUser(true);
				break;
			default:
				setIsSignedinUser(false);
		}

		if (sneaker.claim.items.length > 0) {
			setClaim(sneaker.claim.items[0]);
		}
		setSneaker(sneaker);
	};

	const handleAction = () =>
		ActionSheetIOS.showActionSheetWithOptions(
			{
				options:
					claim.status == 'verified'
						? ['Cancel', 'Create a Listing', 'Delete Sneaker']
						: ['Cancel', 'Delete Sneaker'],
				destructiveButtonIndex: 1,
				cancelButtonIndex: 0,
			},
			(buttonIndex) => {
				if (claim.status == 'verified') {
					if (buttonIndex === 1) {
						navigation.navigate('NewListing', { sneakerData: sneaker });
					} else if (buttonIndex === 2) {
						deleteUserSneaker(shoeID).then(() => navigation.goBack());
					}
				} else {
					if (buttonIndex === 1) {
						deleteUserSneaker(shoeID).then(() => navigation.goBack());
					}
				}
			}
		);

	React.useEffect(() => {
		const rerender = navigation.addListener('focus', () => {
			if (isFocused) {
				getShoe();
			}
		});
	}, [isFocused]);

	React.useEffect(() => {
		getShoe();
	}, []);

	return (
		<Screen style={styles.CONTAINER}>
			<Modal
				animationType="slide"
				// transparent={true}
				presentationStyle="formSheet"
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.MODAL_CONTAINER}>
					<Header
						headerTx="Sneaker Verification"
						rightIcon="close"
						onRightPress={() => {
							setModalVisible(!modalVisible);
						}}
					/>
					<View style={styles.MODAL_HEADING_TEXT}>
						<Text style={{ color: 'black', fontSize: 13 }}>
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
						<Text preset="bold" style={{ color: 'black', fontSize: 15 }}>
							How to get your sneaker verified?
						</Text>
						<View style={{ marginTop: 30 }}>
							<Text style={{ color: 'black', fontSize: 13 }}>
								1. Download the CheckCheck app to get started{'\n'}
								{'\n'}
								2. Go through the verficiation process on CheckCheck{'\n'}
								{'\n'}
								3. Enter your reference number on POPN
							</Text>
						</View>
					</View>

					<View style={{ marginTop: 30, marginBottom: 30 }}>
						<Text style={{ color: 'black', fontSize: 13, textAlign: 'center' }}>
							Have your reference number handy?
						</Text>
					</View>
					<Button
						style={{
							backgroundColor: 'black',
							width: '85%',
							alignSelf: 'center',
						}}
						textStyle={{ color: 'white' }}
						text="Get Sneaker Verified"
						onPress={() => {
							setModalVisible(false);
							navigation.navigate('Verify', { shoeID: shoeID });
						}}
					/>
				</View>
			</Modal>

			<Header
				style={styles.BACK_BUTTON}
				leftIcon="back"
				rightIcon="more"
				onLeftPress={() => navigation.goBack()}
				onRightPress={() => handleAction()}
			/>
			<View style={styles.SHOE_HEADING}>
				<Text
					preset="secondary"
					text={sneaker.primaryName}
					style={{ fontSize: 20 }}
				/>
				<Text
					preset="header"
					text={sneaker.secondaryName}
					style={{ fontSize: 30 }}
				/>
				{claim.status === 'verified' ? (
					<Image source={verified} style={{ marginTop: 5 }} />
				) : null}
			</View>
			<View style={styles.IMAGE_CONTAINER}>
				<Image
					style={styles.SHOE_STYLE}
					source={{
						uri: sneaker.image,
					}}
				/>
			</View>

			<View style={styles.SHOE_DATA}>
				<Text preset="bold" text="SNEAKER DETAILS" style={{ fontSize: 20 }} />

				{isSignedinUser ? (
					<>
						{claim.id ? (
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									paddingTop: 10,
								}}
							>
								<Text text="Status" />
								<Text text={claim.claimMessage} />
							</View>
						) : (
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									paddingTop: 10,
								}}
							>
								<Text text="Status" />
								<Text text="Sneaker Not Verified" />
							</View>
						)}
					</>
				) : null}
			</View>
			{isSignedinUser ? (
				<>
					{claim.id ? (
						<>
							{claim.status === 'pending' ? (
								<Button text="Pending" preset="primary" />
							) : claim.status === 'verified' ? (
								<Button
									text="Verified"
									preset="primary"
									style={{ backgroundColor: '#00A542' }}
								/>
							) : (
								<Button
									text="Denied"
									preset="primary"
									style={{ backgroundColor: '#ef0a0a' }}
								/>
							)}
						</>
					) : (
						<Button
							text="Verify Sneaker"
							preset="primary"
							onPress={() => setModalVisible(true)}
						/>
					)}
				</>
			) : (
				<Button
					text="Contact User"
					preset="primary"
					// onPress={() => setModalVisible(true)}
				/>
			)}
		</Screen>
	);
};

export default ShoeDetailsScreen;
