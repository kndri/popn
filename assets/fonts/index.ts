import * as Font from "expo-font"

export const initFonts = async () => {
  await Font.loadAsync({
    Inter: require("./inter/Inter-Regular.ttf"),
    "Inter-Regular": require("./inter/Inter-Regular.ttf"),
    "Inter-Light": require("./inter/Inter-Light.ttf"),
    "Inter-Medium": require("./inter/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./inter/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./inter/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./inter/Inter-ExtraBold.ttf")
  })
}
