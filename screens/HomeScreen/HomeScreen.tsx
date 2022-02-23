import * as React from "react";
import { View, FlatList } from "react-native";

import {
  Button,
  Screen,
  Text,
  AutoImage as Image,
  Header,
} from "../../components";
import { API, graphqlOperation } from "aws-amplify";

import { listPosts } from "../../src/graphql/queries";

import { RootTabScreenProps } from "../../types";

import Feed from "../../components/feed";
import NewPostButton from "../../components/new-post-button";

import styles from "./Styles";

const options = require("../../assets/images/More.png");

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const [selection, setSelection] = React.useState(1);
  const [post, setPost] = React.useState<any>([]);

  const fetchPosts = async () => {
    const postData = await API.graphql(graphqlOperation(listPosts));
    setPost(postData);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const renderUsers = ({ item }) => {
    return (
      <View style={styles.CARD}>
        <View style={styles.LEFT_SIDE}>
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
        <View style={styles.CARD_DATA}>
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
    return <View>{<Feed post={post} />}</View>;
  };

  const renderRanking = () => {
    return (
      <View>
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

  return (
    <Screen style={styles.CONTAINER}>
      <Header
        headerTx="Home"
        leftIcon="profile"
        onLeftPress={() => navigation.navigate("UserProfile")}
        rightIcon="search"
        onRightPress={() => navigation.navigate("UserSearch")}
      />
      {/* this is for future use*/}
      {/* 
      <View style={styles.SEARCH}>
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
      </View> */}

      <View style={{ marginTop: 50 }}>
        {/* this is for future use*/}
        {/* {selection === 1
          ? renderTrending()
          : selection === 2
          ? null
          : renderRanking()} */}

        {renderTrending()}
      </View>
      <NewPostButton />
    </Screen>
  );
}
