
import "../components/NavigationBar";
import VehiclesAbout from "../components/VehicleAbout";
import "../css/VehiclesPage.css";
import Post from "../components/Post";
import Photobooth from "../components/Photobooth";
import MainContainer from "../containers/MainContainer";
import configuredAxios from "../AxiosConfig";
import Cookies from "js-cookie";
import React, { useState, useEffect, useRef } from "react";
const VehiclesPage = () => {

  const [postData, setPostData] = useState([]);
  const mainContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);

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

  console.log("post data is : ", postData);


  const handleDeletePost = (postID) => {
    // Implement the logic to update the posts array without the deleted post
    setPostData((prevPosts) =>
      prevPosts.filter((post) => post.postID !== postID)
    );
  };

  const fetchVehicleAbouts = () => {
    // backend to fetch vehicle abouts
  };

  useEffect(() => {
    fetchVehicleAbouts();
  });

  const fetchVehiclePhotos = () => {
    //backend to fetch vehicle images
  };

  useEffect(() => {
    fetchVehiclePhotos();
  });

  return (
    <MainContainer>
      <div className="photobooth-renderer">
        <Photobooth />
      </div>
      <div className="vehicle-about">
        <VehiclesAbout />
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

export default VehiclesPage;
