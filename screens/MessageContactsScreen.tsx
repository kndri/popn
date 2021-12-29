import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { View } from '../components/Themed';
import MessageContactListItem from '../components/message-contact-list-item';
import { Text } from '../components'
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
        <View style={styles.container}>
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
        </View>
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
});