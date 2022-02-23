import { StyleSheet } from "react-native";

import { color, spacing } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[7],
    flex: 1,
    justifyContent: "space-between",
    marginTop: 50,
    paddingBottom: 90,
  },

  LOGO_CONTAINER: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
