import React, { createContext, useContext, useState } from "react";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  profileImage: string;
}

type AuthContextType = {
  auth: User | null;
  setAuth: React.Dispatch<React.SetStateAction<User | null>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const userString = localStorage.getItem("user");
  const user: User | null = userString ? JSON.parse(userString) : null;

  const [auth, setAuth] = useState(user);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth || auth === undefined)
    throw new Error("useAuth must be used inside authprovider.");

  return auth;
}
