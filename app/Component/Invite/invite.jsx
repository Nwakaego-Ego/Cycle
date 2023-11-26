// import React from "react";
// import Image from "next/image";
// export default function invite() {
//   return (
//     <div>
//       <div className="invite_container">
//         <h1>Invitation Request</h1>
//         <div className="invite_container flex">
//           <h2 className="invite_profile">Sport Committee</h2>
//           <Image
//             src="/book.svg"
//             alt="img profile"
//             width={50}
//             height={50}
//             layout="fit"
//             objectFit="cover"
//             className="invite_picture"
//           />
//           <button className="invite_name">Join</button>
//         </div>
//         <div className="invite_container flex">
//           <h2 className="invite_profile">Sport Committee</h2>
//           <Image
//             src="/book.svg"
//             alt="img profile"
//             width={50}
//             height={50}
//             layout="fit"
//             objectFit="cover"
//             className="invite_picture"
//           />
//           <button className="invite_name">Join</button>
//         </div>
//         <div className="invite_container flex">
//           <h2 className="invite_profile">Sport Committee</h2>
//           <Image
//             src="/book.svg"
//             alt="img profile"
//             width={50}
//             height={50}
//             layout="fit"
//             objectFit="cover"
//             className="invite_picture"
//           />
//           <button className="invite_name">Join</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// invite.jsx

import React from "react";
import Image from "next/image";
import "./invite.css";

export default function Invite() {
  const invitation = [
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
