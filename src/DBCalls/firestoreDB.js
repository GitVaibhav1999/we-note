import firebase from "firebase";

const db = firebase.firestore();
const userRef = db.collection("USER_COLLECTION");
const noteRef = db.collection("NOTES_COLLECTION");

export const findUsersWithThisEmail = async (email) => {
  const queryRef = await userRef.where("user_email", "==", email).get();
  return queryRef;
};

export const setUserWithThisEmail = async (user_object) => {
  await userRef
    .doc()
    .set(user_object)
    .then((resp) => console.log(resp));
};

export const setNewNote = async (note_data) => {
  await noteRef
    .doc()
    .set(note_data)
    .then((resp) => console.log(resp));
};
