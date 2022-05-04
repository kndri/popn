import { StyleSheet } from 'react-native';

import { color, spacing, typography } from '../../theme';

export default StyleSheet.create({
	CONTAINER: {
		backgroundColor: color.transparent,
		flex: 1,
		justifyContent: 'space-between',
		paddingBottom: 90,
		paddingHorizontal: spacing[5],
	},
	CENTER: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	TEXTCENTER: {
		alignItems: 'center',
		textAlign: 'center',
	},
	INPUT: {
		fontFamily: typography.primaryBold,
	},
	DISABLED: {
		backgroundColor: 'rgba(52, 52, 52, 0.25)',
	},
});
