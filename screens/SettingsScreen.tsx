/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from "react";
import {
  ViewStyle,
  View,
  TextStyle,
  Platform,
  TouchableOpacity,
  FlatList,
  Image,
  ImageStyle,
  ScrollView,
} from "react-native";
import { Screen, Text, Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { color, spacing } from "../theme";
import { useAuth } from "../contexts/auth";

const userImage = require("../assets/images/UserImage.png");
const arrow = require("../assets/images/arrow-ios-forward-outline.png");

const settings = [
  {
    id: "1",
    pageSrc: "changeEmail",
    name: "Email",
  },
  {
    id: "2",
    pageSrc: "changePassword",
    name: "Password",
  },
];

const about = [
  {
    id: "4",
    pageSrc: "privacyPolicy",
    name: "Privacy Policy",
  },
  {
    id: "5",
    pageSrc: "termsOfUse",
    name: "Terms of Use",
  },
];

const actions = [
  // {
  //   id: "6",
  //   pageSrc: "emailSupport",
  //   name: "Email support",
  // },
  // {
  //   id: "7",
  //   pageSrc: "reportABug",
  //   name: "Report a bug"
  // },
  {
    id: "8",
    pageSrc: "rating",
    name: "Rate POPN",
  },
  {
    id: "9",
    pageSrc: "signOut",
    name: "Sign Out",
  },
];

//styles
const CONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: "white",
  paddingHorizontal: spacing[6],
};

const HEADING_TITLE: TextStyle = {
  textAlign: "center",
  marginBottom: 5,
};

const SETTINGS_NAME: TextStyle = {
  textAlign: "center",
  alignItems: "center",
};

const FLATLIST: ViewStyle = {
  marginBottom: 25,
  borderWidth: 2,
  borderColor: "black",
  borderRadius: 4,
};

const ARROW_ICON: ImageStyle = {
  width: 20,
  height: 20,
};
const CENTER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
};
const TEXTCENTER: TextStyle = {
  textAlign: "center",
  alignItems: "center",
};

interface SettingsProps {}
const SettingsScreen: FC<SettingsProps> = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation();
  const handleClick = () => {
    signOut();
  };

  return (
    <Screen style={CONTAINER}>
      <View style={CENTER}>
        <Header leftIcon="back" onLeftPress={() => navigation.goBack()} />
      </View>

      <Text style={HEADING_TITLE} preset="header" text="Settings" />
      {/* flat list of settings options */}
      <View style={FLATLIST}>
        <FlatList
          scrollEnabled={false}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          data={settings}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "white",
                paddingHorizontal: 20,
                borderRadius: 4,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate(item.pageSrc)}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    padding: 5,
                    backgroundColor: "white",
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: 5,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      height: 35,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* settings page name */}
                    <Text
                      style={SETTINGS_NAME}
                      preset="bold"
                      text={item.name}
                    />
                    {/* <Text style={SETTINGS_NAME}>{item.name}</Text> */}
                    <TouchableOpacity>
                      <Image source={arrow} style={ARROW_ICON} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <Text style={HEADING_TITLE} preset="header" text="About" />
      {/* flat list of about section */}
      <View style={FLATLIST}>
        <FlatList
          scrollEnabled={false}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          // keyExtractor={(item, index) => index.toString()}
          data={about}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "white",
                paddingHorizontal: 20,
                borderRadius: 4,
              }}
            >
              <TouchableOpacity
              // onPress={() => navigation.navigate(item.pageSrc)}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    padding: 5,
                    backgroundColor: "white",
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: 20,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      height: 35,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* settings page name */}
                    <Text
                      style={SETTINGS_NAME}
                      preset="bold"
                      text={item.name}
                    />
                    <TouchableOpacity>
                      <Image source={arrow} style={ARROW_ICON} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <Text style={HEADING_TITLE} preset="header" text="Actions" />
      {/* flat list of Actions options */}
      <View style={FLATLIST}>
        <FlatList
          scrollEnabled={false}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          // keyExtractor={(item, index) => index.toString()}
          data={actions}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "white",
                paddingHorizontal: 20,
                borderRadius: 4,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (item.name === "Sign Out") {
                    handleClick();
                  }
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    padding: 5,
                    backgroundColor: "white",
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: 20,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      height: 35,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* settings page name */}
                    <Text
                      style={SETTINGS_NAME}
                      preset="bold"
                      text={item.name}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        if (item.name === "Sign Out") {
                          handleClick();
                        }
                      }}
                    >
                      <Image source={arrow} style={ARROW_ICON} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </Screen>
  );
};

export default SettingsScreen;
