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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
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
        following
        follower
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
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
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
        following
        follower
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
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
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
        following
        follower
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
          following
          follower
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
          following
          follower
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
          following
          follower
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
        following
        follower
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
        following
        follower
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
        following
        follower
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
        status
        chatRoomUser {
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
        status
        chatRoomUser {
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
        status
        chatRoomUser {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
          following
          follower
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
          following
          follower
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
          following
          follower
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
          following
          follower
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
          following
          follower
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
          following
          follower
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
export const createSneakerStore = /* GraphQL */ `
  mutation CreateSneakerStore(
    $input: CreateSneakerStoreInput!
    $condition: ModelSneakerStoreConditionInput
  ) {
    createSneakerStore(input: $input, condition: $condition) {
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
export const updateSneakerStore = /* GraphQL */ `
  mutation UpdateSneakerStore(
    $input: UpdateSneakerStoreInput!
    $condition: ModelSneakerStoreConditionInput
  ) {
    updateSneakerStore(input: $input, condition: $condition) {
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
export const deleteSneakerStore = /* GraphQL */ `
  mutation DeleteSneakerStore(
    $input: DeleteSneakerStoreInput!
    $condition: ModelSneakerStoreConditionInput
  ) {
    deleteSneakerStore(input: $input, condition: $condition) {
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
