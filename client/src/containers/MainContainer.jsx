// MainContainer.jsx
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import UserSidebar from "../components/UserSidebar";
import Pages from "../components/Pages";

const MainContainer = (props) => {
  const [userData, setUserData] = useState({
    image: "",
    username: "",
  });

  const fetchUserData = () => {
    // Simulating the backend API call to fetch user data
    setTimeout(() => {
      setUserData({
        image: "/girl.png",
        username: "Kaveesha Gunawardana",
      });
    }, 1000); // Delay of 1 second to simulate the API call
  };

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
            {props.children}
            {/* The div-middle content will be handled by React Router */}
          </div>
          <div className="div-right">
            <Pages />
          </div>
        </div>
      </body>
    </>
  );
};

export default MainContainer;
