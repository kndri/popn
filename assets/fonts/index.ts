import * as Font from "expo-font"

export const initFonts = async () => {
  await Font.loadAsync({
    SFProDisplay: require("./SFProDisplay-Regular.ttf"),
    "SFProDisplay-Regular": require("./SFProDisplay-Regular.ttf"),
    "SFProDisplay-Medium": require("./SFProDisplay-Medium.ttf"),
    "SFProDisplay-SemiBold": require("./SFProDisplay-Semibold.ttf"),
    "SFProDisplay-Bold": require("./SFProDisplay-Bold.ttf"),
    "SFProDisplay-Heavy": require("./SFProDisplay-Heavy.ttf"),
  })
}
