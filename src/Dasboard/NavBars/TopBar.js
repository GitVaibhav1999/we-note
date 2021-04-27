import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { AccountCircle } from "@material-ui/icons";
import { useAuth } from "../../Authentication/AuthContext";
import { Redirect } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

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
  const { logOut } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const exit = async () => {
    await logOut().then((response) => <Redirect to="/signUp" />);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.topBar} position="static">
        <Toolbar>
          <img className={classes.logo} src={logo} />
          <Typography variant="h6" className={classes.title}>
            Vaibhav Kumar Gautam
          </Typography>
          <IconButton
            onClick={(event) => {
              setAnchorEl(event.currentTarget);
            }}
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            className={classes.userBtn}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClick={(event) => {
              setAnchorEl(null);
            }}
          >
            <a href="www.google.com">
              <MenuItem>Source Code</MenuItem>
            </a>
            <MenuItem onClick={exit}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
