import  { Auth } from "aws-amplify";

export const checkLoggedUser = async () => {
  
 
    const data = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    }).catch((error) => {
      console.log(error);
    })
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          userData: data,
        })
      }, 1000);
    });
};
