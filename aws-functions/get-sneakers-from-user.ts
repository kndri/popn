import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser } from "../src/graphql/queries";
import { checkLoggedUser } from "./check-logged-user";
  
  
  //stores shoes
  export const getSneakersFromUser = async () => {
    let sneakerList = [];
    
    try {
      // const currentUser = checkLoggedUser();
      const currentUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      const sneakersData = await API.graphql(
        graphqlOperation(getUser, {
          id: currentUser.attributes.sub,
        })
      );

      sneakerList = sneakersData.data.getUser.sneakers.items;

      // travers through the array and save the notes with only the same bookID
    } catch (e) {
      console.log(e);
    }
    return sneakerList;
  };