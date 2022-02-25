import { StyleSheet } from "react-native";

import { color, spacing } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "white",
  },
  TEXTCENTER: {
    textAlign: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  SEARCH: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: spacing[4],
    height: 25,
    width: "100%",
    backgroundColor: "transparent",
  },
  HEADER: {
    flexDirection: "row",
    paddingHorizontal: spacing[4],
    backgroundColor: "transparent",
  },
  usercontainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "transparent",
  },
  lefContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  midContainer: {
    justifyContent: "space-around",
    backgroundColor: "transparent",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 15,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  status: {
    fontSize: 16,
  },
});
