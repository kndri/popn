import { useNavigation } from "@react-navigation/native";
import { API, graphqlOperation, Auth } from "aws-amplify";
import {
  createSneaker,
  createPost,
  createComment,
  createLike,
  deletePost,
  deleteComment,
  deleteLike,
  deleteSneaker,
} from "../src/graphql/mutations";
import {
  listSneakerStores,
  sneakerByUser,
  listPosts,
  postByUser,
  commentByUser,
  listComments,
  getPost,
} from "../src/graphql/queries";

//stores shoes
export const addUserSneaker = async (sneakerObject: Object) => {
  try {
    // const currentUser = checkLoggedUser();
    const currentUser = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });

    const newSneaker = {
      id: sneakerObject.id,
      brand: sneakerObject.brand,
      primaryName: sneakerObject.primary_name,
      secondaryName: sneakerObject.secondary_name,
      image: sneakerObject.image_url,
      userID: currentUser.attributes.sub,
      verified: false,
    };
    await API.graphql(graphqlOperation(createSneaker, { input: newSneaker }));
  } catch (e) {
    console.log(e);
  }
};

//deletes shoe from user
export const deleteUserSneaker = async (id: string) => {
  try {
    // const currentUser = checkLoggedUser();
    const currentUser = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });

    const newSneaker = {
      id: id,
    };
    await API.graphql(graphqlOperation(deleteSneaker, { input: newSneaker }));
  } catch (e) {
    console.log(e);
  }
};

export const addPost = async (postObject: Object) => {
  try {
    // const currentUser = checkLoggedUser();
    const currentUser = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });

    const newPost = {
      userID: currentUser.attributes.sub,
      description: postObject.description,
    };
    await API.graphql(graphqlOperation(createPost, { input: newPost }));
  } catch (e) {
    console.log(e);
  }
};

export const getPostFromDB = async () => {
  let postList: any;

  const postData = await API.graphql(graphqlOperation(listPosts));

  postList = postData.data.listPosts.items;

  return postList;
};

export const getCurrentPost = async (postID: any) => {
  let postList: any;

  const postData = await API.graphql(
    graphqlOperation(getPost, {
      id: postID,
    })
  );

  postList = postData.data.getPost;

  return postList;
};

export const getPostFromUser = async () => {
  let postList: any;

  const currentUser = await Auth.currentAuthenticatedUser({
    bypassCache: true,
  });
  const postData = await API.graphql(
    graphqlOperation(postByUser, {
      userID: currentUser.attributes.sub,
    })
  );
  postList = postData.data.postByUser.items;

  return postList;
};

export const postDeletion = async (id: string) => {
  try {
    const post = {
      id: id,
    };

    const deletedNote = await API.graphql(
      graphqlOperation(deletePost, { input: post })
    );
  } catch (e) {
    console.log(e);
  }
};

export const addComment = async (commentObject: any) => {
  try {
    console.log("creating commetn", commentObject);
    // const currentUser = checkLoggedUser();
    const currentUser = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });

    const newComment = {
      userID: currentUser.attributes.sub,
      text: commentObject.text,
      postID: commentObject.postID,
    };
    await API.graphql(graphqlOperation(createComment, { input: newComment }));
  } catch (e) {
    console.log(e);
  }
};

export const getCommentFromDB = async () => {
  let commentList: any;

  const commentData = await API.graphql(graphqlOperation(listComments));

  commentList = commentData.data.listComments.items;

  return commentList;
};

export const getCommentFromUser = async () => {
  let commentList: any;

  const currentUser = await Auth.currentAuthenticatedUser({
    bypassCache: true,
  });
  const commentData = await API.graphql(
    graphqlOperation(commentByUser, {
      userID: currentUser.attributes.sub,
    })
  );
  commentList = commentData.data.commentByUser.items;

  return commentList;
};

export const commentDeletion = async (id: string) => {
  try {
    const comment = {
      id: id,
    };

    const deletedNote = await API.graphql(
      graphqlOperation(deleteComment, { input: comment })
    );
  } catch (e) {
    console.log(e);
  }
};

export const addLike = async (postID: Object) => {
  try {
    // const currentUser = checkLoggedUser();
    const currentUser = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });

    const newLike = {
      userID: currentUser.attributes.sub,
      postID: postID,
    };
    const result = await API.graphql(
      graphqlOperation(createLike, { input: newLike })
    );

    return result;
  } catch (e) {
    console.log(e);
  }
};

export const likeDeletion = async (id: string) => {
  try {
    const like = {
      id: id,
    };

    const deletedNote = await API.graphql(
      graphqlOperation(deleteLike, { input: like })
    );
  } catch (e) {
    console.log(e);
  }
};

export const checkLoggedUser = async (): Promise<any> => {
  const data = await Auth.currentAuthenticatedUser({
    bypassCache: true,
  }).catch((error) => {
    console.log(error);
  });

  return data.attributes;
};

export const forgotPassword = (username: string) => {
  // Send confirmation code to user's email

  // then navigate back
  Auth.forgotPassword(username)
    .then((data) => useNavigation().navigate("ResetPassword", username))
    .catch((err) => console.log(err));
};

export const confirmNewPassword = (
  username: string,
  code: string,
  new_password: string
) => {
  // Collect confirmation code and new password, then
  Auth.forgotPasswordSubmit(username, code, new_password)
    .then((data) => useNavigation().navigate("SignIn"))
    .catch((err) => console.log(err));
};

export type SneakerData = {
  sneakerList: any;
};

//stores shoes
export const getSneakersFromDB = async (): Promise<SneakerData> => {
  let sneakerList: any;

  const sneakersData = await API.graphql(graphqlOperation(listSneakerStores));

  sneakerList = sneakersData.data.listSneakerStores.items;

  return sneakerList;
};

export const sendCustomChallenge = async (user: string, OTP: string) => {
  try {
    const cognitoUser = await Auth.sendCustomChallengeAnswer(user, OTP);
  } catch {
    // Handle 3 error thrown for 3 incorrect attempts.
    console.error("You have exceeded the amount of tries");
  }
};

//stores shoes
export const getSneakersFromUser = async (): Promise<SneakerData> => {
  let sneakerList: any;

  // const currentUser = checkLoggedUser();
  const currentUser = await Auth.currentAuthenticatedUser({
    bypassCache: true,
  });
  const sneakersData = await API.graphql(
    graphqlOperation(sneakerByUser, {
      userID: currentUser.attributes.sub,
    })
  );
  sneakerList = sneakersData.data.sneakerByUser.items;

  return sneakerList;
};
