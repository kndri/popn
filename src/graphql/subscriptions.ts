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
			soldSneakers {
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
			offers {
				items {
					id
					offerAmount
					status
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
			soldSneakers {
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
			offers {
				items {
					id
					offerAmount
					status
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
			soldSneakers {
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
			offers {
				items {
					id
					offerAmount
					status
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
			createdAt
			updatedAt
		}
	}
`;
export const onCreateDonScore = /* GraphQL */ `
	subscription OnCreateDonScore {
		onCreateDonScore {
			id
			userID
			zipCode
			score
			createdAt
			updatedAt
		}
	}
`;
export const onUpdateDonScore = /* GraphQL */ `
	subscription OnUpdateDonScore {
		onUpdateDonScore {
			id
			userID
			zipCode
			score
			createdAt
			updatedAt
		}
	}
`;
export const onDeleteDonScore = /* GraphQL */ `
	subscription OnDeleteDonScore {
		onDeleteDonScore {
			id
			userID
			zipCode
			score
			createdAt
			updatedAt
		}
	}
`;
export const onCreateTotalSoldSneaker = /* GraphQL */ `
	subscription OnCreateTotalSoldSneaker {
		onCreateTotalSoldSneaker {
			id
			userID
			zipCode
			total
			createdAt
			updatedAt
		}
	}
`;
export const onUpdateTotalSoldSneaker = /* GraphQL */ `
	subscription OnUpdateTotalSoldSneaker {
		onUpdateTotalSoldSneaker {
			id
			userID
			zipCode
			total
			createdAt
			updatedAt
		}
	}
`;
export const onDeleteTotalSoldSneaker = /* GraphQL */ `
	subscription OnDeleteTotalSoldSneaker {
		onDeleteTotalSoldSneaker {
			id
			userID
			zipCode
			total
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
				soldSneakers {
					nextToken
				}
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
				soldSneakers {
					nextToken
				}
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
				soldSneakers {
					nextToken
				}
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
				soldSneakers {
					nextToken
				}
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
				soldSneakers {
					nextToken
				}
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
				soldSneakers {
					nextToken
				}
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
				soldSneakers {
					nextToken
				}
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
				soldSneakers {
					nextToken
				}
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
				soldSneakers {
					nextToken
				}
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
					zipCode
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
					zipCode
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
					zipCode
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
				soldSneakers {
					nextToken
				}
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
				soldSneakers {
					nextToken
				}
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
				soldSneakers {
					nextToken
				}
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
				soldSneakers {
					nextToken
				}
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
				soldSneakers {
					nextToken
				}
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
				soldSneakers {
					nextToken
				}
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
export const onCreateSoldSneaker = /* GraphQL */ `
	subscription OnCreateSoldSneaker {
		onCreateSoldSneaker {
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
				soldSneakers {
					nextToken
				}
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
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onUpdateSoldSneaker = /* GraphQL */ `
	subscription OnUpdateSoldSneaker {
		onUpdateSoldSneaker {
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
				soldSneakers {
					nextToken
				}
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
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onDeleteSoldSneaker = /* GraphQL */ `
	subscription OnDeleteSoldSneaker {
		onDeleteSoldSneaker {
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
				soldSneakers {
					nextToken
				}
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
				createdAt
				updatedAt
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
				soldSneakers {
					nextToken
				}
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
					zipCode
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
				soldSneakers {
					nextToken
				}
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
					zipCode
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
				soldSneakers {
					nextToken
				}
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
					zipCode
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
export const onCreateListedItem = /* GraphQL */ `
	subscription OnCreateListedItem {
		onCreateListedItem {
			id
			sneakerID
			sneakerData {
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
					zipCode
					createdAt
					updatedAt
				}
				claim {
					nextToken
				}
				createdAt
				updatedAt
			}
			zipCode
			images
			size
			condition
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
				soldSneakers {
					nextToken
				}
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
				createdAt
				updatedAt
			}
			prevSellers
			createdAt
			updatedAt
		}
	}
`;
export const onUpdateListedItem = /* GraphQL */ `
	subscription OnUpdateListedItem {
		onUpdateListedItem {
			id
			sneakerID
			sneakerData {
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
					zipCode
					createdAt
					updatedAt
				}
				claim {
					nextToken
				}
				createdAt
				updatedAt
			}
			zipCode
			images
			size
			condition
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
				soldSneakers {
					nextToken
				}
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
				createdAt
				updatedAt
			}
			prevSellers
			createdAt
			updatedAt
		}
	}
`;
export const onDeleteListedItem = /* GraphQL */ `
	subscription OnDeleteListedItem {
		onDeleteListedItem {
			id
			sneakerID
			sneakerData {
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
					zipCode
					createdAt
					updatedAt
				}
				claim {
					nextToken
				}
				createdAt
				updatedAt
			}
			zipCode
			images
			size
			condition
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
				soldSneakers {
					nextToken
				}
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
				createdAt
				updatedAt
			}
			prevSellers
			createdAt
			updatedAt
		}
	}
`;
export const onCreateOffer = /* GraphQL */ `
	subscription OnCreateOffer {
		onCreateOffer {
			id
			offerAmount
			status
			buyingUserID
			sellingUserID
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
					userID
					createdAt
					updatedAt
				}
				zipCode
				images
				size
				condition
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
					status
					zipCode
					createdAt
					updatedAt
				}
				prevSellers
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onUpdateOffer = /* GraphQL */ `
	subscription OnUpdateOffer {
		onUpdateOffer {
			id
			offerAmount
			status
			buyingUserID
			sellingUserID
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
					userID
					createdAt
					updatedAt
				}
				zipCode
				images
				size
				condition
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
					status
					zipCode
					createdAt
					updatedAt
				}
				prevSellers
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
		}
	}
`;
export const onDeleteOffer = /* GraphQL */ `
	subscription OnDeleteOffer {
		onDeleteOffer {
			id
			offerAmount
			status
			buyingUserID
			sellingUserID
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
					userID
					createdAt
					updatedAt
				}
				zipCode
				images
				size
				condition
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
					status
					zipCode
					createdAt
					updatedAt
				}
				prevSellers
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
			primaryName
			secondaryName
			imageUrl
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
			imageUrl
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
			imageUrl
			createdAt
			updatedAt
		}
	}
`;
