import React from "react";
import { IconButton, makeStyles, Paper } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { useAuth } from "../../../Authentication/AuthContext";
import { useData } from "../../../Context";
import CloseIcon from "@material-ui/icons/Close";

import footerColors from "./footerColors";
import StarBorder from "@material-ui/icons/StarBorder";
import {
  deleteNote,
  deleteSelectedNote,
  getNoteData,
  getUserNotes,
} from "../../../DBCalls/firestoreDB";
import { useHistory } from "react-router-dom";
import DeleteNote from "./DeleteNote";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    border: "1px solid #8a795d",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
    padding: "0",
    height: "200%",
    maxHeight: "20vh",
    borderRadius: 50,
    cursor: "pointer",
    transition: "0.5s ease",
    margin: "1rem",
  },
  title: {
    fontSize: "1.2rem",
    padding: "1rem",
  },
  footer: {
    display: "flex",
    textJustify: "center",
    textAlign: "center",
    height: "30%",
    borderTop: "1px solid grey",
    margin: "0",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sender: {
    color: "grey",
    paddingLeft: "5%",
    fontSize: "1.3em",
  },
  toolButtons: {
    paddingRight: "10%",
    display: "flex",
  },
  zoom: {
    // border: "1px solid grey",
    width: "4rem",

    "&:hover": {
      transform: "scale(1.3)",
      boxShadow: "0",
      backgroundColor: "transparent",
    },
  },
}));

function SideBarCard(props) {
  const classes = useStyles();
  const history = useHistory();

  const { currentUser } = useAuth();
  const { value_user_notes } = useData();

  const [userNotes, setUserNotes] = value_user_notes;

  const Heading = props.Heading;
  const Sender = props.Sender;
  console.log(Sender);
  return (
    <Paper className={classes.paper}>
      <div className={classes.title}>{Heading}</div>
      <div className={classes.footer}>
        <div style={{ marginLeft: "3%" }} className={classes.sender}>
          {Sender}
        </div>
        <div className={classes.toolButtons}>
          <IconButton>
            <CheckIcon style={{ color: "green" }} />
          </IconButton>
          <IconButton>
            <CloseIcon style={{ color: "red" }} />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
}

export default SideBarCard;
