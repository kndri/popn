/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type pinpointInput = {
  token: string,
  username: string,
  email: string,
  message: string,
  id: string,
};

export type pinpointResult = {
  __typename: "pinpointResult",
  statusCode?: number | null,
  body?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  age: string,
  username: string,
  email: string,
  avatarImageURL: string,
  status?: string | null,
  zipCode: string,
  expoToken?: string | null,
};

export type ModelUserConditionInput = {
  age?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatarImageURL?: ModelStringInput | null,
  status?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  expoToken?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  age: string,
  username: string,
  email: string,
  avatarImageURL: string,
  sneakers?: ModelSneakerConnection | null,
  soldSneakers?: ModelSoldSneakerConnection | null,
  offers?: ModelOfferConnection | null,
  following?: ModelFollowingConnection | null,
  follower?: ModelFollowersConnection | null,
  status?: string | null,
  zipCode: string,
  chatRoomUser?: ModelChatRoomUserConnection | null,
  donScore?: DonScore | null,
  totalSold?: TotalSoldSneaker | null,
  expoToken?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSneakerConnection = {
  __typename: "ModelSneakerConnection",
  items:  Array<Sneaker | null >,
  nextToken?: string | null,
};

export type Sneaker = {
  __typename: "Sneaker",
  id: string,
  brand: string,
  primaryName: string,
  secondaryName: string,
  image: string,
  sneakerStoreID: string,
  sneaker?: SneakerStore | null,
  userID: string,
  user?: User | null,
  claim?: ModelClaimConnection | null,
  createdAt?: string | null,
  prevSellers?: Array< string | null > | null,
  updatedAt: string,
};

export type SneakerStore = {
  __typename: "SneakerStore",
  id: string,
  brand: string,
  primaryName: string,
  secondaryName: string,
  image: string,
  points: number,
  createdAt: string,
  updatedAt: string,
};

export type ModelClaimConnection = {
  __typename: "ModelClaimConnection",
  items:  Array<Claim | null >,
  nextToken?: string | null,
};

export type Claim = {
  __typename: "Claim",
  id: string,
  userID: string,
  sneakerID: string,
  user: User,
  sneaker: Sneaker,
  status: ClaimStatus,
  refNumber: string,
  claimMessage?: string | null,
  createdAt?: string | null,
  updatedAt: string,
};

export enum ClaimStatus {
  verified = "verified",
  pending = "pending",
  denied = "denied",
}


export type ModelSoldSneakerConnection = {
  __typename: "ModelSoldSneakerConnection",
  items:  Array<SoldSneaker | null >,
  nextToken?: string | null,
};

export type SoldSneaker = {
  __typename: "SoldSneaker",
  id: string,
  brand: string,
  primaryName: string,
  secondaryName: string,
  image: string,
  userID: string,
  user?: User | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type ModelOfferConnection = {
  __typename: "ModelOfferConnection",
  items:  Array<Offer | null >,
  nextToken?: string | null,
};

export type Offer = {
  __typename: "Offer",
  id: string,
  offerAmount: string,
  status: OfferStatus,
  sellerConfirmed: boolean,
  buyerConfirmed: boolean,
  buyingUserID: string,
  sellingUserID: string,
  seller: User,
  buyer: User,
  listedItemID: string,
  listedItem: ListedItem,
  createdAt?: string | null,
  updatedAt: string,
};

export enum OfferStatus {
  accepted = "accepted",
  pending = "pending",
  declined = "declined",
  completed = "completed",
}


export type ListedItem = {
  __typename: "ListedItem",
  id: string,
  sneakerID: string,
  sneakerData: Sneaker,
  zipCode: string,
  images: Array< string | null >,
  size: string,
  condition: string,
  status: LisitingStatus,
  price: string,
  brand: string,
  description?: string | null,
  sellerID: string,
  seller: User,
  createdAt?: string | null,
  updatedAt: string,
};

export enum LisitingStatus {
  sold = "sold",
  available = "available",
}


export type ModelFollowingConnection = {
  __typename: "ModelFollowingConnection",
  items:  Array<Following | null >,
  nextToken?: string | null,
};

export type Following = {
  __typename: "Following",
  id: string,
  secondUserID: string,
  mainUserID: string,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type ModelFollowersConnection = {
  __typename: "ModelFollowersConnection",
  items:  Array<Followers | null >,
  nextToken?: string | null,
};

export type Followers = {
  __typename: "Followers",
  id: string,
  secondUserID: string,
  mainUserID: string,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type ModelChatRoomUserConnection = {
  __typename: "ModelChatRoomUserConnection",
  items:  Array<ChatRoomUser | null >,
  nextToken?: string | null,
};

export type ChatRoomUser = {
  __typename: "ChatRoomUser",
  id: string,
  userID: string,
  chatRoomID: string,
  user?: User | null,
  chatRoom?: ChatRoom | null,
  createdAt: string,
  updatedAt: string,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  offerID: string,
  chatRoomUsers?: ModelChatRoomUserConnection | null,
  messages?: ModelMessageConnection | null,
  lastMessageID: string,
  lastMessage?: Message | null,
  receiverHasRead?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  createdAt?: string | null,
  text: string,
  userID: string,
  chatRoomID: string,
  user?: User | null,
  chatRoom?: ChatRoom | null,
  updatedAt: string,
};

export type DonScore = {
  __typename: "DonScore",
  id: string,
  userID: string,
  zipCode: string,
  score: number,
  createdAt: string,
  updatedAt: string,
};

export type TotalSoldSneaker = {
  __typename: "TotalSoldSneaker",
  id: string,
  userID: string,
  zipCode: string,
  total: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  age?: string | null,
  username?: string | null,
  email?: string | null,
  avatarImageURL?: string | null,
  status?: string | null,
  zipCode?: string | null,
  expoToken?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateDonScoreInput = {
  id?: string | null,
  userID: string,
  zipCode: string,
  score: number,
};

export type ModelDonScoreConditionInput = {
  zipCode?: ModelStringInput | null,
  score?: ModelIntInput | null,
  and?: Array< ModelDonScoreConditionInput | null > | null,
  or?: Array< ModelDonScoreConditionInput | null > | null,
  not?: ModelDonScoreConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateDonScoreInput = {
  id?: string | null,
  userID: string,
  zipCode?: string | null,
  score?: number | null,
};

export type DeleteDonScoreInput = {
  userID: string,
};

export type CreateTotalSoldSneakerInput = {
  id?: string | null,
  userID: string,
  zipCode: string,
  total: number,
};

export type ModelTotalSoldSneakerConditionInput = {
  zipCode?: ModelStringInput | null,
  total?: ModelIntInput | null,
  and?: Array< ModelTotalSoldSneakerConditionInput | null > | null,
  or?: Array< ModelTotalSoldSneakerConditionInput | null > | null,
  not?: ModelTotalSoldSneakerConditionInput | null,
};

export type UpdateTotalSoldSneakerInput = {
  id?: string | null,
  userID: string,
  zipCode?: string | null,
  total?: number | null,
};

export type DeleteTotalSoldSneakerInput = {
  userID: string,
};

export type CreateFollowingInput = {
  id?: string | null,
  secondUserID: string,
  mainUserID: string,
};

export type ModelFollowingConditionInput = {
  secondUserID?: ModelIDInput | null,
  mainUserID?: ModelIDInput | null,
  and?: Array< ModelFollowingConditionInput | null > | null,
  or?: Array< ModelFollowingConditionInput | null > | null,
  not?: ModelFollowingConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateFollowingInput = {
  id: string,
  secondUserID?: string | null,
  mainUserID?: string | null,
};

export type DeleteFollowingInput = {
  id: string,
};

export type CreateFollowersInput = {
  id?: string | null,
  secondUserID: string,
  mainUserID: string,
};

export type ModelFollowersConditionInput = {
  secondUserID?: ModelIDInput | null,
  mainUserID?: ModelIDInput | null,
  and?: Array< ModelFollowersConditionInput | null > | null,
  or?: Array< ModelFollowersConditionInput | null > | null,
  not?: ModelFollowersConditionInput | null,
};

export type UpdateFollowersInput = {
  id: string,
  secondUserID?: string | null,
  mainUserID?: string | null,
};

export type DeleteFollowersInput = {
  id: string,
};

export type CreateChatRoomUserInput = {
  id?: string | null,
  userID: string,
  chatRoomID: string,
};

export type ModelChatRoomUserConditionInput = {
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserConditionInput | null > | null,
  or?: Array< ModelChatRoomUserConditionInput | null > | null,
  not?: ModelChatRoomUserConditionInput | null,
};

export type UpdateChatRoomUserInput = {
  id: string,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteChatRoomUserInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  offerID: string,
  lastMessageID: string,
  receiverHasRead?: boolean | null,
};

export type ModelChatRoomConditionInput = {
  offerID?: ModelIDInput | null,
  lastMessageID?: ModelIDInput | null,
  receiverHasRead?: ModelBooleanInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateChatRoomInput = {
  id: string,
  offerID?: string | null,
  lastMessageID?: string | null,
  receiverHasRead?: boolean | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  createdAt?: string | null,
  text: string,
  userID: string,
  chatRoomID: string,
};

export type ModelMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  text?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  createdAt?: string | null,
  text?: string | null,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateSneakerInput = {
  id?: string | null,
  brand: string,
  primaryName: string,
  secondaryName: string,
  image: string,
  sneakerStoreID: string,
  userID: string,
  createdAt?: string | null,
  prevSellers?: Array< string | null > | null,
};

export type ModelSneakerConditionInput = {
  brand?: ModelStringInput | null,
  primaryName?: ModelStringInput | null,
  secondaryName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  sneakerStoreID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  prevSellers?: ModelStringInput | null,
  and?: Array< ModelSneakerConditionInput | null > | null,
  or?: Array< ModelSneakerConditionInput | null > | null,
  not?: ModelSneakerConditionInput | null,
};

export type UpdateSneakerInput = {
  id: string,
  brand?: string | null,
  primaryName?: string | null,
  secondaryName?: string | null,
  image?: string | null,
  sneakerStoreID?: string | null,
  userID?: string | null,
  createdAt?: string | null,
  prevSellers?: Array< string | null > | null,
};

export type DeleteSneakerInput = {
  id: string,
};

export type CreateSoldSneakerInput = {
  id?: string | null,
  brand: string,
  primaryName: string,
  secondaryName: string,
  image: string,
  userID: string,
  createdAt?: string | null,
};

export type ModelSoldSneakerConditionInput = {
  brand?: ModelStringInput | null,
  primaryName?: ModelStringInput | null,
  secondaryName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSoldSneakerConditionInput | null > | null,
  or?: Array< ModelSoldSneakerConditionInput | null > | null,
  not?: ModelSoldSneakerConditionInput | null,
};

export type UpdateSoldSneakerInput = {
  id: string,
  brand?: string | null,
  primaryName?: string | null,
  secondaryName?: string | null,
  image?: string | null,
  userID?: string | null,
  createdAt?: string | null,
};

export type DeleteSoldSneakerInput = {
  id: string,
};

export type CreateClaimInput = {
  id?: string | null,
  userID: string,
  sneakerID: string,
  status: ClaimStatus,
  refNumber: string,
  claimMessage?: string | null,
  createdAt?: string | null,
};

export type ModelClaimConditionInput = {
  userID?: ModelIDInput | null,
  sneakerID?: ModelIDInput | null,
  status?: ModelClaimStatusInput | null,
  refNumber?: ModelStringInput | null,
  claimMessage?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelClaimConditionInput | null > | null,
  or?: Array< ModelClaimConditionInput | null > | null,
  not?: ModelClaimConditionInput | null,
};

export type ModelClaimStatusInput = {
  eq?: ClaimStatus | null,
  ne?: ClaimStatus | null,
};

export type UpdateClaimInput = {
  id: string,
  userID?: string | null,
  sneakerID?: string | null,
  status?: ClaimStatus | null,
  refNumber?: string | null,
  claimMessage?: string | null,
  createdAt?: string | null,
};

export type DeleteClaimInput = {
  id: string,
};

export type CreateListedItemInput = {
  id?: string | null,
  sneakerID: string,
  zipCode: string,
  images: Array< string | null >,
  size: string,
  condition: string,
  status: LisitingStatus,
  price: string,
  brand: string,
  description?: string | null,
  sellerID: string,
  createdAt?: string | null,
};

export type ModelListedItemConditionInput = {
  sneakerID?: ModelIDInput | null,
  zipCode?: ModelStringInput | null,
  images?: ModelStringInput | null,
  size?: ModelStringInput | null,
  condition?: ModelStringInput | null,
  status?: ModelLisitingStatusInput | null,
  price?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  description?: ModelStringInput | null,
  sellerID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelListedItemConditionInput | null > | null,
  or?: Array< ModelListedItemConditionInput | null > | null,
  not?: ModelListedItemConditionInput | null,
};

export type ModelLisitingStatusInput = {
  eq?: LisitingStatus | null,
  ne?: LisitingStatus | null,
};

export type UpdateListedItemInput = {
  id: string,
  sneakerID?: string | null,
  zipCode?: string | null,
  images?: Array< string | null > | null,
  size?: string | null,
  condition?: string | null,
  status?: LisitingStatus | null,
  price?: string | null,
  brand?: string | null,
  description?: string | null,
  sellerID?: string | null,
  createdAt?: string | null,
};

export type DeleteListedItemInput = {
  id: string,
};

export type CreateOfferInput = {
  id?: string | null,
  offerAmount: string,
  status: OfferStatus,
  sellerConfirmed: boolean,
  buyerConfirmed: boolean,
  buyingUserID: string,
  sellingUserID: string,
  listedItemID: string,
  createdAt?: string | null,
};

export type ModelOfferConditionInput = {
  offerAmount?: ModelStringInput | null,
  status?: ModelOfferStatusInput | null,
  sellerConfirmed?: ModelBooleanInput | null,
  buyerConfirmed?: ModelBooleanInput | null,
  buyingUserID?: ModelIDInput | null,
  sellingUserID?: ModelIDInput | null,
  listedItemID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelOfferConditionInput | null > | null,
  or?: Array< ModelOfferConditionInput | null > | null,
  not?: ModelOfferConditionInput | null,
};

export type ModelOfferStatusInput = {
  eq?: OfferStatus | null,
  ne?: OfferStatus | null,
};

export type UpdateOfferInput = {
  id: string,
  offerAmount?: string | null,
  status?: OfferStatus | null,
  sellerConfirmed?: boolean | null,
  buyerConfirmed?: boolean | null,
  buyingUserID?: string | null,
  sellingUserID?: string | null,
  listedItemID?: string | null,
  createdAt?: string | null,
};

export type DeleteOfferInput = {
  id: string,
};

export type CreateSneakerStoreInput = {
  id?: string | null,
  brand: string,
  primaryName: string,
  secondaryName: string,
  image: string,
  points: number,
};

export type ModelSneakerStoreConditionInput = {
  brand?: ModelStringInput | null,
  primaryName?: ModelStringInput | null,
  secondaryName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelSneakerStoreConditionInput | null > | null,
  or?: Array< ModelSneakerStoreConditionInput | null > | null,
  not?: ModelSneakerStoreConditionInput | null,
};

export type UpdateSneakerStoreInput = {
  id: string,
  brand?: string | null,
  primaryName?: string | null,
  secondaryName?: string | null,
  image?: string | null,
  points?: number | null,
};

export type DeleteSneakerStoreInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  age?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatarImageURL?: ModelStringInput | null,
  status?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  expoToken?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelDonScoreFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  zipCode?: ModelStringInput | null,
  score?: ModelIntInput | null,
  and?: Array< ModelDonScoreFilterInput | null > | null,
  or?: Array< ModelDonScoreFilterInput | null > | null,
  not?: ModelDonScoreFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelDonScoreConnection = {
  __typename: "ModelDonScoreConnection",
  items:  Array<DonScore | null >,
  nextToken?: string | null,
};

export type ModelTotalSoldSneakerFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  zipCode?: ModelStringInput | null,
  total?: ModelIntInput | null,
  and?: Array< ModelTotalSoldSneakerFilterInput | null > | null,
  or?: Array< ModelTotalSoldSneakerFilterInput | null > | null,
  not?: ModelTotalSoldSneakerFilterInput | null,
};

export type ModelTotalSoldSneakerConnection = {
  __typename: "ModelTotalSoldSneakerConnection",
  items:  Array<TotalSoldSneaker | null >,
  nextToken?: string | null,
};

export type ModelFollowingFilterInput = {
  id?: ModelIDInput | null,
  secondUserID?: ModelIDInput | null,
  mainUserID?: ModelIDInput | null,
  and?: Array< ModelFollowingFilterInput | null > | null,
  or?: Array< ModelFollowingFilterInput | null > | null,
  not?: ModelFollowingFilterInput | null,
};

export type ModelFollowersFilterInput = {
  id?: ModelIDInput | null,
  secondUserID?: ModelIDInput | null,
  mainUserID?: ModelIDInput | null,
  and?: Array< ModelFollowersFilterInput | null > | null,
  or?: Array< ModelFollowersFilterInput | null > | null,
  not?: ModelFollowersFilterInput | null,
};

export type ModelChatRoomUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserFilterInput | null > | null,
  or?: Array< ModelChatRoomUserFilterInput | null > | null,
  not?: ModelChatRoomUserFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  offerID?: ModelIDInput | null,
  lastMessageID?: ModelIDInput | null,
  receiverHasRead?: ModelBooleanInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  text?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelSneakerFilterInput = {
  id?: ModelIDInput | null,
  brand?: ModelStringInput | null,
  primaryName?: ModelStringInput | null,
  secondaryName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  sneakerStoreID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  prevSellers?: ModelStringInput | null,
  and?: Array< ModelSneakerFilterInput | null > | null,
  or?: Array< ModelSneakerFilterInput | null > | null,
  not?: ModelSneakerFilterInput | null,
};

export type ModelSoldSneakerFilterInput = {
  id?: ModelIDInput | null,
  brand?: ModelStringInput | null,
  primaryName?: ModelStringInput | null,
  secondaryName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSoldSneakerFilterInput | null > | null,
  or?: Array< ModelSoldSneakerFilterInput | null > | null,
  not?: ModelSoldSneakerFilterInput | null,
};

export type ModelClaimFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  sneakerID?: ModelIDInput | null,
  status?: ModelClaimStatusInput | null,
  refNumber?: ModelStringInput | null,
  claimMessage?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelClaimFilterInput | null > | null,
  or?: Array< ModelClaimFilterInput | null > | null,
  not?: ModelClaimFilterInput | null,
};

export type ModelListedItemFilterInput = {
  id?: ModelIDInput | null,
  sneakerID?: ModelIDInput | null,
  zipCode?: ModelStringInput | null,
  images?: ModelStringInput | null,
  size?: ModelStringInput | null,
  condition?: ModelStringInput | null,
  status?: ModelLisitingStatusInput | null,
  price?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  description?: ModelStringInput | null,
  sellerID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelListedItemFilterInput | null > | null,
  or?: Array< ModelListedItemFilterInput | null > | null,
  not?: ModelListedItemFilterInput | null,
};

export type ModelListedItemConnection = {
  __typename: "ModelListedItemConnection",
  items:  Array<ListedItem | null >,
  nextToken?: string | null,
};

export type ModelOfferFilterInput = {
  id?: ModelIDInput | null,
  offerAmount?: ModelStringInput | null,
  status?: ModelOfferStatusInput | null,
  sellerConfirmed?: ModelBooleanInput | null,
  buyerConfirmed?: ModelBooleanInput | null,
  buyingUserID?: ModelIDInput | null,
  sellingUserID?: ModelIDInput | null,
  listedItemID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelOfferFilterInput | null > | null,
  or?: Array< ModelOfferFilterInput | null > | null,
  not?: ModelOfferFilterInput | null,
};

export type ModelSneakerStoreFilterInput = {
  id?: ModelIDInput | null,
  brand?: ModelStringInput | null,
  primaryName?: ModelStringInput | null,
  secondaryName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelSneakerStoreFilterInput | null > | null,
  or?: Array< ModelSneakerStoreFilterInput | null > | null,
  not?: ModelSneakerStoreFilterInput | null,
};

export type ModelSneakerStoreConnection = {
  __typename: "ModelSneakerStoreConnection",
  items:  Array<SneakerStore | null >,
  nextToken?: string | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type PinpointMutationVariables = {
  input?: pinpointInput | null,
};

export type PinpointMutation = {
  pinpoint?:  {
    __typename: "pinpointResult",
    statusCode?: number | null,
    body?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    age: string,
    username: string,
    email: string,
    avatarImageURL: string,
    sneakers?:  {
      __typename: "ModelSneakerConnection",
      items:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    soldSneakers?:  {
      __typename: "ModelSoldSneakerConnection",
      items:  Array< {
        __typename: "SoldSneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        offerAmount: string,
        status: OfferStatus,
        sellerConfirmed: boolean,
        buyerConfirmed: boolean,
        buyingUserID: string,
        sellingUserID: string,
        listedItemID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    follower?:  {
      __typename: "ModelFollowersConnection",
      items:  Array< {
        __typename: "Followers",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    zipCode: string,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    donScore?:  {
      __typename: "DonScore",
      id: string,
      userID: string,
      zipCode: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    totalSold?:  {
      __typename: "TotalSoldSneaker",
      id: string,
      userID: string,
      zipCode: string,
      total: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    expoToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    age: string,
    username: string,
    email: string,
    avatarImageURL: string,
    sneakers?:  {
      __typename: "ModelSneakerConnection",
      items:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    soldSneakers?:  {
      __typename: "ModelSoldSneakerConnection",
      items:  Array< {
        __typename: "SoldSneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        offerAmount: string,
        status: OfferStatus,
        sellerConfirmed: boolean,
        buyerConfirmed: boolean,
        buyingUserID: string,
        sellingUserID: string,
        listedItemID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    follower?:  {
      __typename: "ModelFollowersConnection",
      items:  Array< {
        __typename: "Followers",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    zipCode: string,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    donScore?:  {
      __typename: "DonScore",
      id: string,
      userID: string,
      zipCode: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    totalSold?:  {
      __typename: "TotalSoldSneaker",
      id: string,
      userID: string,
      zipCode: string,
      total: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    expoToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    age: string,
    username: string,
    email: string,
    avatarImageURL: string,
    sneakers?:  {
      __typename: "ModelSneakerConnection",
      items:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    soldSneakers?:  {
      __typename: "ModelSoldSneakerConnection",
      items:  Array< {
        __typename: "SoldSneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        offerAmount: string,
        status: OfferStatus,
        sellerConfirmed: boolean,
        buyerConfirmed: boolean,
        buyingUserID: string,
        sellingUserID: string,
        listedItemID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    follower?:  {
      __typename: "ModelFollowersConnection",
      items:  Array< {
        __typename: "Followers",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    zipCode: string,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    donScore?:  {
      __typename: "DonScore",
      id: string,
      userID: string,
      zipCode: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    totalSold?:  {
      __typename: "TotalSoldSneaker",
      id: string,
      userID: string,
      zipCode: string,
      total: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    expoToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDonScoreMutationVariables = {
  input: CreateDonScoreInput,
  condition?: ModelDonScoreConditionInput | null,
};

export type CreateDonScoreMutation = {
  createDonScore?:  {
    __typename: "DonScore",
    id: string,
    userID: string,
    zipCode: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDonScoreMutationVariables = {
  input: UpdateDonScoreInput,
  condition?: ModelDonScoreConditionInput | null,
};

export type UpdateDonScoreMutation = {
  updateDonScore?:  {
    __typename: "DonScore",
    id: string,
    userID: string,
    zipCode: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDonScoreMutationVariables = {
  input: DeleteDonScoreInput,
  condition?: ModelDonScoreConditionInput | null,
};

export type DeleteDonScoreMutation = {
  deleteDonScore?:  {
    __typename: "DonScore",
    id: string,
    userID: string,
    zipCode: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTotalSoldSneakerMutationVariables = {
  input: CreateTotalSoldSneakerInput,
  condition?: ModelTotalSoldSneakerConditionInput | null,
};

export type CreateTotalSoldSneakerMutation = {
  createTotalSoldSneaker?:  {
    __typename: "TotalSoldSneaker",
    id: string,
    userID: string,
    zipCode: string,
    total: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTotalSoldSneakerMutationVariables = {
  input: UpdateTotalSoldSneakerInput,
  condition?: ModelTotalSoldSneakerConditionInput | null,
};

export type UpdateTotalSoldSneakerMutation = {
  updateTotalSoldSneaker?:  {
    __typename: "TotalSoldSneaker",
    id: string,
    userID: string,
    zipCode: string,
    total: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTotalSoldSneakerMutationVariables = {
  input: DeleteTotalSoldSneakerInput,
  condition?: ModelTotalSoldSneakerConditionInput | null,
};

export type DeleteTotalSoldSneakerMutation = {
  deleteTotalSoldSneaker?:  {
    __typename: "TotalSoldSneaker",
    id: string,
    userID: string,
    zipCode: string,
    total: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFollowingMutationVariables = {
  input: CreateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type CreateFollowingMutation = {
  createFollowing?:  {
    __typename: "Following",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFollowingMutationVariables = {
  input: UpdateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type UpdateFollowingMutation = {
  updateFollowing?:  {
    __typename: "Following",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFollowingMutationVariables = {
  input: DeleteFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type DeleteFollowingMutation = {
  deleteFollowing?:  {
    __typename: "Following",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFollowersMutationVariables = {
  input: CreateFollowersInput,
  condition?: ModelFollowersConditionInput | null,
};

export type CreateFollowersMutation = {
  createFollowers?:  {
    __typename: "Followers",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFollowersMutationVariables = {
  input: UpdateFollowersInput,
  condition?: ModelFollowersConditionInput | null,
};

export type UpdateFollowersMutation = {
  updateFollowers?:  {
    __typename: "Followers",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFollowersMutationVariables = {
  input: DeleteFollowersInput,
  condition?: ModelFollowersConditionInput | null,
};

export type DeleteFollowersMutation = {
  deleteFollowers?:  {
    __typename: "Followers",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomUserMutationVariables = {
  input: CreateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type CreateChatRoomUserMutation = {
  createChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomUserMutationVariables = {
  input: UpdateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type UpdateChatRoomUserMutation = {
  updateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomUserMutationVariables = {
  input: DeleteChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type DeleteChatRoomUserMutation = {
  deleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    offerID: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt?: string | null,
      text: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        offerID: string,
        lastMessageID: string,
        receiverHasRead?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    receiverHasRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    offerID: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt?: string | null,
      text: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        offerID: string,
        lastMessageID: string,
        receiverHasRead?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    receiverHasRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    offerID: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt?: string | null,
      text: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        offerID: string,
        lastMessageID: string,
        receiverHasRead?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    receiverHasRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    createdAt?: string | null,
    text: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt?: string | null,
    text: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt?: string | null,
    text: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateSneakerMutationVariables = {
  input: CreateSneakerInput,
  condition?: ModelSneakerConditionInput | null,
};

export type CreateSneakerMutation = {
  createSneaker?:  {
    __typename: "Sneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    sneakerStoreID: string,
    sneaker?:  {
      __typename: "SneakerStore",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      points: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    claim?:  {
      __typename: "ModelClaimConnection",
      items:  Array< {
        __typename: "Claim",
        id: string,
        userID: string,
        sneakerID: string,
        status: ClaimStatus,
        refNumber: string,
        claimMessage?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    prevSellers?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type UpdateSneakerMutationVariables = {
  input: UpdateSneakerInput,
  condition?: ModelSneakerConditionInput | null,
};

export type UpdateSneakerMutation = {
  updateSneaker?:  {
    __typename: "Sneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    sneakerStoreID: string,
    sneaker?:  {
      __typename: "SneakerStore",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      points: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    claim?:  {
      __typename: "ModelClaimConnection",
      items:  Array< {
        __typename: "Claim",
        id: string,
        userID: string,
        sneakerID: string,
        status: ClaimStatus,
        refNumber: string,
        claimMessage?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    prevSellers?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type DeleteSneakerMutationVariables = {
  input: DeleteSneakerInput,
  condition?: ModelSneakerConditionInput | null,
};

export type DeleteSneakerMutation = {
  deleteSneaker?:  {
    __typename: "Sneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    sneakerStoreID: string,
    sneaker?:  {
      __typename: "SneakerStore",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      points: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    claim?:  {
      __typename: "ModelClaimConnection",
      items:  Array< {
        __typename: "Claim",
        id: string,
        userID: string,
        sneakerID: string,
        status: ClaimStatus,
        refNumber: string,
        claimMessage?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    prevSellers?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type CreateSoldSneakerMutationVariables = {
  input: CreateSoldSneakerInput,
  condition?: ModelSoldSneakerConditionInput | null,
};

export type CreateSoldSneakerMutation = {
  createSoldSneaker?:  {
    __typename: "SoldSneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateSoldSneakerMutationVariables = {
  input: UpdateSoldSneakerInput,
  condition?: ModelSoldSneakerConditionInput | null,
};

export type UpdateSoldSneakerMutation = {
  updateSoldSneaker?:  {
    __typename: "SoldSneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteSoldSneakerMutationVariables = {
  input: DeleteSoldSneakerInput,
  condition?: ModelSoldSneakerConditionInput | null,
};

export type DeleteSoldSneakerMutation = {
  deleteSoldSneaker?:  {
    __typename: "SoldSneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateClaimMutationVariables = {
  input: CreateClaimInput,
  condition?: ModelClaimConditionInput | null,
};

export type CreateClaimMutation = {
  createClaim?:  {
    __typename: "Claim",
    id: string,
    userID: string,
    sneakerID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    sneaker:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    status: ClaimStatus,
    refNumber: string,
    claimMessage?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateClaimMutationVariables = {
  input: UpdateClaimInput,
  condition?: ModelClaimConditionInput | null,
};

export type UpdateClaimMutation = {
  updateClaim?:  {
    __typename: "Claim",
    id: string,
    userID: string,
    sneakerID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    sneaker:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    status: ClaimStatus,
    refNumber: string,
    claimMessage?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteClaimMutationVariables = {
  input: DeleteClaimInput,
  condition?: ModelClaimConditionInput | null,
};

export type DeleteClaimMutation = {
  deleteClaim?:  {
    __typename: "Claim",
    id: string,
    userID: string,
    sneakerID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    sneaker:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    status: ClaimStatus,
    refNumber: string,
    claimMessage?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateListedItemMutationVariables = {
  input: CreateListedItemInput,
  condition?: ModelListedItemConditionInput | null,
};

export type CreateListedItemMutation = {
  createListedItem?:  {
    __typename: "ListedItem",
    id: string,
    sneakerID: string,
    sneakerData:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    zipCode: string,
    images: Array< string | null >,
    size: string,
    condition: string,
    status: LisitingStatus,
    price: string,
    brand: string,
    description?: string | null,
    sellerID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateListedItemMutationVariables = {
  input: UpdateListedItemInput,
  condition?: ModelListedItemConditionInput | null,
};

export type UpdateListedItemMutation = {
  updateListedItem?:  {
    __typename: "ListedItem",
    id: string,
    sneakerID: string,
    sneakerData:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    zipCode: string,
    images: Array< string | null >,
    size: string,
    condition: string,
    status: LisitingStatus,
    price: string,
    brand: string,
    description?: string | null,
    sellerID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteListedItemMutationVariables = {
  input: DeleteListedItemInput,
  condition?: ModelListedItemConditionInput | null,
};

export type DeleteListedItemMutation = {
  deleteListedItem?:  {
    __typename: "ListedItem",
    id: string,
    sneakerID: string,
    sneakerData:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    zipCode: string,
    images: Array< string | null >,
    size: string,
    condition: string,
    status: LisitingStatus,
    price: string,
    brand: string,
    description?: string | null,
    sellerID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateOfferMutationVariables = {
  input: CreateOfferInput,
  condition?: ModelOfferConditionInput | null,
};

export type CreateOfferMutation = {
  createOffer?:  {
    __typename: "Offer",
    id: string,
    offerAmount: string,
    status: OfferStatus,
    sellerConfirmed: boolean,
    buyerConfirmed: boolean,
    buyingUserID: string,
    sellingUserID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    buyer:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    listedItemID: string,
    listedItem:  {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateOfferMutationVariables = {
  input: UpdateOfferInput,
  condition?: ModelOfferConditionInput | null,
};

export type UpdateOfferMutation = {
  updateOffer?:  {
    __typename: "Offer",
    id: string,
    offerAmount: string,
    status: OfferStatus,
    sellerConfirmed: boolean,
    buyerConfirmed: boolean,
    buyingUserID: string,
    sellingUserID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    buyer:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    listedItemID: string,
    listedItem:  {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteOfferMutationVariables = {
  input: DeleteOfferInput,
  condition?: ModelOfferConditionInput | null,
};

export type DeleteOfferMutation = {
  deleteOffer?:  {
    __typename: "Offer",
    id: string,
    offerAmount: string,
    status: OfferStatus,
    sellerConfirmed: boolean,
    buyerConfirmed: boolean,
    buyingUserID: string,
    sellingUserID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    buyer:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    listedItemID: string,
    listedItem:  {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateSneakerStoreMutationVariables = {
  input: CreateSneakerStoreInput,
  condition?: ModelSneakerStoreConditionInput | null,
};

export type CreateSneakerStoreMutation = {
  createSneakerStore?:  {
    __typename: "SneakerStore",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSneakerStoreMutationVariables = {
  input: UpdateSneakerStoreInput,
  condition?: ModelSneakerStoreConditionInput | null,
};

export type UpdateSneakerStoreMutation = {
  updateSneakerStore?:  {
    __typename: "SneakerStore",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSneakerStoreMutationVariables = {
  input: DeleteSneakerStoreInput,
  condition?: ModelSneakerStoreConditionInput | null,
};

export type DeleteSneakerStoreMutation = {
  deleteSneakerStore?:  {
    __typename: "SneakerStore",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    age: string,
    username: string,
    email: string,
    avatarImageURL: string,
    sneakers?:  {
      __typename: "ModelSneakerConnection",
      items:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    soldSneakers?:  {
      __typename: "ModelSoldSneakerConnection",
      items:  Array< {
        __typename: "SoldSneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        offerAmount: string,
        status: OfferStatus,
        sellerConfirmed: boolean,
        buyerConfirmed: boolean,
        buyingUserID: string,
        sellingUserID: string,
        listedItemID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    follower?:  {
      __typename: "ModelFollowersConnection",
      items:  Array< {
        __typename: "Followers",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    zipCode: string,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    donScore?:  {
      __typename: "DonScore",
      id: string,
      userID: string,
      zipCode: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    totalSold?:  {
      __typename: "TotalSoldSneaker",
      id: string,
      userID: string,
      zipCode: string,
      total: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    expoToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDonScoreQueryVariables = {
  userID: string,
};

export type GetDonScoreQuery = {
  getDonScore?:  {
    __typename: "DonScore",
    id: string,
    userID: string,
    zipCode: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDonScoresQueryVariables = {
  userID?: string | null,
  filter?: ModelDonScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDonScoresQuery = {
  listDonScores?:  {
    __typename: "ModelDonScoreConnection",
    items:  Array< {
      __typename: "DonScore",
      id: string,
      userID: string,
      zipCode: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTotalSoldSneakerQueryVariables = {
  userID: string,
};

export type GetTotalSoldSneakerQuery = {
  getTotalSoldSneaker?:  {
    __typename: "TotalSoldSneaker",
    id: string,
    userID: string,
    zipCode: string,
    total: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTotalSoldSneakersQueryVariables = {
  userID?: string | null,
  filter?: ModelTotalSoldSneakerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTotalSoldSneakersQuery = {
  listTotalSoldSneakers?:  {
    __typename: "ModelTotalSoldSneakerConnection",
    items:  Array< {
      __typename: "TotalSoldSneaker",
      id: string,
      userID: string,
      zipCode: string,
      total: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFollowingQueryVariables = {
  id: string,
};

export type GetFollowingQuery = {
  getFollowing?:  {
    __typename: "Following",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFollowingsQueryVariables = {
  filter?: ModelFollowingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowingsQuery = {
  listFollowings?:  {
    __typename: "ModelFollowingConnection",
    items:  Array< {
      __typename: "Following",
      id: string,
      secondUserID: string,
      mainUserID: string,
      user:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFollowersQueryVariables = {
  id: string,
};

export type GetFollowersQuery = {
  getFollowers?:  {
    __typename: "Followers",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFollowerssQueryVariables = {
  filter?: ModelFollowersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowerssQuery = {
  listFollowerss?:  {
    __typename: "ModelFollowersConnection",
    items:  Array< {
      __typename: "Followers",
      id: string,
      secondUserID: string,
      mainUserID: string,
      user:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomUserQueryVariables = {
  id: string,
};

export type GetChatRoomUserQuery = {
  getChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomUsersQueryVariables = {
  filter?: ModelChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomUsersQuery = {
  listChatRoomUsers?:  {
    __typename: "ModelChatRoomUserConnection",
    items:  Array< {
      __typename: "ChatRoomUser",
      id: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        offerID: string,
        lastMessageID: string,
        receiverHasRead?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    offerID: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt?: string | null,
      text: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        offerID: string,
        lastMessageID: string,
        receiverHasRead?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    receiverHasRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    createdAt?: string | null,
    text: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      createdAt?: string | null,
      text: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        offerID: string,
        lastMessageID: string,
        receiverHasRead?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSneakerQueryVariables = {
  id: string,
};

export type GetSneakerQuery = {
  getSneaker?:  {
    __typename: "Sneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    sneakerStoreID: string,
    sneaker?:  {
      __typename: "SneakerStore",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      points: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    claim?:  {
      __typename: "ModelClaimConnection",
      items:  Array< {
        __typename: "Claim",
        id: string,
        userID: string,
        sneakerID: string,
        status: ClaimStatus,
        refNumber: string,
        claimMessage?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    prevSellers?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type ListSneakersQueryVariables = {
  filter?: ModelSneakerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSneakersQuery = {
  listSneakers?:  {
    __typename: "ModelSneakerConnection",
    items:  Array< {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSoldSneakerQueryVariables = {
  id: string,
};

export type GetSoldSneakerQuery = {
  getSoldSneaker?:  {
    __typename: "SoldSneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListSoldSneakersQueryVariables = {
  filter?: ModelSoldSneakerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSoldSneakersQuery = {
  listSoldSneakers?:  {
    __typename: "ModelSoldSneakerConnection",
    items:  Array< {
      __typename: "SoldSneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetClaimQueryVariables = {
  id: string,
};

export type GetClaimQuery = {
  getClaim?:  {
    __typename: "Claim",
    id: string,
    userID: string,
    sneakerID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    sneaker:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    status: ClaimStatus,
    refNumber: string,
    claimMessage?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListClaimsQueryVariables = {
  filter?: ModelClaimFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClaimsQuery = {
  listClaims?:  {
    __typename: "ModelClaimConnection",
    items:  Array< {
      __typename: "Claim",
      id: string,
      userID: string,
      sneakerID: string,
      user:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      sneaker:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      status: ClaimStatus,
      refNumber: string,
      claimMessage?: string | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetListedItemQueryVariables = {
  id: string,
};

export type GetListedItemQuery = {
  getListedItem?:  {
    __typename: "ListedItem",
    id: string,
    sneakerID: string,
    sneakerData:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    zipCode: string,
    images: Array< string | null >,
    size: string,
    condition: string,
    status: LisitingStatus,
    price: string,
    brand: string,
    description?: string | null,
    sellerID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListListedItemsQueryVariables = {
  filter?: ModelListedItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListedItemsQuery = {
  listListedItems?:  {
    __typename: "ModelListedItemConnection",
    items:  Array< {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOfferQueryVariables = {
  id: string,
};

export type GetOfferQuery = {
  getOffer?:  {
    __typename: "Offer",
    id: string,
    offerAmount: string,
    status: OfferStatus,
    sellerConfirmed: boolean,
    buyerConfirmed: boolean,
    buyingUserID: string,
    sellingUserID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    buyer:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    listedItemID: string,
    listedItem:  {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListOffersQueryVariables = {
  filter?: ModelOfferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOffersQuery = {
  listOffers?:  {
    __typename: "ModelOfferConnection",
    items:  Array< {
      __typename: "Offer",
      id: string,
      offerAmount: string,
      status: OfferStatus,
      sellerConfirmed: boolean,
      buyerConfirmed: boolean,
      buyingUserID: string,
      sellingUserID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      buyer:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      listedItemID: string,
      listedItem:  {
        __typename: "ListedItem",
        id: string,
        sneakerID: string,
        zipCode: string,
        images: Array< string | null >,
        size: string,
        condition: string,
        status: LisitingStatus,
        price: string,
        brand: string,
        description?: string | null,
        sellerID: string,
        createdAt?: string | null,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSneakerStoreQueryVariables = {
  id: string,
};

export type GetSneakerStoreQuery = {
  getSneakerStore?:  {
    __typename: "SneakerStore",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSneakerStoresQueryVariables = {
  filter?: ModelSneakerStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSneakerStoresQuery = {
  listSneakerStores?:  {
    __typename: "ModelSneakerStoreConnection",
    items:  Array< {
      __typename: "SneakerStore",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      points: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type DonScoreByZipCodeQueryVariables = {
  zipCode?: string | null,
  score?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelDonScoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type DonScoreByZipCodeQuery = {
  donScoreByZipCode?:  {
    __typename: "ModelDonScoreConnection",
    items:  Array< {
      __typename: "DonScore",
      id: string,
      userID: string,
      zipCode: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TotalSoldSneakersByZipCodeQueryVariables = {
  zipCode?: string | null,
  total?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTotalSoldSneakerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TotalSoldSneakersByZipCodeQuery = {
  totalSoldSneakersByZipCode?:  {
    __typename: "ModelTotalSoldSneakerConnection",
    items:  Array< {
      __typename: "TotalSoldSneaker",
      id: string,
      userID: string,
      zipCode: string,
      total: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FollowingByUserQueryVariables = {
  mainUserID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFollowingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FollowingByUserQuery = {
  followingByUser?:  {
    __typename: "ModelFollowingConnection",
    items:  Array< {
      __typename: "Following",
      id: string,
      secondUserID: string,
      mainUserID: string,
      user:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FollowersByUserQueryVariables = {
  secondUserID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFollowersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FollowersByUserQuery = {
  followersByUser?:  {
    __typename: "ModelFollowersConnection",
    items:  Array< {
      __typename: "Followers",
      id: string,
      secondUserID: string,
      mainUserID: string,
      user:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChatRoomUserByUserQueryVariables = {
  userID?: string | null,
  chatRoomID?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatRoomUserByUserQuery = {
  chatRoomUserByUser?:  {
    __typename: "ModelChatRoomUserConnection",
    items:  Array< {
      __typename: "ChatRoomUser",
      id: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        offerID: string,
        lastMessageID: string,
        receiverHasRead?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatRoomQueryVariables = {
  chatRoomID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatRoomQuery = {
  messagesByChatRoom?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      createdAt?: string | null,
      text: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        offerID: string,
        lastMessageID: string,
        receiverHasRead?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SneakerByUserQueryVariables = {
  userID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSneakerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SneakerByUserQuery = {
  sneakerByUser?:  {
    __typename: "ModelSneakerConnection",
    items:  Array< {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SoldItemByUserQueryVariables = {
  userID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSoldSneakerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SoldItemByUserQuery = {
  SoldItemByUser?:  {
    __typename: "ModelSoldSneakerConnection",
    items:  Array< {
      __typename: "SoldSneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListedItemByUserQueryVariables = {
  sellerID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelListedItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListedItemByUserQuery = {
  listedItemByUser?:  {
    __typename: "ModelListedItemConnection",
    items:  Array< {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListedItemByZipCodeQueryVariables = {
  zipCode?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelListedItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListedItemByZipCodeQuery = {
  listedItemByZipCode?:  {
    __typename: "ModelListedItemConnection",
    items:  Array< {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListedItemByBrandQueryVariables = {
  brand?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelListedItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListedItemByBrandQuery = {
  listedItemByBrand?:  {
    __typename: "ModelListedItemConnection",
    items:  Array< {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListedItemByPriceQueryVariables = {
  price?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelListedItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListedItemByPriceQuery = {
  listedItemByPrice?:  {
    __typename: "ModelListedItemConnection",
    items:  Array< {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListedItemBySizeQueryVariables = {
  size?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelListedItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListedItemBySizeQuery = {
  listedItemBySize?:  {
    __typename: "ModelListedItemConnection",
    items:  Array< {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListedItemByConditionQueryVariables = {
  condition?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelListedItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListedItemByConditionQuery = {
  listedItemByCondition?:  {
    __typename: "ModelListedItemConnection",
    items:  Array< {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListedItemByStatusQueryVariables = {
  status?: LisitingStatus | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelListedItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListedItemByStatusQuery = {
  listedItemByStatus?:  {
    __typename: "ModelListedItemConnection",
    items:  Array< {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OfferByUserQueryVariables = {
  buyingUserID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOfferFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OfferByUserQuery = {
  offerByUser?:  {
    __typename: "ModelOfferConnection",
    items:  Array< {
      __typename: "Offer",
      id: string,
      offerAmount: string,
      status: OfferStatus,
      sellerConfirmed: boolean,
      buyerConfirmed: boolean,
      buyingUserID: string,
      sellingUserID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      buyer:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      listedItemID: string,
      listedItem:  {
        __typename: "ListedItem",
        id: string,
        sneakerID: string,
        zipCode: string,
        images: Array< string | null >,
        size: string,
        condition: string,
        status: LisitingStatus,
        price: string,
        brand: string,
        description?: string | null,
        sellerID: string,
        createdAt?: string | null,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    age: string,
    username: string,
    email: string,
    avatarImageURL: string,
    sneakers?:  {
      __typename: "ModelSneakerConnection",
      items:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    soldSneakers?:  {
      __typename: "ModelSoldSneakerConnection",
      items:  Array< {
        __typename: "SoldSneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        offerAmount: string,
        status: OfferStatus,
        sellerConfirmed: boolean,
        buyerConfirmed: boolean,
        buyingUserID: string,
        sellingUserID: string,
        listedItemID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    follower?:  {
      __typename: "ModelFollowersConnection",
      items:  Array< {
        __typename: "Followers",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    zipCode: string,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    donScore?:  {
      __typename: "DonScore",
      id: string,
      userID: string,
      zipCode: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    totalSold?:  {
      __typename: "TotalSoldSneaker",
      id: string,
      userID: string,
      zipCode: string,
      total: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    expoToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    age: string,
    username: string,
    email: string,
    avatarImageURL: string,
    sneakers?:  {
      __typename: "ModelSneakerConnection",
      items:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    soldSneakers?:  {
      __typename: "ModelSoldSneakerConnection",
      items:  Array< {
        __typename: "SoldSneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        offerAmount: string,
        status: OfferStatus,
        sellerConfirmed: boolean,
        buyerConfirmed: boolean,
        buyingUserID: string,
        sellingUserID: string,
        listedItemID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    follower?:  {
      __typename: "ModelFollowersConnection",
      items:  Array< {
        __typename: "Followers",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    zipCode: string,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    donScore?:  {
      __typename: "DonScore",
      id: string,
      userID: string,
      zipCode: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    totalSold?:  {
      __typename: "TotalSoldSneaker",
      id: string,
      userID: string,
      zipCode: string,
      total: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    expoToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    age: string,
    username: string,
    email: string,
    avatarImageURL: string,
    sneakers?:  {
      __typename: "ModelSneakerConnection",
      items:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    soldSneakers?:  {
      __typename: "ModelSoldSneakerConnection",
      items:  Array< {
        __typename: "SoldSneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    offers?:  {
      __typename: "ModelOfferConnection",
      items:  Array< {
        __typename: "Offer",
        id: string,
        offerAmount: string,
        status: OfferStatus,
        sellerConfirmed: boolean,
        buyerConfirmed: boolean,
        buyingUserID: string,
        sellingUserID: string,
        listedItemID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    follower?:  {
      __typename: "ModelFollowersConnection",
      items:  Array< {
        __typename: "Followers",
        id: string,
        secondUserID: string,
        mainUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    status?: string | null,
    zipCode: string,
    chatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    donScore?:  {
      __typename: "DonScore",
      id: string,
      userID: string,
      zipCode: string,
      score: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    totalSold?:  {
      __typename: "TotalSoldSneaker",
      id: string,
      userID: string,
      zipCode: string,
      total: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    expoToken?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDonScoreSubscription = {
  onCreateDonScore?:  {
    __typename: "DonScore",
    id: string,
    userID: string,
    zipCode: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDonScoreSubscription = {
  onUpdateDonScore?:  {
    __typename: "DonScore",
    id: string,
    userID: string,
    zipCode: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDonScoreSubscription = {
  onDeleteDonScore?:  {
    __typename: "DonScore",
    id: string,
    userID: string,
    zipCode: string,
    score: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTotalSoldSneakerSubscription = {
  onCreateTotalSoldSneaker?:  {
    __typename: "TotalSoldSneaker",
    id: string,
    userID: string,
    zipCode: string,
    total: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTotalSoldSneakerSubscription = {
  onUpdateTotalSoldSneaker?:  {
    __typename: "TotalSoldSneaker",
    id: string,
    userID: string,
    zipCode: string,
    total: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTotalSoldSneakerSubscription = {
  onDeleteTotalSoldSneaker?:  {
    __typename: "TotalSoldSneaker",
    id: string,
    userID: string,
    zipCode: string,
    total: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFollowingSubscription = {
  onCreateFollowing?:  {
    __typename: "Following",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFollowingSubscription = {
  onUpdateFollowing?:  {
    __typename: "Following",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFollowingSubscription = {
  onDeleteFollowing?:  {
    __typename: "Following",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFollowersSubscription = {
  onCreateFollowers?:  {
    __typename: "Followers",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFollowersSubscription = {
  onUpdateFollowers?:  {
    __typename: "Followers",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFollowersSubscription = {
  onDeleteFollowers?:  {
    __typename: "Followers",
    id: string,
    secondUserID: string,
    mainUserID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomUserSubscription = {
  onCreateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomUserSubscription = {
  onUpdateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomUserSubscription = {
  onDeleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    offerID: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt?: string | null,
      text: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        offerID: string,
        lastMessageID: string,
        receiverHasRead?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    receiverHasRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    offerID: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt?: string | null,
      text: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        offerID: string,
        lastMessageID: string,
        receiverHasRead?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    receiverHasRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    offerID: string,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessageID: string,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt?: string | null,
      text: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        offerID: string,
        lastMessageID: string,
        receiverHasRead?: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      updatedAt: string,
    } | null,
    receiverHasRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt?: string | null,
    text: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt?: string | null,
    text: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt?: string | null,
    text: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      offerID: string,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      lastMessageID: string,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt?: string | null,
        text: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
      } | null,
      receiverHasRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateSneakerSubscription = {
  onCreateSneaker?:  {
    __typename: "Sneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    sneakerStoreID: string,
    sneaker?:  {
      __typename: "SneakerStore",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      points: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    claim?:  {
      __typename: "ModelClaimConnection",
      items:  Array< {
        __typename: "Claim",
        id: string,
        userID: string,
        sneakerID: string,
        status: ClaimStatus,
        refNumber: string,
        claimMessage?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    prevSellers?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateSneakerSubscription = {
  onUpdateSneaker?:  {
    __typename: "Sneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    sneakerStoreID: string,
    sneaker?:  {
      __typename: "SneakerStore",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      points: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    claim?:  {
      __typename: "ModelClaimConnection",
      items:  Array< {
        __typename: "Claim",
        id: string,
        userID: string,
        sneakerID: string,
        status: ClaimStatus,
        refNumber: string,
        claimMessage?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    prevSellers?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteSneakerSubscription = {
  onDeleteSneaker?:  {
    __typename: "Sneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    sneakerStoreID: string,
    sneaker?:  {
      __typename: "SneakerStore",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      points: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    claim?:  {
      __typename: "ModelClaimConnection",
      items:  Array< {
        __typename: "Claim",
        id: string,
        userID: string,
        sneakerID: string,
        status: ClaimStatus,
        refNumber: string,
        claimMessage?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    prevSellers?: Array< string | null > | null,
    updatedAt: string,
  } | null,
};

export type OnCreateSoldSneakerSubscription = {
  onCreateSoldSneaker?:  {
    __typename: "SoldSneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateSoldSneakerSubscription = {
  onUpdateSoldSneaker?:  {
    __typename: "SoldSneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteSoldSneakerSubscription = {
  onDeleteSoldSneaker?:  {
    __typename: "SoldSneaker",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateClaimSubscription = {
  onCreateClaim?:  {
    __typename: "Claim",
    id: string,
    userID: string,
    sneakerID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    sneaker:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    status: ClaimStatus,
    refNumber: string,
    claimMessage?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateClaimSubscription = {
  onUpdateClaim?:  {
    __typename: "Claim",
    id: string,
    userID: string,
    sneakerID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    sneaker:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    status: ClaimStatus,
    refNumber: string,
    claimMessage?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteClaimSubscription = {
  onDeleteClaim?:  {
    __typename: "Claim",
    id: string,
    userID: string,
    sneakerID: string,
    user:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    sneaker:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    status: ClaimStatus,
    refNumber: string,
    claimMessage?: string | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateListedItemSubscription = {
  onCreateListedItem?:  {
    __typename: "ListedItem",
    id: string,
    sneakerID: string,
    sneakerData:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    zipCode: string,
    images: Array< string | null >,
    size: string,
    condition: string,
    status: LisitingStatus,
    price: string,
    brand: string,
    description?: string | null,
    sellerID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateListedItemSubscription = {
  onUpdateListedItem?:  {
    __typename: "ListedItem",
    id: string,
    sneakerID: string,
    sneakerData:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    zipCode: string,
    images: Array< string | null >,
    size: string,
    condition: string,
    status: LisitingStatus,
    price: string,
    brand: string,
    description?: string | null,
    sellerID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteListedItemSubscription = {
  onDeleteListedItem?:  {
    __typename: "ListedItem",
    id: string,
    sneakerID: string,
    sneakerData:  {
      __typename: "Sneaker",
      id: string,
      brand: string,
      primaryName: string,
      secondaryName: string,
      image: string,
      sneakerStoreID: string,
      sneaker?:  {
        __typename: "SneakerStore",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        points: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      claim?:  {
        __typename: "ModelClaimConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      prevSellers?: Array< string | null > | null,
      updatedAt: string,
    },
    zipCode: string,
    images: Array< string | null >,
    size: string,
    condition: string,
    status: LisitingStatus,
    price: string,
    brand: string,
    description?: string | null,
    sellerID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateOfferSubscription = {
  onCreateOffer?:  {
    __typename: "Offer",
    id: string,
    offerAmount: string,
    status: OfferStatus,
    sellerConfirmed: boolean,
    buyerConfirmed: boolean,
    buyingUserID: string,
    sellingUserID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    buyer:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    listedItemID: string,
    listedItem:  {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateOfferSubscription = {
  onUpdateOffer?:  {
    __typename: "Offer",
    id: string,
    offerAmount: string,
    status: OfferStatus,
    sellerConfirmed: boolean,
    buyerConfirmed: boolean,
    buyingUserID: string,
    sellingUserID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    buyer:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    listedItemID: string,
    listedItem:  {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteOfferSubscription = {
  onDeleteOffer?:  {
    __typename: "Offer",
    id: string,
    offerAmount: string,
    status: OfferStatus,
    sellerConfirmed: boolean,
    buyerConfirmed: boolean,
    buyingUserID: string,
    sellingUserID: string,
    seller:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    buyer:  {
      __typename: "User",
      id: string,
      age: string,
      username: string,
      email: string,
      avatarImageURL: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      soldSneakers?:  {
        __typename: "ModelSoldSneakerConnection",
        nextToken?: string | null,
      } | null,
      offers?:  {
        __typename: "ModelOfferConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      follower?:  {
        __typename: "ModelFollowersConnection",
        nextToken?: string | null,
      } | null,
      status?: string | null,
      zipCode: string,
      chatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        nextToken?: string | null,
      } | null,
      donScore?:  {
        __typename: "DonScore",
        id: string,
        userID: string,
        zipCode: string,
        score: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      totalSold?:  {
        __typename: "TotalSoldSneaker",
        id: string,
        userID: string,
        zipCode: string,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      expoToken?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    listedItemID: string,
    listedItem:  {
      __typename: "ListedItem",
      id: string,
      sneakerID: string,
      sneakerData:  {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        sneakerStoreID: string,
        userID: string,
        createdAt?: string | null,
        prevSellers?: Array< string | null > | null,
        updatedAt: string,
      },
      zipCode: string,
      images: Array< string | null >,
      size: string,
      condition: string,
      status: LisitingStatus,
      price: string,
      brand: string,
      description?: string | null,
      sellerID: string,
      seller:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        status?: string | null,
        zipCode: string,
        expoToken?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt?: string | null,
      updatedAt: string,
    },
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateSneakerStoreSubscription = {
  onCreateSneakerStore?:  {
    __typename: "SneakerStore",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSneakerStoreSubscription = {
  onUpdateSneakerStore?:  {
    __typename: "SneakerStore",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSneakerStoreSubscription = {
  onDeleteSneakerStore?:  {
    __typename: "SneakerStore",
    id: string,
    brand: string,
    primaryName: string,
    secondaryName: string,
    image: string,
    points: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
