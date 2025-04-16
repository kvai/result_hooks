import { ReactNode, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));

  const signin = (newUser: string, callback: () => void) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);
    callback();
  };

  const signout = (callback: () => void) => {
    setUser(null);
    localStorage.removeItem("user");
    callback();
  };

  const value = {
    user,
    signin,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
