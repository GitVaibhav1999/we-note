import React, { useState, useEffect } from "react";
import { withStyles, makeStyles, ThemeProvider } from "@material-ui/core";
import { TextField, Paper, Button } from "@material-ui/core";
import { useAuth } from "./AuthContext";
import { useHistory, Redirect } from "react-router-dom";
import { Alert } from "@material-ui/lab";

import sticky from "../assets/sticky-notes.png";

import { validateEmail, validatePassword } from "./validateInput";

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

function SignUpBox() {
  const classes = useStyles();
  const history = useHistory();

  const { signUp, currentUser } = useAuth();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (currentUser != null) history.push("/");
  }, [currentUser]);

  const handleSignUp = async () => {
    const validate_email = validateEmail(email);
    const validate_password = validatePassword(password);

    setValidate({
      validate_email,
      validate_password,
    });
  };

  useEffect(() => {
    async function signUpAction() {
      console.log(validate);
      if (
        validate.validate_email != undefined &&
        validate.validate_email.valid == true &&
        validate.validate_password.valid == true
      ) {
        await signUp(email, password) // create user with email and password from AuthContext
          .then(() => {
            console.log("successfully signed up");
            history.push("/");
          })
          .catch((error) => {
            if (error.code == "auth/email-already-in-use")
              setErrorMessage("Email already in use");
          });
      }
    }
    signUpAction();
  }, [validate]);

  return (
    <Paper elevation="3" className={classes.loginbox}>
      <img className={classes.image} src={sticky} />

      <TextField
        error={
          validate.validate_email != undefined && !validate.validate_email.valid
        }
        onChange={(event) => setEmail(event.target.value)}
        className={classes.input}
        label="Email"
        variant="outlined"
        helperText={
          validate.validate_email != undefined
            ? validate.validate_email.response
            : "Enter your email Id"
        }
      />
      <TextField
        type="password"
        error={
          validate.validate_password != undefined &&
          !validate.validate_password.valid
        }
        onChange={(event) => setPassword(event.target.value)}
        className={classes.input}
        label="password"
        variant="outlined"
        helperText={
          validate.validate_password != undefined
            ? validate.validate_password.response
            : "Password should be more than 6 character"
        }
      />

      <Button onClick={handleSignUp} size="large" className={classes.button}>
        Sign Up
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

export default SignUpBox;
