/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateSneaker = /* GraphQL */ `
  subscription OnCreateSneaker {
    onCreateSneaker {
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
export const onUpdateSneaker = /* GraphQL */ `
  subscription OnUpdateSneaker {
    onUpdateSneaker {
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
export const onDeleteSneaker = /* GraphQL */ `
  subscription OnDeleteSneaker {
    onDeleteSneaker {
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
export const onCreateSneakerStore = /* GraphQL */ `
  subscription OnCreateSneakerStore {
    onCreateSneakerStore {
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
export const onUpdateSneakerStore = /* GraphQL */ `
  subscription OnUpdateSneakerStore {
    onUpdateSneakerStore {
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
export const onDeleteSneakerStore = /* GraphQL */ `
  subscription OnDeleteSneakerStore {
    onDeleteSneakerStore {
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
