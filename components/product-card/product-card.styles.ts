import { StyleSheet } from "react-native";

export default StyleSheet.create({
  CARD: {
    alignItems: 'center',
    backgroundColor: '#E7E7E7', // @TODO: find the color varaible for this
    borderRadius: 20,
    height: 125,
    justifyContent: 'center',
    padding: 10,
    width: 150,
  },

  BADGE: {
    position: 'absolute',
    right: 10,
    top: 10
  },

  PRODUCT: {
    height: 60,
    marginHorizontal: 35,
    marginVertical: 20,
    width: 100,
   },

   CONTENT_CONTAINER: {
     paddingTop: 5
   }
})