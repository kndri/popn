import { StyleSheet } from "react-native";

import { color, spacing } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[3],
    flex: 1,
  },
  CLAIM_SEARCH: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: spacing[4],
    backgroundColor: "#F4F6F9",
    height: 48,
    width: 335,
    borderWidth: 1,
    borderColor: "#F4F6F9",
    borderRadius: 32,
  },
  COLLECTION_CONTAINER: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
