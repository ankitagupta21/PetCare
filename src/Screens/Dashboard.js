import React from "react";
import "./Dashboard.css";

import ProgressChart from "../Components/ProgressChart/ProgressChart";
import Schedule from "../Components/Schedule/Schedule";
import HealthChart from "../Components/HealthChart/HealthChart";
import Chats from "../Components/Chats/Chats";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="Dashboard-Left">
        <ProgressChart />
        <HealthChart />
      </div>
      <div className="Dashboard-Right">
        <Schedule />
        <Chats />
      </div>
    </div>
  );
}

export default Dashboard;
