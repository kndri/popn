import * as React from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Image,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { color, spacing, typography } from "../theme";
import { Button, Screen, Text, Header } from "../components";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import {
  getSneakersFromUser,
  checkLoggedUser,
  getCommentFromUser,
  getPostFromUser,
  deleteUserSneaker,
  getUserFromDb,
} from "../aws-functions/aws-functions";
import { SneakerList } from "../types";
// NOTE: This should be refactored
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createUser, deleteSneaker } from "../src/graphql/mutations";
import { getUser } from "../src/graphql/queries";
import NewPostButton from "../components/new-post-button";

//required images
const messageIcon = require("../assets/images/message-button.png");
const settingsIcon = require("../assets/images/SettingsIcon.png");
const userImage = require("../assets/images/UserImage.png");

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  // paddingHorizontal: spacing[3],
  flex: 1,
};

const HEADER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: spacing[4],
};

const CENTER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
};
const PROFILE_HEADER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: 17,
  paddingHorizontal: spacing[5],
};
const PROFILE_DATA: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 20,
  paddingHorizontal: spacing[5],
};
const PROFILE_IMAGE: ImageStyle = {
  marginRight: 20,
  width: 96,
  height: 96,
  borderRadius: 48,
};

const COLLECTION_CONTAINER: ViewStyle = {
  flex: 1,
  marginTop: 47,
  backgroundColor: "white",
  width: "100%",
  borderTopLeftRadius: 32,
  borderTopRightRadius: 32,
  shadowColor: "black",
  shadowOpacity: 0.3,
  shadowRadius: 10,
};

const TEXTCENTER: TextStyle = {
  textAlign: "center",
  alignItems: "center",
};

const BUTTON_VIEW: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 2,
  // paddingHorizontal: spacing[4],
  borderRadius: 50,
  padding: 5,
  width: "95%",
  alignSelf: "center",
};

const DATA_CONTAINER: ViewStyle = {
  flex: 1,
  backgroundColor: "white",
  width: "100%",
  height: "100%",
};

export default function UserProfileScreen(props?: any) {
  const userID = props.route.params;

  const navigation = useNavigation();
  const [collection, setCollection] = React.useState<any>([]);
  const [username, setUsername] = React.useState("");
  const [profileImage, setprofileImage] = React.useState("");
  const [user, setUser] = React.useState<any>();
  const [selection, setSelection] = React.useState(1);
  const [isMainUser, setIsMainUser] = React.useState(true);

  const isFocused = useIsFocused();

  const getSneakers = async () => {
    const sneakerlist = await getSneakersFromUser();
    const user = await checkLoggedUser();

    setUsername(user.attributes.preferred_username);
    setprofileImage(user.attributes["custom:blob"]);
    setCollection(sneakerlist);
  };

  const getUserData = async () => {
    const user = await getUserFromDb(userID);

    setUser(user);

    setCollection(user.sneakers.items);
  };

  // React.useEffect(() => {
  //   const rerender = navigation.addListener("focus", () => {
  //     if (isFocused) {
  //       getSneakers();
  //     }
  //   });
  // }, []);

  const check = async () => {
    var currentUser = await checkLoggedUser();
    if (userID === undefined || userID === currentUser.attributes?.sub) {
      getSneakers();
      setIsMainUser(true);
    } else {
      getUserData();
      setIsMainUser(false);
    }
  };

  React.useEffect(() => {
    // checks whether it is a different user
    check();
  }, []);

  // Alerts when long pressed on shoe items
  const createDeleteAlert = (shoeID) =>
    Alert.alert(
      "Delete Shoe",
      "Are you sure you want to delete this Shoe? If this is a verified shoe you will need to reverify the shoe through check check",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            deleteUserSneaker(shoeID).then(() => getSneakers());
          },
        },
      ]
    );

  const renderSneaker = ({ item }) => (
    <TouchableOpacity
      onLongPress={() => {
        if (isMainUser) {
          createDeleteAlert(item.id);
        }
      }}
    >
      <View
        style={{
          justifyContent: "space-evenly",
          height: 150,
          width: 150,
          borderWidth: 1,
          borderColor: "#EBEBEB",
          borderRadius: 10,
          marginBottom: 40,
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          <Text
            text={`${item.primaryName}`}
            style={{ fontSize: 12, color: "#979797" }}
          />
          <Text text={`${item.secondaryName}`} style={{ fontSize: 10 }} />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{ uri: item.image }}
            style={{ height: 81, width: 100, resizeMode: "contain" }}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Button
            preset="none"
            style={{
              justifyContent: "center",
              width: "70%",
              height: 20,
              paddingVertical: 2,
              borderRadius: 10,
              marginBottom: 15,
            }}
            onPress={() => {
              navigation.navigate("ShoeDetails");
            }}
          >
            <Text
              preset="bold"
              style={{ fontSize: 12, color: "white", fontWeight: "bold" }}
            >
              View
            </Text>
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderPosts = () => {
    return (
      <View style={CENTER}>
        <Text>You have no posts!</Text>
      </View>
    );
  };

  const renderEmptyCollection = () => {
    if (isMainUser === false) {
      return (
        <>
          <Text style={TEXTCENTER} preset="bold" text="Collection is empty." />
        </>
      );
    } else {
      return (
        <>
          <Text
            style={TEXTCENTER}
            preset="bold"
            text="Your collection is empty."
          />
          <Button
            style={{ marginTop: 20 }}
            text="Start Collecting"
            preset="primary"
            onPress={() => navigation.navigate("Claim")}
          />
        </>
      );
    }
  };

  const renderCollection = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {collection.length == 0 ? (
          renderEmptyCollection()
        ) : (
          <View style={DATA_CONTAINER}>
            <FlatList
              data={collection}
              renderItem={renderSneaker}
              keyExtractor={(sneaker) => String(sneaker.id)}
              numColumns={2}
              contentContainerStyle={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <Screen style={CONTAINER}>
      <View style={PROFILE_HEADER}>
        {isMainUser ? (
          <Header
            headerTx="Profile"
            leftIcon="back"
            onLeftPress={() => navigation.goBack()}
            rightIcon="settings"
            onRightPress={() =>
              navigation.navigate("Settings", { screen: "settings" })
            }
          />
        ) : (
          <Header
            headerTx="Profile"
            leftIcon="back"
            onLeftPress={() => navigation.goBack()}
          />
        )}
      </View>
      {user ? (
        <View style={PROFILE_DATA}>
          <Image style={PROFILE_IMAGE} source={{ uri: user.avatarImageURL }} />

          <View style={{}}>
            <Text preset="header" text={`${user.username}`} />
            <Text preset="secondary" text={`${user.username}`} />
            {/* <Text preset="secondary" text={username} /> */}

            <View style={{ flexDirection: "row" }}>
              <Text preset="bold" text="Don Score: " />
              <Text preset="bold" text="890" />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text preset="bold" text="Collection Value: " />
              <Text preset="bold" text="$250,000" />
            </View>
          </View>
        </View>
      ) : (
        <View style={PROFILE_DATA}>
          <Image style={PROFILE_IMAGE} source={{ uri: profileImage }} />

          <View style={{}}>
            <Text preset="header" text={`${username}`} />
            <Text preset="secondary" text={`${username}`} />
            {/* <Text preset="secondary" text={username} /> */}

            <View style={{ flexDirection: "row" }}>
              <Text preset="bold" text="Don Score: " />
              <Text preset="bold" text="890" />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text preset="bold" text="Collection Value: " />
              <Text preset="bold" text="$250,000" />
            </View>
          </View>
        </View>
      )}

      <View style={{ flexDirection: "row", paddingHorizontal: spacing[5] }}>
        <Button
          style={{ backgroundColor: "transparent", width: 48, height: 48 }}
          onPress={() => navigation.navigate("TabThree")}
        >
          <Image source={messageIcon} />
        </Button>
        {user ? (
          <Button
            style={{ width: 262, height: 48, borderRadius: 4, marginLeft: 10 }}
            text="Follow"
            preset="primary"
            // onPress={() => navigation.navigate("")}
          />
        ) : (
          <Button
            style={{ width: 262, height: 48, borderRadius: 4, marginLeft: 10 }}
            text="Edit Profile"
            preset="primary"
            // onPress={() => navigation.navigate("")}
          />
        )}
        {/* <Button
          style={{ width: 262, height: 48, borderRadius: 4, marginLeft: 10 }}
          text="Edit Profile"
          preset="primary"
          // onPress={() => navigation.navigate("")}
        /> */}
      </View>

      <View style={COLLECTION_CONTAINER}>
        <View style={BUTTON_VIEW}>
          <Button
            onPress={() => setSelection(1)}
            style={[
              selection === 1
                ? {
                    borderRadius: 34,
                    width: 101,
                    margin: 2,
                  }
                : {
                    backgroundColor: "white",
                    borderRadius: 34,
                    width: 101,
                    borderColor: "#E8EDF2",
                    borderWidth: 1,
                    margin: 2,
                  },
            ]}
          >
            <Text
              preset="bold"
              style={[
                selection === 1 ? { color: "white" } : { color: "black" },
              ]}
            >
              Collection
            </Text>
          </Button>
          <Button
            onPress={() => setSelection(2)}
            style={[
              selection === 2
                ? {
                    borderRadius: 34,
                    width: 101,
                    margin: 2,
                  }
                : {
                    backgroundColor: "white",
                    borderRadius: 34,
                    width: 101,
                    borderColor: "#E8EDF2",
                    borderWidth: 1,
                    margin: 2,
                  },
            ]}
          >
            <Text
              preset="bold"
              style={[
                selection === 2 ? { color: "white" } : { color: "black" },
              ]}
            >
              Posts
            </Text>
          </Button>
        </View>

        <View style={DATA_CONTAINER}>
          {selection === 1
            ? renderCollection()
            : selection === 2
            ? renderPosts()
            : null}
        </View>
      </View>
      <NewPostButton />
    </Screen>
  );
}
