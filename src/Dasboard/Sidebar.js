import React from "react";
import clsx from "clsx";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import MenuIcn from "../assets/menu.png";
import NoteCard from "./Main/Notes/NoteCard";
import SideBarCard from "./Main/Notes/SideBarCard";

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
});

export default function SideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

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
        <SideBarCard Heading="vaibhavsanjay@gmail.com" Sender="Heading" />
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
