import { StyleSheet } from "react-native";

import { spacing } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
  },
  TEXTCENTER: {
    textAlign: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  SEARCH: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: spacing[4],
    height: 25,
    width: "100%",
    backgroundColor: "transparent",
  },
  HEADER: {
    flexDirection: "row",
    paddingHorizontal: spacing[4],
    backgroundColor: "transparent",
  },
});
