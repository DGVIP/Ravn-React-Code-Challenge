import { ApolloProvider } from "@apollo/client";
import { GlobalStyle } from "./styles";
import { Navigation } from "../navigation/Navigation";
import { apolloClient } from "../configs/apolloClient";

function App() {
   return (
      <ApolloProvider client={apolloClient}>
         <GlobalStyle />
         <Navigation />
      </ApolloProvider>
   );
}

export { App };
