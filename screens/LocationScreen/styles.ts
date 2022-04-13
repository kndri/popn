import { StyleSheet } from 'react-native';

import { color, spacing } from '../../theme';

export default StyleSheet.create({
	CONTAINER: {
		backgroundColor: color.transparent,
		paddingHorizontal: spacing[5],
		flex: 1,
		paddingBottom: 90,
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
		width: '100%',
		height: '100%',
	},
});
