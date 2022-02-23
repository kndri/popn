import { StyleSheet } from "react-native";

import { color, spacing } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[3],
    flex: 1,
  },
  SEARCH: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: spacing[4],
    backgroundColor: "#F4F6F9",
    borderRadius: 50,
    padding: 5,
    paddingLeft: 0,
    paddingRight: 0,
    width: "95%",
    alignSelf: "center",
  },

  CARD: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    padding: 5,
    alignItems: "center",

    borderRadius: 10,
    paddingHorizontal: spacing[3],
    marginTop: 5,
    marginBottom: 5,
  },

  LEFT_SIDE: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  CARD_DATA: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
});
