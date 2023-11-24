import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { DefaultOptions } from '@apollo/client/core/ApolloClient';
import { FetchPolicy } from '@apollo/client/core/watchQueryOptions';

const defaultOptions: DefaultOptions = {
	watchQuery: {
	  fetchPolicy: 'no-cache' as FetchPolicy,
	  errorPolicy: 'ignore',
	},
	query: {
	  fetchPolicy: 'no-cache' as FetchPolicy,
	  errorPolicy: 'all',
	},
  };
  

const cache = new InMemoryCache({
	resultCaching: false,
});

const link = createHttpLink({
	uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
})

const client = new ApolloClient({
	connectToDevTools: true,
	link,
	cache,
	defaultOptions
});

export default client;