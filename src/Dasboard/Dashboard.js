import React from "react";
import Main from "./Main/Main";

import BottomBar from "./NavBars/BottomBar";
import TopBar from "./NavBars/TopBar";
import { useAuth } from "../Authentication/AuthContext";
import { Redirect } from "react-router-dom";

function Dashboard() {
  const { currentUser } = useAuth();

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
        <div>
          <BottomBar />
        </div>
        <div>
          <Main />
        </div>
      </div>
    );
  }

  // so that dashboard does not loads for a blink
  return null;
}

export default Dashboard;
