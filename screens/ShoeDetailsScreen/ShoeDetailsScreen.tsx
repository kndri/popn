import React from 'react';
import { View, ViewStyle, ImageStyle, Modal } from 'react-native';
import {
	Screen,
	Text,
	Header,
	AutoImage as Image,
	Button,
} from '../../components';
import {
	useIsFocused,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';

import {
	checkLoggedUser,
	getCurrentSneaker,
} from '../../aws-functions/aws-functions';

import styles from './Styles';

const example = require('../../assets/images/verify_example.png');
const verified = require('../../assets/images/verified_badge.png');

const ShoeDetailsScreen = () => {
	const route = useRoute();
	const { shoeID }: any = route.params;
	const isFocused = useIsFocused();
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = React.useState(false);
	const [sneaker, setSneaker] = React.useState<any>({});
	const [claim, setClaim] = React.useState<any>({});
	const [isMain, setIsMain] = React.useState<boolean>();

	const getShoe = async () => {
		const shoe = await getCurrentSneaker(shoeID);
		const user = await checkLoggedUser();
		if (shoe.userID === user.attributes.sub) {
			setIsMain(true);
		} else {
			setIsMain(false);
		}

		if (shoe.claim.items.length > 0) {
			setClaim(shoe.claim.items[0]);
		}
		setSneaker(shoe);
	};

	const checking = async () => {
		const user = await checkLoggedUser();

		if (sneaker.userID === user.attributes.sub) {
			if (claim) {
				return [
					<>
						<View style={styles.SHOE_DATA}>
							<Text
								preset="bold"
								text="SNEAKER DETAILS"
								style={{ fontSize: 20 }}
							/>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									paddingTop: 20,
								}}
							>
								<Text text="Retail Price" />
								<Text text="$225" />
							</View>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									paddingTop: 10,
								}}
							>
								<Text text="Release Date" />
								<Text text="12/11/2021" />
							</View>
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
						</View>
					</>,
				];
			}
		}

		return [
			<>
				<View style={styles.SHOE_DATA}>
					<Text preset="bold" text="SNEAKER DETAILS" style={{ fontSize: 20 }} />
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							paddingTop: 20,
						}}
					>
						<Text text="Retail Price" />
						<Text text="$225" />
					</View>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							paddingTop: 10,
						}}
					>
						<Text text="Release Date" />
						<Text text="12/11/2021" />
					</View>
				</View>

				<Button
					text="Contact User"
					preset="primary"
					// onPress={() => setModalVisible(true)}
				/>
			</>,
		];
	};

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
			<GestureRecognizer
				onSwipeDown={() => setModalVisible(false)}
				style={{ backgroundColor: 'red', padding: 0, margin: 0 }}
				config={{
					velocityThreshold: 0.1,
					directionalOffsetThreshold: 10,
				}}
			>
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
						<View style={styles.MODAL_HEADING}>
							<Text
								text="Sneaker Verification"
								preset="header"
								style={{ color: 'white', textAlign: 'center' }}
							/>
						</View>
						<View style={styles.MODAL_HEADING_TEXT}>
							<Text style={{ color: 'white', fontSize: 13 }}>
								Want to let people know your sneakers are legit? 🤔 {'\n'}
								{'\n'}
								The green verified badge on sneakers lets people know that your
								sneaker were legit checked and are authentic.{'\n'}
								{'\n'}
								Example:
							</Text>
						</View>
						<View style={styles.MODAL_EXAMPLE}>
							<View style={styles.MODAL_IMAGE_CONTAINER}>
								<Image style={styles.MODAL_SHOE_IMAGE} source={example} />
							</View>
						</View>
						<View style={styles.MODAL_PROCESS}>
							<Text preset="bold" style={{ color: 'white', fontSize: 15 }}>
								How to get your sneaker verified?
							</Text>
							<View style={{ marginTop: 30 }}>
								<Text style={{ color: 'white', fontSize: 13 }}>
									1. Download the CheckCheck app to get started{'\n'}
									{'\n'}
									2. Go through the verficiation process on CheckCheck{'\n'}
									{'\n'}
									3. Enter your reference number on POPN
								</Text>
							</View>
						</View>

						<View style={{ marginTop: 30, marginBottom: 30 }}>
							<Text
								style={{ color: 'white', fontSize: 13, textAlign: 'center' }}
							>
								Have your reference number handy?
							</Text>
						</View>
						<Button
							style={{
								backgroundColor: 'white',
								width: '85%',
								alignSelf: 'center',
							}}
							textStyle={{ color: 'black' }}
							text="Get Sneaker Verified"
							onPress={() => {
								setModalVisible(false);
								navigation.navigate('Verify', { shoeID: shoeID });
							}}
						/>
					</View>
				</Modal>
			</GestureRecognizer>

			<Header
				style={styles.BACK_BUTTON}
				leftIcon="back"
				onLeftPress={() => navigation.goBack()}
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
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingTop: 20,
					}}
				>
					<Text text="Retail Price" />
					<Text text="$225" />
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingTop: 10,
					}}
				>
					<Text text="Release Date" />
					<Text text="12/11/2021" />
				</View>

				{isMain ? (
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
			{isMain ? (
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
