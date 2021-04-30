import React from "react";
import { IconButton, makeStyles, Paper } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

import { useAuth } from "../../../Authentication/AuthContext";
import { acceptCollabReq } from "../../../DBCalls/firestoreDB";

//  step 3 => get all notes from collab_accepted of USER_COLLECTION
//  step 1 => on accept, add accepter to note's collaborator list
//  step 2 => create a toggle on main, which toggles collaborated notes (cannot be deleted)

function Accept(props) {
  const { currentUser } = useAuth();
  const setReqNote = props.setReqNote;

  const acceptCollab = () => {
    acceptCollabReq(props.CID, currentUser.email, setReqNote).then((data) =>
      console.log(data)
    );
  };

  return (
    <IconButton>
      <CheckIcon
        onClick={acceptCollab}
        style={{ color: "green" }}
        setReqNote={setReqNote}
      />
    </IconButton>
  );
}

export default Accept;
