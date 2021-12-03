/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        phone
        sneakers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSneaker = /* GraphQL */ `
  query GetSneaker($id: ID!) {
    getSneaker(id: $id) {
      id
      brand
      primaryName
      secondaryName
      image
      userID
      user {
        id
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
export const listSneakers = /* GraphQL */ `
  query ListSneakers(
    $filter: ModelSneakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSneakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brand
        primaryName
        secondaryName
        image
        userID
        user {
          id
          username
          phone
          createdAt
          updatedAt
        }
        createdAt
        verified
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSneakerStore = /* GraphQL */ `
  query GetSneakerStore($id: ID!) {
    getSneakerStore(id: $id) {
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
export const listSneakerStores = /* GraphQL */ `
  query ListSneakerStores(
    $filter: ModelSneakerStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSneakerStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brand
        primaryName
        secondaryName
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
