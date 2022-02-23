import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, AutoImage as Image } from "../../components";

import { AntDesign } from "@expo/vector-icons";
import { TextStyle } from "react-native";
import { ImageStyle } from "react-native";
import { spacing } from "../../theme";
import {
  addComment,
  addPost,
  checkLoggedUser,
} from "../../aws-functions/aws-functions";
import { useToast } from "../../components/Toast";

import styles from "./Styles";

export default function NewPostScreen(props: any) {
  const { comment } = props.route.params;
  const [post, setPost] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const toast = useToast();

  const navigation = useNavigation();

  const check = async () => {
    const user = await checkLoggedUser();
    setImageUrl(user.attributes["custom:profile_image"]);
  };

  useEffect(() => {
    check();
  }, []);

  const onPostTweet = async () => {
    addPost({
      description: post,
    }).then(() => {
      toast.show(`Post has been created.`);
      navigation.goBack();
    });
  };

  const onPostComment = async () => {
    addComment({
      postID: comment.id,
      text: post,
    }).then(() => {
      toast.show(`Comment has been created.`);
      navigation.goBack();
    });
  };

  return (
    <SafeAreaView style={styles.CONTAINER}>
      <View style={styles.HEADER_CONTAINER}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={30} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.BUTTON}
          onPress={comment ? onPostComment : onPostTweet}
        >
          <Text style={styles.BUTTON_TEXT}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.NEW_POST_CONTAINER}>
        {comment ? (
          <Text
            style={{ marginBottom: 10, fontSize: 10, color: "lightgrey" }}
          >{`Replying to  ${comment.user.username}`}</Text>
        ) : null}

        <Image source={{ uri: imageUrl }} style={styles.IMAGE} />
        <View style={styles.INPUTS_CONTAINER}>
          <TextInput
            value={post}
            onChangeText={(value) => setPost(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.POST_INPUT}
            placeholder={"What's happening?"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
