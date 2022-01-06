import * as React from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { View, } from '../components/Themed';
import { spacing } from "../theme";
import MessageContactListItem from '../components/message-contact-list-item';
import {
    Text, Screen, Header
} from '../components'
import { listUsers } from '../src/graphql/queries';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";

const profile_icon = require("../assets/images/profile_icon.png");


export default function MessageContactsScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await API.graphql(
                    graphqlOperation(
                        listUsers
                    )
                )
                // @ANT: Filter listUsers array with excludedUsers
                let setUniqueUsers = usersData.data.listUsers.items;
                setUniqueUsers.map((user) => {
                    if (route.params?.excludedUsers.includes(user.username) || route.params?.currentUser.data.getUser.username === user.username) {
                        setUniqueUsers.splice(setUniqueUsers.indexOf(user), 1);  //deleting
                    }
                })
                setUniqueUsers.splice(setUniqueUsers.indexOf(route.params?.currentUser.data.getUser.username), 1) //delete signed in user from unique
                setUsers(setUniqueUsers);
            } catch (e) {
                console.log(e);
            }
        }
        fetchUsers();
    }, [])

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
                    //   value={query}
                    autoCorrect={false}
                    //   onChangeText={(text) => setQuery(text)}
                    placeholder="To: "
                    placeholderTextColor={"black"}
                />
            </View>
            {users.length === 0 ? (
                <View style={{ height: '100%', justifyContent: 'center' }}>
                    <Text
                        style={styles.TEXTCENTER}
                        preset="bold"
                        text="No Contacts Found."
                    />
                </View>
            ) : (
                <FlatList
                    style={{ width: '100%' }}
                    data={users}
                    renderItem={({ item }) => <MessageContactListItem user={item} />}
                    keyExtractor={(item) => item.id}
                />
            )
            }
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'white'
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
        width: '100%',
    },
    HEADER: {
        flexDirection: "row",
        paddingHorizontal: spacing[4],
    }
});