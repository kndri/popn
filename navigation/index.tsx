/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Image } from "react-native";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ClaimScreen from "../screens/ClaimScreen/ClaimScreen";
import MessageScreen from "../screens/MessageScreen/MessageScreen";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import AgeScreen from "../screens/AgeScreen/AgeScreen";
import ProfilePicScreen from "../screens/ProfilePicScreen/ProfilePicScreen";
import UserNameScreen from "../screens/UsernameScreen/UsernameScreen";
import EmailScreen from "../screens/EmailScreen/EmailScreen";
import PasswordScreen from "../screens/PasswordScreen/PasswordScreen";
import WelcomeToPopn from "../screens/WelcomeToPopn/WelcomeToPopn";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import UserProfileScreen from "../screens/UserProfileScreen/UserProfileScreen";
import ChangeEmailScreen from "../screens/ChangeEmailScreen/ChangeEmailScreen";
import ChangeUsernameScreen from "../screens/ChangeUsernameScreen/ChangeUsernameScreen";
import ChangeProfileImageScreen from "../screens/ChangeProfileImageScreen/ChangeProfileImageScreen";
import EmailVerificationCodeScreen from "../screens/EmailVerificationCodeScreen/EmailVerificationCodeScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen/ChangePasswordScreen";
import MessageRoomScreen from "../screens/MessageRoomScreen/MessageRoomScreen";
import NewMessageRoomScreen from "../screens/NewMessageRoomScreen/NewMessageRoomScreen";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
  SettingsStackParamList,
} from "../types";
import ResetPasswordScreen from "../screens/ResetPasswordScreen/ResetPasswordScreen";
import { useAuth } from "../contexts/auth";
import ShoeDetailsScreen from "../screens/ShoeDetailsScreen/ShoeDetailsScreen";
import ListingDetailsScreen from "../screens/ListingDetailScreen/ListingDetailScreen";
import ReferenceScreen from "../screens/ReferenceScreen/ReferenceScreen";
import NewPostScreen from "../screens/NewPostScreen/NewPostScreen";
import PostDetailsScreen from "../screens/PostDetailsScreen/PostDetailsScreen";
import MessageContactsScreen from "../screens/MessageContactsScreen/MessageContactsScreen";
import UserSearchScreen from "../screens/SearchUserScreen/SearchUserScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
    // theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {/* <OnboardingNavigator /> */}
      <RootNavigator />
    </NavigationContainer>
  );
}

const { Navigator, Screen } = createNativeStackNavigator();

const onboardingStack = createNativeStackNavigator<RootStackParamList>();

function OnboardingNavigator() {
  return (
    <onboardingStack.Navigator initialRouteName="Splash">
      <onboardingStack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <onboardingStack.Screen
        name="Age"
        component={AgeScreen}
        options={{ headerShown: false }}
      />
      <onboardingStack.Screen
        name="ProfilePicture"
        component={ProfilePicScreen}
        options={{ headerShown: false }}
      />
      <onboardingStack.Screen
        name="Username"
        component={UserNameScreen}
        options={{ headerShown: false }}
      />
      <onboardingStack.Screen
        name="Email"
        component={EmailScreen}
        options={{ headerShown: false }}
      />
      <onboardingStack.Screen
        name="Password"
        component={PasswordScreen}
        options={{ headerShown: false }}
      />
      <onboardingStack.Screen
        name="Welcome"
        component={WelcomeToPopn}
        options={{ headerShown: false }}
      />
      <onboardingStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <onboardingStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <onboardingStack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />
    </onboardingStack.Navigator>
  );
}

const settingStack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsNavigator = () => (
  <settingStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="settings"
  >
    <settingStack.Screen name="settings" component={SettingsScreen} />
    <settingStack.Screen name="changeEmail" component={ChangeEmailScreen} />
    <settingStack.Screen name="verifyEmail" component={EmailVerificationCodeScreen} />
    <settingStack.Screen name="changePassword" component={ChangePasswordScreen} />
    <settingStack.Screen name="changeUsername" component={ChangeUsernameScreen} />
    <settingStack.Screen name="changeProfileImage" component={ChangeProfileImageScreen} />
  </settingStack.Navigator>
);

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { session } = useAuth();

  return (
    <Stack.Navigator>
      {session ? (
        <>
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MessageContactsScreen"
            component={MessageContactsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsNavigator}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="Message"
            component={MessageScreen}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="ShoeDetails"
            component={ShoeDetailsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ListingDetails"
            component={ListingDetailsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Verify"
            component={ReferenceScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewPost"
            component={NewPostScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PostDetails"
            component={PostDetailsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MessageRoom"
            component={MessageRoomScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewMessageRoom"
            component={NewMessageRoomScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserSearch"
            component={UserSearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Root"
          component={OnboardingNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/Home-focused.png')
                  : require('../assets/images/Home.png')
              }
              style={{
                width: 25,
                height: 25,
                borderRadius: 0,
              }}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: 'Messages',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/messages-focused.png')
                  : require('../assets/images/messages.png')
              }
              style={{
                width: 25,
                height: 25,
                borderRadius: 0,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Sell"
        component={ClaimScreen}
        options={{
          title: 'Sell',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/plus-focused.png')
                  : require('../assets/images/plus.png')
              }
              style={{
                width: 25,
                height: 25,
                borderRadius: 0,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require('../assets/images/Profile-focused.png')
                  : require('../assets/images/Profile.png')
              }
              style={{
                width: 25,
                height: 25,
                borderRadius: 0,
              }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof Feather>["name"];
//   color: string;
// }) {
//   return <Feather size={20} style={{ marginBottom: -3 }} {...props} />;
// }
