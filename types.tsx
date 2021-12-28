/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { QuickReplies, User } from "react-native-gifted-chat";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Splash: undefined;
  Age: undefined;
  Username: undefined;
  Email: undefined;
  Password: undefined;
  Welcome: undefined;
  SignIn: undefined;
  ProfilePicture: undefined;
  ForgotPassword: undefined;
  ResetPassword: any;
  Settings: NavigatorScreenParams<SettingsStackParamList> | undefined;
  ShoeDetails: undefined;
  Verify: undefined;
  UserProfile: undefined;
  MessageRoom: undefined;
  NewPost: undefined;
  PostDetails: undefined | any;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  TabFour: undefined;
};

export type SettingsStackParamList = {
  settings: undefined;
  changeEmail: undefined;
  changePassword: undefined;
};

export interface Sneaker {
  brand: any;
  id: string;
  primary_name: string;
  secondary_name: string;
  createdAt: string;
  verified: boolean;
  updatedAt: string;
  image: string;
  userID: string;
}
export interface SneakerList {
  sneakers: Array<Sneaker>;
}

export interface ChatMessage {
  _id: string | number
  text: string
  createdAt: Date | number
  user: User
  image?: string
  video?: string
  audio?: string
  system?: boolean
  sent?: boolean
  received?: boolean
  pending?: boolean
  quickReplies?: QuickReplies
}

// export interface ChatRoom {
//   id: string
//   users: [User]
//   lastMessage: ChatMessage
// }


export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
