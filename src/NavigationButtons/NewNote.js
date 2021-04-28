import React from "react";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../Authentication/AuthContext";
import { setNewNote } from "../DBCalls/firestoreDB";
import { useHistory } from "react-router-dom";
import { PublishRounded } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  fabButton: {
    backgroundColor: "#FF6B6B",
    boxShadow: "0px 2px 0px 8px #F7FFF7",
    width: "5em",
    height: "5em",
    position: "absolute",
    zIndex: 1,
    top: -40,
    left: "0",
    right: "0",
    margin: "0 auto",
    transition: "0.2s ease",
    border: "1px solid white",
    "&:hover": {
      boxShadow: "0px 0px 3px 1px #FF6B6B",
      backgroundColor: "#FF6B6B",
      transform: "scale(1.3)",
    },
    backgroundColor: "#FF6B6B",
    [theme.breakpoints.up("md")]: {
      right: "-85%",
      left: 0,
      top: "-40",
    },
  },
}));

function NewNote() {
  const classes = useStyle();
  const history = useHistory();

  const { currentUser } = useAuth();

  const currentDateTime = new Date();

  const addNote = () => {
    const note_data = {
      user_id: currentUser.uid,
      Heading: "",
      CreatedAt: Date.parse(currentDateTime),
      Text: "",
      IsFav: false,
    };
    console.log(note_data);
    setNewNote(note_data)
      .then(() => {
        console.log("PublishRounded");
        history.push(`/editor?CID=${note_data.CreatedAt}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Fab
      onClick={addNote}
      color="secondary"
      aria-label="add"
      className={classes.fabButton}
    >
      <span style={{ fontSize: "60px" }}>+</span>
    </Fab>
  );
}

export default NewNote;
