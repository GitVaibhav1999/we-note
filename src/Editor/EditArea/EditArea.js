import React from "react";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./editorTools";
import { Paper, makeStyles } from "@material-ui/core";
import { updateNoteData } from "../../DBCalls/firestoreDB";

const useStyles = makeStyles(() => ({
  "ce-block": {
    border: "1px solid black",
  },
  paper: {
    fontSize: "1rem",
    // backgroundColor: "#feff9c",
    border: "1px solid grey",
    padding: "2%",
    height: "90%",
    width: "90%",
    overflow: "auto",
    boxShadow: "2px 2px 5px 1px grey",
    transition: "0.4s ease",
  },
}));

function EditArea(props) {
  const classes = useStyles();

  const Text = props.Text;
  console.log(props);
  const CID = props.CID;

  const updateNote = (api, newData) => {
    updateNoteData(CID, "TEXT", newData);
  };

  return (
    <Paper
      style={{ backgroundColor: props.noteColor }}
      elevation={5}
      className={classes.paper}
    >
      <EditorJs
        data={props.Text}
        onChange={updateNote}
        tools={EDITOR_JS_TOOLS}
      />
    </Paper>
  );
}

export default EditArea;
