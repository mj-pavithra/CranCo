// import "../css/Notifications.css";

// function Notification({ image, text, time }) {
//   //dummy data for styling :)
//   const dummyImage = "/girl.png";
//   const dummyText =
//     "I am a notification. Do you know how important I am? No?? Then get to know about it! Ha haha!!";
//   const dummyTime = "March 10, at 12.03PM";
//   return (
//     <>
//       <a className="notification-link" href="">
//         <div className="notification">
//           <img
//             className="profile-image"
//             src={image || dummyImage}
//             alt="profile pic"
//           />
//           <div className="message-time">
//             <p className="notification-text">{text || dummyText}</p>
//             <p className="time">{time || dummyTime}</p>
//           </div>
//         </div>
//       </a>
//     </>
//   );
// }

// export default Notification;


import React, { useEffect, useState } from "react";
import "../css/Notifications.css";

function Notification({ image, text, time }) {
  const [notificationData, setNotificationData] = useState({
    image: "/girl.png",
    text:
      "I am a notification. Do you know how important I am? No?? Then get to know about it! Ha haha!!",
    time: "March 10, at 12.03PM",
  });

  useEffect(() => {
    // Fetch notification data from your JSON object or API
    // Replace this with your actual data fetching logic
    // Example: const fetchData = async () => {...}
    // fetchData().then(data => setNotificationData(data));
  }, []);

  return (
    <>
      <a className="notification-link" href="">
        <div className="notification">
          <img
            className="profile-image"
            src={notificationData.image || image}
            alt="profile pic"
          />
          <div className="message-time">
            <p className="notification-text">{notificationData.text || text}</p>
            <p className="time">{notificationData.time || time}</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default Notification;
