import "../css/Notifications.css";

function Notification({ image, text, time }) {
  //dummy data for styling :)
  const dummyImage = "/girl.png";
  const dummyText =
    "I am a notification. Do you know how important I am? No?? Then get to know about it! Ha haha!!";
  const dummyTime = "March 10, at 12.03PM";
  return (
    <>
      <a className="notification-link" href="">
        <div className="notification">
          <img
            className="profile-image"
            src={image || dummyImage}
            alt="profile pic"
          />
          <div className="message-time">
            <p className="notification-text">{text || dummyText}</p>
            <p className="time">{time || dummyTime}</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default Notification;
