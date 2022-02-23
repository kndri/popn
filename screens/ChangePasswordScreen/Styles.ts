import { StyleSheet } from "react-native";

import { spacing, typography } from "../../theme";

export default StyleSheet.create({
  FULL: {
    flex: 1,
  },
  CONTAINER: {
    backgroundColor: "white",
    paddingHorizontal: spacing[6],
    height: "100%",
  },
  HEADER_TITLE: {
    textAlign: "center",
    top: 45,
    marginBottom: 90,
  },
  INPUTSTYLE_CONTAINER: {
    height: 20,
    marginBottom: 30,
    marginTop: 20,
    alignItems: "center",
    width: "90%",
  },
  INPUT: {
    fontFamily: typography.primaryBold,
    borderBottomWidth: 2,
    borderColor: "black",
  },
});
