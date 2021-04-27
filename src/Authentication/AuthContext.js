import React from "react";
import { auth } from "../firebase/firebase";
import firebase from "firebase/app";

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState();

  const signUp = (email, password) => {
    console.log("doing....");
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const logIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const isNewUser = () => {
    if (currentUser == null) return;

    const first_login = currentUser.metadata.creationTime;
    const last_login = currentUser.metadata.lastSignInTime;
    console.log(first_login, last_login);

    if (Date.parse(first_login) === Date.parse(last_login)) return true;
    return false;
  };

  const logOut = () => {
    return auth.signOut();
  };

  React.useEffect(() => {
    // getting current user by setting observer on Auth project
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const value = {
    currentUser,
    signUp, // signUp function (async) passed as a contex
    logIn,
    logOut,
    isNewUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
