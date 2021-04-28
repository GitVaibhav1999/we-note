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
  const ID = note_data.CreatedAt.toString();
  await noteRef
    .doc(ID)
    .set(note_data)
    .then((resp) => console.log(resp));
};

export const getNoteData = async (CID) => {
  const queryRef = await noteRef.where("CreatedAt", "==", CID).get();
  var note_data = {};
  queryRef.forEach((data) => (note_data = data.data()));
  return note_data;
};

export const updateNoteData = async (CID, key, value) => {
  var update_object = {};
  update_object[key] = value;

  const queryRef = await noteRef.doc(CID.toString());
  const ref = await queryRef.update(update_object);
};
