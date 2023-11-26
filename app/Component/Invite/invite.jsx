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
  return (
    <div>
      <div className="invite_container">
        <h1>Invitation Request</h1>
        <div className="flex invite-flex-container">
          <Image
            src="/book.svg"
            alt="img profile"
            width={50}
            height={50}
            layout="fit"
            objectFit="cover"
            className="invite_picture"
          />
          <h2 className="invite_profile">Sport Committee</h2>
          <button className="invite_btn">Join</button>
        </div>
        <div className="flex invite-flex-container">
          <div className="invite-picture-container">
            <Image
              src="/book.svg"
              alt="img profile"
              width={50}
              height={50}
              layout="fit"
              objectFit="cover"
              className="invite_picture"
            />
          </div>
          <h2 className="invite_profile">Sport Committee</h2>
          <button className="invite_btn">Join</button>
        </div>
        <div className="flex invite-flex-container">
          <Image
            src="/book.svg"
            alt="img profile"
            width={50}
            height={50}
            layout="fit"
            objectFit="cover"
            className="invite_picture"
          />
          <h2 className="invite_profile">Sport Committee</h2>
          <button className="invite_btn">Join</button>
        </div>
      </div>
    </div>
  );
}
