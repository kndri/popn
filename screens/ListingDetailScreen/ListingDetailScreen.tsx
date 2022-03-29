import React from "react";
import { View, ViewStyle, ImageStyle, Modal, TouchableOpacity, TextInput } from "react-native";
import {
  Screen,
  Text,
  Header,
  AutoImage as Image,
  Button, TextField, VerificationBage
} from "../../components";
import {
  useNavigation,
} from "@react-navigation/native";
import { color, spacing } from "../../theme";
import { SliderBox } from "react-native-image-slider-box";
import { FontAwesome } from '@expo/vector-icons';


import styles from "./Styles";

// const example = require("../../assets/images/verify_example.png");
const verified = require("../../assets/images/verified_badge.png");
const Seller = require("../../assets/images/UserImage.png");


const ListingDetailsScreen = (props: any) => {
  const product = props.route.params;
  const navigation = useNavigation();
  const [offerModalVisible, setOfferModalVisible] = React.useState(false);
  const [offerAmount, setOfferAmount] = React.useState("");
  const [offerMessage, setOfferMessage] = React.useState("");
  const [listingImages, setListingImages] = React.useState([
    "https://popn-app.s3.amazonaws.com/sneakers/Adidas_Yeezy_450_Cloud_White.png",

  ]);

  console.log('test', product)
  return (
    <Screen preset="scroll">
      {/* MODAL CODE*/}
      <Modal
        animationType="slide"
        transparent={true}
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
              onRightPress={() => { setOfferModalVisible(!offerModalVisible) }}
            />
            <View>
              <Text preset="bold">Your Offer</Text>
              <View style={styles.OFFER_BOX}>
                <FontAwesome name="dollar" size={20} color="black" />
                <TextInput
                  style={{
                    flex: 1,
                    width: "100%",
                    height: 35,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: "#FFFFFF",
                    backgroundColor: "white",
                    alignItems: 'flex-start'
                  }}
                  value={offerAmount}
                  autoCorrect={false}
                  onChangeText={(text) => setOfferAmount(text)}
                  placeholder="0"
                  placeholderTextColor={"#878C90"}
                  keyboardType='numeric'
                  returnKeyType="done"
                />
              </View>
            </View>

            <View style={{ marginTop: 31 }}>
              <Text preset='bold'>Add a Message (optional)</Text>
              <View style={styles.MESSAGE_BOX}>
                {/* <Image source={search_icon} style={{ width: 16, height: 16, }} /> */}
                <TextInput
                  style={{
                    flex: 1,
                    width: "10%",
                    height: "100%",
                    borderWidth: 1,
                    paddingLeft: 10,
                    borderRadius: 5,
                    borderColor: "#FFFFFF",
                    backgroundColor: "white",

                  }}
                  value={offerMessage}
                  autoCorrect={false}
                  onChangeText={(text) => setOfferMessage(text)}
                  placeholder=""
                  placeholderTextColor={"#878C90"}
                  keyboardType='default'
                  multiline={true}
                  blurOnSubmit={true}
                  returnKeyType="done"
                />
              </View>
            </View>

            <Button
              style={offerAmount ? styles.OFFER_BUTTON : styles.DISABLED_OFFER_BUTTON}
              text="Make Offer"
              onPress={() => setOfferModalVisible(!offerModalVisible)}
              disabled={offerAmount ? false : true}
            />
          </View>
        </View>
      </Modal>
      {/* END OF MODAL CODE*/}


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
        images={listingImages}
        sliderBoxHeight={315}
        dotColor="black"
        inactiveDotColor="#90A4AE"
        circleLoop
        resizeMethod={'resize'}
        resizeMode={"contain"}
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 10,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,

          backgroundColor: "rgba(128, 128, 128, 0.92)"
        }}
        imageLoadingColor="black"
      />
      {/* end of image slider */}


      {/* product details section  */}
      <View style={styles.LISTING_DETAILS}>
        <Text
          preset="bold"
          text='#Jordan'
        />
        <Text
          preset="default"
          text='Jordan 11 Retro Cool Gray'
          style={{ marginTop: 20 }}
        />
        <Text
          preset="header"
          text='$225'
          style={{ marginTop: 20 }}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            preset="default"
            text='Condition'
            style={{ marginTop: 31 }}
          />
          <Text
            preset="default"
            text='New/Never Worn'
            style={{ marginTop: 31 }}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            preset="default"
            text='Size'
            style={{ marginTop: 31 }}
          />
          <Text
            preset="default"
            text='10'
            style={{ marginTop: 31 }}
          />
        </View>



      </View>

      {/* authenticated details box */}
      <View style={styles.AUTHENTICATED_INFO_BOX}>
        <View style={{ flexDirection: 'row', marginTop: 13, alignItems: 'center' }}>
          <Image source={verified} style={{ height: 20, width: 20, }} />
          <Text preset="bold" style={{ marginLeft: 6, fontSize: 16 }}>Authenticated</Text>
        </View>
        <Text preset="default" style={{ marginTop: 5 }}>
          Our authentication partner has reviewed the images, title,
          and description of this listing to verify this item. Learn
          more about the partner's authentication process
        </Text>
      </View>

      <View style={{ paddingHorizontal: spacing[4], }}>
        <Text preset='bold' style={{ fontSize: 16 }}>Seller</Text>
        <View style={{ flexDirection: 'row', marginTop: 4 }}>
          <Image source={Seller} style={{ height: 30, width: 30, }} />
          <View style={{ marginLeft: 5 }}>
            <Text preset="bold">@AlbertFLores</Text>
            <TouchableOpacity>
              <Text preset="default" style={{ textDecorationLine: 'underline' }}>11 items for sale</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <View style={{ marginTop: 36, paddingHorizontal: spacing[4], position: 'absolute', bottom: 50, alignSelf: 'center', width: '100%' }}> */}
      <View style={{ marginTop: 36, paddingHorizontal: spacing[4], paddingBottom: 50 }}>
        <Button
          style={{ height: 50, borderRadius: 4, flexDirection: 'row', alignSelf: 'center', width: '100%' }}
          text="Offer"
          onPress={() => { setOfferModalVisible(!offerModalVisible) }}
        />
      </View>


    </Screen>
  );
};

export default ListingDetailsScreen;
