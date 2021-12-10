import * as React from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from "react-native";
import { color, spacing, typography } from "../theme";
import { Button, Screen, Text, TextField } from "../components";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getSneakersFromUser } from "../aws-functions/get-sneakers-from-user";
import { SneakerList } from "../types";
import { checkLoggedUser } from "../aws-functions/check-logged-user";

//required images
const settingsIcon = require("../assets/images/SettingsIcon.png");
const userImage = require("../assets/images/UserImage.png");

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[3],
  flex: 1,
  marginTop: 44,
};

const HEADER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: spacing[4],
};

const CENTER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
};
const PROFILE_HEADER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: 17,
  paddingHorizontal: spacing[4],
};
const PROFILE_DATA: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 20,
  paddingHorizontal: spacing[4],
};
const PROFILE_IMAGE: ImageStyle = {
  marginRight: 20,
};

const COLLECTION_CONTAINER: ViewStyle = {
  flex: 1,
};

const COLLECTION_HEADING: TextStyle = {
  textDecorationLine: "underline",
  paddingHorizontal: spacing[5],
  marginBottom: 22
};

const TEXTCENTER: TextStyle = {
  textAlign: "center",
  alignItems: "center",
};

const INPUT: TextStyle = {
  fontFamily: typography.primaryBold,
};

export default function TabThreeScreen() {
  const navigation = useNavigation();
  const [collection, setCollection] = React.useState<any>([]);
  const [username, setUsername] = React.useState("");
  const isFocused = useIsFocused();

  const getSneakers = async () => {
    const sneakerlist = await getSneakersFromUser();
    const user = await checkLoggedUser();
    setUsername(user.userData.attributes["custom:name"])
    setCollection(sneakerlist);
  };
  



  React.useEffect(() => {
    getSneakers();
    
  }, [isFocused]);

 

  const renderSneaker = ({ item }) => (
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
          text={`${item.primaryName}`}
          style={{ fontSize: 12, color: "#979797" }}
        />
        <Text text={`${item.secondaryName}`} style={{ fontSize: 10 }} />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{ uri: item.image }}
          style={{ height: 81, width: 100, resizeMode: "contain" }}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {/* <Button
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
           
          }}
        >
          <Text
            preset="bold"
            style={{ fontSize: 12, color: "white", fontWeight: "bold" }}
          >
            View
          </Text>
        </Button> */}
      </View>
    </View>
  );

  return (
    <Screen style={CONTAINER}>
      <View style={PROFILE_HEADER}>
        <Text preset="header" text="Profile" />
        <Button style={{backgroundColor: 'transparent'}} onPress={() => navigation.navigate('Settings', { screen: 'settings' })}>
          <Image source={settingsIcon} />
        </Button>
      </View>

      <View style={PROFILE_DATA}>
        <Image style={PROFILE_IMAGE} source={userImage} />
        <View>
          <Text preset="bold" text="Darryl" />
          <Text preset="secondary" text={username} />
        </View>
      </View>

      <View style={COLLECTION_CONTAINER}>
        <Text style={COLLECTION_HEADING} preset="bold" text="Collection" />
        <View style={{ flex: 1, justifyContent: "center" }}>
          {collection.length === 0 ? (
            <>
              <Text
                style={TEXTCENTER}
                preset="bold"
                text="Your collection is empty."
              />
              <Button
                style={{ marginTop: 20 }}
                text="Claim an item"
                preset="primary"
                onPress={() => navigation.navigate("TabTwo")}
              />
            </>
          ) : (
            <View style={COLLECTION_CONTAINER}>
              <FlatList
                data={collection}
                renderItem={renderSneaker}
                keyExtractor={(sneaker) => String(sneaker.id)}
                numColumns={2}
                contentContainerStyle={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              />
            </View>
          )}
        </View>
      </View>
    </Screen>
  );
}
