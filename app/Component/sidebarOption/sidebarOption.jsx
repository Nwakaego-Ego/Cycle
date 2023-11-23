"use server";
import React from "react";
import "./sidebarOption.css";

const sidebarOption = ({ active, text, Icon }) => {
  const IconComponent = Icon && <Icon />;
  return (
    <>
      <div
        className={`sideBarOptionMain ${active && `sideBarOptionMain--active`}`}
      >
        <div>{IconComponent}</div>
        <h2>{text}</h2>
      </div>
    </>
  );
};

export default sidebarOption;
