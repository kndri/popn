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
import { ImageStyle } from "react-native";
import {
  addLike,
  checkLoggedUser,
  likeDeletion,
} from "../aws-functions/aws-functions";

const liked = require("../assets/images/Liked.png");
const unliked = require("../assets/images/Unliked.png");
const comment = require("../assets/images/comment.png");
const share = require("../assets/images/share.png");
const seen = require("../assets/images/seen.png");
const default_user = require("../assets/images/UserImage.png");

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
  paddingTop: 10,
};
const RIGHT_SIDE_POST: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
};
const INTERACTIONS: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  marginTop: 5,
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderBottomColor: "grey",
  borderTopColor: "grey",
};
const INTERACTIONS_BUTTONS: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "transparent",
  flex: 0.3,
};

const BUTTON_TEXT: TextStyle = {
  marginLeft: 5,
  fontSize: 15,
};
const PROFILE_HEADER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: 17,
  paddingHorizontal: spacing[3],
};
const COMMENT_CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  paddingHorizontal: spacing[3],
  marginBottom: 15,
};
const RIGHT_SIDE_COMMENT: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  width: "80%",
};

const BUTTON_IMAGE: ImageStyle = {
  width: 20,
  height: 20,
};

const PostDetailsScreen = (props: any) => {
  const { post, myLike, likesCount, commentCount } = props.route.params;
  const navigation = useNavigation();
  const [myLikes, setMyLike] = React.useState(myLike);
  const [comments, setComments] = React.useState(post.comments.items);
  const [likesCounts, setLikesCount] = React.useState(likesCount);
  const [commentCnt, setCommentCnt] = React.useState(commentCount);

  const onLike = async () => {
    if (myLikes === null || myLikes === undefined) {
      const result = await addLike(post.id);
      setMyLike(result.data.createLike);
      setLikesCount(likesCounts + 1);
    } else {
      await likeDeletion(myLikes.id);
      setLikesCount(likesCounts - 1);
      setMyLike(null);
    }
  };

  const renderPosts = ({ post }) => {
    return (
      <View style={COMMENT_CONTAINER}>
        <Image
          source={{ uri: post.user.avatarImageURL }}
          style={{
            resizeMode: "contain",
            height: 40,
            width: 40,
            marginRight: 5,
            // flex: 1,
          }}
        />
        <View style={RIGHT_SIDE_COMMENT}>
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
            {post.text}
          </Text>
          {/* <View
            style={{
              alignItems: "flex-start",
            }}
          >
            <Button
              style={INTERACTIONS_BUTTONS}
              // onPress={() =>
              //   navigation.navigate("Settings", { screen: "settings" })
              // }
            >
              <Image source={unliked} style={BUTTON_IMAGE} />
              <Text style={BUTTON_TEXT}>{item.likes} </Text>
            </Button>
          </View> */}
        </View>
      </View>
    );
  };

  // GET COMMENTS FOR THIS CURRENT POST

  return (
    <Screen style={CONTAINER}>
      <View style={PROFILE_HEADER}>
        <Header
          headerTx="demoScreen.howTo"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
        />
      </View>
      <View style={POST_CONTAINER}>
        <View style={RIGHT_SIDE_POST}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: post.user.avatarImageURL }}
              style={{
                resizeMode: "contain",
                height: 60,
                width: 60,
                marginRight: 5,
                // flex: 1,
              }}
            />
            <Text
              preset="header"
              style={{
                fontSize: 18,
                margin: 5,
              }}
            >
              {post.user.username}
            </Text>
          </View>

          <Text
            preset="default"
            style={{
              fontSize: 18,
              margin: 5,
            }}
          >
            {post.description}
          </Text>
          <View style={INTERACTIONS}>
            <Button style={INTERACTIONS_BUTTONS} onPress={() => onLike()}>
              {myLikes === null || myLikes === undefined ? (
                <Image source={unliked} style={BUTTON_IMAGE} />
              ) : (
                <Image source={liked} style={BUTTON_IMAGE} />
              )}
              <Text style={BUTTON_TEXT}>{likesCounts} </Text>
            </Button>
            <Button
              style={INTERACTIONS_BUTTONS}
              onPress={() =>
                // reusing new post screen to create a comment for the current post
                // new post will need to be sent the current post props
                navigation.navigate("NewPost")
              }
            >
              <Image source={comment} style={BUTTON_IMAGE} />
              <Text style={BUTTON_TEXT}>{commentCnt} </Text>
            </Button>
            {/* <Button
              style={INTERACTIONS_BUTTONS}
              // onPress={() =>
              //   navigation.navigate("Settings", { screen: "settings" })
              // }
            >
              <Image source={share} style={BUTTON_IMAGE} />
            </Button> */}
          </View>
        </View>
      </View>
      <View>
        <FlatList
          data={comments}
          renderItem={({ item }) => renderPosts(item)}
          keyExtractor={(user) => String(user.id)}
        />
      </View>
    </Screen>
  );
};

export default PostDetailsScreen;
