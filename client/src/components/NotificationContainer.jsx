import Notification from "./Notification";
import "../css/Notifications.css";
import { useEffect, useState } from "react";

function NotificationContainer() {
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = () => {
    //backend to fetch notifications from the server
  };
  useEffect(() => {
    fetchNotifications();

    // fetch new data in every 30 seconds
    const intervalId = setInterval(fetchNotifications, 30000);

    // clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <div className="notification-container">
      <div className="container-header">
        <div className="heading-cage">
          <h2>
            <b>Notifications</b>
          </h2>
          <button className="mark-button">Mark all as Read</button>
        </div>
        <div className="link-btn-cage">
          <button className="link-btn">All</button>
          <button className="link-btn">Unread</button>
        </div>
      </div>
      {notifications.length === 0 ? (
        <Notification />
      ) : (
        notifications.map((notification) => (
          <Notification
            key={notification.id}
            image={notification.image}
            text={notification.text}
            time={notification.time}
          />
        ))
      )}
      {/* {notifications.length === 0 ? (
        <Notification />
      ) : (
        notifications.map((notification) => (
          <Notification
            key={notification.id}
            image={notification.image}
            text={notification.text}
            time={notification.time}
          />
        ))
      )}
      {notifications.length === 0 ? (
        <Notification />
      ) : (
        notifications.map((notification) => (
          <Notification
            key={notification.id}
            image={notification.image}
            text={notification.text}
            time={notification.time}
          />
        ))
      )}
      {notifications.length === 0 ? (
        <Notification />
      ) : (
        notifications.map((notification) => (
          <Notification
            key={notification.id}
            image={notification.image}
            text={notification.text}
            time={notification.time}
          />
        ))
      )}
      {notifications.length === 0 ? (
        <Notification />
      ) : (
        notifications.map((notification) => (
          <Notification
            key={notification.id}
            image={notification.image}
            text={notification.text}
            time={notification.time}
          />
        ))
      )} */}
    </div>
  );
}

export default NotificationContainer;
