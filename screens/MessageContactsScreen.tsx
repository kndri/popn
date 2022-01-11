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

export default function MessageContactsScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            let setUniqueUsers;
            try {
                const usersData = await API.graphql(
                    graphqlOperation(
                        listUsers
                    )
                )
                setUniqueUsers = usersData.data.listUsers.items;

            } catch (e) {
                console.log(e);
            }
            let tempArr = [...setUniqueUsers];
            setUniqueUsers.map((user) => {
                if (route.params?.excludedUsers.includes(user.username) || route.params?.currentUser.data.getUser.username == user.username) {
                    tempArr.splice(tempArr.indexOf(user), 1);  //deleting
                }
            })
            setUsers(tempArr);
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
        backgroundColor: 'transparent'
    },
    HEADER: {
        flexDirection: "row",
        paddingHorizontal: spacing[4],
        backgroundColor: 'transparent'
    }
});