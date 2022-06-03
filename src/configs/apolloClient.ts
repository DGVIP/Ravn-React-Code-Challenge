import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
   uri: import.meta.env.VITE_API_URL,
});

const authLink = setContext((_, { headers }) => {
   const token = import.meta.env.VITE_API_TOKEN;

   return {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : "",
      },
   };
});

const apolloClient = new ApolloClient({
   link: authLink.concat(httpLink),
   cache: new InMemoryCache(),
});

export { apolloClient };
