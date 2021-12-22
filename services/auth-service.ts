/* eslint-disable sonarjs/no-identical-functions */
import { Auth, Storage } from "aws-amplify";
import { Alert } from "react-native";

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
  try {
    const response = await fetch(imageUrl);

    const blob = await response.blob();

    const urlParts = imageUrl.split(".");
    const extension = urlParts[urlParts.length - 1];

    const key = `${username}.${extension}`;

    await Storage.put(key, blob);

    return key;
  } catch (e) {
    console.log(e);
  }
  return "";
};

const signUp = async (
  email: string,
  _password: string,
  age: string,
  image_url: string,
  username: string
): Promise<AuthData> => {
  // this is a mock of an API call, in a real app
  // will be need connect with some real API,
  // send email and password, and if credential is corret
  // the API will resolve with some token and another datas as the below

  // variable to check if there is an error
  let errorMessage: any;

  // variable to store user id
  let userId: any;
  if (image_url.includes("s3") === false) {
    image_url = await uploadImage(username, image_url);
  }

  await Auth.signUp({
    username: email,
    password: _password,
    attributes: {
      "custom:age": age,
      "custom:profile_image": image_url,
      preferred_username: username,
    },
  })
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

const usernameAvailable = async (username: string) => {
  // adapted from @herri16's solution: https://github.com/aws-amplify/amplify-js/issues/1067#issuecomment-436492775
  try {
    const res = await Auth.confirmSignUp(username, "000000", {
      // If set to False, the API will throw an AliasExistsException error if the phone number/email used already exists as an alias with a different user
      forceAliasCreation: false,
    });

    // this should always throw an error of some kind, but if for some reason this succeeds then the user probably exists.
    return false;
  } catch (err: any) {
    switch (err.code) {
      case "UserNotFoundException":
        console.log("err", err);

        return true;
      case "NotAuthorizedException":
        console.log("err", err);

        return false;
      case "AliasExistsException":
        // Email alias already exists0

        console.log("err", err);

        return false;
      case "CodeMismatchException":
        console.log("err", err);

        return false;
      case "ExpiredCodeException":
        console.log("err", err);

        return false;
      default:
        console.log("err", err);
        return false;
    }
  }
};

export const authService = {
  signIn,
  signUp,
  usernameAvailable,
};
