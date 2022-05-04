import { StyleSheet } from 'react-native';

import { color, spacing } from '../../theme';

export default StyleSheet.create({
	CONTAINER: {
		backgroundColor: color.transparent,
		paddingHorizontal: spacing[4],
		flex: 1,
	},
	CLAIM_SEARCH: {
		alignItems: 'center',
		backgroundColor: 'white',
		borderColor: '#000000',
		borderRadius: 5,
		borderWidth: 1,
		flexDirection: 'row',
		height: 48,
		justifyContent: 'center',
		marginVertical: 25,
		paddingHorizontal: spacing[4],
		width: '100%',
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
	COLLECTION_CONTAINER: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
	},
	LOCATION_CONTAINER: {
		flexDirection: 'row',
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
	TEXTFIELD_STYLE: {
		flex: 1,
		width: '100%',
		height: 35,
		borderWidth: 1,
		paddingLeft: 10,
		borderRadius: 5,
		borderColor: '#FFFFFF',
		backgroundColor: 'white',
		justifyContent: 'center',
	},

	TEXT_STYLE: {
		color: '#878C90',
	},
});
