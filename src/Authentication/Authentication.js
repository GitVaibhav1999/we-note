import React, { useState } from "react";
import { makeStyles, Button } from "@material-ui/core";

import SignUpBox from "./SignUpBox";
import LoginBox from "./LoginBox";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100vw",
    height: "90vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  note: {
    fontSize: "3rem",
    textAlign: "center",
    height: "40vh",
    width: "60vh",
    color: "#FF6B6B",
    borderRadius: "1px solid black",
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
  footer: {
    display: "flex",
    height: "5vh",
    width: "100vw",
    backgroundColor: "#1A535C !important",
  },
}));

function Authentication() {
  const classes = useStyles();

  const [newUser, setNewUser] = useState(true);

  return (
    <div
      style={{
        height: "100%",
        backgroundImage:
          "linear-gradient(to right, #f7ffff, #ecf6f6, #e0ecec, #d5e3e3, #cadada)",
      }}
    >
      <div className={classes.root}>
        <div className={classes.note}>
          Welcome to <span className={classes.title}>WeNote</span> Create Notes
          and Collaborate
        </div>
        <div>
          {newUser == true ? <SignUpBox /> : <LoginBox />}
          <div style={{ textAlign: "center", paddingTop: "1em" }}>
            {newUser == true ? "Already a user ?" : "New Here ?"}
            <Button
              style={{ border: "1px solid black", margin: "1rem" }}
              onClick={() => setNewUser(!newUser)}
            >
              {newUser == true ? "LogIn" : "SignUp"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
