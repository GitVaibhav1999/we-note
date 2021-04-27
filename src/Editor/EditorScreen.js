import React from "react";
import { makeStyles } from "@material-ui/core";
import EditArea from "./EditArea/EditArea";
import { ArrowLeft } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarBorder from "@material-ui/icons/StarBorder";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import blue_1 from "../assets/blue_1.png";
import yellow_1 from "../assets/yellow_1.png";
import yellow_2 from "../assets/yellow_2.png";
import pink_1 from "../assets/pink_1.png";
import pink_2 from "../assets/pink_2.png";

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
      // backgroundColor: "#FF6B6B",
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
  img: {
    width: "2rem",
  },
}));

function EditorScreen() {
  const classes = useStyles();

  const note_colors = {
    pink1: "#ff7eb9",
    pink2: "#ff65a3",
    blue1: "#7afcff",
    yellow1: "#feff9c",
    yellow2: "#fff740",
  };

  const [color, setColor] = React.useState(note_colors.yellow1);

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
          <EditArea noteColor={color} />
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

        <IconButton onClick={() => setColor(note_colors.yellow1)}>
          <img className={classes.img} src={yellow_1} />
        </IconButton>
        <IconButton onClick={() => setColor(note_colors.yellow2)}>
          <img className={classes.img} src={yellow_2} />
        </IconButton>
        <IconButton onClick={() => setColor(note_colors.pink1)}>
          <img className={classes.img} src={pink_1} />
        </IconButton>
        <IconButton onClick={() => setColor(note_colors.pink2)}>
          <img className={classes.img} src={pink_2} />
        </IconButton>
        <IconButton onClick={() => setColor(note_colors.blue1)}>
          <img className={classes.img} src={blue_1} />
        </IconButton>
      </div>
    </>
  );
}

export default EditorScreen;
