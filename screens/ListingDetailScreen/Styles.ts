import { StyleSheet } from "react-native";

import { color, spacing } from "../../theme";

export default StyleSheet.create({
    CONTAINER: {
        backgroundColor: color.transparent,
        paddingHorizontal: spacing[3],
        flex: 1,
    },

    BACK_BUTTON: {
        paddingHorizontal: spacing[4],
    },

    LISTING_DETAILS: {
        paddingHorizontal: spacing[4],
        marginTop: 15,
    },

    IMAGE_CONTAINER: {
        alignItems: "center",
        height: "40%",
        justifyContent: "center",
        marginTop: 15,
        paddingHorizontal: spacing[4],
    },

    SHOE_STYLE: {
        height: 400,
        resizeMode: "contain",
        width: "100%",
    },
    AUTHENTICATED_HEADING: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: spacing[4],
        width: "100%",

    },
    AUTHENTICATED_HEADING_BOX: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 2,
        flexDirection: 'row',
        padding: 10
    },

    AUTHENTICATED_INFO_BOX: {
        alignSelf: 'center',
        borderColor: '#EDEDED',
        borderRadius: 5,
        borderWidth: 1,
        height: 115,
        marginBottom: 40,
        marginTop: 30,
        paddingHorizontal: spacing[4],
        width: 320,
    },
    CENTERED_VIEW: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // top: 10

    },
    MODAL_VIEW: {
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        height: "100%",
        marginTop: 50,
        padding: 35,
        paddingHorizontal: spacing[4],
        width: '100%',

    },
    OFFER_BOX: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: spacing[4],
        backgroundColor: "white",
        height: 48,
        width: 335,
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 4,
        marginTop: 15
    },
    MESSAGE_BOX: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: 150,
        width: 335,
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 4,
        marginTop: 15
    },

});
