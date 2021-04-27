import React from "react";
import { IconButton, makeStyles, Paper } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import footerColors from "./footerColors";
import StarBorder from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    border: "2px solid grey",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "90%",
    padding: "0",
    height: "200%",
    maxHeight: "20vh",
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
  },
  toolButtons: {
    paddingRight: "1%",
    display: "flex",
  },
  zoom: { "&:hover": { transform: "scale(1.3)" } },
}));

function NoteCard() {
  const classes = useStyles();
  var random_color =
    footerColors[Math.floor(Math.random() * footerColors.length)];
  return (
    <Paper className={classes.paper}>
      <div className={classes.title}>Note title temp</div>
      <div className={classes.footer}>
        <div className={classes.date}>12-05-2021</div>
        <div className={classes.toolButtons}>
          <IconButton className={classes.zoom}>
            <StarBorder style={{ fill: "orange" }} />
          </IconButton>
          <IconButton className={classes.zoom}>
            <CreateOutlinedIcon style={{ fill: "#4BB543" }} />
          </IconButton>
          <IconButton className={classes.zoom}>
            <DeleteOutlinedIcon style={{ fill: "#D11A2A" }} />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
}

export default NoteCard;
