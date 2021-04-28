import { IconButton } from "@material-ui/core";
import React from "react";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  zoom: {
    width: "4rem",

    "&:hover": {
      transform: "scale(1.8)",
      boxShadow: "0",
      backgroundColor: "transparent",
    },
  },
}));

function DeleteNote(props) {
  const classes = useStyle();

  const CID = props.CID;
  function handleDelClick(e) {
    e.stopPropagation();
    console.log("hi");
  }

  return (
    <IconButton onclick={handleDelClick} className={classes.zoom}>
      <DeleteOutlinedIcon style={{ fill: "#D11A2A", fontSize: "1.3em" }} />
    </IconButton>
  );
}

export default DeleteNote;
