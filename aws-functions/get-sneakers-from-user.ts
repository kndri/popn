import { API, graphqlOperation, Auth } from "aws-amplify";
import { sneakerByUser } from "../src/graphql/queries";

export type SneakerData = {
  sneakerList: any;
};

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

  return sneakerList;
};
