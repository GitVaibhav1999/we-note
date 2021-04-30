import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { useState } from "react";
import { InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddButton from "../../assets/add-button.png";
import NewNote from "../../NavigationButtons/NewNote";
import SideBar from "./Sidebar/Sidebar";

const useStyle = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "#1A535C",
  },
  search: {
    visibility: "hidden",
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
    [theme.breakpoints.up("md")]: {
      visibility: "visible",

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
    flexGrow: 0,
  },
}));

function BottomBar() {
  const classes = useStyle();

  const [search, setSearch] = useState(false);

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <SideBar />

        <NewNote />
        {/* <TextField /> */}
        <div className={classes.grow} />

        <div className={classes.search}>
          <InputBase
            style={{ paddingLeft: "2%" }}
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
