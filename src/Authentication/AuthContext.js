import React from "react";
import { auth } from "../firebase/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState();

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const value = {
    currentUser,
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
