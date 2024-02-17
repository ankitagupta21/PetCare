import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";

import Sidebar from "./Components/Sidebar/Sidebar";
import SidebarMobile from "./Components/Sidebar/SidebarMobile";
import Searchbar from "./Components/Searchbar/Searchbar";
import Dashboard from "./Screens/Dashboard";
import PetProfile from "./Screens/PetProfile";
import Documentation from "./Screens/Documentation";
import Settings from "./Screens/Settings";
import Health from "./Screens/Health";
import Chat from "./Screens/Chat";
import Schedule from "./Screens/Schedule";
import Logout from "./Screens/Logout";
import Appointment from "./Screens/Appointment";

function App() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div class="App">
      {isMobile ? <SidebarMobile /> : <Sidebar />}
      <div className="App-right">
        <Searchbar />
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          <Route path="/pet-profile" element={<PetProfile />}></Route>
          <Route path="/documentation" element={<Documentation />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/health-monitoring" element={<Health />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/vaccination-schedule" element={<Schedule />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
