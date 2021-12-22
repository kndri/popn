import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BUTTON: ViewStyle = {
  backgroundColor: "black",
  position: "absolute",
  bottom: 20,
  right: 20,
  width: 60,
  height: 60,
  borderRadius: 50,
  alignItems: "center",
  justifyContent: "center",
};
const NewPostButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    // navigation.navigate("NewPost");
  };

  return (
    <TouchableOpacity activeOpacity={0.8} style={BUTTON} onPress={onPress}>
      <MaterialCommunityIcons name={"feather"} size={30} color="white" />
    </TouchableOpacity>
  );
};

export default NewPostButton;
