/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import SplashScreen from '../screens/SplashScreen';
import AgeScreen from '../screens/AgeScreen';
import UserNameScreen from '../screens/UsernameScreen';
import EmailScreen from '../screens/EmailScreen';
import PasswordScreen from '../screens/PasswordScreen';
import WelcomeToPopn from '../screens/WelcomeToPopn';
import SignInScreen from '../screens/SignInScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ResetPasswordScreen from "../screens/ResetPasswordScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <OnboardingNavigator />
      {/* <RootNavigator /> */}
    </NavigationContainer>
  );
}

const onboardingStack = createNativeStackNavigator<RootStackParamList>();

function OnboardingNavigator() {
  return (
    <onboardingStack.Navigator initialRouteName="Splash">
      <onboardingStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <onboardingStack.Screen name="Age" component={AgeScreen} options={{ headerShown: false }} />
      <onboardingStack.Screen name="Username" component={UserNameScreen} options={{ headerShown: false }} />
      <onboardingStack.Screen name="Email" component={EmailScreen} options={{ headerShown: false }} />
      <onboardingStack.Screen name="Password" component={PasswordScreen} options={{ headerShown: false }} />
      <onboardingStack.Screen name="Welcome" component={WelcomeToPopn} options={{ headerShown: false }} />
      <onboardingStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <onboardingStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
      <onboardingStack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
    </onboardingStack.Navigator>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      /> */}
       <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search-plus" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
