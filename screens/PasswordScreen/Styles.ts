import { StyleSheet } from "react-native";

import { color, spacing, typography } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[5],
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 90,
  },

  HEADER: {
    bottom: 50,
  },

  CENTER: {
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },

  TEXTCENTER: {
    textAlign: "center",
    alignItems: "center",
  },

  INPUT: {
    fontFamily: typography.primaryBold,
    textAlign: "center",
  },

  DISABLED: {
    backgroundColor: "rgba(52, 52, 52, 0.25)",
  },
});
