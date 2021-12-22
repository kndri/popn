import React from "react";
import { Button, Screen, Text, TextField, AutoImage as Image } from "..";
import { useNavigation } from "@react-navigation/native";

import { spacing } from "../../theme";

import {
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

const liked = require("../../assets/images/Liked.png");
const unliked = require("../../assets/images/Unliked.png");
const comment = require("../../assets/images/comment.png");
const share = require("../../assets/images/share.png");
const seen = require("../../assets/images/seen.png");

const POST_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  paddingHorizontal: spacing[3],
  marginBottom: 15,
};
const RIGHT_SIDE_POST: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  width: "90%",
};
const INTERACTIONS: ViewStyle = {
  display: "flex",
  flexDirection: "row",
};
const INTERACTIONS_BUTTONS: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "transparent",
  alignContent: "flex-start",
  flex: 0.5,
};

const BUTTON_TEXT: TextStyle = {
  marginLeft: 5,
};

const Post = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("PostDetails", { item });
  };
  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={POST_CONTAINER}>
        <Image
          source={item.image_url}
          style={{
            resizeMode: "contain",
            height: 40,
            width: 40,
            marginRight: 5,
            // flex: 1,
          }}
        />
        <View style={RIGHT_SIDE_POST}>
          <Text
            preset="header"
            style={{
              fontSize: 12,
              margin: 5,
            }}
          >
            {item.username}
          </Text>
          <Text
            preset="default"
            style={{
              fontSize: 10,
              margin: 5,
            }}
          >
            {item.post_description}
          </Text>
          <View style={INTERACTIONS}>
            <Button
              style={INTERACTIONS_BUTTONS}
              // onPress={() =>
              //   navigation.navigate("Settings", { screen: "settings" })
              // }
            >
              <Image source={unliked} />
              <Text style={BUTTON_TEXT}>{item.likes} </Text>
            </Button>
            <Button
              style={INTERACTIONS_BUTTONS}
              // onPress={() =>
              //   navigation.navigate("Settings", { screen: "settings" })
              // }
            >
              <Image source={comment} />
              <Text style={BUTTON_TEXT}>{item.comments} </Text>
            </Button>
            <Button
              style={INTERACTIONS_BUTTONS}
              // onPress={() =>
              //   navigation.navigate("Settings", { screen: "settings" })
              // }
            >
              <Image source={seen} />
              <Text style={BUTTON_TEXT}>{item.seen} </Text>
            </Button>
            <Button
              style={INTERACTIONS_BUTTONS}
              // onPress={() =>
              //   navigation.navigate("Settings", { screen: "settings" })
              // }
            >
              <Image source={share} />
            </Button>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Post;
