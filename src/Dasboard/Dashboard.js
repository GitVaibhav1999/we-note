import React from "react";
import Main from "./Main/Main";
import firebase from "firebase";
import Toggle from "../Dasboard/Toggle";
import BottomBar from "./NavBars/BottomBar";
import TopBar from "./NavBars/TopBar";

import { useAuth } from "../Authentication/AuthContext";
import { Redirect } from "react-router-dom";
import { useData } from "../Context";
import MainCollab from "./Main/MainCollab";

function Dashboard() {
  const { currentUser, isNewUser } = useAuth();
  const { addUserDocument } = useData();
  const [stateChecked, setCheckedState] = React.useState(false);

  // if user is not logged in, redirect to signup page
  if (currentUser === null) {
    return <Redirect to="/signUp" />;
  }

  if (currentUser != null) {
    return (
      <div style={{ backgroundColor: "#F7FFF7" }}>
        <div>
          <TopBar />
        </div>
        <Toggle stateChecked={stateChecked} setCheckedState={setCheckedState} />
        <div>
          <BottomBar />
        </div>

        <div>{stateChecked == false ? <Main /> : <MainCollab />}</div>
      </div>
    );
  }

  // so that dashboard does not loads for a blink
  return null;
}

export default Dashboard;
