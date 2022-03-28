import { StyleSheet } from 'react-native';

import { color, spacing } from '../../theme';

export default StyleSheet.create({
	CONTAINER: {
		backgroundColor: color.transparent,
		paddingHorizontal: spacing[5],
		flex: 1,
	},
	CENTERED_VIEW: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	MODAL_VIEW: {
		marginTop: 50,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		// shadowColor: "#000",
		// shadowOffset: {
		//   width: 0,
		//   height: 2
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 4,
		// elevation: 5,
		width: '100%',
		height: '100%',
	},
	ZIPCODE: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: spacing[4],
		backgroundColor: 'white',
		height: 48,
		width: 193,
		borderWidth: 1,
		borderColor: '#000000',
		borderRadius: 5,
		marginTop: 13,
	},
});
