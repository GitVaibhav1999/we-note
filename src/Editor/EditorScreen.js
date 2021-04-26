import React from "react";
import { makeStyles } from "@material-ui/core";
import EditArea from "./EditArea/EditArea";
import { ArrowLeft } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "0.3rem",
    justifyContent: "space-between",
    transition: "1s ease",
  },
  back: {
    border: "1px solid grey",
    margin: "1rem",

    "&:hover": {
      boxShadow: "0px 0px 3px 1px grey",
      backgroundColor: "white",
      transform: "scale(1.1)",
    },
  },
  editArea: {
    display: "block",
    height: "80vh",
    width: "70vw",
    overflow: "auto",
  },
}));

function EditorScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <IconButton className={classes.back}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className={classes.editArea}>
        <EditArea />
      </div>
      <div></div>
    </div>
  );
}

export default EditorScreen;
