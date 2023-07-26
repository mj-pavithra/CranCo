import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Post from "../components/Post";
import UserSidebar from "../components/UserSidebar";
import Pages from "../components/Pages";
import NotificationContainer from "../components/NotificationContainer";

const HomePage = () => {
  const [userData, setUserData] = useState({
    image: "",
    username: "",
  });
  const fetchUserData = () => {
    // backend to fetch user data
    setUserData({
      image: "/girl.png",
      username: "Kaveesha Gunawardana",
    });
  };

  // fetch user data when component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <NavigationBar />
      <body>
        <div className="div-1">
          <div className="div-left">
            <UserSidebar image={userData.image} username={userData.username} />
          </div>
          <div className="div-middle">
            <Post />
          </div>
          <div className="div-right">
            <Pages />
            <br />
            <NotificationContainer />
          </div>
        </div>
      </body>
    </>
  );
};

export default HomePage;
