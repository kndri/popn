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
import {
  addLike,
  checkLoggedUser,
  likeDeletion,
} from "../../aws-functions/aws-functions";

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

const Post = ({ post, user }) => {
  const navigation = useNavigation();

  const [myLike, setMyLike] = React.useState();
  const [likesCount, setLikesCount] = React.useState(post.likes.items.length);
  const [commentCount, setCommentCount] = React.useState(
    post.comments.items.length
  );

  React.useEffect(() => {
    const searchedLike = post.likes.items.find(
      (like: any) => like.userID === user
    );

    setMyLike(searchedLike);
  }, []);

  const handlePress = () => {
    navigation.navigate("PostDetails", {
      post,
      myLike,
      likesCount,
      commentCount,
    });
  };
  const onLike = async () => {
    if (!user) {
      return;
    }

    if (!myLike) {
      const result = await addLike(post.id);
      setMyLike(result.data.createLike);
      setLikesCount(likesCount + 1);
    } else {
      await likeDeletion(myLike.id);
      setLikesCount(likesCount - 1);
      setMyLike(null);
    }
  };

  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <View style={POST_CONTAINER}>
        <Image
          // have to check for image the default image in user data contains
          source={{ uri: post.user.avatarImageURL }}
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
            {post.user.username}
          </Text>
          <Text
            preset="default"
            style={{
              fontSize: 10,
              margin: 5,
            }}
          >
            {post.description}
          </Text>
          <View style={INTERACTIONS}>
            <Button style={INTERACTIONS_BUTTONS} onPress={() => onLike()}>
              {!myLike ? <Image source={unliked} /> : <Image source={liked} />}
              <Text style={BUTTON_TEXT}>{likesCount} </Text>
            </Button>
            <Button
              style={INTERACTIONS_BUTTONS}
              // onPress={() =>
              //   navigation.navigate("Settings", { screen: "settings" })
              // }
            >
              <Image source={comment} />

              <Text style={BUTTON_TEXT}>{commentCount} </Text>
            </Button>
            {/* <Button
              style={INTERACTIONS_BUTTONS}
              // onPress={() =>
              //   navigation.navigate("Settings", { screen: "settings" })
              // }
            >
              <Image source={seen} />
              <Text style={BUTTON_TEXT}>{item.seen} </Text>
            </Button> */}
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
