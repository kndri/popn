import React from "react";
import { View, ViewStyle, ImageStyle, Modal } from "react-native";
import {
    Screen,
    Text,
    Header,
    AutoImage as Image,
    Button,
} from "../../components";
import {
    useNavigation,
} from "@react-navigation/native";
import GestureRecognizer from "react-native-swipe-gestures";
import { color, spacing } from "../../theme";

import styles from "./Styles";

// const example = require("../../assets/images/verify_example.png");
const verified = require("../../assets/images/Verified.png");

const ListingDetailsScreen = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <Screen style={styles.CONTAINER}>
            {/* <GestureRecognizer
        onSwipeDown={() => setModalVisible(false)}
        style={{ backgroundColor: "red", padding: 0, margin: 0 }}
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
                style={{ color: "white", textAlign: "center" }}
              />
            </View>
            <View style={styles.MODAL_HEADING_TEXT}>
              <Text style={{ color: "white", fontSize: 13 }}>
                Want to let people know your sneakers are legit? 🤔 {"\n"}
                {"\n"}
                The green verified badge on sneakers lets people know that your
                sneaker were legit checked and are authentic.{"\n"}
                {"\n"}
                Example:
              </Text>
            </View>
            <View style={styles.MODAL_EXAMPLE}>
              <View style={styles.MODAL_IMAGE_CONTAINER}>
                <Image style={styles.MODAL_SHOE_IMAGE} source={example} />
              </View>
            </View>
            <View style={styles.MODAL_PROCESS}>
              <Text preset="bold" style={{ color: "white", fontSize: 15 }}>
                How to get your sneaker verified?
              </Text>
              <View style={{ marginTop: 30 }}>
                <Text style={{ color: "white", fontSize: 13 }}>
                  1. Download the CheckCheck app to get started{"\n"}
                  {"\n"}
                  2. Go through the verficiation process on CheckCheck{"\n"}
                  {"\n"}
                  3. Enter your reference number on POPN
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 30, marginBottom: 30 }}>
              <Text
                style={{ color: "white", fontSize: 13, textAlign: "center" }}
              >
                Have your reference number handy?
              </Text>
            </View>
            <Button
              style={{
                backgroundColor: "white",
                width: "85%",
                alignSelf: "center",
              }}
              textStyle={{ color: "black" }}
              text="Get Sneaker Verified"
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("Verify", { shoeID: shoeID });
              }}
            />
          </View>
        </Modal>
      </GestureRecognizer> */}

            <Header
                style={styles.BACK_BUTTON}
                leftIcon="back"
                onLeftPress={() => navigation.goBack()}
            />

            <View style={{ width: "100%", justifyContent: 'flex-end', flexDirection: 'row' }}>
                <View style={{
                    flexDirection: 'row',
                    borderWidth: 2,
                    borderColor: 'black',
                    borderRadius: 5,
                    backgroundColor: 'white',
                    width: 131,
                    height: 35,
                    alignItems: 'center',
                }}>
                    <Image source={verified} style={{ height: 20, width: 20, marginLeft: 9 }} />
                    <Text preset="bold" style={{ marginLeft: 6 }}>Authenticated</Text>
                </View>
            </View>


            <View style={styles.LISTING_DETAILS}>
                <Text
                    preset="bold"
                    text='#Jordan'
                    style={{ fontSize: 20 }}
                />
                <Text
                    preset="default"
                    text='Jordan 11 Retro Cool Gray'
                    style={{ fontSize: 20, marginTop: 20 }}
                />
                <Text
                    preset="header"
                    text='$225'
                    style={{ fontSize: 30, marginTop: 20 }}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text
                        preset="default"
                        text='Condition'
                        style={{ fontSize: 20, marginTop: 31 }}
                    />
                    <Text
                        preset="default"
                        text='New/Never Worn'
                        style={{ fontSize: 20, marginTop: 31 }}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text
                        preset="default"
                        text='Size'
                        style={{ fontSize: 20, marginTop: 31 }}
                    />
                    <Text
                        preset="default"
                        text='10'
                        style={{ fontSize: 20, marginTop: 31 }}
                    />
                </View>



            </View>


            <View style={styles.AUTHENTICATED_BOX}>
                <View style={{ flexDirection: 'row', marginTop: 13, alignItems: 'center' }}>
                    <Image source={verified} style={{ height: 20, width: 20, }} />
                    <Text preset="bold" style={{ marginLeft: 6 }}>Authenticated</Text>
                </View>
                <Text preset="default" style={{ marginTop: 5 }}>
                    Our authentication partner has reviewed the images, title,
                    and description of this listing to verify this item. Learn
                    more about the partner's authentication process
                </Text>


            </View>

        </Screen>
    );
};

export default ListingDetailsScreen;
