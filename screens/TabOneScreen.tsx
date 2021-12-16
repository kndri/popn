import * as React from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { color, spacing, typography } from "../theme";
import {
  Button,
  Screen,
  Text,
  TextField,
  AutoImage as Image,
} from "../components";
import sneakerData from "../new_sneaker_data.json";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { addSneaker } from "../aws-functions/add-sneaker-to-users";
import { getSneakersFromUser } from "../aws-functions/get-sneakers-from-user";
import { RootTabScreenProps, SneakerList } from "../types";
import { getSneakersFromDB } from "../aws-functions/get-sneakers-from-db";
import { useToast } from "../components/Toast";

const profile_icon = require("../assets/images/profile_icon.png");
const search_glass = require("../assets/images/search_glass.png");
const default_user = require("../assets/images/UserImage.png");
const options = require("../assets/images/More.png");

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[3],
  flex: 1,
  marginTop: 44,
};
const CLAIM_HEADER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: 17,
  paddingHorizontal: spacing[4],
};
const CLAIM_SEARCH: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 20,
  paddingHorizontal: spacing[4],
  backgroundColor: "#F4F6F9",
  borderRadius: 50,
  padding: 5,
  paddingLeft: 0,
  paddingRight: 0,
  width: "95%",
  alignSelf: "center",
};
const COLLECTION_CONTAINER: ViewStyle = {};

const CARD: ViewStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#F5F5F5",
  padding: 5,
  alignItems: "center",

  borderRadius: 10,
  paddingHorizontal: spacing[3],
  marginTop: 5,
  marginBottom: 5,
};

const LEFT_SIDE: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const CARD_DATA: ViewStyle = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

const users_data = [
  {
    id: 1,
    username: "@dannyy",
    image_url: default_user,
    score: "$536,160",
  },
  {
    id: 2,
    username: "@haslhoff",
    image_url: default_user,
    score: "$536,160",
  },
  {
    id: 3,
    username: "@antman",
    image_url: default_user,
    score: "$536,160",
  },
  {
    id: 4,
    username: "@ndri",
    image_url: default_user,
    score: "$536,160",
  },
  {
    id: 5,
    username: "@Mr.chang",
    image_url: default_user,
    score: "$536,160",
  },
];

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [selection, setSelection] = React.useState(1);

  const renderUsers = ({ item }) => {
    return (
      <View style={CARD}>
        <View style={LEFT_SIDE}>
          <Text
            preset="bold"
            style={{ fontSize: 18, marginLeft: 15, marginRight: 20 }}
          >
            1
          </Text>
          <Image
            source={item.image_url}
            style={{
              resizeMode: "contain",
              height: 50,
              width: 50,
              marginRight: 5,
              // flex: 1,
            }}
          />
        </View>
        <View style={CARD_DATA}>
          <Text preset="default">{item.username}</Text>
          <Text style={{ marginTop: 3 }} preset="secondary">
            {item.score}
          </Text>
        </View>
        <Button
          style={{
            backgroundColor: "transparent",
            alignContent: "flex-start",
          }}
          // onPress={() =>
          //   navigation.navigate("Settings", { screen: "settings" })
          // }
        >
          <Image source={options} />
        </Button>
      </View>
    );
  };
  const renderTrending = () => {
    return (
      <View>
        <Text>hello1</Text>
      </View>
    );
  };
  const renderRanking = () => {
    return (
      <View style={COLLECTION_CONTAINER}>
        <Text preset="header" style={{ marginBottom: 10 }}>
          Don Rankings
        </Text>
        <FlatList
          data={users_data}
          renderItem={renderUsers}
          keyExtractor={(user) => String(user.id)}
          numColumns={1}
        />
      </View>
    );
  };
  const renderFollowing = () => {
    return (
      <View>
        <Text>hello3</Text>
      </View>
    );
  };

  return (
    <Screen style={CONTAINER}>
      <View style={CLAIM_HEADER}>
        <Button
          style={{ backgroundColor: "transparent" }}
          // onPress={() =>
          //   navigation.navigate("Settings", { screen: "settings" })
          // }
        >
          <Image source={profile_icon} />
        </Button>
        <Text preset="header" text="Home" style={{ textAlign: "center" }} />
        <Button
          style={{
            backgroundColor: "#F4F6F9",
            borderRadius: 50,
            height: 40,
            width: 40,
          }}
          // onPress={() =>
          //   navigation.navigate("Settings", { screen: "settings" })
          // }
        >
          <Image source={search_glass} />
        </Button>
      </View>

      <View style={CLAIM_SEARCH}>
        <Button
          onPress={() => setSelection(1)}
          style={[
            {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              width: 120,
            },
            selection === 1
              ? { borderTopRightRadius: 30, borderBottomRightRadius: 30 }
              : { backgroundColor: "#F4F6F9" },
          ]}
        >
          <Text
            preset="bold"
            style={[selection === 1 ? { color: "white" } : { color: "black" }]}
          >
            Trending
          </Text>
        </Button>
        <Button
          onPress={() => setSelection(2)}
          style={[
            { borderRadius: 0, width: 120 },
            selection === 2
              ? { borderRadius: 30 }
              : { backgroundColor: "#F4F6F9" },
          ]}
        >
          <Text
            preset="bold"
            style={[selection === 2 ? { color: "white" } : { color: "black" }]}
          >
            Following
          </Text>
        </Button>
        <Button
          onPress={() => setSelection(3)}
          style={[
            {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              width: 120,
            },
            selection === 3
              ? { borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }
              : { backgroundColor: "#F4F6F9" },
          ]}
        >
          <Text
            preset="bold"
            style={[selection === 3 ? { color: "white" } : { color: "black" }]}
          >
            Ranking
          </Text>
        </Button>
      </View>

      <View style={COLLECTION_CONTAINER}>
        {selection === 1
          ? renderTrending()
          : selection === 2
          ? renderFollowing()
          : renderRanking()}
      </View>
    </Screen>
  );
}
