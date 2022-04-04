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
        paddingBottom: 50

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
        marginVertical: 30,
        padding: 13,
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
    OFFER_BUTTON: {
        width: "100%",
        height: 50,
        borderRadius: 4,
        marginTop: 40,
    },
    DISABLED_OFFER_BUTTON: {
        width: "100%",
        height: 50,
        borderRadius: 4,
        marginTop: 40,
        backgroundColor: "rgba(52, 52, 52, 0.25)",
    },

    //authentication modal styles
    MODAL_CONTAINER: {
        backgroundColor: "white",
        paddingHorizontal: spacing[3],
        flex: 1,
        paddingTop: 20,
        //   marginBottom: 30,
    },
    MODAL_HEADING: {
        alignContent: "center",
        justifyContent: "center",
        marginBottom: 40,
        paddingHorizontal: spacing[4],
    },
    MODAL_HEADING_TEXT: {
        paddingHorizontal: spacing[4],
    },

    MODAL_EXAMPLE: {
        paddingHorizontal: spacing[4],
        // backgroundColor: 'red',
        height: 220,
        width: 300,
        alignSelf: 'center',
        marginVertical: 30,
    },
    // MODAL_IMAGE_CONTAINER: {
    //     alignItems: "center",
    //     // backgroundColor: 'blue',
    //     height: "100%"
    //     // marginBottom: 30,
    //     // marginTop: 30,
    // },
    MODAL_SHOE_IMAGE: {
        height: "100%",
        width: "100%",
        alignSelf: 'center'
    },
    MODAL_PROCESS: {
        paddingHorizontal: spacing[4],
        // backgroundColor: 'yellow',
    },

});
