import { StyleSheet } from 'react-native';
import { color, spacing } from '../../theme';

export default StyleSheet.create({
    CONTAINER: {
        backgroundColor: color.transparent,
        flex: 1,
        paddingHorizontal: spacing[4],
        justifyContent: 'flex-start'
    },
    LISTING_CONTAINER: {
        height: '100%',
        paddingHorizontal: spacing[1],
        backgroundColor: 'white'
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
        marginTop: 6,
    },
    NEXT_BUTTON: {
        width: "100%",
        height: 50,
        borderRadius: 4,
        marginTop: 40,
    },
    DISABLED_NEXT_BUTTON: {
        width: "100%",
        height: 50,
        borderRadius: 4,
        marginTop: 40,
        backgroundColor: "rgba(52, 52, 52, 0.25)",
    },
});
