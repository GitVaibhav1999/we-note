import React, { useState } from "react";
import { useAuth } from "./Authentication/AuthContext";
import { auth } from "./firebase/firebase";
import {
  findUsersWithThisEmail,
  setUserWithThisEmail,
} from "./DBCalls/firestoreDB";

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
        const queryResponse = await findUsersWithThisEmail(currentUser.email);
        console.log(queryResponse.size);

        const user_object = {
          user_name: currentUser.email.split("@")[0],
          user_email: currentUser.email,
          no_of_notes: 0,
        };

        if (queryResponse.size == 0) {
          console.log("set");
          setUserWithThisEmail(user_object);
        }
      }
    };
    addUserDocument();
  }, [currentUser]);

  const [userNotes, setUserNotes] = useState();
  const [currentNote, setCurrentNote] = useState({});

  const value = {
    value_userInfo: [userInfo, setUserInfo],
    value_user_notes: [userNotes, setUserNotes],
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
