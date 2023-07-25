import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Post from "../components/Post";
import UserSidebar from "../components/UserSidebar";

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
          <div className="div-right"></div>
        </div>
      </body>
    </>
  );
};

export default HomePage;
