/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getDonScore = /* GraphQL */ `
  query GetDonScore($userID: ID!) {
    getDonScore(userID: $userID) {
      id
      userID
      zipCode
      score
      createdAt
      updatedAt
    }
  }
`;
export const listDonScores = /* GraphQL */ `
  query ListDonScores(
    $userID: ID
    $filter: ModelDonScoreFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDonScores(
      userID: $userID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userID
        zipCode
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTotalSoldSneaker = /* GraphQL */ `
  query GetTotalSoldSneaker($userID: ID!) {
    getTotalSoldSneaker(userID: $userID) {
      id
      userID
      zipCode
      total
      createdAt
      updatedAt
    }
  }
`;
export const listTotalSoldSneakers = /* GraphQL */ `
  query ListTotalSoldSneakers(
    $userID: ID
    $filter: ModelTotalSoldSneakerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTotalSoldSneakers(
      userID: $userID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userID
        zipCode
        total
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
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
export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        secondUserID
        mainUserID
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollowers = /* GraphQL */ `
  query GetFollowers($id: ID!) {
    getFollowers(id: $id) {
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
export const listFollowerss = /* GraphQL */ `
  query ListFollowerss(
    $filter: ModelFollowersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowerss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        secondUserID
        mainUserID
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
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
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      sneakerStoreID
      sneaker {
        id
        brand
        primaryName
        secondaryName
        image
        points
        createdAt
        updatedAt
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
        sneakerStoreID
        sneaker {
          id
          brand
          primaryName
          secondaryName
          image
          points
          createdAt
          updatedAt
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
      nextToken
    }
  }
`;
export const getSoldSneaker = /* GraphQL */ `
  query GetSoldSneaker($id: ID!) {
    getSoldSneaker(id: $id) {
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
export const listSoldSneakers = /* GraphQL */ `
  query ListSoldSneakers(
    $filter: ModelSoldSneakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSoldSneakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getClaim = /* GraphQL */ `
  query GetClaim($id: ID!) {
    getClaim(id: $id) {
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
          createdAt
          updatedAt
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
export const listClaims = /* GraphQL */ `
  query ListClaims(
    $filter: ModelClaimFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClaims(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        sneakerID
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
        sneaker {
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
        status
        refNumber
        claimMessage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getListedItem = /* GraphQL */ `
  query GetListedItem($id: ID!) {
    getListedItem(id: $id) {
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
          createdAt
          updatedAt
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
export const listListedItems = /* GraphQL */ `
  query ListListedItems(
    $filter: ModelListedItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListedItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOffer = /* GraphQL */ `
  query GetOffer($id: ID!) {
    getOffer(id: $id) {
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
export const listOffers = /* GraphQL */ `
  query ListOffers(
    $filter: ModelOfferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          transactions
          status
          zipCode
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
          transactions
          status
          zipCode
          expoToken
          createdAt
          updatedAt
        }
        listedItemID
        listedItem {
          id
          sneakerID
          zipCode
          images
          size
          condition
          status
          price
          brand
          description
          sellerID
          createdAt
          updatedAt
        }
        createdAt
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
      points
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
        points
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const donScoreByZipCode = /* GraphQL */ `
  query DonScoreByZipCode(
    $zipCode: String
    $score: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDonScoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    donScoreByZipCode(
      zipCode: $zipCode
      score: $score
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        zipCode
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const totalSoldSneakersByZipCode = /* GraphQL */ `
  query TotalSoldSneakersByZipCode(
    $zipCode: String
    $total: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTotalSoldSneakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    totalSoldSneakersByZipCode(
      zipCode: $zipCode
      total: $total
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        zipCode
        total
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const followingByUser = /* GraphQL */ `
  query FollowingByUser(
    $mainUserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followingByUser(
      mainUserID: $mainUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        secondUserID
        mainUserID
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const followersByUser = /* GraphQL */ `
  query FollowersByUser(
    $secondUserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelFollowersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followersByUser(
      secondUserID: $secondUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        secondUserID
        mainUserID
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const chatRoomUserByUser = /* GraphQL */ `
  query ChatRoomUserByUser(
    $userID: ID
    $chatRoomID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomUserByUser(
      userID: $userID
      chatRoomID: $chatRoomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const sneakerByUser = /* GraphQL */ `
  query SneakerByUser(
    $userID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSneakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sneakerByUser(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
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
      nextToken
    }
  }
`;
export const soldItemByUser = /* GraphQL */ `
  query SoldItemByUser(
    $userID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelSoldSneakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    SoldItemByUser(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listedItemByUser = /* GraphQL */ `
  query ListedItemByUser(
    $sellerID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelListedItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listedItemByUser(
      sellerID: $sellerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listedItemByZipCode = /* GraphQL */ `
  query ListedItemByZipCode(
    $zipCode: String
    $sortDirection: ModelSortDirection
    $filter: ModelListedItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listedItemByZipCode(
      zipCode: $zipCode
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listedItemByBrand = /* GraphQL */ `
  query ListedItemByBrand(
    $brand: String
    $sortDirection: ModelSortDirection
    $filter: ModelListedItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listedItemByBrand(
      brand: $brand
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listedItemByPrice = /* GraphQL */ `
  query ListedItemByPrice(
    $price: String
    $sortDirection: ModelSortDirection
    $filter: ModelListedItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listedItemByPrice(
      price: $price
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listedItemBySize = /* GraphQL */ `
  query ListedItemBySize(
    $size: String
    $sortDirection: ModelSortDirection
    $filter: ModelListedItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listedItemBySize(
      size: $size
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listedItemByCondition = /* GraphQL */ `
  query ListedItemByCondition(
    $condition: String
    $sortDirection: ModelSortDirection
    $filter: ModelListedItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listedItemByCondition(
      condition: $condition
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listedItemByStatus = /* GraphQL */ `
  query ListedItemByStatus(
    $status: LisitingStatus
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelListedItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listedItemByStatus(
      status: $status
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const offerByUser = /* GraphQL */ `
  query OfferByUser(
    $buyingUserID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOfferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    offerByUser(
      buyingUserID: $buyingUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          transactions
          status
          zipCode
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
          transactions
          status
          zipCode
          expoToken
          createdAt
          updatedAt
        }
        listedItemID
        listedItem {
          id
          sneakerID
          zipCode
          images
          size
          condition
          status
          price
          brand
          description
          sellerID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
