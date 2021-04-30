import React from "react";
import { IconButton, makeStyles, Paper } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

import { useAuth } from "../../../Authentication/AuthContext";
import { useData } from "../../../Context";
import { acceptCollabReq } from "../../../DBCalls/firestoreDB";

//  step 1 => on accept, add accepter to note's collaborator list
//  step 2 => Add accepted Note on dashBoard

function Accept(props) {
  const { currentUser } = useAuth();
  const [userNotes, setUserNotes] = useData();
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
