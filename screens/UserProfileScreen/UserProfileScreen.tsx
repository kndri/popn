import * as React from 'react';
import {
	View,
	ViewStyle,
	TextStyle,
	ImageStyle,
	Image,
	Alert,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { color, spacing } from '../../theme';
import { Button, Screen, Text, Header } from '../../components';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import {
	getSneakersFromUser,
	checkLoggedUser,
	getCommentFromUser,
	getPostFromUser,
	deleteUserSneaker,
	getUserFromDb,
	getFollowingFromUser,
	getFollowersFromUser,
} from '../../aws-functions/aws-functions';
import { SneakerList } from '../../types';
// NOTE: This should be refactored
import { API, Auth, graphqlOperation } from 'aws-amplify';
import {
	createFollowers,
	createFollowing,
	createUser,
	deleteSneaker,
	updateUser,
} from '../../src/graphql/mutations';
import { getUser } from '../../src/graphql/queries';
import NewPostButton from '../../components/new-post-button';

import styles from './Styles';
import Feed from '../../components/feed';
import { int } from 'aws-sdk/clients/datapipeline';
import { boolean } from 'yup';

//required images
const messageIcon = require('../../assets/images/message-button.png');
const verified = require('../../assets/images/verified_badge.png');

export default function UserProfileScreen(props?: any) {
  const userID = props.route.params;
  const navigation = useNavigation();
  const [collection, setCollection] = React.useState<any>([]);
  const [username, setUsername] = React.useState("");
  const [profileImage, setprofileImage] = React.useState("");
  const [user, setUser] = React.useState<any>();
  const [selection, setSelection] = React.useState(1);
  const isFocused = useIsFocused();

  const getSneakers = async () => {
    const sneakerlist = await getSneakersFromUser();
    setCollection(sneakerlist);
  };

  const getUserData = async () => {
    const user = await getUserFromDb(userID);
    setUser(user);
    setCollection(user.sneakers.items);
  };

  const check = async () => {
    getUserData();
  };

  React.useEffect(() => {
    check();
  }, [isFocused]);

  const renderSneaker = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ShoeDetails", { shoeID: item.id });
      }}
    >
      <View
        style={{
          justifyContent: "space-evenly",
          height: 150,
          width: 150,
          borderWidth: 1,
          borderColor: "#EBEBEB",
          borderRadius: 10,
          marginBottom: 40,
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          <Text
            text={`${item.primaryName}`}
            style={{ fontSize: 12, color: "#979797" }}
          />
          <Text text={`${item.secondaryName}`} style={{ fontSize: 10 }} />
          {item.claim.items.length > 0 ? (
            <>
              {item.claim?.items[0].status === "verified" ? (
                <Image
                  source={verified}
                  style={{ marginTop: 5, height: 20, width: 20 }}
                />
              ) : null}
            </>
          ) : null}
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{ uri: item.image }}
            style={{ height: 81, width: 100, resizeMode: "contain" }}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Button
            preset="none"
            style={{
              justifyContent: "center",
              width: "70%",
              height: 20,
              paddingVertical: 2,
              borderRadius: 10,
              marginBottom: 15,
            }}
            onPress={() => {
              navigation.navigate("ShoeDetails", { shoeID: item.id });
            }}
          >
            <Text
              preset="bold"
              style={{ fontSize: 12, color: "white", fontWeight: "bold" }}
            >
              View
            </Text>
          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderPosts = () => {
    return (
      <View style={styles.CENTER}>
        <Text>You have no posts!</Text>
      </View>
    );
  };

  const renderEmptyCollection = () => {
    return (
      <>
        <Text
          style={styles.TEXTCENTER}
          preset="bold"
          text="Collection is empty."
        />
      </>
    );
  };

  const renderCollection = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        {collection.length == 0 ? (
          renderEmptyCollection()
        ) : (
          <View style={styles.DATA_CONTAINER}>
            {console.log('collection: ', collection)}
            <FlatList
              data={collection}
              renderItem={renderSneaker}
              keyExtractor={(sneaker) => String(sneaker.id)}
              numColumns={2}
              contentContainerStyle={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            />
          </View>
        )}
      </View>
    );
  };


  return (
    <Screen style={styles.CONTAINER}>
      <View style={styles.PROFILE_HEADER}>
        <Header
          headerTx="Profile"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
        />
      </View>
      {user ? (
        <View style={styles.PROFILE_DATA}>

          <Image style={styles.PROFILE_IMAGE} source={{ uri: user.avatarImageURL }} />
          <View style={{}}>
            <Text preset="header" text={`${user.username}`} />
          </View>
        </View>
      ) : (
        <View style={styles.PROFILE_DATA}>

          <Image style={styles.PROFILE_IMAGE} source={{ uri: `${profileImage}` }} />
          <View style={{}}>
            <Text preset="header" text={`${username}`} />
          </View>
        </View>
      )}

      <View style={{ flexDirection: "row", paddingHorizontal: spacing[3] }}>


        <Button
          style={{ width: "100%", height: 50, borderRadius: 4, marginLeft: 10 }}
          text="Follow"
          preset="primary" />

      </View>

      <View style={styles.COLLECTION_CONTAINER}>
        <View style={styles.BUTTON_VIEW}>
          <Button
            onPress={() => setSelection(1)}
            style={[
              selection === 1
                ? {
                  borderRadius: 34,
                  width: 101,
                  margin: 2,
                }
                : {
                  backgroundColor: "white",
                  borderRadius: 34,
                  width: 101,
                  borderColor: "#E8EDF2",
                  borderWidth: 1,
                  margin: 2,
                },
            ]}
          >
            <Text
              preset="bold"
              style={[
                selection === 1 ? { color: "white" } : { color: "black" },
              ]}
            >
              Collection
            </Text>
          </Button>
          <Button
            onPress={() => setSelection(2)}
            style={[
              selection === 2
                ? {
                  borderRadius: 34,
                  width: 101,
                  margin: 2,
                }
                : {
                  backgroundColor: "white",
                  borderRadius: 34,
                  width: 101,
                  borderColor: "#E8EDF2",
                  borderWidth: 1,
                  margin: 2,
                },
            ]}
          >
            <Text
              preset="bold"
              style={[
                selection === 2 ? { color: "white" } : { color: "black" },
              ]}
            >
              Posts
            </Text>
          </Button>
        </View>

        <View style={styles.DATA_CONTAINER}>
          {selection === 1
            ? renderCollection()
            : selection === 2
              ? renderPosts()
              : null}
        </View>
      </View>
    </Screen>
  );
}
