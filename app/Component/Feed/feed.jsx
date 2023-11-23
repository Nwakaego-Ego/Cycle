import React from "react";
import Image from "next/image";
import "./feed.css";

const feed = () => {
  return (
    <>
      <div className="feed">
        <div className="feed_header">
          <div className="flex">
            <div className="profile_container">
              <Image
                src="/meeee.jpeg"
                alt="img profile"
                width={50}
                height={50}
                layout="fit"
                objectFit="cover"
                className="profile_picture"
              />
              <div className="profile_name">Kaego</div>
            </div>
            <div className="profile_container">
              <Image
                src="/meeee.jpeg"
                alt="img profile"
                width={50}
                height={50}
                layout="fit"
                objectFit="cover"
                className="profile_picture"
              />
              <div className="profile_name">Kaego</div>
            </div>
            <div className="profile_container">
              <Image
                src="/meeee.jpeg"
                alt="img profile"
                width={50}
                height={50}
                layout="fit"
                objectFit="cover"
                className="profile_picture"
              />
              <div className="profile_name">Kaego</div>
            </div>
          </div>
        </div>
        <div className="feed_content">
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
          <div>feed</div>
        </div>
      </div>
    </>
  );
};

export default feed;
