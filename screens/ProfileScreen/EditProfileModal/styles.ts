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
        alignItems: "flex-start",
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderColor: "black",
        width: '100%',
        marginBottom: 20,
        paddingBottom: 0,


    },
    INPUT: {
        fontFamily: typography.primaryBold,
        marginBottom: 0,
        paddingBottom: 0
    },

});
