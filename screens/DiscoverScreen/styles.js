import { StyleSheet } from 'react-native';

import { color, spacing } from '../../theme';

export default StyleSheet.create({
	CONTAINER: {
		backgroundColor: color.transparent,
		paddingHorizontal: spacing[5],
		flex: 1,
	},
  SEARCH: {
		alignItems: 'center',
		backgroundColor: 'white',
		borderColor: '#000000',
		borderRadius: 5,
		borderWidth: 1,
		height: 48,
		justifyContent: 'center',
		paddingHorizontal: spacing[4],
		width: 335,
    flexDirection: 'row',
    marginBottom: 20
  },
  SEARCH_INPUT: {
    flex: 1,
		width: '100%',
		height: 35,
		borderWidth: 1,
		paddingLeft: 10,
		borderRadius: 5,
		borderColor: '#FFFFFF',
		backgroundColor: 'white',
  }
})