import * as React from 'react';
import { View, ViewStyle, TextStyle, ImageStyle, TouchableOpacity, Image, Alert } from "react-native";
import { color, spacing, typography } from "../theme"
import {
    Button,
    Screen,
    Text,
    TextField,
} from "../components"
import { useNavigation } from '@react-navigation/native';

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
                    <Text style={TEXTCENTER} preset="bold" text="Your collection is empty." />
                    <Button style={{ marginTop: 20 }} text="Claim an item" preset="primary" onPress={() => Alert.alert("Show me the shoes!")} />
                </View>

            </View>



        </Screen>
    );
}

