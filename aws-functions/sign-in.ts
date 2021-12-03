import { Auth } from "aws-amplify";

export const signIn = async (phoneNumber: string) => {
  try {
    const cognitoUser = await Auth.signIn("+1" + phoneNumber);
  } catch (error) {
    // Handle sign in errors
    console.error("Can not sign in", error);
  }
};
