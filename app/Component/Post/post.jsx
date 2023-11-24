import React from "react";
import Image from "next/image";
import "./post.css";

export default function post() {
  return (
    <div className="post">
      <div className="post_main">
        <div className="profile_post">
          <Image
            src="/meeee.jpeg"
            alt="img profile"
            width={300}
            height={200}
            layout="fit"
            objectFit="cover"
            className="post_profile_picture"
          />
        </div>
        <div className="user_name">Kaego</div>
      </div>
      <p className="post_chat">
        burnout was the eventaulity, if i hadnt reevaluate how i study and
        skill, i had to incorporate the mini project series, that sent a
        different signal to my brian, like a early gratification, for every
        project i was able to finish, felt like a win , give me a good chill and
        sent a euphria of neurone jumping inside of me.
      </p>
      <div className="post_img_container">
        <Image
          src="/meeee.jpeg"
          alt="img profile"
          width={410}
          height={200}
          layout="fit"
          objectFit="cover"
          className="post_img"
        />
      </div>
    </div>
  );
}
