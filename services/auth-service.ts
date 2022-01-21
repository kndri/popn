/* eslint-disable sonarjs/no-identical-functions */
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { listUsers } from "../src/graphql/queries";
import { createUser } from "../src/graphql/mutations";

export type AuthData = {
  // token: string
  error: any;
  email: any;
  userId: any;
};
const signIn = (email: string, _password: string): Promise<AuthData> => {
  // variable to check if there is an error
  let errorMessage: any;

  // variable to store user id
  let userId: any;

  Auth.signIn(email.toLowerCase(), _password)
    .then((response) => {
      userId = response.user;
    })
    .catch((error) => {
      errorMessage = error.message;
      throw error;
    });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        error: errorMessage,
        email: email,
        userId: userId,
      });
    }, 1000);
  });
};
const uploadImage = async (username: string, imageUrl: string) => {
  console.log("imageUrl: ", imageUrl);

  const response = await fetch(imageUrl);
  const blob = await response.blob();

  const fileName = `${username}ProfileImage.jpeg`;
  const data = await Storage.put(fileName, blob, {
    contentType: "image/jpeg",
  });
  return data;
};

const signUp = async (
  email: string,
  _password: string,
  age: string,
  _username: string,
  image_url: string
): Promise<AuthData> => {
  // variable to check if there is an error
  let errorMessage: any;

  // variable to store user id
  let userId: any;
  let new_image: any;

  if (image_url.includes("defaultUser") === false) {
    new_image = await uploadImage(_username, image_url);
    console.log("new_image", new_image.key);
    const image = await Storage.get(new_image.key, {
      level: "public",
    });
    image_url = image;
    console.log(image_url);
  }

  await Auth.signUp({
    username: email,
    password: _password,
    attributes: {
      "custom:age": age,
      "custom:blob": image_url,
      preferred_username: _username,
    },
  })
    .then(async (response) => {
      const user = {
        id: response.userSub,
        age: age,
        username: _username,
        avatarImageURL: image_url,
        email: email,
        following: 0,
        follower: 0,
      };
      API.graphql(graphqlOperation(createUser, { input: user }));
    })
    .catch((error) => {
      errorMessage = error.message;
      throw error;
    });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        error: errorMessage,
        email: email,
        userId: userId,
      });
    }, 1000);
  });
};

const emailAvailable = async (email: string) => {
  // adapted from @herri16's solution: https://github.com/aws-amplify/amplify-js/issues/1067#issuecomment-436492775

  try {
    // const resp = await Auth.confirmSignUp(username, "000000", {
    //   // If set to False, the API will throw an AliasExistsException error if the phone number/email used already exists as an alias with a different user
    //   forceAliasCreation: false,
    // });

    const resp = await Auth.signIn(email, "0000000");

    // this should always throw an error of some kind, but if for some reason this succeeds then the user probably exists.
    return true;
  } catch (err: any) {
    console.log("response", err);
    switch (err.code) {
      case "UserNotFoundException":
        return true;
      case "NotAuthorizedException":
        return false;
      case "AliasExistsException":
        // Email already exists
        return false;
      case "CodeMismatchException":
        return false;
      case "ExpiredCodeException":
        return false;
      default:
        return false;
    }
  }
};

const usernameAvailable = async (username: string) => {
  // 1. Get all the users
  let usernames: any[] = [];
  let isUsernameAvailable = true;
  try {
    const users = await API.graphql(graphqlOperation(listUsers));
    usernames = users.data.listUsers.items;

    // 2. Check if chosen username is available or not
    usernames.map((takenUsername) => {
      if (username == takenUsername.username) {
        console.log("TAKEN");
        isUsernameAvailable = false;
      }
    });

    // 3. Return isUsernameTaken
    return isUsernameAvailable;
  } catch (error) {
    console.log("usernameAvailable Error: ", error);
  }
};

export const authService = {
  signIn,
  signUp,
  emailAvailable,
  usernameAvailable,
};
