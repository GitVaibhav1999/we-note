import React, { useState } from "react";
import { useAuth } from "./Authentication/AuthContext";
import firebase from "firebase";
import { auth } from "./firebase/firebase";

const DataContext = React.createContext();

export function useData() {
  return React.useContext(DataContext);
}

export function DataProvider({ children }) {
  const { currentUser } = useAuth();
  const [userInfo, setUserInfo] = useState({});

  // creates new user document in USER_COLLECTION

  React.useEffect(() => {
    const addUserDocument = async () => {
      if (currentUser != null) {
        const db = firebase.firestore();
        const userRef = db.collection("USER_COLLECTION");
        const queryRef = await userRef
          .where("user_email", "==", currentUser.email)
          .get();

        const user_object = {
          user_name: currentUser.email.split("@")[0],
          user_email: currentUser.email,
          no_of_notes: 0,
        };
        console.log("set");

        await db.collection("USER_COLLECTION").doc().set(user_object);
      }
    };
    addUserDocument();
  }, [currentUser]);

  const [userNotes, setUserNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({});

  const value = {
    value_userInfo: [userInfo, setUserInfo],
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
