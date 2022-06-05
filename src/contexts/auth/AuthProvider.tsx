import { ReactNode, useEffect, useState } from "react";
import { useGetProfileQuery } from "../../graphql";
import { AuthContext, AuthContextValue } from "./AuthContext";

interface Props {
   children: ReactNode;
}

function AuthProvider(props: Props) {
   const [user, setUser] = useState<AuthContextValue["user"]>(null);
   const { data } = useGetProfileQuery();
   const { children } = props;

   useEffect(() => {
      setUser(data?.profile || null);
   }, [data]);

   const value = {
      user,
   };

   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
