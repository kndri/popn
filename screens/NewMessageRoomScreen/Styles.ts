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
});
