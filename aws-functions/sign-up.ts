import  { Auth } from "aws-amplify";


export const signUp = async (
  phoneNumber: string,
  age: string,
  username: string
) => {
  try {
    await Auth.signUp({
       // format +01234567890 
      username: "+1" + phoneNumber,
      password: Date.now().toString(),
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
};
