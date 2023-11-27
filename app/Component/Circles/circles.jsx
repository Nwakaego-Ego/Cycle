import React from "react";
import Image from "next/image";
import Request from "../Invite/invite";
import "./circles.css";

const Circles = () => {
  const circles = [
    {
      image: "/meeee.jpeg",
      circle_name: "Book Club",
    },
    {
      image: "/meeee.jpeg",
      circle_name: "Book Club",
    },
    {
      image: "/meeee.jpeg",
      circle_name: "Book Club",
    },
    {
      image: "/meeee.jpeg",
      circle_name: "Book Club",
    },
  ];

  return (
    <div className="circles">
      <h1 className="circles_heading">Circles</h1>

      {circles.map((circle) => {
        return (
          <div key={circle.id}>
            <div className="circles_container">
              <div className="circles_profile_container flex items-center hover:bg-purple-300 transition duration-300 ease-in-out">
                <img
                  src={circle.image}
                  alt={circle.circle_name}
                  className="circle_picture"
                />
                <div className="circle_name">{circle.circle_name}</div>
              </div>
            </div>
          </div>
        );
      })}
      <Request />
    </div>
  );
};

export default Circles;
