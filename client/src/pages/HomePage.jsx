import React from "react";
import NavigationBar from "../components/NavigationBar";
import Post from '../components/Post'

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <body>
        <div className='div-1'>
          <div className='div-left'></div>
          <div className='div-middle'>
            <Post />
          </div>
          <div className='div-right'></div>
        </div>
      </body>
    </>
  );
};

export default HomePage;
