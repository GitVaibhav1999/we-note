import React from "react";
import { makeStyles } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  toggle: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: "1.3rem",
    color: "grey",
  },
}));

function Toggle(props) {
  const classes = useStyles();

  const stateChecked = props.stateChecked;
  const setCheckedState = props.setCheckedState;
  const handleChange = () => {
    if (stateChecked) setCheckedState(false);
    else setCheckedState(true);
  };
  return (
    <div className={classes.toggle}>
      <div className={classes.text}>Shared Notes</div>
      <Switch
        checked={stateChecked}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
}

export default Toggle;
