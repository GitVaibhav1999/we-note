import React from "react";
import Main from "./Main/Main";

import BottomBar from "./NavBars/BottomBar";
import TopBar from "./NavBars/TopBar";

function Dashboard() {
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

export default Dashboard;
