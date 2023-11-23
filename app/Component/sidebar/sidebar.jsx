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

const Sidebar = () => {
  return (
    <>
      <div>
        <FaUserFriends />
        <SidebarOption active Icon={FaHome} text="Home" />
        <SidebarOption Icon={FaRegUser} text="Profile" />
        <SidebarOption Icon={FaRegBell} text="Notification" />
        <SidebarOption Icon={FaUserFriends} text="Community" />
        <SidebarOption Icon={FaUsers} text="Yard" />
        <SidebarOption Icon={FaSearch} text="Explore" />
        <button className="btn-gist w-full">Gist</button>
      </div>
    </>
  );
};

export default Sidebar;
