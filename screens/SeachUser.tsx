import * as React from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { View } from "../components/Themed";
import { spacing } from "../theme";
import MessageContactListItem from "../components/message-contact-list-item";
import { Text, Screen, Header, AutoImage as Image } from "../components";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { listUsers } from "../src/graphql/queries";

export default function UserSearchScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [query, setQuery] = React.useState("");
  const [searchedContacts, setSearchedContacts] = React.useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    const fetchUsers = async () => {
      let setUniqueUsers;
      try {
        const usersData = await API.graphql(graphqlOperation(listUsers));
        setUniqueUsers = usersData.data.listUsers.items;
      } catch (e) {
        console.log(e);
      }
      let tempArr = [...setUniqueUsers];
      setUniqueUsers.map((user) => {
        if (
          route.params?.excludedUsers.includes(user.username) ||
          route.params?.currentUser.data.getUser.username == user.username
        ) {
          tempArr.splice(tempArr.indexOf(user), 1); //deleting
        }
      });
      setUsers(tempArr);
      setSearchedContacts(tempArr);
    };
    fetchUsers();
  }, [isFocused]);

  // useEffect to filter out the searched contact
  React.useEffect(() => {
    if (query.length === 0) {
      setSearchedContacts(users);
    } else {
      const searchedObject: any = [];
      users
        .filter((contactObject) =>
          contactObject.username
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        )
        .map((filteredContact) => {
          searchedObject.push(filteredContact);
        });

      setSearchedContacts(searchedObject);
    }
  }, [query]);

  React.useEffect(() => {}, [users]);

  const onClick = (id) => {
    navigation.navigate("UserProfile", id);
  };

  const renderUsers = (user) => (
    <TouchableOpacity onPress={() => onClick(user.id)}>
      <View style={styles.usercontainer}>
        <View style={styles.lefContainer}>
          <Image
            source={{ uri: `${user.avatarImageURL}` }}
            style={styles.avatar}
          />

          <View style={styles.midContainer}>
            <Text style={styles.username}>{user.username}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Screen style={styles.container}>
      <View style={styles.HEADER}>
        <Header
          headerTx="Search"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.SEARCH}>
        <TextInput
          style={{
            width: "100%",
            height: 48,
            borderWidth: 1,
            paddingLeft: 20,
            borderRadius: 32,
            borderColor: "#F4F6F9",
            backgroundColor: "#F4F6F9",
          }}
          value={query}
          autoCorrect={false}
          onChangeText={(text) => setQuery(text)}
          placeholder="Search"
          placeholderTextColor={"#878C90"}
        />
      </View>
      {query.length === 0 || searchedContacts.length === 0 ? (
        // <View style={{ height: "100%", backgroundColor: "transparent" }}>
        //   <ActivityIndicator size="large" color="black" />
        // </View>
        <View style={{ alignItems: "center" }}>
          {searchedContacts.length === 0 ? (
            <Text>Results Not Found</Text>
          ) : (
            <Text>Search Something</Text>
          )}
        </View>
      ) : (
        <FlatList
          style={{
            width: "100%",
            backgroundColor: "transparent",
            height: "100%",
          }}
          data={searchedContacts}
          renderItem={({ item }) => renderUsers(item)}
          keyExtractor={(item) => String(item.id)}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
  },
  TEXTCENTER: {
    textAlign: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  SEARCH: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: spacing[4],
    height: 25,
    width: "100%",
    backgroundColor: "transparent",
  },
  HEADER: {
    flexDirection: "row",
    paddingHorizontal: spacing[4],
    backgroundColor: "transparent",
  },
  usercontainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  lefContainer: {
    flexDirection: "row",
  },
  midContainer: {
    justifyContent: "space-around",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  status: {
    fontSize: 16,
    color: "grey",
  },
});
