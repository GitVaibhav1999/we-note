import React from "react";
import { makeStyles } from "@material-ui/core";
import EditArea from "./EditArea/EditArea";
import { ArrowLeft } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import blue_1 from "../assets/blue_1.png";
import yellow_1 from "../assets/yellow_1.png";
import yellow_2 from "../assets/yellow_2.png";
import pink_1 from "../assets/pink_1.png";
import pink_2 from "../assets/pink_2.png";
import Loader from "react-loader-spinner";

import { Link, Redirect, useHistory } from "react-router-dom";

import Menu from "../assets/menu.png";
import NoteHeading from "./NoteHeading";
import { getNoteData } from "../DBCalls/firestoreDB";
import { useAuth } from "../Authentication/AuthContext";
import Collaborate from "./collaborate/Collaborate";

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
    display: "flex",
    width: "100vw",
    height: "7vh",
    margin: "0.2rem",
    marginLeft: "1rem",
  },
  colors: {
    marginLeft: "1rem",
  },

  menu: {
    width: "3rem",
  },
  img: {
    width: "2.5rem",
    transition: "0.2s ease",

    "&:hover": {
      transform: "scale(1.3)",
    },
  },
}));

function EditorScreen(props) {
  // To get the param from route
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const CID = params.get("CID");
  const history = useHistory();

  const { currentUser } = useAuth();

  const [selectedNote, setSelectedNote] = React.useState();

  React.useEffect(() => {
    getNoteData(CID).then((response) => {
      setSelectedNote(response);
    });
  }, []);

  const classes = useStyles();

  const note_colors = {
    pink1: "#ff7eb9",
    pink2: "#ff65a3",
    blue1: "#7afcff",
    yellow1: "#feff9c",
    yellow2: "#fff740",
  };

  const [color, setColor] = React.useState(note_colors.yellow1);

  // if user not logged in
  if (currentUser === null) {
    return <Redirect to="/signUp" />;
  }

  // until state of selectedNote is updated
  if (selectedNote == undefined) {
    return (
      <div
        style={{
          alignSelf: "center",
          justifyContent: "center",
          width: "100vw",
          display: "flex",
        }}
      >
        <Loader
          type="ThreeDots"
          color="#FF6B6B"
          height={900}
          width={200}
          // timeout={3000} //3 secs
        />
      </div>
    );
  }

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
          <EditArea
            Text={selectedNote != undefined ? selectedNote.TEXT : ""}
            CID={CID}
            noteColor={color}
          />
        </div>

        <Collaborate CID={CID} />
      </div>
      <div className={classes.heading}>
        {/* <IconButton style={{ padding: "1rem" }}>
          <img className={classes.menu} src={Menu} />
        </IconButton> */}
        <NoteHeading
          CID={CID}
          Heading={selectedNote != undefined ? selectedNote.Heading : ""}
        />
        <div className={classes.colors}>
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
      </div>
    </>
  );
}

export default EditorScreen;
