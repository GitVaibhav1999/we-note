import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useState } from "react";
import { InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddButton from "../../assets/add-button.png";

const useStyle = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#1A535C",
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.35),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.75),
    },
    "&:focus": {
      backgroundColor: fade(theme.palette.common.white, 0.75),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    padding: "0.2rem",
  },
  searchIcon: {
    height: "100%",
    pointerEvents: "none",
    alignItems: "center",
    justifyContent: "center",
  },
  grow: {
    flexGrow: 1,
  },

  fabButton: {
    backgroundColor: "#FF6B6B",
    boxShadow: "0px 2px 0px 8px #F7FFF7",
    width: "5em",
    height: "5em",
    position: "absolute",
    zIndex: 1,
    top: -40,
    left: 0,
    right: 0,
    margin: "0 auto",
    transition: "0.2s ease",
    border: "1px solid white",
    "&:hover": {
      boxShadow: "0px 0px 3px 1px #FF6B6B",
      backgroundColor: "#FF6B6B",
      transform: "scale(1.1)",

      backgroundColor: "#FF6B6B",
    },
  },
}));

function BottomBar() {
  const classes = useStyle();

  const [search, setSearch] = useState(false);

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>

        <Link to="/editor">
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <span style={{ fontSize: "60px" }}>+</span>
          </Fab>
        </Link>
        {/* <TextField /> */}
        <div className={classes.grow} />
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <div className={classes.search}>
          <InputBase
            placeholder="Search Notes"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default BottomBar;
