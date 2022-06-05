import { useContext, createContext } from "react";
import { GetProfileQuery } from "../../graphql";

export interface AuthContextValue {
   user: GetProfileQuery["profile"] | null;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function useAuth() {
   const context = useContext(AuthContext);
   if (context === null) {
      throw new Error("useAuth must be used within an AuthProvider");
   }
   return context;
}

export { useAuth, AuthContext };
