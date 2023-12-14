import { DocumentNode } from "graphql";
import {getClient} from "./apollo/client";

export const fetchData = async (query: DocumentNode, slug?:string, cursor: string = '') => {
    try {
      const variables = slug? {
        slug: slug,
        userId: slug,
        after: cursor,
      } : {
        after: cursor,
      }
      const params = {
        query: query,
        variables: variables,
        context: {
          fetchOptions: {
            next: { revalidate: 5 },
          },
        }
      }
   
      const client = getClient();
      const { data, errors } = await client.query(params);

      // Handle the data here
return data
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching data:', error);
    }
  };
