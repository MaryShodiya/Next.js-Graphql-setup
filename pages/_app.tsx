import type { AppProps } from 'next/app';

//initialize apollo client
//import symbols from @apollo/client
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

//pass a configuration object to ApolloClient constructor using the uri and cache keys, in this case, the uri is the countries api
const client = new ApolloClient({
    // uri specifies the URL of our GraphQL server.
    // cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});


//connect Apollo client to react with Apollo provider component
//basically wrapping our app inside an ApolloProvider component that takes the client as a prop.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

