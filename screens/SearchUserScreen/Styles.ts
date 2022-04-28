import { StyleSheet } from 'react-native';

import { color, spacing } from '../../theme';

export default StyleSheet.create({
	CONTAINER: {
		flex: 1,
		height: '100%',
		backgroundColor: 'white',
	},
	CLAIM_SEARCH: {
		alignItems: 'center',
		backgroundColor: 'white',
		borderColor: '#000000',
		borderRadius: 5,
		borderWidth: 1,
		flexDirection: 'row',
		height: 48,
		marginBottom: 20,
		justifyContent: 'center',
		paddingHorizontal: spacing[4],
		width: '100%',
	},
	TEXTCENTER: {
		textAlign: 'center',
		alignItems: 'center',
		textAlignVertical: 'center',
	},
	SEARCH: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		paddingHorizontal: spacing[4],
		height: 25,
		width: '100%',
		backgroundColor: 'transparent',
	},
	HEADER: {
		flexDirection: 'row',
		paddingHorizontal: spacing[4],
		backgroundColor: 'transparent',
	},
	usercontainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		padding: 10,
		backgroundColor: 'transparent',
	},
	lefContainer: {
		flexDirection: 'row',
		backgroundColor: 'transparent',
	},
	midContainer: {
		justifyContent: 'space-around',
		backgroundColor: 'transparent',
	},
	avatar: {
		width: 30,
		height: 30,
		borderRadius: 50,
		marginRight: 15,
	},
	username: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	status: {
		fontSize: 16,
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
		textAlign: 'center',
		color: '#878C90',
	},
});
