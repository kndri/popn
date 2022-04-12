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
    NEXT_BUTTON: {
        width: "100%",
        height: 50,
        borderRadius: 4,
        marginTop: 55,
        // position: 'absolute'
    },
    DISABLED_NEXT_BUTTON: {
        width: "100%",
        height: 50,
        borderRadius: 4,
        marginTop: 55,
        backgroundColor: "rgba(52, 52, 52, 0.25)",
        // position: 'absolute'
    },
    CONTENT_CONTAINER: {
        height: 5,
        backgroundColor: 'green'
    }
});
