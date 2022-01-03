import * as React from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { View, } from '../components/Themed';
import { color, spacing, typography } from "../theme";
import MessageContactListItem from '../components/message-contact-list-item';
import { Text, Screen } from '../components'
import { listUsers } from '../src/graphql/queries';
import { useEffect, useState } from "react";

export default function MessageContactsScreen() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await API.graphql(
                    graphqlOperation(
                        listUsers
                    )
                )
                setUsers(usersData.data.listUsers.items);
            } catch (e) {
                console.log(e);
            }
        }
        fetchUsers();
    }, [])

    return (
        <Screen style={styles.container}>
            <View style={styles.CLAIM_SEARCH}>
                <TextInput
                    style={{
                        width: "100%",
                        height: 48,
                        borderWidth: 1,
                        paddingLeft: 20,
                        borderRadius: 32,
                        borderColor: "#F4F6F9",
                        backgroundColor: "black",
                    }}
                    //   value={query}
                    autoCorrect={false}
                    //   onChangeText={(text) => setQuery(text)}
                    placeholder="To:"
                    placeholderTextColor={"white"}
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
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'white'
    },
    TEXTCENTER: {
        textAlign: "center",
        alignItems: "center",
        textAlignVertical: "center",
    },
    CLAIM_SEARCH: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        paddingHorizontal: spacing[4],
        backgroundColor: "orange",
        height: 48,
        width: 335,
        borderWidth: 1,
        borderColor: "#F4F6F9",
        borderRadius: 32,

    },
});