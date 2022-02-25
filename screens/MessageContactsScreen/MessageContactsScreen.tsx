import * as React from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { View } from "../../components/Themed";
import { spacing } from "../../theme";
import MessageContactListItem from "../../components/message-contact-list-item";
import { Screen, Header } from "../../components";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { listUsers } from "../../src/graphql/queries";

import styles from "./Styles";

export default function MessageContactsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [query, setQuery] = React.useState("");
  const [searchedContacts, setSearchedContacts] = React.useState<any>([]);
  const [users, setUsers] = useState<any>([]);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    fetchUsers();
  }, [isFocused]);

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

  return (
    <Screen style={styles.container}>
      <View style={styles.HEADER}>
        <Header
          headerTx="New message"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.SEARCH}>
        <TextInput
          style={{
            width: "100%",
          }}
          value={query}
          autoCorrect={false}
          onChangeText={(text) => setQuery(text)}
          placeholder="To: "
          placeholderTextColor={"black"}
        />
      </View>
      {searchedContacts.length === 0 ? (
        <View style={{ height: "100%", backgroundColor: "transparent" }}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <FlatList
          style={{
            width: "100%",
            backgroundColor: "transparent",
            height: "100%",
          }}
          data={searchedContacts}
          renderItem={({ item }) => <MessageContactListItem user={item} />}
          keyExtractor={(item) => String(item.id)}
        />
      )}
    </Screen>
  );
}
