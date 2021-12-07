import * as React from 'react';
import { View, ViewStyle, TextStyle, ImageStyle, TouchableOpacity, Image, Alert, FlatList } from "react-native";
import { color, spacing, typography } from "../theme"
import {
    Button,
    Screen,
    Text,
    TextField,
} from "../components"
import { useNavigation } from '@react-navigation/native';
import { getSneakersFromUser } from '../aws-functions/get-sneakers-from-user';

//required images
const settingsIcon = require("../assets/images/SettingsIcon.png")
const userImage = require("../assets/images/UserImage.png")

// Styles
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[7],
    flex: 1,
    marginTop: 44,
}

const HEADER: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
}

const CENTER: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
}
const PROFILE_HEADER: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 17,
}
const PROFILE_DATA: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
}
const PROFILE_IMAGE: ImageStyle = {
    marginRight: 20,
}

const COLLECTION_CONTAINER: ViewStyle = {
    flex: 1,
    flexDirection: 'column',

}

const COLLECTION_HEADING: TextStyle = {
    textDecorationLine: 'underline'
}

const TEXTCENTER: TextStyle = {
    textAlign: 'center',
    alignItems: 'center',
}

const INPUT: TextStyle = {
    fontFamily: typography.primaryBold,
}

export default function TabThreeScreen() {
    const navigation = useNavigation();
    const [collection, setCollection] = React.useState([]);

    React.useEffect(()=>{
        // this peace of code gets sneakers from user db

        // const sneakers = getSneakersFromUser()
        // setCollection(sneakers.sneakerList)
    }, [])

    const renderSneaker = ({ item }) => (
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
                // addSneaker(item);
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
      );

    return (
        <Screen style={CONTAINER}>
            <View style={PROFILE_HEADER}>
                <Text preset="header" text="Profile" />
                <Image source={settingsIcon} />
            </View>

            <View style={PROFILE_DATA}>
                <Image style={PROFILE_IMAGE} source={userImage} />
                <View>
                    <Text preset="bold" text="Darryl" />
                    <Text preset="secondary" text="@dizzy" />
                </View>
            </View>

            <View style={COLLECTION_CONTAINER}>
                <Text style={COLLECTION_HEADING} preset="bold" text="Collection" />

                <View style={{ flex: 1, justifyContent: 'center' }}>
                    {collection.length === 0 ? (<>
                    <Text style={TEXTCENTER} preset="bold" text="Your collection is empty." />
                    <Button style={{ marginTop: 20 }} text="Claim an item" preset="primary" onPress={() => navigation.navigate("TabTwo")}  /></>):
                    <View style={COLLECTION_CONTAINER}>
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
                  </View> }
                   
                </View>

            </View>



        </Screen>
    );
}

