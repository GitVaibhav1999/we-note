import React from "react";
import { Grid } from "@material-ui/core";
import NoteCard from "./Notes/NoteCard";
import { makeStyles } from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";

const useStyles = makeStyles((theme) => ({
  grid: {
    overflow: "auto",
    width: "100%",
    marginTop: "1rem",
    height: "80vh",
  },
  gridItem: {
    margin: "4rem",
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <PerfectScrollbar>
      <Grid
        id="grid"
        className={classes.grid}
        container
        justify="center"
        spacing={2}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(() => {
          return (
            <Grid className={classes.gridItem} item xs={10} sm={4} md={3}>
              <NoteCard />
            </Grid>
          );
        })}
        <Grid style={{ height: "30vh" }} item xs={12}></Grid>
      </Grid>
    </PerfectScrollbar>
  );
}

export default Main;
