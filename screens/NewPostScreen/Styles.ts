import { StyleSheet } from "react-native";

import { color, spacing } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "white",
    paddingHorizontal: spacing[3],
  },
  HEADER_CONTAINER: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingHorizontal: spacing[5],
  },
  BUTTON: {
    backgroundColor: "black",
    borderRadius: 30,
  },
  BUTTON_TEXT: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  NEW_POST_CONTAINER: {
    flexDirection: "column",
    padding: 15,
    paddingHorizontal: spacing[5],
  },
  INPUTS_CONTAINER: {
    marginLeft: 10,
  },
  POST_INPUT: {
    height: 100,
    maxHeight: 300,
    maxWidth: "100%",
    fontSize: 20,
    marginTop: 15,
  },
  IMAGE: {
    width: 80,
    height: 80,
  },
});
