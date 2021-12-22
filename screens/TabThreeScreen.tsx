import * as React from "react";
import {
    View,
    ViewStyle,
    TextStyle,
} from "react-native";
import { color, spacing, typography } from "../theme";
import {
    Screen,
    Text,
    AutoImage as Image,
    Button
} from "../components";
import { useNavigation } from "@react-navigation/native";

// Styles
const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[3],
    flex: 1,
    marginTop: 44,
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
    paddingHorizontal: spacing[4],

};
const CLAIM_SEARCH: ViewStyle = {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: spacing[4],
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

export default function TabThreeScreen() {
    const navigation = useNavigation();

    return (
        <Screen style={CONTAINER}>
            <View style={CENTER}>
                <Text preset="header" text="Messages" />
                <Button
                    text="View Your message"
                    preset="cta"
                    onPress={() => { navigation.navigate('MessageRoom'); }}
                />
            </View>
        </Screen>
    );
}
