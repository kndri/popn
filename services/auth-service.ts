/* eslint-disable sonarjs/no-identical-functions */
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
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
    console.log('uploadImage RUNNNINNNG');
    console.log('imageUrl: ', imageUrl);
    // const image = await fetch(imageUrl);
    // console.log('image: ', image);
    // const imageBlob = await image.blob();
    // console.log('imageBlob: ', imageBlob);
    // const key = `${username}_profileImage`;
    // console.log('key: ', key);

    // const imageResponse = await Storage.put(key, imageBlob, {
    //   level: "public"
    // });
    // console.log('imageResponse: ', imageResponse);
    // const uploadedImageUrl = `https://popnd82dea5bd54c4b12aa305515ccc9e5e8132355-dev.s3.amazonaws.com/${key}`;
    // console.log('uploadedImageUrl: ', uploadedImageUrl);

    // return uploadedImageUrl;

  const response = await fetch(imageUrl);
  const blob = await response.blob();
      console.log('blob: ', blob);

  const fileName = `${username}ProfileImage.jpeg`;
  await Storage.put(fileName, blob, {
    contentType: 'image/jpeg',
    level: 'private'
  }).then(data => console.log('uploadImageData: ', data))
    .catch(err => console.log('uploadImageErr: ', err))
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

  if (image_url.includes("defaultUser") === false) {
    image_url = await uploadImage(_username, image_url);
  }

  await Auth.signUp({
    username: email,
    password: _password,
    attributes: {
      "custom:age": age,
      "custom:profile_image": image_url,
      preferred_username: _username,
    },
  })
    .then((response) => {
      const user = {
        id: response.userSub,
        age: age,
        username: _username,
        avatarImageURL: image_url,
        email: email,
        following: 0,
        follower: 0
      } 
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
        return true;
      case "NotAuthorizedException":
        return false;
      case "AliasExistsException":
        // Email alias already exists0
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

export const authService = {
  signIn,
  signUp,
  usernameAvailable,
};
