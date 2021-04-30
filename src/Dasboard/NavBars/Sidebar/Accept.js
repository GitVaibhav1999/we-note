import React from "react";
import { IconButton, makeStyles, Paper } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

function Accept() {
  return (
    <IconButton>
      <CheckIcon style={{ color: "green" }} />
    </IconButton>
  );
}

export default Accept;
