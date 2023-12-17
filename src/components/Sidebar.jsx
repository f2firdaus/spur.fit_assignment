import React from "react";
import circle from "../assets/circle.png";
import { FiHome, FiBriefcase } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { LuFileSpreadsheet } from "react-icons/lu";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="navbar">
        <div className="circle_logo">
          <img src={circle} alt="circle" width={60} />
        </div>
        <div className="icons">
          <span>
            <FiHome className="home_icons" />
          </span>
          <span>
            <AiOutlineMessage />
          </span>
          <span>
            <FiBriefcase />
          </span>
          <span>
            {" "}
            <LuFileSpreadsheet />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
