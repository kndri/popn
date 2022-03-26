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
				status
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
				status
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
					status
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
				status
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
					status
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
				status
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
export const listChatRooms = /* GraphQL */ `
	query ListChatRooms(
		$filter: ModelChatRoomFilterInput
		$limit: Int
		$nextToken: String
	) {
		listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
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
				status
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
				age
				username
				email
				avatarImageURL
				status
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
				status
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
					status
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
					createdAt
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
export const getPost = /* GraphQL */ `
	query GetPost($id: ID!) {
		getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
	query ListPosts(
		$filter: ModelPostFilterInput
		$limit: Int
		$nextToken: String
	) {
		listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
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
			nextToken
		}
	}
`;
export const getComment = /* GraphQL */ `
	query GetComment($id: ID!) {
		getComment(id: $id) {
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
				status
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
export const listComments = /* GraphQL */ `
	query ListComments(
		$filter: ModelCommentFilterInput
		$limit: Int
		$nextToken: String
	) {
		listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
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
					status
					createdAt
					updatedAt
				}
				post {
					id
					userID
					description
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
export const getLike = /* GraphQL */ `
	query GetLike($id: ID!) {
		getLike(id: $id) {
			id
			userID
			postID
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
export const listLikes = /* GraphQL */ `
	query ListLikes(
		$filter: ModelLikeFilterInput
		$limit: Int
		$nextToken: String
	) {
		listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				userID
				postID
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
				post {
					id
					userID
					description
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
			primary_name
			secondary_name
			image_url
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
				primary_name
				secondary_name
				image_url
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
					status
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
					status
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
			nextToken
		}
	}
`;
export const postByUser = /* GraphQL */ `
	query PostByUser(
		$userID: ID
		$createdAt: ModelStringKeyConditionInput
		$sortDirection: ModelSortDirection
		$filter: ModelPostFilterInput
		$limit: Int
		$nextToken: String
	) {
		postByUser(
			userID: $userID
			createdAt: $createdAt
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
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
			nextToken
		}
	}
`;
export const commentByUser = /* GraphQL */ `
	query CommentByUser(
		$userID: ID
		$postIDCreatedAt: ModelCommentByUserCompositeKeyConditionInput
		$sortDirection: ModelSortDirection
		$filter: ModelCommentFilterInput
		$limit: Int
		$nextToken: String
	) {
		commentByUser(
			userID: $userID
			postIDCreatedAt: $postIDCreatedAt
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
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
					status
					createdAt
					updatedAt
				}
				post {
					id
					userID
					description
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
