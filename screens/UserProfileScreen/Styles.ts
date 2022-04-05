import { StyleSheet } from "react-native";

import { color, spacing } from "../../theme";

export default StyleSheet.create({
  CONTAINER: {
    backgroundColor: color.transparent,
    // paddingHorizontal: spacing[4],
    flex: 1,
  },

  HEADER: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing[4],
  },

  CENTER: {
    alignItems: "center",
    justifyContent: "center",
  },
  PROFILE_HEADER: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 17,
    paddingHorizontal: spacing[3],
  },
  PROFILE_DATA: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: spacing[3],
  },
  PROFILE_IMAGE: {
    marginRight: 20,
    width: 96,
    height: 96,
    borderRadius: 48,
  },

  COLLECTION_CONTAINER: {
    flex: 1,
    marginTop: 47,
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  TEXTCENTER: {
    textAlign: "center",
    alignItems: "center",
  },

  BUTTON_VIEW: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
    // paddingHorizontal: spacing[4],
    borderRadius: 50,
    padding: 5,
    width: "95%",
    alignSelf: "center",
  },

  DATA_CONTAINER: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
});