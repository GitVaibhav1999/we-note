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

export const getUserNotes = async (user_id) => {
  const user_id_string = user_id.toString();
  const queryRef = await noteRef.where("user_id", "==", user_id_string).get();
  return queryRef;
};

export const setNewNote = async (note_data) => {
  const ID = note_data.CreatedAt.toString();
  await noteRef
    .doc(ID)
    .set(note_data)
    .then((resp) => console.log(resp));
};

export const deleteSelectedNote = async (CID) => {
  const CID_string = CID.toString();
  const queryRef = await noteRef.doc(CID_string).delete();
};

export const getNoteData = async (CID) => {
  const CID_string = CID;
  const queryRef = await noteRef.doc(CID_string).get();
  return queryRef.data();
};

export const updateNoteData = async (CID, key, value) => {
  var update_object = {};
  update_object[key] = value;

  const queryRef = await noteRef.doc(CID.toString());
  const ref = await queryRef.update(update_object);
};

export const checkValidRequest = async (email) => {
  var queryRef = await userRef.where("user_email", "==", email).get();
  return queryRef.size == 1 ? true : false;
};

export const sendCollaborateRequest = async (CID, email) => {
  const CID_string = CID.toString();

  var queryRef = await userRef.where("user_email", "==", email).get();
  var userID = "";

  var curr_req = [];
  queryRef.forEach((data) => {
    userID = data.id;
    curr_req = [...data.data().collab_requests];
  });
  console.log(curr_req);

  curr_req.push(CID_string);
  console.log(curr_req);
  var queryRef = await userRef.doc(userID).update({
    collab_requests: curr_req,
  });
};

export const getCollaborateRequests = async (email) => {
  var queryRef = await userRef.where("user_email", "==", email).get();
  var userID = "";

  var curr_req = [];
  queryRef.forEach((data) => {
    userID = data.id;
    curr_req = [...data.data().collab_requests];
  });
  return curr_req;
};
