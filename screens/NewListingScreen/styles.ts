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
		borderWidth: 1,
		flexDirection: 'row',
		height: 48,
		justifyContent: 'center',
		marginTop: 6,
		paddingHorizontal: spacing[4],
		width: 335,
	},
	TEXTFIELD_STYLE: {
		backgroundColor: 'white',
		borderColor: '#FFFFFF',
		borderRadius: 5,
		borderWidth: 1,
		flex: 1,
		height: 35,
		paddingLeft: 10,
		width: '100%',
	},
});
