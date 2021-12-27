import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";

import {
  Button,
  Screen,
  Text,
  TextField,
  AutoImage as Image,
} from "../components";

import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { TextStyle } from "react-native";
import { ImageStyle } from "react-native";
import { spacing } from "../theme";
import { addPost, checkLoggedUser } from "../aws-functions/aws-functions";
import { useToast } from "../components/Toast";
import { set } from "react-native-reanimated";

const default_user = require("../assets/images/UserImage.png");

const CONTAINER: ViewStyle = {
  flex: 1,
  alignItems: "flex-start",
  backgroundColor: "white",
  paddingHorizontal: spacing[3],
};
const HEADER_CONTAINER: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 15,
  paddingHorizontal: spacing[5],
};
const BUTTON: ViewStyle = {
  backgroundColor: "black",
  borderRadius: 30,
};
const BUTTON_TEXT: TextStyle = {
  paddingHorizontal: 20,
  paddingVertical: 10,
  color: "white",
  fontWeight: "bold",
  fontSize: 16,
};
const NEW_POST_CONTAINER: TextStyle = {
  flexDirection: "column",
  padding: 15,
  paddingHorizontal: spacing[5],
};
const INPUTS_CONTAINER: TextStyle = {
  marginLeft: 10,
};
const POST_INPUT: TextStyle = {
  height: 100,
  maxHeight: 300,
  maxWidth: "100%",
  fontSize: 20,
  marginTop: 15,
};
const IMAGE: ImageStyle = {
  width: 80,
  height: 80,
};

export default function NewTweetScreen() {
  const [post, setPost] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const toast = useToast();

  const navigation = useNavigation();

  useEffect(() => {
    checkLoggedUser().then((response) => {
      setImageUrl(response["custom:profile_image"]);
    });
  }, []);

  const onPostTweet = async () => {
    addPost({
      description: post,
    }).then(() => {
      toast.show(`Post has been created.`);
      navigation.goBack();
    });
  };

  return (
    <SafeAreaView style={CONTAINER}>
      <View style={HEADER_CONTAINER}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={30} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity style={BUTTON} onPress={onPostTweet}>
          <Text style={BUTTON_TEXT}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={NEW_POST_CONTAINER}>
        <Image source={{ uri: imageUrl }} style={IMAGE} />
        <View style={INPUTS_CONTAINER}>
          <TextInput
            value={post}
            onChangeText={(value) => setPost(value)}
            multiline={true}
            numberOfLines={3}
            style={POST_INPUT}
            placeholder={"What's happening?"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
