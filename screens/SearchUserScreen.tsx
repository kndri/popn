import * as React from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { View } from "../components/Themed";
import { spacing } from "../theme";
import SearchedUserListItem from "../components/searched-users-list-item";
import { Text, Screen, Header } from "../components";
import { useNavigation, } from "@react-navigation/native";
import { useState } from "react";
import { listUsers } from "../src/graphql/queries";

export default function UserSearchScreen() {
  const navigation = useNavigation();
  const [query, setQuery] = React.useState("");
  const [searchedContacts, setSearchedContacts] = React.useState<any>([]);
  const [users, setUsers] = useState<any>([]);


  React.useEffect(() => {
    const fetchUsers = async () => {
      let setUniqueUsers;
      try {
        const usersData = await API.graphql(graphqlOperation(listUsers));
        setUniqueUsers = usersData.data.listUsers.items;
        setUsers(setUniqueUsers);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();
    console.log('array: ', users)
  }, []);

  // useEffect to filter out the searched contact
  React.useEffect(() => {
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

  }, [query]);


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
        <View style={{ alignItems: "center", backgroundColor: "transparent" }}>
          {searchedContacts.length === 0 && query.length > 0 ? (
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
          renderItem={({ item }) => <SearchedUserListItem user={item} />}
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
    backgroundColor: "transparent",
  },
  lefContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  midContainer: {
    justifyContent: "space-around",
    backgroundColor: "transparent",
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
  },
});
