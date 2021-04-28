import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { getNoteData, updateNoteData } from "../DBCalls/firestoreDB";

const useStyles = makeStyles((theme) => ({
  headingInput: {
    width: "auto",
    height: "70%",
    margin: ".02rem",
    fontSize: "2rem",
    color: "grey",
  },
}));

function NoteHeading(props) {
  const classes = useStyles();

  const CID = parseInt(props.CID);
  const Heading = props.Heading;

  React.useEffect(() => console.log(Heading), [Heading]);

  const [heading, setHeading] = React.useState(Heading);

  const changeHeading = (event) => {
    const changed_heading = event.target.value;
    setHeading(changed_heading);
    updateNoteData(CID, "Heading", changed_heading);
  };

  return (
    <>
      <OutlinedInput
        onChange={changeHeading}
        value={heading}
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
