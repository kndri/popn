import { StyleSheet } from "react-native";

import { color, spacing } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[3],
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
		marginBottom: 25,
		paddingHorizontal: spacing[4],
		width: '100%',
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
	},
  COLLECTION_CONTAINER: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
