import React from "react";
import { IconButton, makeStyles, Paper } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

import footerColors from "./footerColors";

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
  },
  zoom: { "&:hover": { transform: "scale(1.5)" } },
}));

function NoteCard() {
  const classes = useStyles();
  var random_color =
    footerColors[Math.floor(Math.random() * footerColors.length)];
  console.log(random_color);
  return (
    <Paper className={classes.paper}>
      <div className={classes.title}>Note title temp</div>
      <div className={classes.footer}>
        <div className={classes.date}>12-05-2021</div>
        <div className={classes.toolButtons}>
          <IconButton>
            <CreateOutlinedIcon
              className={classes.zoom}
              style={{ fill: "#4BB543" }}
            />
          </IconButton>
          <IconButton>
            <DeleteOutlinedIcon
              className={classes.zoom}
              style={{ fill: "#D11A2A" }}
            />
          </IconButton>
        </div>
      </div>
    </Paper>
  );
}

export default NoteCard;
