import * as Font from "expo-font"

export const initFonts = async () => {
  await Font.loadAsync({
    SFProDisplay: require("./SFProDisplay-Regular.ttf"),
    "SFProDisplay-Regular": require("./SFProDisplay-Regular.ttf"),
    "SFProDisplay-Medium": require("./SFProDisplay-Medium.ttf"),
    "SFProDisplay-SemiBold": require("./SFProDisplay-Semibold.ttf"),
    "SFProDisplay-Bold": require("./SFProDisplay-Bold.ttf"),
    "SFProDisplay-Heavy": require("./SFProDisplay-Heavy.ttf"),
    ReadexPro: require("./ReadexPro-Regular.ttf"),
    "ReadexPro-Light": require("./ReadexPro-Light.ttf"),
    "ReadexPro-Regular": require("./ReadexPro-Regular.ttf"),
    "ReadexPro-Medium": require("./ReadexPro-Medium.ttf"),
    "ReadexPro-SemiBold": require("./ReadexPro-SemiBold.ttf"),
    "ReadexPro-Bold": require("./ReadexPro-Bold.ttf")
  })
}
