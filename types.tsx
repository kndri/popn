/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { QuickReplies, User } from 'react-native-gifted-chat';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList { }
	}
}

export type RootStackParamList = {
	Age: undefined;
	ChangeProfileImage: undefined;
	Claim: undefined;
	Email: undefined;
	ForgotPassword: undefined;
	ImageBrowser: undefined | any;
	ListingDescription: undefined;
	ListingDetails: undefined | any;
	ListingImages: undefined;
	Location: undefined;
	Message: undefined;
	MessageContactsScreen: any;
	MessageRoom: any;
	Modal: undefined;
	NewListing: undefined | any;
	NewMessageRoom: any;
	NewPost: undefined | any;
	NotFound: undefined;
	Password: undefined;
	PostDetails: undefined | any;
	Profile: undefined;
	ProfilePicture: undefined;
	ResetPassword: any;
	Root: NavigatorScreenParams<RootTabParamList> | undefined;
	Settings: NavigatorScreenParams<SettingsStackParamList> | undefined;
	settings: undefined;
	ShoeDetails: undefined | any;
	SignIn: undefined;
	Splash: undefined;
	UserProfile: undefined;
	UserSearch: undefined;
	Username: undefined;
	Verify: undefined | any;
	verifyEmail: undefined | any;
	Welcome: undefined;
	ZipCode: undefined;
	ZipScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
	Home: undefined;
	Sell: undefined;
	Profile: undefined;
	Message: undefined;
};

export type SettingsStackParamList = {
	settings: undefined;
	changeEmail: undefined;
	changePassword: undefined;
	verifyEmail: undefined;
	changeUsername: undefined;
	changeProfileImage: undefined;
	changeZipCode: undefined;
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

export interface IMessage {
	_id: string | number;
	text: string;
	createdAt: Date | number;
	user: User;
	system?: boolean;
	sent?: boolean;
	received?: boolean;
	pending?: boolean;
	quickReplies?: QuickReplies;
}

export type MessageContactUser = {
	id: String;
	username: String;
	avatarImageURL: String;
	status: String;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<RootTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>;
