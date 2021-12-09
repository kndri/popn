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
import { SneakerList } from "../types";
import { getSneakersFromDB } from "../aws-functions/get-sneakers-from-db";

// Styles
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[3],
  flex: 1,
  marginTop: 25,
};
const CENTER: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
};
const CLAIM_HEADER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: 17,
};
const CLAIM_SEARCH: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 20,
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
  const [query, setQuery] = React.useState("");
  const [searchedArray, setSearchedArray] = React.useState<SneakerList[]>([]);
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

  React.useEffect(() => {
    console.log("sneakerdb", sneakerDb);
  }, [sneakerDb]);
  // create a function to check if this shoe exist in user db

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
                addSneaker(item);

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
                addSneaker(item).then(() => getSneakers());
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
        <Text preset="header" text="Claim" />
      </View>

      <View style={CLAIM_SEARCH}>
        <TextInput
          style={{
            width: "100%",
            height: 54,
            borderWidth: 1,
            paddingLeft: 20,
            borderRadius: 10,
            margin: 5,
            borderColor: "black",
            backgroundColor: "white",
          }}
          value={query}
          autoCorrect={false}
          onChangeText={(text) => setQuery(text)}
          placeholder="Search"
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
