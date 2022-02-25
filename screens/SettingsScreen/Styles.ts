import { StyleSheet } from "react-native";

import { spacing } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: spacing[6],
  },

  HEADING_TITLE: {
    textAlign: "center",
    marginBottom: 5,
  },

  SETTINGS_NAME: {
    textAlign: "center",
    alignItems: "center",
  },

  FLATLIST: {
    marginBottom: 25,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 4,
  },

  ARROW_ICON: {
    width: 20,
    height: 20,
  },
  CENTER: {
    alignItems: "center",
    justifyContent: "center",
  },
  TEXTCENTER: {
    textAlign: "center",
    alignItems: "center",
  },
});
