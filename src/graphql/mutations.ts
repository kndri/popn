/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const pinpoint = /* GraphQL */ `
  mutation Pinpoint($input: pinpointInput) {
    pinpoint(input: $input) {
      statusCode
      body
    }
  }
`;
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
          sneakerStoreID
          userID
          createdAt
          prevSellers
          updatedAt
        }
        nextToken
      }
      transactions
      offers {
        items {
          id
          offerAmount
          status
          sellerConfirmed
          buyerConfirmed
          buyingUserID
          sellingUserID
          listedItemID
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
      zipCode
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
      donScore {
        id
        userID
        zipCode
        score
        createdAt
        updatedAt
      }
      totalSold {
        id
        userID
        zipCode
        total
        createdAt
        updatedAt
      }
      expoToken
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
          sneakerStoreID
          userID
          createdAt
          prevSellers
          updatedAt
        }
        nextToken
      }
      transactions
      offers {
        items {
          id
          offerAmount
          status
          sellerConfirmed
          buyerConfirmed
          buyingUserID
          sellingUserID
          listedItemID
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
      zipCode
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
      donScore {
        id
        userID
        zipCode
        score
        createdAt
        updatedAt
      }
      totalSold {
        id
        userID
        zipCode
        total
        createdAt
        updatedAt
      }
      expoToken
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
          sneakerStoreID
          userID
          createdAt
          prevSellers
          updatedAt
        }
        nextToken
      }
      transactions
      offers {
        items {
          id
          offerAmount
          status
          sellerConfirmed
          buyerConfirmed
          buyingUserID
          sellingUserID
          listedItemID
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
      zipCode
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
      donScore {
        id
        userID
        zipCode
        score
        createdAt
        updatedAt
      }
      totalSold {
        id
        userID
        zipCode
        total
        createdAt
        updatedAt
      }
      expoToken
      createdAt
      updatedAt
    }
  }
`;
export const createDonScore = /* GraphQL */ `
  mutation CreateDonScore(
    $input: CreateDonScoreInput!
    $condition: ModelDonScoreConditionInput
  ) {
    createDonScore(input: $input, condition: $condition) {
      id
      userID
      zipCode
      score
      createdAt
      updatedAt
    }
  }
`;
export const updateDonScore = /* GraphQL */ `
  mutation UpdateDonScore(
    $input: UpdateDonScoreInput!
    $condition: ModelDonScoreConditionInput
  ) {
    updateDonScore(input: $input, condition: $condition) {
      id
      userID
      zipCode
      score
      createdAt
      updatedAt
    }
  }
`;
export const deleteDonScore = /* GraphQL */ `
  mutation DeleteDonScore(
    $input: DeleteDonScoreInput!
    $condition: ModelDonScoreConditionInput
  ) {
    deleteDonScore(input: $input, condition: $condition) {
      id
      userID
      zipCode
      score
      createdAt
      updatedAt
    }
  }
`;
export const createTotalSoldSneaker = /* GraphQL */ `
  mutation CreateTotalSoldSneaker(
    $input: CreateTotalSoldSneakerInput!
    $condition: ModelTotalSoldSneakerConditionInput
  ) {
    createTotalSoldSneaker(input: $input, condition: $condition) {
      id
      userID
      zipCode
      total
      createdAt
      updatedAt
    }
  }
`;
export const updateTotalSoldSneaker = /* GraphQL */ `
  mutation UpdateTotalSoldSneaker(
    $input: UpdateTotalSoldSneakerInput!
    $condition: ModelTotalSoldSneakerConditionInput
  ) {
    updateTotalSoldSneaker(input: $input, condition: $condition) {
      id
      userID
      zipCode
      total
      createdAt
      updatedAt
    }
  }
`;
export const deleteTotalSoldSneaker = /* GraphQL */ `
  mutation DeleteTotalSoldSneaker(
    $input: DeleteTotalSoldSneakerInput!
    $condition: ModelTotalSoldSneakerConditionInput
  ) {
    deleteTotalSoldSneaker(input: $input, condition: $condition) {
      id
      userID
      zipCode
      total
      createdAt
      updatedAt
    }
  }
`;
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFollowers = /* GraphQL */ `
  mutation CreateFollowers(
    $input: CreateFollowersInput!
    $condition: ModelFollowersConditionInput
  ) {
    createFollowers(input: $input, condition: $condition) {
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFollowers = /* GraphQL */ `
  mutation UpdateFollowers(
    $input: UpdateFollowersInput!
    $condition: ModelFollowersConditionInput
  ) {
    updateFollowers(input: $input, condition: $condition) {
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollowers = /* GraphQL */ `
  mutation DeleteFollowers(
    $input: DeleteFollowersInput!
    $condition: ModelFollowersConditionInput
  ) {
    deleteFollowers(input: $input, condition: $condition) {
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      chatRoom {
        id
        offerID
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
        receiverHasRead
        roomStatus
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      chatRoom {
        id
        offerID
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
        receiverHasRead
        roomStatus
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      chatRoom {
        id
        offerID
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
        receiverHasRead
        roomStatus
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
      offerID
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
          transactions
          status
          zipCode
          expoToken
          createdAt
          updatedAt
        }
        chatRoom {
          id
          offerID
          lastMessageID
          receiverHasRead
          roomStatus
          createdAt
          updatedAt
        }
        updatedAt
      }
      receiverHasRead
      roomStatus
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
      offerID
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
          transactions
          status
          zipCode
          expoToken
          createdAt
          updatedAt
        }
        chatRoom {
          id
          offerID
          lastMessageID
          receiverHasRead
          roomStatus
          createdAt
          updatedAt
        }
        updatedAt
      }
      receiverHasRead
      roomStatus
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
      offerID
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
          transactions
          status
          zipCode
          expoToken
          createdAt
          updatedAt
        }
        chatRoom {
          id
          offerID
          lastMessageID
          receiverHasRead
          roomStatus
          createdAt
          updatedAt
        }
        updatedAt
      }
      receiverHasRead
      roomStatus
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      chatRoom {
        id
        offerID
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
        receiverHasRead
        roomStatus
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      chatRoom {
        id
        offerID
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
        receiverHasRead
        roomStatus
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      chatRoom {
        id
        offerID
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
        receiverHasRead
        roomStatus
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
      sneakerStoreID
      sneaker {
        id
        brand
        primaryName
        secondaryName
        image
        points
      }
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
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
      prevSellers
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
      sneakerStoreID
      sneaker {
        id
        brand
        primaryName
        secondaryName
        image
        points
      }
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
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
      prevSellers
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
      sneakerStoreID
      sneaker {
        id
        brand
        primaryName
        secondaryName
        image
        points
      }
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
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
      prevSellers
      updatedAt
    }
  }
`;
export const createSoldSneaker = /* GraphQL */ `
  mutation CreateSoldSneaker(
    $input: CreateSoldSneakerInput!
    $condition: ModelSoldSneakerConditionInput
  ) {
    createSoldSneaker(input: $input, condition: $condition) {
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSoldSneaker = /* GraphQL */ `
  mutation UpdateSoldSneaker(
    $input: UpdateSoldSneakerInput!
    $condition: ModelSoldSneakerConditionInput
  ) {
    updateSoldSneaker(input: $input, condition: $condition) {
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSoldSneaker = /* GraphQL */ `
  mutation DeleteSoldSneaker(
    $input: DeleteSoldSneakerInput!
    $condition: ModelSoldSneakerConditionInput
  ) {
    deleteSoldSneaker(input: $input, condition: $condition) {
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createClaim = /* GraphQL */ `
  mutation CreateClaim(
    $input: CreateClaimInput!
    $condition: ModelClaimConditionInput
  ) {
    createClaim(input: $input, condition: $condition) {
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      sneaker {
        id
        brand
        primaryName
        secondaryName
        image
        sneakerStoreID
        sneaker {
          id
          brand
          primaryName
          secondaryName
          image
          points
        }
        userID
        user {
          id
          age
          username
          email
          avatarImageURL
          transactions
          status
          zipCode
          expoToken
          createdAt
          updatedAt
        }
        claim {
          nextToken
        }
        createdAt
        prevSellers
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
export const updateClaim = /* GraphQL */ `
  mutation UpdateClaim(
    $input: UpdateClaimInput!
    $condition: ModelClaimConditionInput
  ) {
    updateClaim(input: $input, condition: $condition) {
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      sneaker {
        id
        brand
        primaryName
        secondaryName
        image
        sneakerStoreID
        sneaker {
          id
          brand
          primaryName
          secondaryName
          image
          points
        }
        userID
        user {
          id
          age
          username
          email
          avatarImageURL
          transactions
          status
          zipCode
          expoToken
          createdAt
          updatedAt
        }
        claim {
          nextToken
        }
        createdAt
        prevSellers
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
export const deleteClaim = /* GraphQL */ `
  mutation DeleteClaim(
    $input: DeleteClaimInput!
    $condition: ModelClaimConditionInput
  ) {
    deleteClaim(input: $input, condition: $condition) {
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
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      sneaker {
        id
        brand
        primaryName
        secondaryName
        image
        sneakerStoreID
        sneaker {
          id
          brand
          primaryName
          secondaryName
          image
          points
        }
        userID
        user {
          id
          age
          username
          email
          avatarImageURL
          transactions
          status
          zipCode
          expoToken
          createdAt
          updatedAt
        }
        claim {
          nextToken
        }
        createdAt
        prevSellers
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
export const createListedItem = /* GraphQL */ `
  mutation CreateListedItem(
    $input: CreateListedItemInput!
    $condition: ModelListedItemConditionInput
  ) {
    createListedItem(input: $input, condition: $condition) {
      id
      sneakerID
      sneakerData {
        id
        brand
        primaryName
        secondaryName
        image
        sneakerStoreID
        sneaker {
          id
          brand
          primaryName
          secondaryName
          image
          points
        }
        userID
        user {
          id
          age
          username
          email
          avatarImageURL
          transactions
          status
          zipCode
          expoToken
          createdAt
          updatedAt
        }
        claim {
          nextToken
        }
        createdAt
        prevSellers
        updatedAt
      }
      zipCode
      images
      size
      condition
      status
      price
      brand
      description
      sellerID
      seller {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateListedItem = /* GraphQL */ `
  mutation UpdateListedItem(
    $input: UpdateListedItemInput!
    $condition: ModelListedItemConditionInput
  ) {
    updateListedItem(input: $input, condition: $condition) {
      id
      sneakerID
      sneakerData {
        id
        brand
        primaryName
        secondaryName
        image
        sneakerStoreID
        sneaker {
          id
          brand
          primaryName
          secondaryName
          image
          points
        }
        userID
        user {
          id
          age
          username
          email
          avatarImageURL
          transactions
          status
          zipCode
          expoToken
          createdAt
          updatedAt
        }
        claim {
          nextToken
        }
        createdAt
        prevSellers
        updatedAt
      }
      zipCode
      images
      size
      condition
      status
      price
      brand
      description
      sellerID
      seller {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteListedItem = /* GraphQL */ `
  mutation DeleteListedItem(
    $input: DeleteListedItemInput!
    $condition: ModelListedItemConditionInput
  ) {
    deleteListedItem(input: $input, condition: $condition) {
      id
      sneakerID
      sneakerData {
        id
        brand
        primaryName
        secondaryName
        image
        sneakerStoreID
        sneaker {
          id
          brand
          primaryName
          secondaryName
          image
          points
        }
        userID
        user {
          id
          age
          username
          email
          avatarImageURL
          transactions
          status
          zipCode
          expoToken
          createdAt
          updatedAt
        }
        claim {
          nextToken
        }
        createdAt
        prevSellers
        updatedAt
      }
      zipCode
      images
      size
      condition
      status
      price
      brand
      description
      sellerID
      seller {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOffer = /* GraphQL */ `
  mutation CreateOffer(
    $input: CreateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    createOffer(input: $input, condition: $condition) {
      id
      offerAmount
      status
      sellerConfirmed
      buyerConfirmed
      buyingUserID
      sellingUserID
      seller {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      buyer {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      listedItemID
      listedItem {
        id
        sneakerID
        sneakerData {
          id
          brand
          primaryName
          secondaryName
          image
          sneakerStoreID
          userID
          createdAt
          prevSellers
          updatedAt
        }
        zipCode
        images
        size
        condition
        status
        price
        brand
        description
        sellerID
        seller {
          id
          age
          username
          email
          avatarImageURL
          transactions
          status
          zipCode
          expoToken
          createdAt
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
export const updateOffer = /* GraphQL */ `
  mutation UpdateOffer(
    $input: UpdateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    updateOffer(input: $input, condition: $condition) {
      id
      offerAmount
      status
      sellerConfirmed
      buyerConfirmed
      buyingUserID
      sellingUserID
      seller {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      buyer {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      listedItemID
      listedItem {
        id
        sneakerID
        sneakerData {
          id
          brand
          primaryName
          secondaryName
          image
          sneakerStoreID
          userID
          createdAt
          prevSellers
          updatedAt
        }
        zipCode
        images
        size
        condition
        status
        price
        brand
        description
        sellerID
        seller {
          id
          age
          username
          email
          avatarImageURL
          transactions
          status
          zipCode
          expoToken
          createdAt
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
export const deleteOffer = /* GraphQL */ `
  mutation DeleteOffer(
    $input: DeleteOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    deleteOffer(input: $input, condition: $condition) {
      id
      offerAmount
      status
      sellerConfirmed
      buyerConfirmed
      buyingUserID
      sellingUserID
      seller {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      buyer {
        id
        age
        username
        email
        avatarImageURL
        sneakers {
          nextToken
        }
        transactions
        offers {
          nextToken
        }
        following {
          nextToken
        }
        follower {
          nextToken
        }
        status
        zipCode
        chatRoomUser {
          nextToken
        }
        donScore {
          id
          userID
          zipCode
          score
          createdAt
          updatedAt
        }
        totalSold {
          id
          userID
          zipCode
          total
          createdAt
          updatedAt
        }
        expoToken
        createdAt
        updatedAt
      }
      listedItemID
      listedItem {
        id
        sneakerID
        sneakerData {
          id
          brand
          primaryName
          secondaryName
          image
          sneakerStoreID
          userID
          createdAt
          prevSellers
          updatedAt
        }
        zipCode
        images
        size
        condition
        status
        price
        brand
        description
        sellerID
        seller {
          id
          age
          username
          email
          avatarImageURL
          transactions
          status
          zipCode
          expoToken
          createdAt
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
      points
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
      points
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
      points
    }
  }
`;
