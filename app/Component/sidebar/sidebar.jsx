"use server";
import React from "react";
import {
  FaUserFriends,
  FaHome,
  FaSearch,
  FaRegBell,
  FaRegUser,
  FaUsers,
} from "react-icons/fa";
import SidebarOption from "../sidebarOption/sidebarOption";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div>
        <FaUserFriends className="logo" />
        <SidebarOption active Icon={FaHome} text="Home" />
        <SidebarOption Icon={FaRegUser} text="Profile" />
        <SidebarOption Icon={FaRegBell} text="Notification" />
        <SidebarOption Icon={FaUserFriends} text="Circle" />
        <SidebarOption Icon={FaUsers} text="Yard" />
        <SidebarOption Icon={FaSearch} text="Entangle" />
        <button className="btn-gist w-full">Buzz</button>
      </div>
    </>
  );
};

export default Sidebar;
