import React, { FC } from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
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
  commentDeletion,
  getCurrentPost,
  likeDeletion,
  postDeletion,
} from "../aws-functions/aws-functions";
import Tooltip from "react-native-walkthrough-tooltip";

const liked = require("../assets/images/Liked.png");
const unliked = require("../assets/images/Unliked.png");
const comment = require("../assets/images/comment.png");
const share = require("../assets/images/share.png");
const seen = require("../assets/images/seen.png");
const default_user = require("../assets/images/UserImage.png");
const more = require("../assets/images/More.png");

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
  height: 40,
  alignItems: "center",
  paddingLeft: 20,
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
  textAlign: "center",
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
  const isFocused = navigation.isFocused();
  const [myLikes, setMyLike] = React.useState(myLike);
  const [comments, setComments] = React.useState<any[]>([]);
  const [likesCounts, setLikesCount] = React.useState(likesCount);
  const [commentCnt, setCommentCnt] = React.useState();
  const [toolTipVisible, setToolTipVisible] = React.useState(false);
  const [username, setUsername] = React.useState<any>();

  const fetchPost = async () => {
    const result = await getCurrentPost(post.id);
    setComments(result.comments.items);
    setCommentCnt(result.comments.items.length);
    // console.log("commensts", comments);
  };
  const getUser = async () => {
    const user = await checkLoggedUser();
    setUsername(user.sub);
  };

  React.useEffect(() => {
    fetchPost();
    getUser();
  }, []);

  React.useEffect(() => {
    const rerender = navigation.addListener("focus", () => {
      if (isFocused) {
        fetchPost();
      }
    });
  }, []);

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
  const createDeleteAlert = (commentID) =>
    Alert.alert("Delete Post", "Are you sure you want to delete this Post?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          commentDeletion(commentID);
          fetchPost();
        },
      },
    ]);

  const toolContent = (commentID) => (
    <View>
      {username === post.userID ? (
        <TouchableOpacity onPress={() => createDeleteAlert(commentID)}>
          <Text>Delete Post</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Text>Profile Page</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const renderPosts = (post) => {
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
        <Tooltip
          isVisible={toolTipVisible}
          content={toolContent(post.id)}
          arrowSize={{ width: 0, height: 0 }}
          placement="bottom"
          contentStyle={{
            left: 110,
            bottom: 70,
            maxWidth: 200,
          }}
          arrowStyle={{ bottom: 60 }}
          showChildInTooltip={false}
          backgroundColor="transparent"
          closeOnChildInteraction={false}
          onClose={() => setToolTipVisible(false)}
        >
          <TouchableOpacity onPress={() => setToolTipVisible(true)}>
            <Image source={more} />
          </TouchableOpacity>
        </Tooltip>
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
            <TouchableOpacity
              style={INTERACTIONS_BUTTONS}
              onPress={() => onLike()}
            >
              {myLikes === null || myLikes === undefined ? (
                <Image source={unliked} style={BUTTON_IMAGE} />
              ) : (
                <Image source={liked} style={BUTTON_IMAGE} />
              )}
              <Text style={BUTTON_TEXT}>{likesCounts} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={INTERACTIONS_BUTTONS}
              onPress={() =>
                // reusing new post screen to create a comment for the current post
                // new post will need to be sent the current post props
                navigation.navigate("NewPost", { comment: post })
              }
            >
              <Image source={comment} style={BUTTON_IMAGE} />
              <Text style={BUTTON_TEXT}>{commentCnt} </Text>
            </TouchableOpacity>
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
          style={{ height: "100%" }}
        />
      </View>
    </Screen>
  );
};

export default PostDetailsScreen;