import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles((theme) => ({
  headingInput: {
    width: "auto",
    height: "70%",
    margin: ".02rem",
  },
}));

function NoteHeading() {
  const classes = useStyles();
  return (
    <>
      <OutlinedInput
        className={classes.headingInput}
        id="outlined-adornment-weight"
        aria-describedby="outlined-weight-helper-text"
        labelWidth={0}
        placeholder="Heading"
      />
    </>
  );
}

export default NoteHeading;
