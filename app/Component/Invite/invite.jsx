import React from "react";
import Image from "next/image";
import "./invite.css";

export default function Invite() {
  const invitation = [
    {
      image: "/meeee.jpeg",
      title: "Home School",
      btn: "Join",
    },
    {
      image: "/book.svg",
      title: "Home School",
      btn: "Join",
    },
    {
      image: "/book.svg",
      title: "Home School",
      btn: "Join",
    },
  ];

  return (
    <div>
      <div className="invite_container">
        <h1>Invitation Request</h1>

        {invitation.map((invite) => {
          return (
            <div key={invite.id}>
              <div className="flex invite-flex-container mb-4">
                <img
                  src={invite.image}
                  alt={invite.title}
                  className="invite_picture"
                />
                <h2 className="invite_profile ">{invite.title}</h2>
                <button className="invite_btn">{invite.btn}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
