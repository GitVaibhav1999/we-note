import React from "react";
import { makeStyles } from "@material-ui/core";
import { TextField, Paper, Button } from "@material-ui/core";

import sticky from "../assets/sticky-notes.png";

const useStyles = makeStyles({
  loginbox: {
    display: "flex",
    height: "50vh",
    width: "27vw",
    border: "1px solid black",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    margin: "1em",
    width: "90%",
  },
  button: {
    margin: "1em",
    width: "90%",
    backgroundColor: "#1A535C",
    color: "white",
    "&:hover": {
      backgroundColor: "#FF6B6B",
    },
  },
  image: {
    width: "100px",
    marginBottom: "2em",
  },
});

function LoginBox() {
  const classes = useStyles();

  return (
    <Paper elevation="3" className={classes.loginbox}>
      <img className={classes.image} src={sticky} />

      <TextField className={classes.input} label="Email" variant="outlined" />
      <TextField
        className={classes.input}
        label="password"
        variant="outlined"
      />
      <Button size="large" className={classes.button}>
        Sign Up
      </Button>
    </Paper>
  );
}

export default LoginBox;
