import React from "react";
import { useData } from "../../Context";
import { getCollabNotes, getNoteData } from "../../DBCalls/firestoreDB";
import { useAuth } from "../../Authentication/AuthContext";
import { Grid, makeStyles } from "@material-ui/core";
import Loader from "react-loader-spinner";

import NoteCard from "./Notes/NoteCard";

const useStyles = makeStyles(() => ({}));

function MainCollab() {
  const classes = useStyles();

  const { value_collab_notes } = useData();
  const { currentUser } = useAuth();
  const [userCollabNotes, setUserCollabNotes] = value_collab_notes;

  React.useEffect(() => {
    setUserCollabNotes([]);
    var temp_collab = [];
    getCollabNotes(currentUser.email).then((response) => {
      var temp_collab = [];
      response.forEach((each_CID) => {
        getNoteData(each_CID).then((res) => {
          temp_collab.push(res);
          if (userCollabNotes == undefined) {
            setUserCollabNotes([res]);
          }
          setUserCollabNotes((curr) => [...curr, res]);
        });
      });
      console.log(temp_collab);
      // setUserCollabNotes(temp_collab);
    });
  }, []);

  React.useEffect(() => console.log(userCollabNotes), [userCollabNotes]);

  if (userCollabNotes == undefined) {
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

  return (
    <div>
      <Grid
        id="grid"
        className={classes.grid}
        container
        justify="center"
        spacing={2}
      >
        {userCollabNotes.map((each_note) => {
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
    </div>
  );
}

export default MainCollab;
