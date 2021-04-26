import React from "react";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./editorTools";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  "ce-block": {
    border: "1px solid black",
  },
  paper: {
    fontSize: "1rem",
    backgroundColor: "#feff9c",
    border: "1px solid grey",
    padding: "2%",
    height: "90%",
    width: "90%",
    overflow: "auto",
    boxShadow: "2px 2px 5px 1px grey",
  },
}));

function EditArea() {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.paper}>
      <EditorJs tools={EDITOR_JS_TOOLS} />
    </Paper>
  );
}

export default EditArea;