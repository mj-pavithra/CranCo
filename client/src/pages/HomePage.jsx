import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import MainContainer from "../containers/MainContainer.jsx";
import axios from "axios";

const HomePage = () => {
  const [postData, setPostData] = useState([]); // Define a state variable to hold the data

  useEffect(() => {
    const loadFeed = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/posts/feed');
        console.log("Data received:", response.data);
        setPostData(response.data); // Set the received data in the state
      } catch (error) {
        console.error("Error receiving data:", error);
      }
    };

    loadFeed();
  }, []);

  const imagelist = [
    "/assets/car_img_1.jpg",
    "/assets/car_img_2.jpg",
    "/assets/car_img_3.jpg",
  ];

  if (sessionStorage.getItem("username") === "") {
    window.location.href = "http://localhost:3000/login";
  }

  return (
    <>
      <MainContainer>
        {/* Render Post components based on the data */}
        {postData.map((post, index) => (
          <Post
            key={index}
            isOwner="no"
            username={post.username}
            caption={post.caption}
            imageLocations={post.imageLocations}
            images = {post.images}
            date={post.date}
            time={post.time}
          />
        ))}
      </MainContainer>
    </>
  );
};

export default HomePage;
