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
import { useIsFocused, useNavigation } from "@react-navigation/native";

import { color, spacing } from "../theme";
import { Button, Screen, Text, Header } from "../components";
import {
  getSneakersFromUser,
  checkLoggedUser,
  deleteUserSneaker,
  getUserFromDb,
} from "../aws-functions/aws-functions";
// NOTE: This should be refactored
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createChatRoom, createChatRoomUser } from "../src/graphql/mutations";
import { getUser, getChatRoom } from "../src/graphql/queries";

import NewPostButton from "../components/new-post-button";
//required images
const messageIcon = require("../assets/images/message-button.png");
const verified = require("../assets/images/Verified.png");

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
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

  const onClick = async () => {
    //fetch all the chatrooms that the current user is in 


    // if the currentUser already has a chatroom with the person they're trying to message,
    // then just navigate to that existing chatroom

    //else create a new chatroom 
    try {
      //  1. Create a new Chat Room
      const newChatRoomData = await API.graphql(
        graphqlOperation(
          createChatRoom, {
          input: {
            lastMessageID: Math.round(Math.random() * 1000000)
          }
        }
        )
      )

      if (!newChatRoomData.data) {
        console.log(" Failed to create a chat room");
        return;
      }

      const newChatRoom = newChatRoomData.data.createChatRoom;

      // 2. Add `user` to the Chat Room
      await API.graphql(
        graphqlOperation(
          createChatRoomUser, {
          input: {
            userID: user.id,
            chatRoomID: newChatRoom.id,
          }
        }
        )
      )

      //  3. Add authenticated user to the Chat Room
      const userInfo = await Auth.currentAuthenticatedUser();
      await API.graphql(
        graphqlOperation(
          createChatRoomUser, {
          input: {
            userID: userInfo.attributes.sub,
            chatRoomID: newChatRoom.id,
          }
        }
        )
      )

      navigation.navigate('NewMessageRoom', {
        id: newChatRoom.id,
        name: user.username,
      })

    } catch (e) {
      console.log(e);
    }
  }

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
          {console.log("USERDATA: ", user)}
          <Image style={PROFILE_IMAGE} source={{ uri: user.avatarImageURL }} />
          <View style={{}}>
            <Text preset="header" text={`${user.username}`} />
          </View>
        </View>
      ) : (
        <View style={PROFILE_DATA}>
          {console.log("USERDATA: ", user)}
          <Image style={PROFILE_IMAGE} source={{ uri: `${profileImage}` }} />
          <View style={{}}>
            <Text preset="header" text={`${username}`} />
          </View>
        </View>
      )}

      <View style={{ flexDirection: "row", paddingHorizontal: spacing[5] }}>


        {user ? (
          <>
            <Button
              style={{ backgroundColor: "transparent", width: 48, height: 48 }}
              onPress={onClick}
            >
              <Image source={messageIcon} />
            </Button>

            <Button
              style={{ width: 262, height: 50, borderRadius: 4, marginLeft: 10 }}
              text="Follow"
              preset="primary" />
          </>
        ) : (
          <Button
            style={{ width: '100%', height: 50, borderRadius: 4, }}
            text="Edit Profile"
            preset="primary"
          // onPress={() => navigation.navigate("")}
          />
        )}
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
