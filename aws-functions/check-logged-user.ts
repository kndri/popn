import  { Auth } from "aws-amplify";

export const checkLoggedUser = async () => {
  let user;
  try {
    const data = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    })
    user = data;
    return data;
 
  } catch {
    // Handle 3 error thrown for 3 incorrect attempts.
    console.error("User not logged in");
  }
  return user;
};
