import { StyleSheet } from 'react-native';

import { spacing, typography } from '../../theme';

export default StyleSheet.create({
	FULL: {
		flex: 1,
	},
	CONTAINER: {
		backgroundColor: 'white',
		height: '100%',
		paddingHorizontal: spacing[6],
	},
	HEADER_TITLE: {
		marginBottom: 90,
		textAlign: 'center',
		top: 45,
	},
	INPUTSTYLE_CONTAINER: {
		alignItems: 'center',
		height: 20,
		marginBottom: 90,
		marginTop: 100,
		width: '100%',
	},
	INPUT: {
		borderBottomWidth: 2,
		borderColor: 'black',
		fontFamily: typography.primaryBold,
	},
});
