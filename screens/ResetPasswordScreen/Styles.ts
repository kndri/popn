import { StyleSheet } from "react-native";

import { color, spacing } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[7],
    flex: 1,
    paddingBottom: 90,
  },

  HEADER: {
    alignItems: "center",
  },
  CENTER: {
    justifyContent: "center", //Centered horizontally
    flex: 1,
    marginTop: 15,
  },
});
