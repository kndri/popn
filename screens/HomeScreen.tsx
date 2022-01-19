import * as React from "react";
import { View, ViewStyle, FlatList } from "react-native";
import { color, spacing } from "../theme";
import {
  Button,
  Screen,
  Text,
  AutoImage as Image,
  Header,
} from "../components";
import { API, graphqlOperation } from "aws-amplify";

import { getUser, listPosts } from "../src/graphql/queries";

import { RootTabScreenProps } from "../types";

import Feed from "../components/feed";
import NewPostButton from "../components/new-post-button";
import { checkLoggedUser } from "../aws-functions/aws-functions";
import { createUser } from "../src/graphql/mutations";

const default_user = require("../assets/images/UserImage.png");
const options = require("../assets/images/More.png");

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[3],
  flex: 1,
};
const SEARCH: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 20,
  paddingHorizontal: spacing[4],
  backgroundColor: "#F4F6F9",
  borderRadius: 50,
  padding: 5,
  paddingLeft: 0,
  paddingRight: 0,
  width: "95%",
  alignSelf: "center",
};
const COLLECTION_CONTAINER: ViewStyle = {};

const CARD: ViewStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#F5F5F5",
  padding: 5,
  alignItems: "center",

  borderRadius: 10,
  paddingHorizontal: spacing[3],
  marginTop: 5,
  marginBottom: 5,
};

const LEFT_SIDE: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const CARD_DATA: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

const users_data = [
  {
    id: 1,
    username: "@dannyy",
    image_url: default_user,
    score: "$536,160",
  },
  {
    id: 2,
    username: "@haslhoff",
    image_url: default_user,
    score: "$536,160",
  },
  {
    id: 3,
    username: "@antman",
    image_url: default_user,
    score: "$536,160",
  },
  {
    id: 4,
    username: "@ndri",
    image_url: default_user,
    score: "$536,160",
  },
  {
    id: 5,
    username: "@Mr.chang",
    image_url: default_user,
    score: "$536,160",
  },
];

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const [selection, setSelection] = React.useState(1);
  const [user, setUser] = React.useState<string>("");
  const [post, setPost] = React.useState<any>([]);

  const fetchPosts = async () => {
    const postData = await API.graphql(graphqlOperation(listPosts));
    setPost(postData);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const saveUserToDB = async (user: any) => {
    await API.graphql(graphqlOperation(createUser, { input: user }));
  };

  React.useEffect(() => {
    const getUserDb = async () => {
      // Get current authenticated user
      const user = await checkLoggedUser();

      if (user) {
        // Check if user already exists in database
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: user.attributes.sub })
        );
        if (!userData.data.getUser) {
          const userObj = {
            id: user.attributes.sub,
            age: user["custom:age"],
            username: user.preferred_username,
            email: user.email,
            avatarImageURL: user["custom:profile_image"],
            following: 0,
            follower: 0,
          };
          await saveUserToDB(userObj);
        } else {
          console.log("User already exists");
        }
      }
    };
    getUserDb();
  }, []);

  const renderUsers = ({ item }) => {
    return (
      <View style={CARD}>
        <View style={LEFT_SIDE}>
          <Text
            preset="bold"
            style={{ fontSize: 18, marginLeft: 15, marginRight: 20 }}
          >
            {item.id}
          </Text>
          <Image
            source={item.image_url}
            style={{
              resizeMode: "contain",
              height: 50,
              width: 50,
              marginRight: 5,
            }}
          />
        </View>
        <View style={CARD_DATA}>
          <Text preset="default">{item.username}</Text>
          <Text style={{ marginTop: 3 }} preset="secondary">
            {item.score}
          </Text>
        </View>
        <Button
          style={{
            backgroundColor: "transparent",
            alignContent: "flex-start",
          }}
        >
          <Image source={options} />
        </Button>
      </View>
    );
  };

  const renderTrending = () => {
    return <View style={COLLECTION_CONTAINER}>{<Feed post={post} />}</View>;
  };

  const renderRanking = () => {
    return (
      <View style={COLLECTION_CONTAINER}>
        <Text preset="header" style={{ marginBottom: 10 }}>
          Don Rankings
        </Text>
        <FlatList
          data={users_data}
          renderItem={renderUsers}
          keyExtractor={(user) => String(user.id)}
          numColumns={1}
        />
      </View>
    );
  };

  const renderFollowing = () => {
    return <View></View>;
  };

  return (
    <Screen style={CONTAINER}>
      <Header
        headerTx="Home"
        leftIcon="profile"
        onLeftPress={() => navigation.navigate("UserProfile")}
        rightIcon="plus"
        onRightPress={() => navigation.navigate("UserSearch")}
      />

      <View style={SEARCH}>
        <Button
          onPress={() => setSelection(1)}
          style={[
            {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              width: 120,
            },
            selection === 1
              ? { borderTopRightRadius: 30, borderBottomRightRadius: 30 }
              : { backgroundColor: "#F4F6F9" },
          ]}
        >
          <Text
            preset="bold"
            style={[selection === 1 ? { color: "white" } : { color: "black" }]}
          >
            Trending
          </Text>
        </Button>
        <Button
          onPress={() => setSelection(2)}
          style={[
            { borderRadius: 0, width: 120 },
            selection === 2
              ? { borderRadius: 30 }
              : { backgroundColor: "#F4F6F9" },
          ]}
        >
          <Text
            preset="bold"
            style={[selection === 2 ? { color: "white" } : { color: "black" }]}
          >
            Following
          </Text>
        </Button>
        <Button
          onPress={() => setSelection(3)}
          style={[
            {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              width: 120,
            },
            selection === 3
              ? { borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }
              : { backgroundColor: "#F4F6F9" },
          ]}
        >
          <Text
            preset="bold"
            style={[selection === 3 ? { color: "white" } : { color: "black" }]}
          >
            Ranking
          </Text>
        </Button>
      </View>

      <View style={COLLECTION_CONTAINER}>
        {selection === 1
          ? renderTrending()
          : selection === 2
          ? renderFollowing()
          : renderRanking()}
      </View>
      <NewPostButton />
    </Screen>
  );
}
