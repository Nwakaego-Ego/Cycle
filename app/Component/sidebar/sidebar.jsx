"use server";
import React from "react";
import {
  FaUserFriends,
  FaHome,
  FaSearch,
  FaNotificationIcon,
  FaCommunity,
} from "react-icons/fa";
import SidebarOption from "../sidebarOption/sidebarOption";

const Sidebar = () => {
  return (
    <>
      <div>
        <FaUserFriends />
        <SidebarOption Icon={FaHome} text="Home" />
        <SidebarOption Icon={FaHome} text="Profile" />
        <SidebarOption Icon={FaHome} text="Notification" />
        <SidebarOption Icon={FaHome} text="Community" />
        <SidebarOption Icon={FaHome} text="Yard" />
        <SidebarOption Icon={FaSearch} text="Explore" />
      </div>
    </>
  );
};

export default Sidebar;
