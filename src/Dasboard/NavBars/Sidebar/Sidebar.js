import React from "react";
import clsx from "clsx";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Loader from "react-loader-spinner";
import SideBarCard from "../../Main/Notes/SideBarCard";

import {
  getCollaborateRequests,
  getNoteData,
} from "../../../DBCalls/firestoreDB";
import { useAuth } from "../../../Authentication/AuthContext";
const useStyles = makeStyles({
  list: {
    width: 400,
    overflow: "hidden",
    borderRight: "black",
  },
  fullList: {
    width: "auto",
  },
  typo: {
    width: "100%",
    padding: "1rem",
    backgroundColor: "#FF6B6B",
    borderBottom: "1px solid grey",
  },
  empty: {
    display: "flex",
    border: "1px solid grey",
    // height:'50vh',
    justifyContent: "center",
    alignItem: "center",
    fontSize: "1.3rem",
    alignContent: "center",
    padding: "1rem",
    margin: "1rem",
  },
});

export default function SideBar() {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [reqNote, setReqNote] = React.useState();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    getCollaborateRequests(currentUser.email).then((response) => {
      setReqNote([]);
      console.log(response);
      var temp_req_notes = [];
      if (response.length == 0) {
        return;
      }
      response.forEach((each_cid, index) => {
        getNoteData(each_cid).then((note_response) => {
          setReqNote((curr) => [...curr, each_cid]);
          console.log(note_response);
        });
      });
    });
  };

  React.useEffect(() => console.log(reqNote), [reqNote]);

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography variant="h5" className={classes.typo}>
        Collaborate Requests
      </Typography>
      <List>
        {reqNote == undefined ? (
          <div
            style={{
              alignSelf: "center",
              justifyContent: "center",
              width: "100%",
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
        ) : reqNote.length == 0 ? (
          <div className={classes.empty}>Not Collaboration Request</div>
        ) : (
          // reqNote.map((each_note)=>(<div>{each_note}</div>))
          reqNote.map((each_note) => (
            <SideBarCard
              Heading={each_note.Heading}
              Sender={each_note.user_email}
              NoteDetail={each_note}
              setReqNote={setReqNote}
            />
          ))
        )}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon style={{ color: "#FF6B6B", fontSize: "2rem" }} />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
