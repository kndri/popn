import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { initFonts } from "./assets/fonts";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { AuthProvider } from "./contexts/auth";
import { FormProvider } from "./contexts/form-context";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports.js";
import ToastContainer from "./components/Toast";

Amplify.configure(awsconfig);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AuthProvider>
        <FormProvider>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
            <ToastContainer/>
          </SafeAreaProvider>
        </FormProvider>
      </AuthProvider>
    );
  }
}
