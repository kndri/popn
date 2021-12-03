import  { Auth } from "aws-amplify";

export const checkLoggedUser = async () => {
  try {
    const data = await Auth.currentAuthenticatedUser();
  } catch {
    // Handle 3 error thrown for 3 incorrect attempts.
    console.error("User not logged in");
  }
};
