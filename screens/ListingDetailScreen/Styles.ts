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
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        paddingHorizontal: spacing[4],
        height: "40%",
    },

    SHOE_STYLE: {
        resizeMode: "contain",
        height: 400,
        width: "100%",
    },
    AUTHENTICATED_HEADING: {
        width: "100%",
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    AUTHENTICATED_HEADING_BOX: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'white',
        width: 131,
        height: 35,
        alignItems: 'center',
    },

    AUTHENTICATED_INFO_BOX: {
        marginTop: 30,
        paddingHorizontal: spacing[4],
        marginBottom: 40,
        height: 115,
        width: 320,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#EDEDED',
        alignSelf: 'center'
    },
    CENTERED_VIEW: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // top: 10

    },
    MODAL_VIEW: {
        paddingHorizontal: spacing[4],
        marginTop: 50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
        width: '100%',
        height: "100%"

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
