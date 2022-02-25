import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { MessageContactUser } from "../../types";
import { AutoImage as Image } from '../';
import { useNavigation } from '@react-navigation/native';



export type SearchedUserListItemProps = {
    user: MessageContactUser;
}

const SearchedUserListItem = (props: SearchedUserListItemProps) => {
    const { user } = props;
    const [userAvatarImageURL, setUserAvatarImageURL] = React.useState(user.avatarImageURL);
    const navigation = useNavigation();


    React.useEffect(() => {
        loadUserImages();
    }, [])

    const loadUserImages = async () => {
        if (user.avatarImageURL === "https://popn-app.s3.amazonaws.com/default_images/defaultUser.png") {
            setUserAvatarImageURL("https://popn-app.s3.amazonaws.com/default_images/defaultUser.png")
        } else {
            setUserAvatarImageURL(user.avatarImageURL.substring(0, user.avatarImageURL.indexOf('.jpeg') + '.jpeg'.length))
        }
    }

    return (
        <TouchableOpacity onPress={() => { navigation.navigate('UserProfile', user.id) }}>
            {/* {console.log("userAvatarImageURL: ", userAvatarImageURL)} */}
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri: `${userAvatarImageURL}` }} style={styles.avatar} />

                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.username}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,

    },
    lefContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 15,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    status: {
        fontSize: 16,
        color: 'grey',
    },
});


export default SearchedUserListItem;