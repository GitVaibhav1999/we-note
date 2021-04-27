import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core";
import { TextField, Paper, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { useAuth } from "./AuthContext";
import { validateEmail, validatePassword } from "./validateInput";
import sticky from "../assets/sticky-notes.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  loginbox: {
    display: "flex",
    height: "50vh",

    border: "2px solid black",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "3px 3px 8px grey",
    width: "47vw",
    minWidth: "300px",
    [theme.breakpoints.up("md")]: {
      width: "27vw",
      maxWidth: "400px",
    },
  },
  input: {
    margin: "1em",
    width: "90%",
    "& label.Mui-focused": {
      color: "#1A535C",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "#FF6B6B",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1A535C",
      },
    },
  },
  button: {
    margin: "1em",
    width: "90%",
    backgroundColor: "#1A535C",
    color: "white",
    "&:hover": {
      backgroundColor: "#FF6B6B",
      color: "black",
    },
  },
  image: {
    width: "100px",
    marginBottom: "2em",
  },
  alert_show: {
    visibility: "visible",
    border: "1px solid red",
    // transition: "1s ease",
  },
  alert_hide: {
    visibility: "hidden",
  },
}));

function LoginBox() {
  const classes = useStyles();
  const history = useHistory();

  const { logIn, currentUser } = useAuth();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    await logIn(email, password) // login user with email and password from AuthContext
      .then(() => {
        console.log(" successfully logged in");
      })
      .catch((error) => {
        if (error.code == "auth/invalid-email")
          setErrorMessage("Invalid Email");
        if (error.code == "auth/user-not-found")
          setErrorMessage("User not found");
        if (error.code == "auth/wrong-password")
          setErrorMessage("Wrong Password");
      });
  };
  useEffect(() => console.log(errorMessage), [errorMessage]);
  return (
    <Paper elevation="3" className={classes.loginbox}>
      <img className={classes.image} src={sticky} />

      <TextField
        onChange={(event) => setEmail(event.target.value)}
        error={errorMessage.length > 0}
        className={classes.input}
        label="Email"
        variant="outlined"
        // helperText={}
      />
      <TextField
        type="password"
        error={errorMessage.length > 0}
        onChange={(event) => setPassword(event.target.value)}
        className={classes.input}
        label="password"
        variant="outlined"
        // helperText={}
      />

      <Button onClick={handleSubmit} size="large" className={classes.button}>
        Log In
      </Button>
      <Alert
        className={
          errorMessage.length > 0 ? classes.alert_show : classes.alert_hide
        }
        severity="error"
      >
        {errorMessage}
      </Alert>
    </Paper>
  );
}

export default LoginBox;
