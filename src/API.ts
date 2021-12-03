/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  age: string,
  username: string,
  phone: string,
};

export type ModelUserConditionInput = {
  age?: ModelStringInput | null,
  username?: ModelStringInput | null,
  phone?: ModelStringInput | null,
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
  phone: string,
  sneakers?: ModelSneakerConnection | null,
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

export type UpdateUserInput = {
  id: string,
  age?: string | null,
  username?: string | null,
  phone?: string | null,
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

export type CreateSneakerStoreInput = {
  id?: string | null,
  brand: string,
  primaryName: string,
  secondaryName: string,
  image: string,
};

export type ModelSneakerStoreConditionInput = {
  brand?: ModelStringInput | null,
  primaryName?: ModelStringInput | null,
  secondaryName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelSneakerStoreConditionInput | null > | null,
  or?: Array< ModelSneakerStoreConditionInput | null > | null,
  not?: ModelSneakerStoreConditionInput | null,
};

export type SneakerStore = {
  __typename: "SneakerStore",
  id: string,
  brand: string,
  primaryName: string,
  secondaryName: string,
  image: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSneakerStoreInput = {
  id: string,
  brand?: string | null,
  primaryName?: string | null,
  secondaryName?: string | null,
  image?: string | null,
};

export type DeleteSneakerStoreInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  age?: ModelStringInput | null,
  username?: ModelStringInput | null,
  phone?: ModelStringInput | null,
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

export type ModelSneakerStoreFilterInput = {
  id?: ModelIDInput | null,
  brand?: ModelStringInput | null,
  primaryName?: ModelStringInput | null,
  secondaryName?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelSneakerStoreFilterInput | null > | null,
  or?: Array< ModelSneakerStoreFilterInput | null > | null,
  not?: ModelSneakerStoreFilterInput | null,
};

export type ModelSneakerStoreConnection = {
  __typename: "ModelSneakerStoreConnection",
  items?:  Array<SneakerStore | null > | null,
  nextToken?: string | null,
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
    phone: string,
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
    phone: string,
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
    phone: string,
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
      phone: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
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
      phone: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
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
      phone: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    verified?: boolean | null,
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
    phone: string,
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
      phone: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
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
      phone: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
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
        phone: string,
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
      primaryName: string,
      secondaryName: string,
      image: string,
      createdAt: string,
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
    phone: string,
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
    phone: string,
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
    phone: string,
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
      phone: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
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
      phone: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
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
      phone: string,
      sneakers?:  {
        __typename: "ModelSneakerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt?: string | null,
    verified?: boolean | null,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};
