import React from "react";
import Post from "../components/Post"; // Import any other specific components for the Home page
import MainContainer from "../containers/MainContainer.jsx";

const HomePage = () => {
  return (
    <>
      <MainContainer>
        <Post />
      </MainContainer>
    </>
  );
};

export default HomePage;