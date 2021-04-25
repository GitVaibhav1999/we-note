import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { AccountCircle } from "@material-ui/icons";

import logo from "../../assets/sticky-notes.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: "2.5rem",
    height: "2.5rem",
  },
  userBtn: {
    color: "#1A535C",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "grey",
  },
  topBar: {
    backgroundColor: "transparent",
  },
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.topBar} position="static">
        <Toolbar>
          <img className={classes.logo} src={logo} />
          <Typography variant="h6" className={classes.title}>
            Vaibhav Kumar Gautam
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            className={classes.userBtn}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
