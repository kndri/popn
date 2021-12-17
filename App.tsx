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
import { StreamApp } from "expo-activity-feed";
import {
  STREAM_API_KEY,
  STREAM_API_TOKEN,
  STREAM_APP_ID,
} from "react-native-dotenv";

Amplify.configure(awsconfig);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AuthProvider>
        <StreamApp
          apiKey={STREAM_API_KEY}
          appId={STREAM_APP_ID}
          token={STREAM_API_TOKEN}
        >
          <FormProvider>
            <SafeAreaProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
              <ToastContainer />
            </SafeAreaProvider>
          </FormProvider>
        </StreamApp>
      </AuthProvider>
    );
  }
}
