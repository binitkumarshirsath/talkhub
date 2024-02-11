import React, { createContext, useContext, useState } from "react";

type AuthContextType = {
  auth: string;
  setAuth: React.Dispatch<React.SetStateAction<string>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [auth, setAuth] = useState("");
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("useAuth must be used inside authprovider.");

  return auth;
}
