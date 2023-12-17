import React from "react";
import { FiSearch } from "react-icons/fi";
import frame from "../assets/Frame.png";
import profile from "../assets/profile.png";
import chat from '../assets/Chat_Sparkle.png'
const Headers = () => {
  return (
    <>
      <div className="header">
        <div className="header_home">
          <span>Home</span>
        </div>
        <div className="home_search">
          <span className="search_icons">
            <FiSearch />
          </span>
          <input
            type="search"
            className="search_input"
            placeholder="Search anything"
          />
        </div>
        <div className="header_profile">
          <img className="frame" src={frame} alt="" />

          <button className="btn_copilot"> <img src={chat} alt="chat" /> Ask Copilot</button>
          <img className="img_profile" src={profile} alt="profile" width={44} />
        </div>
      </div>
    </>
  );
};

export default Headers;
