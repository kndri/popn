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
import { color, spacing } from "../../theme";
import { Button, Screen, Text, Header } from "../../components";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import {
  getSneakersFromUser,
  checkLoggedUser,
  getCommentFromUser,
  getPostFromUser,
  deleteUserSneaker,
  getUserFromDb,
} from "../../aws-functions/aws-functions";
import { SneakerList } from "../../types";
// NOTE: This should be refactored
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createUser, deleteSneaker } from "../../src/graphql/mutations";
import { getUser } from "../../src/graphql/queries";
import NewPostButton from "../../components/new-post-button";

import styles from "./Styles";

//required images
const messageIcon = require("../../assets/images/message-button.png");
const verified = require("../../assets/images/Verified.png");

export default function UserProfileScreen(props?: any) {
  const userID = props.route.params;

  const navigation = useNavigation();
  const [collection, setCollection] = React.useState<any>([]);
  const [username, setUsername] = React.useState("");
  const [profileImage, setprofileImage] = React.useState("");
  const [user, setUser] = React.useState<any>();
  const [selection, setSelection] = React.useState(1);
  const [isMainUser, setIsMainUser] = React.useState(true);
  const [userAvatarImageURL, setUserAvatarImageURL] = React.useState(String);
  const [otherUserAvatarImageURL, setOtherUserAvatarImageURL] =
    React.useState(String);
  const isFocused = useIsFocused();

  const getSneakers = async () => {
    const sneakerlist = await getSneakersFromUser();
    const user = await checkLoggedUser();

    console.log("user image", user);
    setUsername(user.attributes.preferred_username);
    setprofileImage(user.attributes["custom:blob"]);
    setCollection(sneakerlist);
    // formatLoggedUserImage(profileImage);
  };

  //WIP
  // const formatLoggedUserImage = (image: string) => {
  //   if (image.includes('.jpeg')) {
  //     setUserAvatarImageURL(image.substring(0, image.indexOf('.jpeg') + '.jpeg'.length))
  //   } else if (image.includes('.jpg')) {
  //     setUserAvatarImageURL(image.substring(0, image.indexOf('.jpg') + '.jpg'.length))
  //   } else if (image.includes('.png')) {
  //     setUserAvatarImageURL(image.substring(0, image.indexOf('.png') + '.png'.length))
  //   } else if (image.includes('.heic')) {
  //     setUserAvatarImageURL(image.substring(0, image.indexOf('.heic') + '.heic'.length))
  //   } else {
  //     setUserAvatarImageURL("https://popn-app.s3.amazonaws.com/default_images/defaultUser.png")
  //   }
  // }

  //WIP
  // const formatSearchedUserImage = () => {
  //   if (user.avatarImageURL.includes('.jpeg')) {
  //     setOtherUserAvatarImageURL(user.avatarImageURL.substring(0, user.avatarImageURL.indexOf('.jpeg') + '.jpeg'.length))
  //   } else if (user.avatarImageURL.includes('.jpg')) {
  //     setOtherUserAvatarImageURL(user.avatarImageURL.substring(0, user.avatarImageURL.indexOf('.jpg') + '.jpg'.length))
  //   } else if (user.avatarImageURL.includes('.png')) {
  //     setOtherUserAvatarImageURL(user.avatarImageURL.substring(0, user.avatarImageURL.indexOf('.png') + '.png'.length))
  //   } else if (user.avatarImageURL.includes('.heic')) {
  //     setOtherUserAvatarImageURL(user.avatarImageURL.substring(0, user.avatarImageURL.indexOf('.heic') + '.heic'.length))
  //   } else {
  //     setOtherUserAvatarImageURL("https://popn-app.s3.amazonaws.com/default_images/defaultUser.png")
  //   }
  // }

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
      //WIP
      setIsMainUser(false);
      // formatSearchedUserImage()
    }
  };

  React.useEffect(() => {
    // checks whether it is a different user
    check();
  }, [isFocused]);

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
      onPress={() => {
        navigation.navigate("ShoeDetails", { shoeID: item.id });
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
          {item.claim.items.length > 0 ? (
            <>
              {item.claim?.items[0].status === "verified" ? (
                <Image
                  source={verified}
                  style={{ marginTop: 5, height: 20, width: 20 }}
                />
              ) : null}
            </>
          ) : null}
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
              navigation.navigate("ShoeDetails", { shoeID: item.id });
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
      <View style={styles.CENTER}>
        <Text>You have no posts!</Text>
      </View>
    );
  };

  const renderEmptyCollection = () => {
    if (isMainUser === false) {
      return (
        <>
          <Text
            style={styles.TEXTCENTER}
            preset="bold"
            text="Collection is empty."
          />
        </>
      );
    } else {
      return (
        <>
          <Text
            style={styles.TEXTCENTER}
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
          <View style={styles.DATA_CONTAINER}>
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
    <Screen style={styles.CONTAINER}>
      <View style={styles.PROFILE_HEADER}>
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
        <View style={styles.PROFILE_DATA}>
          {console.log("searchUserIMG:", `${user.avatarImageURL}`)}
          <Image
            style={styles.PROFILE_IMAGE}
            source={{ uri: user.avatarImageURL }}
          />

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
        <View style={styles.PROFILE_DATA}>
          <Image
            style={styles.PROFILE_IMAGE}
            source={{ uri: `${profileImage}` }}
          />

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
            style={{ width: 262, height: 50, borderRadius: 4, marginLeft: 10 }}
            text="Follow"
            preset="primary"
            // onPress={() => navigation.navigate("")}
          />
        ) : (
          <Button
            style={{ width: 262, height: 50, borderRadius: 4, marginLeft: 10 }}
            text="Edit Profile"
            preset="primary"
            // onPress={() => navigation.navigate("")}
          />
        )}
      </View>

      <View style={styles.COLLECTION_CONTAINER}>
        <View style={styles.BUTTON_VIEW}>
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

        <View style={styles.DATA_CONTAINER}>
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
