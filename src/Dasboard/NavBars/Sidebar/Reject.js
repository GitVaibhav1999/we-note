import React from "react";
import { IconButton, makeStyles, Paper } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { useAuth } from "../../../Authentication/AuthContext";
import { getNoteData, rejectCollab } from "../../../DBCalls/firestoreDB";

function Reject(props) {
  const { currentUser } = useAuth();
  const setReqNote = props.setReqNote;

  const handleReject = () => {
    rejectCollab(props.CID, currentUser.email).then((response) => {
      if (response == undefined) {
        setReqNote([]);
        return;
      }

      response.forEach((each_cid) => {
        var temp_req_notes = [];
        getNoteData(each_cid)
          .then((note_response) => {
            if (note_response != undefined) {
              temp_req_notes.push(note_response);
            }
          })
          .then(() => setReqNote(temp_req_notes));
      });
    });
  };

  return (
    <IconButton>
      <CloseIcon onClick={handleReject} style={{ color: "red" }} />
    </IconButton>
  );
}

export default Reject;
