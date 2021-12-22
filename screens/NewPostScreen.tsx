import React, { FC } from "react";
import { View, ViewStyle, ImageStyle, Modal } from "react-native";
import {
  Screen,
  Text,
  Header,
  AutoImage as Image,
  Button,
} from "../components";
import { useNavigation } from "@react-navigation/native";
import GestureRecognizer from "react-native-swipe-gestures";
import { color, spacing } from "../theme";

const example = require("../assets/images/verify_example.png");

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[3],
  flex: 1,
  marginTop: 44,
};

const BACK_BUTTON: ViewStyle = {
  paddingHorizontal: spacing[4],
  backgroundColor: color.dim,
  width: 50,
  height: 50,
  borderRadius: 100,
};

const SHOE_HEADING: ViewStyle = {
  paddingHorizontal: spacing[4],
  marginTop: 15,
};

const IMAGE_CONTAINER: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginTop: 15,
  paddingHorizontal: spacing[4],
  height: "40%",
};

const SHOE_STYLE: ImageStyle = {
  resizeMode: "contain",
  width: "100%",
};

const SHOE_DATA: ViewStyle = {
  marginTop: 30,
  paddingHorizontal: spacing[4],
  marginBottom: 40,
};

const MODAL_CONTAINER: ViewStyle = {
  backgroundColor: "black",
  paddingHorizontal: spacing[3],
  flex: 1,
  paddingTop: 20,
  //   marginBottom: 30,
};
const MODAL_HEADING: ViewStyle = {
  alignContent: "center",
  justifyContent: "center",
  marginBottom: 40,
  paddingHorizontal: spacing[4],
};
const MODAL_HEADING_TEXT: ViewStyle = {
  paddingHorizontal: spacing[4],
};

const MODAL_EXAMPLE: ViewStyle = {
  paddingHorizontal: spacing[4],
};
const MODAL_IMAGE_CONTAINER: ViewStyle = {
  alignItems: "center",
  marginBottom: 30,
  marginTop: 30,
};
const MODAL_SHOE_IMAGE: ImageStyle = {
  resizeMode: "contain",
  width: "60%",
};
const MODAL_PROCESS: ViewStyle = {
  paddingHorizontal: spacing[4],
};

const NewPostScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <Screen style={CONTAINER}>
      <GestureRecognizer
        onSwipeDown={() => setModalVisible(false)}
        style={{ backgroundColor: "red", padding: 0, margin: 0 }}
        config={{
          velocityThreshold: 0.1,
          directionalOffsetThreshold: 60,
        }}
      >
        <Modal
          animationType="slide"
          transparent={true}
          presentationStyle="formSheet"
          visible={modalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={MODAL_CONTAINER}>
            <View style={MODAL_HEADING}>
              <Text
                text="Sneaker Verification"
                preset="header"
                style={{ color: "white", textAlign: "center" }}
              />
            </View>
            <View style={MODAL_HEADING_TEXT}>
              <Text style={{ color: "white", fontSize: 13 }}>
                Want to let people know your sneakers are legit? 🤔 {"\n"}
                {"\n"}
                The green verified badge on sneakers lets people know that your
                sneaker were legit checked and are authentic.{"\n"}
                {"\n"}
                Example:
              </Text>
            </View>
            <View style={MODAL_EXAMPLE}>
              <View style={MODAL_IMAGE_CONTAINER}>
                <Image style={MODAL_SHOE_IMAGE} source={example} />
              </View>
            </View>
            <View style={MODAL_PROCESS}>
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
                navigation.navigate("Verify");
              }}
            />
          </View>
        </Modal>
      </GestureRecognizer>

      <Header
        style={BACK_BUTTON}
        headerTx="demoScreen.howTo"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />
      <View style={SHOE_HEADING}>
        <Text
          preset="secondary"
          text="Jordan 11 Retro"
          style={{ fontSize: 20 }}
        />
        <Text preset="header" text="Cool Grey" style={{ fontSize: 30 }} />
      </View>
      <View style={IMAGE_CONTAINER}>
        <Image
          style={SHOE_STYLE}
          source={{
            uri: "https://popn-app.s3.amazonaws.com/sneakers/jordan_11_retro_cool_grey.png",
          }}
        />
      </View>
      <View style={SHOE_DATA}>
        <Text preset="bold" text="SNEAKER DETAILS" style={{ fontSize: 20 }} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 20,
          }}
        >
          <Text text="Retail Price" />
          <Text text="$225" />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 10,
          }}
        >
          <Text text="Release Date" />
          <Text text="12/11/2021" />
        </View>
      </View>

      <Button
        text="Verify Sneaker"
        preset="primary"
        onPress={() => setModalVisible(true)}
      />
    </Screen>
  );
};

export default NewPostScreen;
