import React, { useState, useEffect } from "react"; // Import useEffect once
import "../components/NavigationBar";
import "../css/VehiclesPage.css";
import Post from "../components/Post";
import PhotoboothVehicleOwner from "../components/PhotoboothVehicleOwner";
import MainContainer from "../containers/MainContainer";
import VehicleAboutOwnersView from "../components/VehicleAboutOwnersView";
import AddNewUpdate from "../components/AddNewUpdate";
import axios from "axios";
import VehiclePageNavbar from "../components/VehiclePageNavbar";

const VehiclesPageOwnersView = () => {
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

  const fetchVehicleAbouts = () => {
    // backend to fetch vehicle abouts
  };

  useEffect(() => {
    fetchVehicleAbouts();
  }, []); // Add an empty dependency array to ensure it runs only once

  const fetchVehiclePhotos = () => {
    //backend to fetch vehicle images
  };

  useEffect(() => {
    fetchVehiclePhotos();
  }, []); // Add an empty dependency array to ensure it runs only once

  return (
    <MainContainer>
      <div className="vehiclepage-navbar">
        <VehiclePageNavbar />
      </div>
      <div className="photobooth-renderer">
        <PhotoboothVehicleOwner />
      </div>
      <div className="vehicle-about">
        <VehicleAboutOwnersView />
      </div>
      <div className="add-new-update">
        <AddNewUpdate />
      </div>
      <div className="Posts">
      {postData.map((post, index) => (
        <Post
          key={index}
          isOwner="no"
          username={post.username}
          caption={post.caption}
          imageLocations={post.imageLocations}
          images={post.images}
          date={post.date}
          time={post.time}
        />
      ))}
      </div>
    </MainContainer>
  );
};

export default VehiclesPageOwnersView;
