import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          Inter: require("../assets/fonts/inter/Inter-Regular.ttf"),
          "Inter-Light": require("../assets/fonts/inter/Inter-Light.ttf"),
          "Inter-Regular": require("../assets/fonts/inter/Inter-Regular.ttf"),
          "Inter-Medium": require("../assets/fonts/inter/Inter-Medium.ttf"),
          "Inter-SemiBold": require("../assets/fonts/inter/Inter-SemiBold.ttf"),
          "Inter-Bold": require("../assets/fonts/inter/Inter-Bold.ttf"),
          "Inter-ExtraBold": require("../assets/fonts/inter/Inter-ExtraBold.ttf")
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
