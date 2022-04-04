import { StyleSheet } from 'react-native';
import { color, spacing } from '../../theme';

export default StyleSheet.create({
	CONTAINER: {
		backgroundColor: color.transparent,
		flex: 1,
		paddingHorizontal: spacing[5],
	},
	LISTING_HEADER: {},
	LISTING_CONTAINER: {
		// backgroundColor: 'red',
		height: '100%',

	},
	INPUT_FIELDS_CONTAINER: {
		alignItems: 'center',
		backgroundColor: 'white',
		borderColor: '#000000',
		borderRadius: 5,
		borderWidth: 2,
		flexDirection: 'row',
		height: 48,
		marginTop: 6,
		paddingHorizontal: spacing[2],
		width: 335,
	},
	TEXTFIELD_STYLE: {
		backgroundColor: 'white',
		borderColor: '#FFFFFF',
		borderRadius: 5,
		borderWidth: 1,
		flex: 1,
		height: 35,
		width: '100%',
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
