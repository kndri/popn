/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      age
      username
      phone
      sneakers {
        items {
          id
          brand
          primaryName
          secondaryName
          image
          userID
          createdAt
          verified
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      age
      username
      phone
      sneakers {
        items {
          id
          brand
          primaryName
          secondaryName
          image
          userID
          createdAt
          verified
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      age
      username
      phone
      sneakers {
        items {
          id
          brand
          primaryName
          secondaryName
          image
          userID
          createdAt
          verified
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSneaker = /* GraphQL */ `
  mutation CreateSneaker(
    $input: CreateSneakerInput!
    $condition: ModelSneakerConditionInput
  ) {
    createSneaker(input: $input, condition: $condition) {
      id
      brand
      primaryName
      secondaryName
      image
      userID
      user {
        id
        age
        username
        phone
        sneakers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      verified
      updatedAt
    }
  }
`;
export const updateSneaker = /* GraphQL */ `
  mutation UpdateSneaker(
    $input: UpdateSneakerInput!
    $condition: ModelSneakerConditionInput
  ) {
    updateSneaker(input: $input, condition: $condition) {
      id
      brand
      primaryName
      secondaryName
      image
      userID
      user {
        id
        age
        username
        phone
        sneakers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      verified
      updatedAt
    }
  }
`;
export const deleteSneaker = /* GraphQL */ `
  mutation DeleteSneaker(
    $input: DeleteSneakerInput!
    $condition: ModelSneakerConditionInput
  ) {
    deleteSneaker(input: $input, condition: $condition) {
      id
      brand
      primaryName
      secondaryName
      image
      userID
      user {
        id
        age
        username
        phone
        sneakers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      verified
      updatedAt
    }
  }
`;
export const createSneakerStore = /* GraphQL */ `
  mutation CreateSneakerStore(
    $input: CreateSneakerStoreInput!
    $condition: ModelSneakerStoreConditionInput
  ) {
    createSneakerStore(input: $input, condition: $condition) {
      id
      brand
      primaryName
      secondaryName
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateSneakerStore = /* GraphQL */ `
  mutation UpdateSneakerStore(
    $input: UpdateSneakerStoreInput!
    $condition: ModelSneakerStoreConditionInput
  ) {
    updateSneakerStore(input: $input, condition: $condition) {
      id
      brand
      primaryName
      secondaryName
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteSneakerStore = /* GraphQL */ `
  mutation DeleteSneakerStore(
    $input: DeleteSneakerStoreInput!
    $condition: ModelSneakerStoreConditionInput
  ) {
    deleteSneakerStore(input: $input, condition: $condition) {
      id
      brand
      primaryName
      secondaryName
      image
      createdAt
      updatedAt
    }
  }
`;
