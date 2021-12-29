import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";

import Post from "../post";
import { getPostFromDB } from "../../aws-functions/aws-functions";

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

const Feed = ({ post, user }) => {
  const [posts, setPosts] = useState<any>(post);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const postData = await getPostFromDB().catch((error) =>
        console.error(error)
      );

      setPosts(postData);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} user={user} />}
        keyExtractor={(item) => String(item.id)}
        refreshing={loading}
        onRefresh={fetchPosts}
        // ListHeaderComponent={UserFleetsList}
      />
    </View>
  );
};

export default Feed;
