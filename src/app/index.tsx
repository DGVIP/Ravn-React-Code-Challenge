import "react-toastify/dist/ReactToastify.css";
import { ApolloProvider } from "@apollo/client";
import { GlobalStyle } from "./styles";
import { Navigation } from "../navigation/Navigation";
import { apolloClient } from "../configs/apolloClient";
import { AuthProvider } from "../contexts/auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { theme } from "../configs/theme";

function App() {
   return (
      <ApolloProvider client={apolloClient}>
         <AuthProvider>
            <ThemeProvider theme={theme}>
               <GlobalStyle />
               <Navigation />
               <ToastContainer
                  theme="dark"
                  newestOnTop
                  closeOnClick
                  pauseOnFocusLoss
                  pauseOnHover
                  position={toast.POSITION.BOTTOM_RIGHT}
               />
            </ThemeProvider>
         </AuthProvider>
      </ApolloProvider>
   );
}

export { App };
