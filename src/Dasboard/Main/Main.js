import React from "react";
import { Grid } from "@material-ui/core";
import NoteCard from "./Notes/NoteCard";
import { makeStyles } from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import { getUserNotes } from "../../DBCalls/firestoreDB";
import { useAuth } from "../../Authentication/AuthContext";
import { useData } from "../../Context";

const useStyles = makeStyles((theme) => ({
  grid: {
    overflow: "auto",
    width: "100%",
    marginTop: "1rem",
    height: "80vh",
  },
  gridItem: {
    margin: "3%",
    // maxWidth: "40vw",
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
