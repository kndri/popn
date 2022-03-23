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
      following {
        items {
          id
          secondUserID
          mainUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      follower {
        items {
          id
          secondUserID
          mainUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
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
      following {
        items {
          id
          secondUserID
          mainUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      follower {
        items {
          id
          secondUserID
          mainUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
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
      following {
        items {
          id
          secondUserID
          mainUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      follower {
        items {
          id
          secondUserID
          mainUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
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
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing {
    onCreateFollowing {
      id
      secondUserID
      mainUserID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
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
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing {
    onUpdateFollowing {
      id
      secondUserID
      mainUserID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
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
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing {
    onDeleteFollowing {
      id
      secondUserID
      mainUserID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
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
export const onCreateFollowers = /* GraphQL */ `
  subscription OnCreateFollowers {
    onCreateFollowers {
      id
      secondUserID
      mainUserID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
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
export const onUpdateFollowers = /* GraphQL */ `
  subscription OnUpdateFollowers {
    onUpdateFollowers {
      id
      secondUserID
      mainUserID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
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
export const onDeleteFollowers = /* GraphQL */ `
  subscription OnDeleteFollowers {
    onDeleteFollowers {
      id
      secondUserID
      mainUserID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
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
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      id
      userID
      chatRoomID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
      id
      userID
      chatRoomID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
      id
      userID
      chatRoomID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          text
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        text
        userID
        chatRoomID
        user {
          id
          age
          username
          email
          avatarImageURL
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          text
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        text
        userID
        chatRoomID
        user {
          id
          age
          username
          email
          avatarImageURL
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          text
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        text
        userID
        chatRoomID
        user {
          id
          age
          username
          email
          avatarImageURL
          status
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      createdAt
      text
      userID
      chatRoomID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      createdAt
      text
      userID
      chatRoomID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      claim {
        items {
          id
          userID
          sneakerID
          status
          refNumber
          claimMessage
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      claim {
        items {
          id
          userID
          sneakerID
          status
          refNumber
          claimMessage
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      claim {
        items {
          id
          userID
          sneakerID
          status
          refNumber
          claimMessage
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
export const onCreateClaim = /* GraphQL */ `
  subscription OnCreateClaim {
    onCreateClaim {
      id
      userID
      sneakerID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      sneaker {
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
          status
          createdAt
          updatedAt
        }
        claim {
          nextToken
        }
        createdAt
        updatedAt
      }
      status
      refNumber
      claimMessage
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClaim = /* GraphQL */ `
  subscription OnUpdateClaim {
    onUpdateClaim {
      id
      userID
      sneakerID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      sneaker {
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
          status
          createdAt
          updatedAt
        }
        claim {
          nextToken
        }
        createdAt
        updatedAt
      }
      status
      refNumber
      claimMessage
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClaim = /* GraphQL */ `
  subscription OnDeleteClaim {
    onDeleteClaim {
      id
      userID
      sneakerID
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      sneaker {
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
          status
          createdAt
          updatedAt
        }
        claim {
          nextToken
        }
        createdAt
        updatedAt
      }
      status
      refNumber
      claimMessage
      createdAt
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
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
          status
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
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
          status
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
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
          status
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
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
          status
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
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
          status
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
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        chatRoomUser {
          nextToken
        }
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
          status
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
