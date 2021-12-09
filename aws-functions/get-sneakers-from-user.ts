import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser, sneakerByUser } from "../src/graphql/queries";
import { checkLoggedUser } from "./check-logged-user";

export type SneakerData = {
  sneakerList: any;
}
  
  //stores shoes
  export const getSneakersFromUser = async (): Promise<SneakerData> => {
    let sneakerList: any;
    
   
      // const currentUser = checkLoggedUser();
      const currentUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      const sneakersData = await API.graphql(
        graphqlOperation(sneakerByUser, {
          userID: currentUser.attributes.sub,
        })
      );
      sneakerList = sneakersData.data.sneakerByUser.items;
      

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            sneakerList: sneakerList,
          })
        }, 1000);
      });
     

      // travers through the array and save the notes with only the same bookID
    
  };