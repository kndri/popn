import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react"
import { initFonts } from "./assets/fonts";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

    // Kick off initial async loading actions, like loading fonts and RootStore
    useEffect(() => {
      ; (async () => {
        await initFonts()
      })()
    }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
