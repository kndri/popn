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
    textAlign: "center",
    marginBottom: 10,
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
  },
});
