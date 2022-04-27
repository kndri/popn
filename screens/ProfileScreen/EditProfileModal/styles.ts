import { StyleSheet } from "react-native";

import { spacing, typography } from "../../../theme";

export default StyleSheet.create({
    MODAL_CONTAINER: {
        backgroundColor: "white",
        paddingHorizontal: spacing[4],
        flex: 1,

    },
    MODAL_HEADING_TEXT: {
        paddingHorizontal: spacing[4],
    },
    INPUTSTYLE_CONTAINER: {
        alignItems: "center",
    },
    INPUT: {
        fontFamily: typography.primaryBold,
        borderBottomWidth: 2,
        borderColor: "black",
    },

});
