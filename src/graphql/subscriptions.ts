/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      age
      username
      email
      avatarImageURL
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
      posts {
        items {
          id
          userID
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      following
      follower
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
      email
      avatarImageURL
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
      posts {
        items {
          id
          userID
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      following
      follower
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
      email
      avatarImageURL
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
      posts {
        items {
          id
          userID
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      following
      follower
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
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        posts {
          nextToken
        }
        following
        follower
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
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        posts {
          nextToken
        }
        following
        follower
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
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        posts {
          nextToken
        }
        following
        follower
        createdAt
        updatedAt
      }
      createdAt
      verified
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      userID
      description
      user {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        posts {
          nextToken
        }
        following
        follower
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      userID
      description
      user {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        posts {
          nextToken
        }
        following
        follower
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      userID
      description
      user {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        posts {
          nextToken
        }
        following
        follower
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          text
          userID
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      text
      userID
      postID
      user {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        posts {
          nextToken
        }
        following
        follower
        createdAt
        updatedAt
      }
      post {
        id
        userID
        description
        user {
          id
          age
          username
          email
          avatarImageURL
          following
          follower
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      text
      userID
      postID
      user {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        posts {
          nextToken
        }
        following
        follower
        createdAt
        updatedAt
      }
      post {
        id
        userID
        description
        user {
          id
          age
          username
          email
          avatarImageURL
          following
          follower
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      text
      userID
      postID
      user {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        posts {
          nextToken
        }
        following
        follower
        createdAt
        updatedAt
      }
      post {
        id
        userID
        description
        user {
          id
          age
          username
          email
          avatarImageURL
          following
          follower
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      userID
      postID
      user {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        posts {
          nextToken
        }
        following
        follower
        createdAt
        updatedAt
      }
      post {
        id
        userID
        description
        user {
          id
          age
          username
          email
          avatarImageURL
          following
          follower
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      userID
      postID
      user {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        posts {
          nextToken
        }
        following
        follower
        createdAt
        updatedAt
      }
      post {
        id
        userID
        description
        user {
          id
          age
          username
          email
          avatarImageURL
          following
          follower
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      userID
      postID
      user {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        posts {
          nextToken
        }
        following
        follower
        createdAt
        updatedAt
      }
      post {
        id
        userID
        description
        user {
          id
          age
          username
          email
          avatarImageURL
          following
          follower
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSneakerStore = /* GraphQL */ `
  subscription OnCreateSneakerStore {
    onCreateSneakerStore {
      id
      brand
      primary_name
      secondary_name
      image_url
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
      primary_name
      secondary_name
      image_url
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
      primary_name
      secondary_name
      image_url
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      createdAt
      text
      userID
      chatRoomID
      user {
        id
        username
        avatarImageURL
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          text
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
