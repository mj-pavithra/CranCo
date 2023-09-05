import React from "react";
import Post from "../components/Post"; // Import any other specific components for the Home page
import MainContainer from "../containers/MainContainer.jsx";
import axios from "axios";


const HomePage = () => {

  const loadFeed = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/posts/feed');
      console.log("Data received:", response.data);
    } catch (error) {
      console.error("Error receiving data:", error);
    }
  };

  loadFeed();

  const imagelist = [
    "/assets/car_img_1.jpg",
    "/assets/car_img_2.jpg",
    "/assets/car_img_3.jpg",
  ];
  if (sessionStorage.getItem("username") == "") {
    window.location.href = "http://localhost:3000/login";
  }
  return (
    <>
      <MainContainer>
        <Post isOwner="no" images={imagelist} />
        <Post isOwner="no" images={imagelist}/>
        <Post isOwner="no" images={imagelist}/>
        <Post isOwner="no" images={imagelist}/>
      </MainContainer>
    </>
  );
};

export default HomePage;
