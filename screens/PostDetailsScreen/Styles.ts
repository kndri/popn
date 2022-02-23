import { StyleSheet } from "react-native";

import { color, spacing } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[3],
    flex: 1,
  },
  POST_CONTAINER: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: spacing[3],
    marginBottom: 15,
    paddingTop: 10,
  },
  RIGHT_SIDE_POST: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  INTERACTIONS: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "grey",
    borderTopColor: "grey",
    height: 40,
    alignItems: "center",
    paddingLeft: 20,
  },
  INTERACTIONS_BUTTONS: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "transparent",
    flex: 0.3,
  },

  BUTTON_TEXT: {
    marginLeft: 5,
    fontSize: 15,
    textAlign: "center",
  },
  PROFILE_HEADER: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 17,
    paddingHorizontal: spacing[3],
  },
  COMMENT_CONTAINER: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: spacing[3],
    marginBottom: 15,
  },
  RIGHT_SIDE_COMMENT: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
  },

  BUTTON_IMAGE: {
    width: 20,
    height: 20,
  },
});
