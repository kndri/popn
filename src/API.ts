/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  age: string,
  username: string,
  email: string,
  avatarImageURL: string,
  following?: number | null,
  follower?: number | null,
};

export type ModelUserConditionInput = {
  age?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  avatarImageURL?: ModelStringInput | null,
  following?: ModelIntInput | null,
  follower?: ModelIntInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  age: string,
  username: string,
  email: string,
  avatarImageURL: string,
  sneakers?: ModelSneakerConnection | null,
  posts?: ModelPostConnection | null,
  following?: number | null,
  follower?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSneakerConnection = {
  __typename: "ModelSneakerConnection",
  items?:  Array<Sneaker | null > | null,
  nextToken?: string | null,
};

export type Sneaker = {
  __typename: "Sneaker",
  id: string,
  brand: string,
  primaryName: string,
  secondaryName: string,
  image: string,
  userID: string,
  user?: User | null,
  createdAt?: string | null,
  verified?: boolean | null,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  userID: string,
  description?: string | null,
  user?: User | null,
  likes?: ModelLikeConnection | null,
  comments?: ModelCommentConnection | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items?:  Array<Like | null > | null,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  userID: string,
  postID: string,
  user: User,
  post: Post,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  text: string,
  userID: string,
  postID: string,
  user?: User | null,
  post?: Post | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  age?: string | null,
  username?: string | null,
  email?: string | null,
  avatarImageURL?: string | null,
  following?: number | null,
  follower?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateSneakerInput = {
  id?: string | null,
  brand: string,
  primaryName: string,
  secondaryName: string,
  image: string,
  userID: string,
  createdAt?: string | null,
  verified?: boolean | null,
};

export type ModelSneakerConditionInput = {
  brand?: ModelStringInput | null,
  primaryName?: ModelStringInput | null,
  secondaryName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  and?: Array< ModelSneakerConditionInput | null > | null,
  or?: Array< ModelSneakerConditionInput | null > | null,
  not?: ModelSneakerConditionInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSneakerInput = {
  id: string,
  brand?: string | null,
  primaryName?: string | null,
  secondaryName?: string | null,
  image?: string | null,
  userID?: string | null,
  createdAt?: string | null,
  verified?: boolean | null,
};

export type DeleteSneakerInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  userID: string,
  description?: string | null,
  createdAt?: string | null,
};

export type ModelPostConditionInput = {
  userID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type UpdatePostInput = {
  id: string,
  userID?: string | null,
  description?: string | null,
  createdAt?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  text: string,
  userID: string,
  postID: string,
  createdAt?: string | null,
};

export type ModelCommentConditionInput = {
  text?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  text?: string | null,
  userID?: string | null,
  postID?: string | null,
  createdAt?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  userID: string,
  postID: string,
};

export type ModelLikeConditionInput = {
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type UpdateLikeInput = {
  id: string,
  userID?: string | null,
  postID?: string | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type CreateSneakerStoreInput = {
  id?: string | null,
  brand: string,
  primary_name: string,
  secondary_name: string,
  image_url: string,
};

export type ModelSneakerStoreConditionInput = {
  brand?: ModelStringInput | null,
  primary_name?: ModelStringInput | null,
  secondary_name?: ModelStringInput | null,
  image_url?: ModelStringInput | null,
  and?: Array< ModelSneakerStoreConditionInput | null > | null,
  or?: Array< ModelSneakerStoreConditionInput | null > | null,
  not?: ModelSneakerStoreConditionInput | null,
};

export type SneakerStore = {
  __typename: "SneakerStore",
  id: string,
  brand: string,
  primary_name: string,
  secondary_name: string,
  image_url: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSneakerStoreInput = {
  id: string,
  brand?: string | null,
  primary_name?: string | null,
  secondary_name?: string | null,
  image_url?: string | null,
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
  following?: ModelIntInput | null,
  follower?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelSneakerFilterInput = {
  id?: ModelIDInput | null,
  brand?: ModelStringInput | null,
  primaryName?: ModelStringInput | null,
  secondaryName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  verified?: ModelBooleanInput | null,
  and?: Array< ModelSneakerFilterInput | null > | null,
  or?: Array< ModelSneakerFilterInput | null > | null,
  not?: ModelSneakerFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelSneakerStoreFilterInput = {
  id?: ModelIDInput | null,
  brand?: ModelStringInput | null,
  primary_name?: ModelStringInput | null,
  secondary_name?: ModelStringInput | null,
  image_url?: ModelStringInput | null,
  and?: Array< ModelSneakerStoreFilterInput | null > | null,
  or?: Array< ModelSneakerStoreFilterInput | null > | null,
  not?: ModelSneakerStoreFilterInput | null,
};

export type ModelSneakerStoreConnection = {
  __typename: "ModelSneakerStoreConnection",
  items?:  Array<SneakerStore | null > | null,
  nextToken?: string | null,
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCommentByUserCompositeKeyConditionInput = {
  eq?: ModelCommentByUserCompositeKeyInput | null,
  le?: ModelCommentByUserCompositeKeyInput | null,
  lt?: ModelCommentByUserCompositeKeyInput | null,
  ge?: ModelCommentByUserCompositeKeyInput | null,
  gt?: ModelCommentByUserCompositeKeyInput | null,
  between?: Array< ModelCommentByUserCompositeKeyInput | null > | null,
  beginsWith?: ModelCommentByUserCompositeKeyInput | null,
};

export type ModelCommentByUserCompositeKeyInput = {
  postID?: string | null,
  createdAt?: string | null,
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
      items?:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        verified?: boolean | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        description?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?: number | null,
    follower?: number | null,
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
      items?:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        verified?: boolean | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        description?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?: number | null,
    follower?: number | null,
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
      items?:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        verified?: boolean | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        description?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?: number | null,
    follower?: number | null,
    createdAt: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    verified?: boolean | null,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    verified?: boolean | null,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    verified?: boolean | null,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    description?: string | null,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text: string,
        userID: string,
        postID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    description?: string | null,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text: string,
        userID: string,
        postID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    description?: string | null,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text: string,
        userID: string,
        postID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    text: string,
    userID: string,
    postID: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    text: string,
    userID: string,
    postID: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    text: string,
    userID: string,
    postID: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    },
    createdAt: string,
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
    primary_name: string,
    secondary_name: string,
    image_url: string,
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
    primary_name: string,
    secondary_name: string,
    image_url: string,
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
    primary_name: string,
    secondary_name: string,
    image_url: string,
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
      items?:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        verified?: boolean | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        description?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?: number | null,
    follower?: number | null,
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
    items?:  Array< {
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    verified?: boolean | null,
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
    items?:  Array< {
      __typename: "Sneaker",
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
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt?: string | null,
      verified?: boolean | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    description?: string | null,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text: string,
        userID: string,
        postID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    text: string,
    userID: string,
    postID: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      text: string,
      userID: string,
      postID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        description?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
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
    primary_name: string,
    secondary_name: string,
    image_url: string,
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
    items?:  Array< {
      __typename: "SneakerStore",
      id: string,
      brand: string,
      primary_name: string,
      secondary_name: string,
      image_url: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
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
    items?:  Array< {
      __typename: "Sneaker",
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
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt?: string | null,
      verified?: boolean | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type PostByUserQueryVariables = {
  userID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostByUserQuery = {
  postByUser?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type CommentByUserQueryVariables = {
  userID?: string | null,
  postIDCreatedAt?: ModelCommentByUserCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentByUserQuery = {
  commentByUser?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      text: string,
      userID: string,
      postID: string,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      post?:  {
        __typename: "Post",
        id: string,
        userID: string,
        description?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
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
      items?:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        verified?: boolean | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        description?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?: number | null,
    follower?: number | null,
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
      items?:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        verified?: boolean | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        description?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?: number | null,
    follower?: number | null,
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
      items?:  Array< {
        __typename: "Sneaker",
        id: string,
        brand: string,
        primaryName: string,
        secondaryName: string,
        image: string,
        userID: string,
        createdAt?: string | null,
        verified?: boolean | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    posts?:  {
      __typename: "ModelPostConnection",
      items?:  Array< {
        __typename: "Post",
        id: string,
        userID: string,
        description?: string | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    following?: number | null,
    follower?: number | null,
    createdAt: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    verified?: boolean | null,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    verified?: boolean | null,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    verified?: boolean | null,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    description?: string | null,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text: string,
        userID: string,
        postID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    description?: string | null,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text: string,
        userID: string,
        postID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    userID: string,
    description?: string | null,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        text: string,
        userID: string,
        postID: string,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    text: string,
    userID: string,
    postID: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    text: string,
    userID: string,
    postID: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    text: string,
    userID: string,
    postID: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    post?:  {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    postID: string,
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
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      following?: number | null,
      follower?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    post:  {
      __typename: "Post",
      id: string,
      userID: string,
      description?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        age: string,
        username: string,
        email: string,
        avatarImageURL: string,
        following?: number | null,
        follower?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSneakerStoreSubscription = {
  onCreateSneakerStore?:  {
    __typename: "SneakerStore",
    id: string,
    brand: string,
    primary_name: string,
    secondary_name: string,
    image_url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSneakerStoreSubscription = {
  onUpdateSneakerStore?:  {
    __typename: "SneakerStore",
    id: string,
    brand: string,
    primary_name: string,
    secondary_name: string,
    image_url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSneakerStoreSubscription = {
  onDeleteSneakerStore?:  {
    __typename: "SneakerStore",
    id: string,
    brand: string,
    primary_name: string,
    secondary_name: string,
    image_url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
