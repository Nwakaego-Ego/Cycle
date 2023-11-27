import React from "react";
import Image from "next/image";
import Post from "../Post/post";
import "./feed.css";

const feed = () => {
  const feed = [
    {
      buzz: "Computer science is the study of information and how you represent it and process it Computational thinking is the application of idea from computer science to problems of interest to you , be it humanitarian or hospitality. ",
      image: "/meeee.jpeg",
    },
  ];
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
        <Post />
      </div>
    </>
  );
};

export default feed;
