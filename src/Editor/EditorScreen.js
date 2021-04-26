import React from "react";
import { makeStyles } from "@material-ui/core";
import EditArea from "./EditArea/EditArea";
import { ArrowLeft } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

import { Link } from "react-router-dom";

import Menu from "../assets/menu.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // justifyContent: "space-between",
    height: "87vh",
    margin: "1rem",
  },
  back: {
    border: "1px solid white",
    marginRight: "1rem",
    transition: "0.4s ease",

    "&:hover": {
      boxShadow: "0px 0px 3px 1px #FF6B6B",
      backgroundColor: "#FF6B6B",
      transform: "scale(1.1)",
    },
  },
  editArea: {
    display: "block",
    height: "85vh",
    width: "70vw",
    overflow: "auto",
  },
  heading: {
    display: "inline-block",
    width: "100vw",
    height: "7vh",
    margin: "0.2rem",
  },
  headingInput: {
    width: "auto",
    height: "70%",
    margin: ".02rem",
  },
  menu: {
    width: "1.3rem",
  },
}));

function EditorScreen() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div>
          <Link to="/">
            <IconButton className={classes.back}>
              <ArrowBackIcon />
            </IconButton>
          </Link>
        </div>
        <div className={classes.editArea}>
          <EditArea />
        </div>
        <div></div>
      </div>
      <div className={classes.heading}>
        <IconButton style={{ padding: "1rem" }}>
          <img className={classes.menu} src={Menu} />
        </IconButton>
        <OutlinedInput
          className={classes.headingInput}
          id="outlined-adornment-weight"
          aria-describedby="outlined-weight-helper-text"
          labelWidth={0}
          placeholder="Heading"
        />
      </div>
    </>
  );
}

export default EditorScreen;
