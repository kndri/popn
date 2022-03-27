import * as React from "react";
import { View, TextInput, FlatList, TouchableOpacity, Modal, } from "react-native";
import { Slider } from '@miblanchard/react-native-slider';
import {
	Button,
	Screen,
	Text,
	AutoImage as Image,
	Header,
} from "../../components";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import {
	addUserSneaker,
	getSneakersFromUser,
	getSneakersFromDB,
} from "../../aws-functions/aws-functions";
import { useToast } from "../../components/Toast";

import styles from "./Styles";

const search_icon = require("../../assets/images/searchIcon.png");
const location_icon = require("../../assets/images/zipcode-icon.png");
const right_icon = require("../../assets/images/rightArrowIcon.png");

export default function HomeScreen() {
	const navigation = useNavigation();
	const toast = useToast();
	const [locationModalVisible, setLocationModalVisible] = React.useState(false);
	const [zipCodeModalVisible, setZipCodeModalVisible] = React.useState(false);
	const [distanceValue, setDistanceValue] = React.useState(30);
	const [query, setQuery] = React.useState("");
	const [zipCode, setZipCode] = React.useState("");
	const [searchedArray, setSearchedArray] = React.useState<any>([]);
	const [collection, setCollection] = React.useState<any>([]);
	const [sneakerDb, setSneakerDb] = React.useState<any>([]);
	const isFocused = useIsFocused();

	React.useEffect(() => {
		if (query.length === 0) {
			setSearchedArray(sneakerDb);
		} else {
			const searchedObjects: any = [];
			sneakerDb
				.filter(
					(sneakerObject) =>
						sneakerObject.primary_name
							.toLowerCase()
							.replace(/\s+/g, "")
							.includes(query.toLowerCase().replace(/\s+/g, "")) ||
						sneakerObject.secondary_name
							.toLowerCase()
							.replace(/\s+/g, "")
							.includes(query.toLowerCase().replace(/\s+/g, ""))
				)
				.map((filteredSneaker) => {
					searchedObjects.push(filteredSneaker);
				});

			setSearchedArray(searchedObjects);
		}
	}, [query]);

	const getSneakers = async () => {
		const sneakerlist = await getSneakersFromUser().catch((error) =>
			console.error(error)
		);
		const sneakersData = await getSneakersFromDB().catch((error) =>
			console.error(error)
		);
		setSearchedArray(sneakersData);
		setSneakerDb(sneakersData);
		setCollection(sneakerlist);
	};

	const checkClaimed = (item: any) => {
		const found = collection.some(
			(sneaker) => sneaker.secondaryName == item.secondary_name
		);

		if (found) {
			return true;
		} else {
			return false;
		}
	};

	React.useEffect(() => {
		getSneakers();
	}, [isFocused]);

	React.useEffect(() => { }, [sneakerDb]);

	const renderSneaker = ({ item }) => {
		if (checkClaimed(item)) {
			return (
				<TouchableOpacity onPress={() => {
					navigation.navigate("ListingDetails");
				}}>
					<View
						style={{
							justifyContent: "space-evenly",
							height: 150,
							width: 150,
							borderWidth: 1,
							borderColor: "#EBEBEB",
							borderRadius: 10,
							marginBottom: 40,
							marginHorizontal: 10,
							opacity: 0.5,
						}}
					>
						<View
							style={{
								justifyContent: "flex-start",
								alignItems: "flex-start",
								marginLeft: 10,
								marginTop: 10,
							}}
						>
							<Text
								text={`${item.primary_name}`}
								style={{ fontSize: 12, color: "#979797" }}
							/>
							<Text text={`${item.secondary_name}`} style={{ fontSize: 10 }} />
						</View>
						<View style={{ justifyContent: "center", alignItems: "center" }}>
							<Image
								source={{ uri: item.image_url }}
								style={{ height: 81, width: 100, resizeMode: "contain" }}
							/>
						</View>
						<View style={{ justifyContent: "center", alignItems: "center" }}>
							<Button
								preset="none"
								disabled
								style={{
									justifyContent: "center",
									width: "70%",
									height: 20,
									paddingVertical: 2,
									borderRadius: 10,
									marginBottom: 15,
								}}
								onPress={() => {
									addUserSneaker(item);

									// then grey out the sneaker card
								}}
							>
								<Text
									preset="bold"
									style={{ fontSize: 12, color: "white", fontWeight: "bold" }}
								>
									Claimed
								</Text>
							</Button>
						</View>
					</View>
				</TouchableOpacity>

			);
		} else {
			return (
				<TouchableOpacity onPress={() => {
					navigation.navigate("ListingDetails", { shoeID: item.id });
				}}>
					<View
						style={{
							justifyContent: "space-evenly",
							height: 150,
							width: 150,
							borderWidth: 1,
							borderColor: "#EBEBEB",
							borderRadius: 10,
							marginBottom: 40,
							marginHorizontal: 10,
						}}
					>
						<View
							style={{
								justifyContent: "flex-start",
								alignItems: "flex-start",
								marginLeft: 10,
								marginTop: 10,
							}}
						>
							<Text
								text={`${item.primary_name}`}
								style={{ fontSize: 12, color: "#979797" }}
							/>
							<Text text={`${item.secondary_name}`} style={{ fontSize: 10 }} />
						</View>
						<View style={{ justifyContent: "center", alignItems: "center" }}>
							<Image
								source={{ uri: item.image_url }}
								style={{ height: 81, width: 100, resizeMode: "contain" }}
							/>
						</View>
						<View style={{ justifyContent: "center", alignItems: "center" }}>
							<Button
								preset="none"
								style={{
									justifyContent: "center",
									width: "70%",
									height: 20,
									paddingVertical: 2,
									borderRadius: 10,
									marginBottom: 15,
								}}
								onPress={() => {
									addUserSneaker(item)
										.then(() => {
											toast.show(`Sneaker has been added to your showcase.`);
											getSneakers();
										})
										.catch((error) => console.log(error));
								}}
							>
								<Text
									preset="bold"
									style={{ fontSize: 12, color: "white", fontWeight: "bold" }}
								>
									Claim
								</Text>
							</Button>
						</View>
					</View>
				</TouchableOpacity>

			);
		}
	};

	return (
		<Screen style={styles.CONTAINER}>

			<Modal
				presentationStyle="fullScreen"
				animationType="slide"
				// transparent={true}
				visible={locationModalVisible}
				onRequestClose={() => {
					setLocationModalVisible(!locationModalVisible);
				}}
			>
				<View style={styles.CENTERED_VIEW}>
					<View style={styles.MODAL_VIEW}>

						<Header headerTx="Location" rightIcon="close" onRightPress={() => setLocationModalVisible(!locationModalVisible)} />


						<View style={{ width: '100%', marginTop: 59, }}>
							<Text preset="bold" >ZIP Code</Text>
							<TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 13 }}
								onPress={() => { setZipCodeModalVisible(!zipCodeModalVisible), setLocationModalVisible(!locationModalVisible) }}>
								<Text preset="default" >Charlotte, NC, 28215</Text>
								<Image source={right_icon} style={{ width: 12, height: 12, }} />
							</TouchableOpacity>
						</View>

						<View style={{ width: '100%', marginTop: 100 }}>
							<Text preset="bold" style={{ paddingTop: 20 }}>Distance</Text>
							<Slider
								value={distanceValue}
								onValueChange={value => setDistanceValue(value)}
								minimumValue={10}
								maximumValue={100}
								step={5}
								trackClickable={true}
							/>

							<Text preset="default">{distanceValue} miles</Text>
						</View>

						<Button
							style={{ width: "100%", height: 50, borderRadius: 4, marginTop: 224 }}
							text="See Listings"
							onPress={() => setLocationModalVisible(!locationModalVisible)}
						/>
					</View>
				</View>
			</Modal>


			<Modal
				presentationStyle="fullScreen"
				animationType="slide"
				// transparent={true}
				visible={zipCodeModalVisible}
				onRequestClose={() => {
					setZipCodeModalVisible(!zipCodeModalVisible);
				}}
			>
				<View style={styles.CENTERED_VIEW}>
					<View style={styles.MODAL_VIEW}>

						<Header headerTx="ZIP Code" rightIcon="close" onRightPress={() => { setLocationModalVisible(!locationModalVisible), setZipCodeModalVisible(!zipCodeModalVisible) }} />


						<View style={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}>
							<Text preset="bold" style={{ marginTop: 65 }}>Where are you searching?</Text>
							<Button
								style={{ width: 193, height: 50, borderRadius: 4, marginTop: 23 }}
								text="Get My Location"
								onPress={() => console.log('clicked')}
							/>
							<Text preset="default" style={{ marginTop: 13 }}>or</Text>
							<View style={styles.ZIPCODE}>
								<TextInput
									style={{
										flex: 1,
										width: 193,
										height: 35,
										borderWidth: 1,
										borderRadius: 5,
										borderColor: "#FFFFFF",
										backgroundColor: "white",
										textAlign: 'center'
									}}
									value={zipCode}
									autoCorrect={false}
									onChangeText={(text) => setZipCode(text)}
									placeholder="Enter ZIP Code"
									placeholderTextColor={"#878C90"}

								/>
							</View>
							<Text preset="default" style={{ marginTop: 23 }}>Charlotte, NC</Text>
							<Button
								style={{ width: "100%", height: 50, borderRadius: 4, marginTop: 270 }}
								text="Apply"
								onPress={() => { console.log('clicked'), setZipCodeModalVisible(!zipCodeModalVisible), setLocationModalVisible(!locationModalVisible) }}
							/>
						</View>

					</View>
				</View>
			</Modal>





			<View style={styles.CLAIM_SEARCH}>
				<Image source={search_icon} style={{ width: 16, height: 16, }} />
				<TextInput
					style={{
						flex: 1,
						width: "100%",
						height: 35,
						borderWidth: 1,
						paddingLeft: 10,
						borderRadius: 5,
						borderColor: "#FFFFFF",
						backgroundColor: "white",
					}}
					value={query}
					autoCorrect={false}
					onChangeText={(text) => setQuery(text)}
					placeholder="Search"
					placeholderTextColor={"#878C90"}
				/>
			</View>

			<View style={{ marginTop: 20, marginBottom: 20 }}>
				<TouchableOpacity onPress={() => setLocationModalVisible(true)} style={styles.LOCATION_CONTAINER}>
					<Image source={location_icon} style={{ width: 16, height: 16, marginRight: 5 }} />
					<Text>Charlotte: {distanceValue} Miles</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.COLLECTION_CONTAINER}>
				<FlatList
					data={searchedArray}
					renderItem={renderSneaker}
					keyExtractor={(sneaker) => String(sneaker.id)}
					numColumns={2}
					contentContainerStyle={{
						justifyContent: "space-between",
						alignItems: "center",
					}}
				/>
			</View>
		</Screen>
	);
}
