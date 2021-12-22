import React, { FC } from "react";
import { View, ViewStyle, TextStyle, FlatList } from "react-native";
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

const liked = require("../assets/images/Liked.png");
const unliked = require("../assets/images/Unliked.png");
const comment = require("../assets/images/comment.png");
const share = require("../assets/images/share.png");
const seen = require("../assets/images/seen.png");

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[3],
  flex: 1,
};
const POST_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  paddingHorizontal: spacing[3],
  marginBottom: 15,
  marginTop: 25,
  paddingTop: 10,
};
const RIGHT_SIDE_POST: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  width: "80%",
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

const PostDetailsScreen = (props: any) => {
  const { item } = props.route.params;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  console.log("data", item);

  // GET COMMENTS FOR THIS CURRENT POST

  return (
    <Screen style={CONTAINER}>
      <View style={POST_CONTAINER}>
        <Image
          source={item.image_url}
          style={{
            resizeMode: "contain",
            height: 60,
            width: 60,
            marginRight: 5,
            // flex: 1,
          }}
        />
        <View style={RIGHT_SIDE_POST}>
          <Text
            preset="header"
            style={{
              fontSize: 18,
              margin: 5,
            }}
          >
            {item.username}
          </Text>

          <Text
            preset="default"
            style={{
              fontSize: 15,
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
      <View>
        <FlatList />
      </View>
    </Screen>
  );
};

export default PostDetailsScreen;
