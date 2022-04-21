import { StyleSheet } from "react-native";

import { spacing } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    backgroundColor: "white",
    flex: 1,
  },

  CENTER: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing[3],
    borderBottomWidth: 2,
    borderColor: "black",
  },
  MODAL_CONTAINER: {
    backgroundColor: "white",
    paddingHorizontal: spacing[4],
    flex: 1,
    justifyContent: 'space-around'
  },
  MODAL_HEADING_TEXT: {
    paddingHorizontal: spacing[4],
  },
  MODAL_PROCESS: {
    paddingHorizontal: spacing[4],
    // backgroundColor: 'yellow',
  },
});
