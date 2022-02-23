import { StyleSheet } from "react-native";

import { spacing, color } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[7],
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 90,
  },

  HEADER: {
    alignItems: "center",
    justifyContent: "center",
  },

  CENTER: {
    justifyContent: "center", //Centered horizontally
    flex: 1,
  },
});
