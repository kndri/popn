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
import {
  addUserSneaker,
  getSneakersFromUser,
  getSneakersFromDB,
} from "../aws-functions/aws-functions";
import { SneakerList } from "../types";

import { useToast } from "../components/Toast";

const profile_icon = require("../assets/images/profile_icon.png");
const search_icon = require("../assets/images/searchIcon.png");

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[3],
  flex: 1,
  // marginTop: 44,
};
const CENTER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
};
const CLAIM_HEADER: ViewStyle = {
  flexDirection: "row",
  paddingBottom: 17,
  paddingHorizontal: spacing[4],
  // backgroundColor: 'red',
  alignItems: "center",
};
const CLAIM_SEARCH: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 20,
  paddingHorizontal: spacing[4],
  backgroundColor: "#F4F6F9",
  height: 48,
  width: 335,
  borderWidth: 1,
  borderColor: "#F4F6F9",
  borderRadius: 32,
};
const COLLECTION_CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
};
const TEXTCENTER: TextStyle = {
  textAlign: "center",
  alignItems: "center",
};
const INPUT: TextStyle = {
  fontFamily: typography.primaryBold,
};
const INPUTSTYLE_CONTAINER: ViewStyle = {
  width: "100%",
  height: 55,
  marginBottom: 30,
  borderWidth: 1,
  borderColor: "black",
  borderRadius: 10,
};

const SHADOW: ViewStyle = {
  shadowColor: "#171717",
  shadowOffset: { width: 2, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
};

export default function TabTwoScreen() {
  const navigation = useNavigation();
  const toast = useToast();
  const [query, setQuery] = React.useState("");
  const [searchedArray, setSearchedArray] = React.useState<any>([]);
  const [collection, setCollection] = React.useState<any>([]);
  const [sneakerDb, setSneakerDb] = React.useState<any>([]);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (query.length === 0) {
      setSearchedArray(sneakerDb);
    } else {
      const searchedObjects: any = [];
      sneakerDb
        .filter(
          (sneakerObject) =>
            sneakerObject.primary_name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, "")) ||
            sneakerObject.secondary_name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
        )
        .map((filteredSneaker) => {
          searchedObjects.push(filteredSneaker);
        });

      setSearchedArray(searchedObjects);
    }
  }, [query]);

  const getSneakers = async () => {
    const sneakerlist = await getSneakersFromUser().catch((error) =>
      console.error(error)
    );
    const sneakersData = await getSneakersFromDB().catch((error) =>
      console.error(error)
    );
    setSearchedArray(sneakersData);
    setSneakerDb(sneakersData);
    setCollection(sneakerlist);
  };

  const checkClaimed = (item: any) => {
    const found = collection.some((sneaker) => sneaker.id == item.id);

    if (found) {
      return true;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    getSneakers();
  }, [isFocused]);

  React.useEffect(() => {}, [sneakerDb]);

  const renderSneaker = ({ item }) => {
    if (checkClaimed(item)) {
      return (
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
            opacity: 0.5,
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
              text={`${item.primary_name}`}
              style={{ fontSize: 12, color: "#979797" }}
            />
            <Text text={`${item.secondary_name}`} style={{ fontSize: 10 }} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={{ uri: item.image_url }}
              style={{ height: 81, width: 100, resizeMode: "contain" }}
            />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Button
              preset="none"
              disabled
              style={{
                justifyContent: "center",
                width: "70%",
                height: 20,
                paddingVertical: 2,
                borderRadius: 10,
                marginBottom: 15,
              }}
              onPress={() => {
                addUserSneaker(item);

                // then grey out the sneaker card
              }}
            >
              <Text
                preset="bold"
                style={{ fontSize: 12, color: "white", fontWeight: "bold" }}
              >
                Claimed
              </Text>
            </Button>
          </View>
        </View>
      );
    } else {
      return (
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
              text={`${item.primary_name}`}
              style={{ fontSize: 12, color: "#979797" }}
            />
            <Text text={`${item.secondary_name}`} style={{ fontSize: 10 }} />
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={{ uri: item.image_url }}
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
                addUserSneaker(item).then(() => {
                  // Add toast here
                  toast.show(`Sneaker has been added to your showcase.`);
                  getSneakers();
                });
                // then grey out the sneaker card
              }}
            >
              <Text
                preset="bold"
                style={{ fontSize: 12, color: "white", fontWeight: "bold" }}
              >
                Claim
              </Text>
            </Button>
          </View>
        </View>
      );
    }
  };

  return (
    <Screen style={CONTAINER}>
      <View style={CLAIM_HEADER}>
        <Button
          style={{ backgroundColor: "transparent" }}
          onPress={() => navigation.navigate("UserProfile")}
        >
          <Image source={profile_icon} />
        </Button>
        <Text preset="header" text="Claim" style={{ left: 80 }} />
      </View>

      <View style={CLAIM_SEARCH}>
        <Image source={search_icon} style={{ marginLeft: 17 }} />
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

      <View style={COLLECTION_CONTAINER}>
        <FlatList
          data={searchedArray}
          renderItem={renderSneaker}
          keyExtractor={(sneaker) => String(sneaker.id)}
          numColumns={2}
          contentContainerStyle={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        />
      </View>
    </Screen>
  );
}
