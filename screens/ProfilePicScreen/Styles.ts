import { StyleSheet } from "react-native";

import { color, spacing, typography } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[5],
    flex: 1,
    justifyContent: "space-between",
    marginTop: 50,
    paddingBottom: 90,
  },

  CENTER: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 40,
  },

  HEADER: {
    bottom: 50,
  },

  TEXTCENTER: {
    textAlign: "center",
    alignItems: "center",
  },

  INPUT: {
    fontFamily: typography.primaryBold,
  },

  DISABLED: {
    backgroundColor: "rgba(52, 52, 52, 0.25)",
  },
});
