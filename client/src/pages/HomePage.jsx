import React, { useState, useEffect, useRef } from "react";
import Post from "../components/Post";
import MainContainer from "../containers/MainContainer.jsx";
import axios from "axios";
import configuredAxios from "../AxiosConfig";
import debounce from "lodash/debounce";
import AddNewUpdate from "../components/AddNewUpdate";

const HomePage = () => {
  const [postData, setPostData] = useState([]);
  const mainContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadFeed = async () => {
      try {
        const response = await configuredAxios.get('/api/posts/feed');
        console.log("Data received:", response.data);
        setPostData(response.data);
      } catch (error) {
        console.error("Error receiving data:", error);
      }
    };

    loadFeed();
  }, []);

  const loadMoreFeed = async () => {
    if (loading) return; // Prevent multiple requests

    try {
      setLoading(true);
      const response = await configuredAxios.get('/api/posts/feed');
      console.log("Additional data received:", response.data);
      setPostData((prevData) => [...prevData, ...response.data]);
    } catch (error) {
      console.error("Error loading more feed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (mainContainerRef.current) {
      const handleScroll = debounce(() => {
        const container = mainContainerRef.current;
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
          loadMoreFeed();
        }
      }, 2000); // Adjust the debounce delay as needed

      const container = mainContainerRef.current;
      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [loadMoreFeed]);

  if (sessionStorage.getItem("username") === "") {
    window.location.href = "http://localhost:3000/login";
  }

  return (
    <>
      <MainContainer ref={mainContainerRef}>
        <div className="add-new-update">
          <AddNewUpdate />
        </div>
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
            id={post.id}
            likeCount={post.likeCount}
          />
        ))}
        {loading && <div>Loading more...</div>}
      </MainContainer>
    </>
  );
};

export default HomePage;
