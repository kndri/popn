import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import Post from "../post";
import { getPostFromDB } from "../../aws-functions/aws-functions";


const Feed = ({ post }) => {
  const [posts, setPosts] = useState<any>(post);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      const postData = await getPostFromDB().catch((error) =>
        console.error(error)
      );

      setPosts(postData);
    } catch (e) {
      console.log(e);
    } 
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchPosts();
    }, [post])
  );
  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} fetchPosts={fetchPosts} />}
        keyExtractor={(item) => String(item.id)}
        refreshing={loading}
        onRefresh={() => fetchPosts()}
        style={{ height: "100%" }}
      />
    </View>
  );
};

export default Feed;
