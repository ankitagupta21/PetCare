import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar/Sidebar";
import Searchbar from "./Components/Searchbar/Searchbar";
import Dashboard from "./Screens/Dashboard";

function App() {
  return (
    <div class="App">
      <Sidebar />
      <div className="App-right">
        <Searchbar />
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
