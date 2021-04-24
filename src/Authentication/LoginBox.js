import React, { useState, useEffect } from "react";
import { withStyles, makeStyles, ThemeProvider } from "@material-ui/core";
import { TextField, Paper, Button } from "@material-ui/core";
import { useAuth } from "./AuthContext";

import sticky from "../assets/sticky-notes.png";

import { validateEmail, validatePassword } from "./validateInput";

const useStyles = makeStyles({
  loginbox: {
    display: "flex",
    height: "50vh",
    width: "27vw",
    border: "1px solid black",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "2px 2px 4px grey",
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
});

function LoginBox() {
  const classes = useStyles();

  const { signUp } = useAuth();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});

  useEffect(() => console.log(validate), [validate]);

  const handleSubmit = async () => {
    const validate_email = validateEmail(email);
    const validate_password = validatePassword(password);

    setValidate({
      validate_email,
      validate_password,
    });

    if (validate.validate_email == true && validate.validate_password == true) {
      await signUp(email, password) // create user with email and password from AuthContext
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };

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
            : ""
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

      <Button onClick={handleSubmit} size="large" className={classes.button}>
        Sign Up
      </Button>
    </Paper>
  );
}

export default LoginBox;
