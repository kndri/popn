import { Auth } from "aws-amplify";
import { Alert } from "react-native";

export const signUp = async (
  email: string,
  password: string,
  age: string,
  username: string
) => {
  if (password.length == 0) {
    Alert.alert("Password cannot be empty.");
  } else {
    try {
      await Auth.signUp({
        username: email,
        password: password,
        // attributes: {
        //   age: age,

        //   name: username, // optional

        //   // other custom attributes
        // },
      });
    } catch (error) {
      // Handle sign up error
      console.error("An error has occured trying to sign in.", error);
    }
  }
};
