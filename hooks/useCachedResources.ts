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
          ReadexPro: require("../assets/fonts/ReadexPro-Regular.ttf"),
          "ReadexPro-Light": require("../assets/fonts/ReadexPro-Light.ttf"),
          "ReadexPro-Regular": require("../assets/fonts/ReadexPro-Regular.ttf"),
          "ReadexPro-Medium": require("../assets/fonts/ReadexPro-Medium.ttf"),
          "ReadexPro-SemiBold": require("../assets/fonts/ReadexPro-SemiBold.ttf"),
          "ReadexPro-Bold": require("../assets/fonts/ReadexPro-Bold.ttf")
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
