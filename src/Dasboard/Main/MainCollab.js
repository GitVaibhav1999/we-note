import React from "react";
import { useData } from "../../Context";
import { getCollabNotes, getNoteData } from "../../DBCalls/firestoreDB";
import { useAuth } from "../../Authentication/AuthContext";
import { Grid, makeStyles } from "@material-ui/core";
import Loader from "react-loader-spinner";
import emptyIcon from "../../assets/search.png";
import MenuIcon from "@material-ui/icons/Menu";

import NoteCard from "./Notes/NoteCard";

const useStyles = makeStyles(() => ({
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
  toggle: {
    display: "flex",
    alignContent: "right",
  },
}));

function MainCollab() {
  const classes = useStyles();

  const { value_collab_notes } = useData();
  const { currentUser } = useAuth();
  const [userCollabNotes, setUserCollabNotes] = value_collab_notes;

  React.useEffect(() => {
    getCollabNotes(currentUser.email).then((response) => {
      setUserCollabNotes([]);
      response.forEach((each_CID) => {
        getNoteData(each_CID).then((res) => {
          if (res != undefined) setUserCollabNotes((curr) => [...curr, res]);
        });
      });
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

  if (userCollabNotes.length == 0) {
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
        <div>No Collaborations for Now !! </div>
        <div style={{ color: "#FF6B6B" }}>
          {" "}
          Click{" "}
          <MenuIcon
            style={{
              height: "2rem",
              width: "3rem",
              border: "1px solid black",
              borderRadius: "10%",
            }}
          />{" "}
        </div>
        <div> to add Collaborations</div>
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
