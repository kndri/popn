import * as React from 'react';
import { View, Modal } from 'react-native';

import { Header, Text, Button } from '../../../components';

import styles from './styles';

interface ConfirmationModalProps {
	offer: any;
	buyerModalVisible: boolean;
	setBuyerModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
	buyerConfirmation: (offer: any) => Promise<void>;
	sellerModalVisible: boolean;
	setSellerModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
	sellerConfirmation: (offer: any) => Promise<void>;
}

const ConfirmationModal: React.FunctionComponent<ConfirmationModalProps> = ({
	offer,
	buyerModalVisible,
	setBuyerModalVisible,
	buyerConfirmation,
	sellerModalVisible,
	setSellerModalVisible,
	sellerConfirmation,
}) => {
	return (
		<>
			{/* BUYER CONFIRMATION MODAL CODE*/}
			{buyerModalVisible && (
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
							<Text preset="bold">
								Are you ready to finalize the transaction?
							</Text>
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
						<Button
							style={{
								borderRadius: 4,
								width: '100%',
							}}
							text="Confirm Transaction"
							onPress={() => {
								buyerConfirmation(offer);
							}}
						/>
						{/* </View> */}
					</View>
				</Modal>
			)}

			{/* END OF BUYER CONFIRMATION MODAL CODE*/}

			{/* SELLER CONFIRMATION MODAL CODE*/}
			{sellerModalVisible && (
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
								onPress={() => {
									sellerConfirmation(offer);
								}}
							/>
						</View>
					</View>
				</Modal>
			)}

			{/* END OF SELLER CONFIRMATION MODAL CODE*/}
		</>
	);
};

export default ConfirmationModal;
