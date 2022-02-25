import { StyleSheet } from "react-native";

import { color, spacing, typography } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[7],
    flex: 1,
    justifyContent: "space-between",
    marginTop: 50,
    paddingBottom: 90,
  },

  HEADER: {
    alignItems: "center",
    justifyContent: "center",
  },

  CENTER: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  TEXTCENTER: {
    textAlign: "center",
  },

  INPUT: {
    fontFamily: typography.primaryBold,
  },
});
