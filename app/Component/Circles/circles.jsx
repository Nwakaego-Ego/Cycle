import React from "react";
import Image from "next/image";
import Request from "../Invite/invite";
import "./circles.css";

const Circles = () => {
  return (
    <div className="circles">
      <h1 className="circles_heading">Circles</h1>
      <div className="circles_container">
        <div className="circles_profile_container flex items-center hover:bg-purple-300 transition duration-300 ease-in-out">
          <Image
            src="/book.svg"
            alt="img profile"
            width={50}
            height={50}
            layout="fit"
            objectFit="cover"
            className="circle_picture"
          />
          <button className="circle_name">Book Club</button>
        </div>
        <div className="circles_profile_container flex items-center hover:bg-purple-300 transition duration-300 ease-in-out">
          <Image
            src="/gist.svg"
            alt="img profile"
            width={50}
            height={50}
            layout="fit"
            objectFit="cover"
            className="circle_picture"
          />
          <button className="circle_name">What in the World</button>
        </div>
        <div className="circles_profile_container flex items-center hover:bg-purple-300 transition duration-300 ease-in-out">
          <Image
            src="/coffee.svg"
            alt="img profile"
            width={50}
            height={50}
            layout="fit"
            objectFit="cover"
            className="circle_picture"
          />
          <button className="circle_name">Coffee Chat</button>
        </div>
        <div className="circles_profile_container flex items-center hover:bg-purple-300 transition duration-300 ease-in-out">
          <Image
            src="/pizza.svg"
            alt="img profile"
            width={50}
            height={50}
            layout="fit"
            objectFit="cover"
            className="circle_picture"
          />
          <button className="circle_name">Lunch Hangout</button>
        </div>
      </div>
      <Request />
    </div>
  );
};

export default Circles;
