import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";

export const signIn = async (email: string, password: string) => {
  // const navigation = useNavigation();

  try {
    const cognitoUser = await Auth.signIn(email, password);
    if (cognitoUser) {
      useNavigation().navigate("Welcome");
    }
  } catch (error) {
    // Handle sign in errors
    console.error("Can not sign in", error);
  }
};
