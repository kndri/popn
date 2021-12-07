import { API, graphqlOperation, Auth } from "aws-amplify";
import { createSneaker } from "../src/graphql/mutations";
import { checkLoggedUser } from "./check-logged-user";
  
  
  //stores shoes
  export const addSneaker = async (sneakerObject: Object) => {
   
    try {
      // const currentUser = checkLoggedUser();
      const currentUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      const newSneaker = {
        id: sneakerObject.id,
        brand: sneakerObject.brand,
        primaryName: sneakerObject.primary_name,
        secondaryName: sneakerObject.secondary_name,
        image: sneakerObject.image_url,
        userID: currentUser.attributes.sub,
        verified: false,
      };
      await API.graphql(graphqlOperation(createSneaker, { input: newSneaker }));
      
    } catch (e) {
      console.log(e);
    }
  };