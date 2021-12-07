import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";

export const forgotPassword = (username: string) => {
  // Send confirmation code to user's email

  // then navigate back 
  Auth.forgotPassword(username)
    .then((data) => useNavigation().navigate("ResetPassword", username))
    .catch((err) => console.log(err));
};

export const confirmNewPassword = (username: string, code: string, new_password: string) => {
  // Collect confirmation code and new password, then
  Auth.forgotPasswordSubmit(username, code, new_password)
    .then((data) => useNavigation().navigate("SignIn"))
    .catch((err) => console.log(err));
};
