import Cookies from "js-cookie";
import React, { useEffect, useState } from "react"; // Import useEffect once
import configuredAxios from "../AxiosConfig";
import AddLostVehicle from "../components/AddLostVehicle";
import AddNewUpdate from "../components/AddNewUpdate";
import "../components/NavigationBar";
import PhotoboothVehicleOwner from "../components/PhotoboothVehicleOwner";
import Post from "../components/Post";
import VehicleAboutOwnersView from "../components/VehicleAboutOwnersView";
import VehiclePageNavbar from "../components/VehiclePageNavbar";
import MainContainer from "../containers/MainContainer";
import "../css/VehiclesPage.css";


const VehiclesPageOwnersView = () => {
  const [postData, setPostData] = useState([]); // Define a state variable to hold the data

  const [divsVisible, setDivsVisible] = useState(false);



  const [changePost, setChangePost] = useState(false);
  useEffect(() => {
    console.log("saved token is : ", Cookies.get("token"));

    const loadFeed = async () => {
      console.log("loading feed");
      try {
        const response = await configuredAxios.get("/api/v1/auth/posts/feed");
        console.log("like count is : ", postData.likeCount);
        console.log("Data received:", response.data);

        setPostData(response.data);
      } catch (error) {
        console.error("Error receiving data:", error);
      }
    };

    loadFeed();
  }, []);

  const [showAddNewUpdate, setShowAddNewUpdate] = useState(true);
  const [showAddLostVehicle, setShowAddLostVehicle] = useState(true);
  
  const handleDeletePost = (postID) => {
    // Implement the logic to update the posts array without the deleted post
    setPostData((prevPosts) =>
      prevPosts.filter((post) => post.postID !== postID)
    );
  };

  const toggleDivsVisibility = () => {
    setShowAddNewUpdate(!showAddNewUpdate);
    setShowAddLostVehicle(!showAddLostVehicle);
  };


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
        
      <button className="lost-btn" onClick={toggleDivsVisibility} >
        Lost vehicle!
      </button>
      <VehicleAboutOwnersView />
      <div className="add-new-update">
        {showAddNewUpdate && <AddNewUpdate type="vehicle update" visibility="public" onClick={toggleDivsVisibility} />}
      </div>
      <div className="add-lost-vehicle" >
        {!showAddLostVehicle && (
          <AddLostVehicle type="lost" visibility="public" onClick={toggleDivsVisibility} />
        )}
      </div>
      </div>
      <div className="Posts">
      {postData.map((post, index) => (
          <Post
            key={index}
            isOwner="no"
            postId={post.postId}
            username={post.username}
            caption={post.caption}
            imageLocations={post.imageLocations}
            images={post.images}
            date={post.date}
            time={post.time}
            likeCount={post.likeCount}
            commentCount={post.commentCount}
            postOwnerID={post.userID}
            onDeletePost={handleDeletePost}
            type={post.type}
          />
        ))}
      </div>
    </MainContainer>
  );
};

export default VehiclesPageOwnersView;
