<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Post from "../components/Post";
import UserSidebar from "../components/UserSidebar";
import RightColSubContainer from "../components/rightColSubContainer";

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

 
    const pagesData = [
      { name: 'Page 1', imgUrl: '/assets/audir8.jpeg' },
      { name: 'Page 2', imgUrl: '/assets/audir8.jpeg' },
      { name: 'Page 3', imgUrl: '/assets/audir8.jpeg' },
      { name: 'Page 4', imgUrl: '/assets/audir8.jpeg' },
      { name: 'Page 5', imgUrl: '/assets/audir8.jpeg' },
      { name: 'Page 6', imgUrl: '/assets/audir8.jpeg' },
      
    ];

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
          <RightColSubContainer containerTitle="Pages" Items={pagesData} btnTxt="Create Page" />
            <RightColSubContainer containerTitle="Trending" Items={pagesData} btnTxt= ""  />
          </div>
        </div>
      </body>
=======
// HomePage.jsx
import React from "react";
import Post from "../components/Post"; // Import any other specific components for the Home page
import MainContainer from "../containers/MainContainer.jsx";

const HomePage = () => {
  return (
    <>
      <MainContainer>
        <Post />
      </MainContainer>
>>>>>>> b050524d184a12b80d3adf7ca35963e6adbdf326
    </>
  );
};

export default HomePage;
