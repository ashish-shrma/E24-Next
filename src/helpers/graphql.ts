import { DocumentNode } from "graphql";
import client from "./apollo/client";

export const fetchData = async (query: DocumentNode,slug:string) => {
    try {
      const params = slug? {
        query: query,
        variables: {
          slug: slug,
        }
      } :  {
        query: query,
      }
      const { data, errors } = await client.query(params);
      console.log(errors)
      // Handle the data here
return data
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching data:', error);
    }
  };
  