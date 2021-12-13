/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from "react"
import { ViewStyle, View, TextStyle, Platform, TouchableOpacity, FlatList, Image, ImageStyle, ScrollView } from "react-native"
import { Screen, Text, Header, } from "../components"
import { useNavigation } from '@react-navigation/native';
import { color, spacing } from "../theme"
import { useAuth } from "../contexts/auth"

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
    name: "Password"
  },

];


const about = [
  {
    id: "4",
    pageSrc: "privacyPolicy",
    name: "Privacy Policy"
  },
  {
    id: "5",
    pageSrc: "termsOfUse",
    name: "Terms of Use"
  },
];

const actions = [
  {
    id: "6",
    pageSrc: "emailSupport",
    name: "Email support",
  },
  {
    id: "7",
    pageSrc: "reportABug",
    name: "Report a bug"
  },
  {
    id: "8",
    pageSrc: "rating",
    name: "Rating"
  },
  {
    id: "9",
    pageSrc: "deleteAccount",
    name: "Delete Account"
  },
  {
    id: "10",
    pageSrc: "signOut",
    name: "Sign Out"
  },

];



const CONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: "#FEFAE0",
  paddingHorizontal: spacing[6],
  height: '100%'
}
const TEXT: TextStyle = {
  color: color.palette.black,
  fontFamily: Platform.select({
    ios: "Poppins-Medium", // The font family name
    android: "Poppins-Medium", // The file name
  }),
}

const SEMI_BOLD: TextStyle = {
  fontFamily: Platform.select({
    ios: "Poppins-SemiBold", // The font family name
    android: "Poppins-SemiBold", // The file name
  }),
}

const BOLD: TextStyle = {
  fontFamily: Platform.select({
    ios: "Poppins-Bold", // The font family name
    android: "Poppins-Bold", // The file name
  }),
}

const HEADER: TextStyle = {
  paddingTop: spacing[8],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...HEADER,
  ...TEXT,
  ...SEMI_BOLD,
  fontSize: 36,
  marginLeft: 10
}
const HEADING_TITLE: TextStyle = {
  ...HEADER,
  ...TEXT,
  ...SEMI_BOLD,
  fontSize: 23,
  textAlign: 'center',
  marginTop: -70,
  marginBottom: 10
}

const SETTINGS_NAME: TextStyle = {
  ...TEXT,
  color: "black",
  paddingLeft: 0,
  fontSize: 15,
  textAlign: "center",
  alignItems: "center",
}
const FLATLIST: ViewStyle = {
  marginBottom: 25
}

const SIGN_OUT: ViewStyle = {
  width: "48%",
  height: 50,
  borderRadius: 20,
  marginVertical: spacing[3],
  paddingVertical: spacing[2],
  backgroundColor: "black",
  marginHorizontal: 3,
  alignSelf: 'center',
  marginTop: 80
}
const SIGN_OUT_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  color: color.palette.white,
  fontSize: 17,
  letterSpacing: 0.5,
}

const LEO_IMAGE: ImageStyle = {
  borderRadius: 100,
  width: 80,
  height: 80,
  alignSelf: 'center',
  marginTop: 40
}
const ARROW_ICON: ImageStyle = {
  width: 20,
  height: 20,
}

interface SettingsProps { }
const SettingsScreen: FC<SettingsProps> = () => {
  const { signOut } = useAuth()
  const navigation = useNavigation();
  const handleClick = () => {
    signOut()
  }

  return (
    <Screen style={CONTAINER}>
      <Header
        headerTx="demoScreen.howTo"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />
      <View style={{ flexDirection: 'row', bottom: 20 }}>
        <Image source={userImage} style={LEO_IMAGE} />
        <Text style={HEADER_TITLE}>Leo</Text>
      </View>

      {/* flat list of settings options */}
      <Text style={HEADING_TITLE}>Settings</Text>
      <View style={FLATLIST}>
        <FlatList
          scrollEnabled={false}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          // keyExtractor={(item, index) => index.toString()}
          data={settings}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: "white", paddingHorizontal: 20, }}>
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
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* settings page name */}
                    <Text style={SETTINGS_NAME}>{item.name}</Text>
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

      <Text style={HEADING_TITLE}>About</Text>
      {/* flat list of about section */}
      <View style={FLATLIST}>
        <FlatList
          scrollEnabled={false}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          // keyExtractor={(item, index) => index.toString()}
          data={about}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: "white", paddingHorizontal: 20 }}>
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
                    borderRadius: 20
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      height: 35,
                      alignItems: "center",
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* settings page name */}
                    <Text style={SETTINGS_NAME}>{item.name}</Text>
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

      <Text style={HEADING_TITLE}>Actions</Text>
      {/* flat list of Actions options */}
      <View style={FLATLIST}>
        <FlatList
          scrollEnabled={false}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          // keyExtractor={(item, index) => index.toString()}
          data={actions}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: "white", paddingHorizontal: 20 }}>
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
                    borderRadius: 20
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      height: 35,
                      alignItems: "center",
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* settings page name */}
                    <Text style={SETTINGS_NAME}>{item.name}</Text>
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
    </Screen>
  )
}

export default SettingsScreen;
