import React from "react";

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
    </div>
  );
}

export default Dashboard;
