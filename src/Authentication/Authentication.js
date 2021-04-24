import React from "react";
import { makeStyles } from "@material-ui/core";

import LoginBox from "./LoginBox";

const useStyles = makeStyles({
  root: {
    display: "block",
    width: "100vw",
    height: "90vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  note: {
    fontSize: "3rem",
    textAlign: "center",
    height: "40vh",
    width: "60vh",
    color: "#FF6B6B",
  },
  belowBox: {
    textAlign: "center",
    backgroundColor: "red",
  },
  title: {
    color: "#1A535C",
    fontSize: "4rem",
    fontFamily: "Helvetica",
  },
});

function Authentication() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.note}>
        Welcome to <span className={classes.title}>WeNote</span> Create Notes
        and Collaborate
      </div>
      <div>
        <LoginBox />
        <div style={{ textAlign: "center", paddingTop: "1em" }}>
          Already a user?
        </div>
        <div style={{ textAlign: "center", paddingTop: "1em" }}>
          <a href="">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
