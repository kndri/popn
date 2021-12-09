import { API, graphqlOperation } from "aws-amplify";
import { listSneakerStores } from "../src/graphql/queries";

export type SneakerData = {
  sneakerList: any;
};

//stores shoes
export const getSneakersFromDB = async (): Promise<SneakerData> => {
  let sneakerList: any;

  const sneakersData = await API.graphql(graphqlOperation(listSneakerStores));

  sneakerList = sneakersData.data.listSneakerStores.items;

  return sneakerList;
};
