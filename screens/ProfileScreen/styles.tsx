import { StyleSheet } from 'react-native';

import { color, spacing } from '../../theme';

export default StyleSheet.create({
	CONTAINER: {
		backgroundColor: color.transparent,
		flex: 1,

	},
	CENTER: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	PROFILE_HEADER: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 5,
		paddingHorizontal: spacing[3],
	},
	PROFILE_DATA: {
		alignItems: 'center',
		marginBottom: 20,
		paddingHorizontal: spacing[3],
	},
	PROFILE_IMAGE: {
		borderRadius: 48,
		height: 75,
		marginRight: 7,
		width: 75,
	},
	PROFILE_DETAILS: {
		alignItems: 'center',
		marginRight: 15,
		flexDirection: 'row'
	},

	COLLECTION_CONTAINER: {
		backgroundColor: 'white',
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
		flex: 1,
		marginTop: 47,
		paddingTop: 25,
		shadowColor: 'black',
		shadowOpacity: 0.3,
		shadowRadius: 10,
		width: '100%',
	},

	TEXTCENTER: {
		alignItems: 'center',
		textAlign: 'center',
	},

	BUTTON_VIEW: {
		alignItems: 'center',
		alignSelf: 'center',
		borderRadius: 50,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 2,
		padding: 5,
		width: '95%',
	},

	DATA_CONTAINER: {
		backgroundColor: 'white',
		flex: 1,
		height: '100%',
		paddingHorizontal: spacing[2],
		paddingTop: 10,
		width: '100%',
	},
	SCENE: {
		flex: 1
	},
	EDIT_PROFILE_BUTTON: {
		borderRadius: 4,
	}
	,
	IMAGE_AND_BUTTON_VIEW: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%'
	}
});
