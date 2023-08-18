// MainContainer.jsx
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import UserSidebar from "../components/UserSidebar";
import RightColSubContainer from "../components/rightColSubContainer";
import "../css/MainContainer.css";
import PopupDivFull from "../components/PopupDivFull";

const MainContainer = (props) => {
  const [userData, setUserData] = useState({
    image: "",
    username: "",
  });
  const pagesData = [
    { name: "Page 1", imgUrl: "/assets/audir8.jpeg", linkto: "/vehiclespageownersview" },
    { name: "Page 2", imgUrl: "/assets/audir8.jpeg", linkto: "/vehiclespageownersview" },
    { name: "Page 3", imgUrl: "/assets/audir8.jpeg", linkto: "/vehiclespageownersview" },
    { name: "Page 4", imgUrl: "/assets/audir8.jpeg", linkto: "/vehiclespageownersview" },
    { name: "Page 5", imgUrl: "/assets/audir8.jpeg", linkto: "/vehiclespageownersview" },
    { name: "Page 6", imgUrl: "/assets/audir8.jpeg", linkto: "/vehiclespageownersview" },
  ];

  const fetchUserData = () => {
    // Simulating the backend API call to fetch user data
    setTimeout(() => {
      setUserData({
        image: "/assets/propic6.jpeg",
        username: "Manoj Pavithra",
      });
    }, 1000); // Delay of 1 second to simulate the API call
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const [theme, setTheme] = useState("Light");

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
            <RightColSubContainer
              containerTitle="My Souls"
              Items={pagesData}
              btnTxt="Add Soul"
            />
            <RightColSubContainer
              containerTitle=" Hot topics"
              Items={pagesData}
              btnTxt=""
            />
          </div>
        </div>
      </body>
    </>
  );
};

export default MainContainer;