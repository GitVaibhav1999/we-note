import React from "react";
import { IconButton, makeStyles, Paper } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";

import footerColors from "./footerColors";
import StarBorder from "@material-ui/icons/StarBorder";
import { getNoteData } from "../../../DBCalls/firestoreDB";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    border: "3px solid #8a795d",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
    padding: "0",
    height: "200%",
    maxHeight: "20vh",
    borderRadius: 50,
    cursor: "pointer",
    transition: "0.5s ease",
    "&:hover": {
      boxShadow: "0px 0px 15px 2px #8a795d",
      transform: "scale(1.1)",
    },
  },
  title: {
    fontSize: "2rem",
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
  date: {
    color: "grey",
    paddingLeft: "1%",
    fontSize: "1.3em",
  },
  toolButtons: {
    paddingRight: "1%",
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

function NoteCard(props) {
  const classes = useStyles();
  const history = useHistory();

  const Heading = props.Heading;
  const CID = new Date(props.CreatedAt);
  const formattedDate = `${CID.getDate()}-${CID.getMonth()}-${CID.getFullYear()}`;

  const handleClick = () => {
    history.push(`/editor?CID=${props.CreatedAt}`);
  };

  return (
    <Paper onClick={handleClick} className={classes.paper}>
      <div className={classes.title}>{Heading}</div>
      <div className={classes.footer}>
        <div style={{ marginLeft: "3%" }} className={classes.date}>
          {formattedDate}
        </div>
        <div className={classes.toolButtons}>
          <IconButton className={classes.zoom}>
            <StarBorder style={{ fill: "orange", fontSize: "1.6em" }} />
          </IconButton>
          <IconButton className={classes.zoom}>
            <PlayForWorkIcon style={{ fill: "#4BB543", fontSize: "1.3em" }} />
          </IconButton>
          <IconButton className={classes.zoom}>
            <DeleteOutlinedIcon
              style={{ fill: "#D11A2A", fontSize: "1.3em" }}
            />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
}

export default NoteCard;
