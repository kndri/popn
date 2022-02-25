import { StyleSheet } from "react-native";

import { color, spacing } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[3],
    flex: 1,
  },

  BACK_BUTTON: {
    paddingHorizontal: spacing[4],
  },

  SHOE_HEADING: {
    paddingHorizontal: spacing[4],
    marginTop: 15,
  },

  IMAGE_CONTAINER: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    paddingHorizontal: spacing[4],
    height: "40%",
  },

  SHOE_STYLE: {
    resizeMode: "contain",
    height: 400,
    width: "100%",
  },

  SHOE_DATA: {
    marginTop: 30,
    paddingHorizontal: spacing[4],
    marginBottom: 40,
  },

  MODAL_CONTAINER: {
    backgroundColor: "black",
    paddingHorizontal: spacing[3],
    flex: 1,
    paddingTop: 20,
    //   marginBottom: 30,
  },
  MODAL_HEADING: {
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 40,
    paddingHorizontal: spacing[4],
  },
  MODAL_HEADING_TEXT: {
    paddingHorizontal: spacing[4],
  },

  MODAL_EXAMPLE: {
    paddingHorizontal: spacing[4],
  },
  MODAL_IMAGE_CONTAINER: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  MODAL_SHOE_IMAGE: {
    resizeMode: "contain",
    width: "60%",
  },
  MODAL_PROCESS: {
    paddingHorizontal: spacing[4],
  },
});
