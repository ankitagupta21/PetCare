import React from "react";
import "./Searchbar.css";

import { TbSearch } from "react-icons/tb";
import { BsQuestionOctagon } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";

function Searchbar() {
  return (
    <div className="Searchbar-Container">
      <div className="Searchbar-div">
        <div className="Searchbar-Icon">
          <TbSearch />
        </div>
        <input type="text" className="Searchbar-Input" placeholder="Search" />
      </div>
      <div className="Searchbar-right">
        <div className="Searchbar-Icon">
          <BsQuestionOctagon />
        </div>
        <div className="Searchbar-Icon">
          <IoNotificationsOutline />
        </div>
        <div className="Widget">
          <p>Add Widget</p>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
