import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
   uri: import.meta.env.VITE_API_URL,
   cache: new InMemoryCache({
      typePolicies: {
         Query: {
            fields: {
               tasks: {
                  merge: (existing, incoming) => {
                     return incoming;
                  },
               },
            },
         },
      },
   }),
   headers: {
      authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
   },
});

export { apolloClient };
