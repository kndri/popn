import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";

// import { listTweets } from "../../src/graphql/queries";
import Post from "../post";
// import Tweet from "../Tweet";
// import UserFleetsList from "../UserFleetsList";

const default_user = require("../../assets/images/defaultUser.png");

const users_posts = [
  {
    id: 1,
    username: "@dannyy",
    image_url: default_user,
    post_description:
      "Please note that some processing of your personal data may not require your consent.",
    likes: "2.5k",
    comments: "3.5k",
    seen: "10k",
  },
  {
    id: 2,
    username: "@haslhoff",
    image_url: default_user,
    post_description:
      "Please note that some processing of your personal data may not require your consent.",
    likes: "2.5k",
    comments: "3.5k",
    seen: "10k",
  },
  {
    id: 3,
    username: "@antman",
    image_url: default_user,
    post_description:
      "Please note that some processing of your personal data may not require your consent.",
    likes: "2.5k",
    comments: "3.5k",
    seen: "10k",
  },
  {
    id: 4,
    username: "@ndri",
    image_url: default_user,
    post_description:
      "Please note that some processing of your personal data may not require your consent.",
    likes: "2.5k",
    comments: "3.5k",
    seen: "10k",
  },
  {
    id: 5,
    username: "@Mr.chang",
    image_url: default_user,
    post_description:
      "Please note that some processing of your personal data may not require your consent.",
    likes: "2.5k",
    comments: "3.5k",
    seen: "10k",
  },
];

const Feed = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTweets = async () => {
    setLoading(true);
    try {
      const tweetsData = await API.graphql(graphqlOperation(listTweets));
      setp(tweetsData.data.listTweets.items);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchTweets();
  }, []);

  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={users_posts}
        renderItem={({ item }) => <Post item={item} />}
        keyExtractor={(item) => String(item.id)}
        // refreshing={loading}
        // onRefresh={fetchTweets}
        // ListHeaderComponent={UserFleetsList}
      />
    </View>
  );
};

export default Feed;
