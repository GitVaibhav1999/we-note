import React from "react";
import { Grid } from "@material-ui/core";
import NoteCard from "./Notes/NoteCard";
import { makeStyles } from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import { getUserNotes } from "../../DBCalls/firestoreDB";
import Loader from "react-loader-spinner";

import { useAuth } from "../../Authentication/AuthContext";
import { useData } from "../../Context";
import emptyIcon from "../../assets/search.png";

const useStyles = makeStyles((theme) => ({
  grid: {
    overflow: "auto",
    width: "100%",
    marginTop: "1rem",
    height: "80vh",
    transition: "2s ease-out",
  },
  gridItem: {
    margin: "1%",
    height: "30%",
    transition: "2s ease",

    // border: "1px solid red",
    // maxWidth: "40vw",
  },
  loader: {
    alignSelf: "center",
    justifyContent: "center",
    width: "100vw",
    display: "flex",
  },
  empty: {
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "60vh",
    display: "flex",
    fontSize: "3rem",
    flexDirection: "column",
  },
  imgDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function Main() {
  const classes = useStyles();

  const { currentUser } = useAuth();
  const { value_user_notes } = useData();

  const [userNotes, setUserNotes] = value_user_notes;

  React.useEffect(() => console.log(userNotes), [userNotes]);

  // Get all user notes from DB
  React.useEffect(() => {
    getUserNotes(currentUser.uid).then((response) => {
      var temp_notes = [];

      response.forEach((each_data) => {
        temp_notes.push(each_data.data());
      });
      setUserNotes(temp_notes);
    });
  }, []);

  if (userNotes == undefined) {
    return (
      <div className={classes.loader}>
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

  if (userNotes.length == 0) {
    return (
      <div className={classes.empty}>
        <div>
          <div className={classes.imgDiv}>
            <img
              style={{
                width: "30%",
              }}
              src={emptyIcon}
            />
          </div>
        </div>
        <div>Looks empty around here !! </div>
        <div style={{ color: "#FF6B6B" }}> add notes </div>
        <div> and make this place lively</div>
      </div>
    );
  }
  return (
    <PerfectScrollbar>
      <Grid
        id="grid"
        className={classes.grid}
        container
        justify="center"
        spacing={2}
      >
        {userNotes.map((each_note) => {
          return (
            <Grid className={classes.gridItem} item sm={10} md={3}>
              <NoteCard
                Heading={each_note.Heading}
                CreatedAt={each_note.CreatedAt}
              />
            </Grid>
          );
        })}
        <Grid style={{ height: "30vh" }} item xs={12}></Grid>
      </Grid>
    </PerfectScrollbar>
  );
}

export default Main;
