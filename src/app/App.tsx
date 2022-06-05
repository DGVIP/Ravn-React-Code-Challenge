import "react-toastify/dist/ReactToastify.css";
import { ApolloProvider } from "@apollo/client";
import { GlobalStyle } from "./styles";
import { Navigation } from "../navigation/Navigation";
import { apolloClient } from "../configs/apolloClient";
import AuthProvider from "../contexts/auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

function App() {
   return (
      <ApolloProvider client={apolloClient}>
         <AuthProvider>
            <GlobalStyle />
            <Navigation />
            <ToastContainer
               position={toast.POSITION.BOTTOM_RIGHT}
               theme="dark"
               newestOnTop
               closeOnClick
               pauseOnFocusLoss
               pauseOnHover
            />
         </AuthProvider>
      </ApolloProvider>
   );
}

export { App };
