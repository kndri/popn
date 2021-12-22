import { Auth } from "aws-amplify";

export const sendCustomChallenge = async (user: string, OTP: string) => {
  try {
    const cognitoUser = await Auth.sendCustomChallengeAnswer(user, OTP);
  } catch {
    // Handle 3 error thrown for 3 incorrect attempts.
    console.error("You have exceeded the amount of tries");
  }
};
