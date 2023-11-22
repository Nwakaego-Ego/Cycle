"use server";
import React from "react";
import "./sidebarOption.css";

const sidebarOption = ({ text, Icon }) => {
  const IconComponent = Icon && <Icon />;
  return (
    <>
      <div className="sideBarOptionMain">
        <div>{IconComponent}</div>
        <div>{text}</div>
      </div>
    </>
  );
};

export default sidebarOption;
