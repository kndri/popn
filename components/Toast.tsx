import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { atom, useAtom } from "jotai";

import { Text } from "../components";

// default options
const options = {
  message: null,
  type: "success",
  time: 2000,
  color: "#00A542"
};

// using jotai as test
const state = atom(options);

// global container for messages
export default function ToastContainer() {
  const [toast, setToast] = useAtom(state);
  const height = 55 + 44;
  const show = useSharedValue(-height);

  const styles = {
    container: useAnimatedStyle(() => ({
      height,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      position: "absolute",
      paddingTop: 10,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: toast.color,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      transform: [{ translateY: show.value }],
    })),
    text: {
      fontSize: 15,
      fontWeight: "500",
      color: "white",
    },
  };

  // show/hide when message set
  useEffect(() => {
    if (toast.message) {
      StatusBar.setBarStyle("light-content");
      show.value = withTiming(0);

      // hide message after given time
      show.value = withDelay(toast.time, withTiming(-height));
      setTimeout(() => {
        setToast(options);
        StatusBar.setBarStyle("default");
      }, toast.time + 300);
    }
  }, [toast.message]);

  return (
    <Animated.View style={styles.container}>
      <Text style={{ color: "white" }}>{toast.message}</Text>
    </Animated.View>
  );
}


export const useToast = () => {
  const [, setToast] = useAtom(state);
  return {
    show: (msg: any, opts?: { type?: any; time?: any, color?: string }) =>
      setToast({
        message: msg,
        type: opts?.type || options.type,
        time: opts?.time || options.time,
        color: opts?.color || options.color
      }),
  };
};
