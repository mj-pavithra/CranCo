import React, { useEffect, useRef, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import NavigationBar from "../components/NavigationBar";
import Post from "../components/Post";
import UserFriends from "../components/UserFriends";
import '../css/UserProfileContainer.css'
import UserVehicles from "../components/UserVehicles";
import { Link } from "react-router-dom";
import LinkToProfile from "../functions/LinkToProfile";
import axios from "axios";
import debounce from "lodash/debounce";
import AddNewUpdate from "../components/AddNewUpdate";
import configuredAxios from "../AxiosConfig";
import Cookies from "js-cookie";


    const userFriendsData = [
        {
        "ProfilePicture": "/assets/profile.jpg",
        "userName": "John Doe",
        "pageImage1": "/assets/page1.jpeg",
        "pageImage2": "/assets/page2.jpeg",
        "pageCount": 3
        },
        {
        "ProfilePicture": "/assets/page3.jpeg",
        "userName": "Jane Smith",
        "pageImage1": "/assets/page3.jpeg",
        "pageImage2": "/assets/page1.jpeg",
        "pageCount": 5
        },
        {
        "ProfilePicture": "/assets/propic4.jpg",
        "userName": "Alex Johnson",
        "pageImage1": "/assets/page2.jpeg",
        "pageImage2": "/assets/page3.jpeg",
        "pageCount": 2
        },
        {
        "ProfilePicture": "/assets/propic5.jpeg",
        "userName": "Mike Smith",
        "pageImage1": "/assets/page1.jpeg",
        "pageImage2": "/assets/page2.jpeg",
        "pageCount": 1
        },
        {
        "ProfilePicture": "/assets/propic3.jpeg",
        "userName": "Mary Jane",
        "pageImage1": "/assets/page3.jpeg",
        "pageImage2": "/assets/page1.jpeg",
        "pageCount": 4
        },
        {
        "ProfilePicture": "/assets/profile.jpg",
        "userName": "John Doe",
        "pageImage1": "/assets/page1.jpeg",
        "pageImage2": "/assets/page2.jpeg",
        "pageCount": 3
        },

    ]

    const vehicleData = [
        {
          vehicleName: "CSA 9234",
          vehicleImage: "/assets/audiA4_face.jpg",
          vehicleModel: "Audi A4"
        },
        {
          vehicleName: "BFD 9234",
          vehicleImage: "/assets/motorbike.jpeg",
          vehicleModel: "BMW GS 1200"
        },
        // Add more objects as needed
      ];
      



const UserProfileContainer = ({data,isOwner}) => {

    const [isFixed, setIsFixed] = useState(false);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);
  
    const handleScroll = () => {
      if (leftColumnRef.current && rightColumnRef.current) {
        const leftColumnRect = leftColumnRef.current.getBoundingClientRect();
        const rightColumnRect = rightColumnRef.current.getBoundingClientRect();
  
        if (leftColumnRect.bottom <= window.innerHeight) {
          setIsFixed(true);
        } else if (rightColumnRect.top >= 0) {
          setIsFixed(false);
        }
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


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
    const handleDeletePost = (postID) => {
      // Implement the logic to update the posts array without the deleted post
      setPostData((prevPosts) =>
        prevPosts.filter((post) => post.postID !== postID)
      );
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
  
    return (
        <>
        <NavigationBar />
        <ProfileCard coverPhoto ={data.coverPhoto} profilePhoto ={data.profilePhoto} editDP ={data.editDP} profileName ={data.profileName} likedPage1 ={data.likedPage1} likedPage2 ={data.likedPage2} likedPage3 ={data.likedPage3} likedPageCount ={data.likedPageCount} RalionshipState ={data.RalionshipState} addFriend ={data.addFriend} isOwner ={isOwner} />
      
        <div className="wallcontainer">
            <div className="leftColumn">
                <div className="leftColumnSubContainer">
                    <div className="leftColumnSubContainerHeader">
                        <p className="leftColumnSubContainerHeaderText">Friends</p>
                        <p className="leftColumnSubContainerHeaderSubText">See more</p>
                    </div>
                    <div className="leftColumnSubContainerBody">
                        {userFriendsData.map((userData, index) => (
                            <Link  to="/user">
                              <UserFriends
                              key={index}
                              ProfilePicture={userData.ProfilePicture}
                              userName={userData.userName}
                              pageImage1={userData.pageImage1}
                              pageImage2={userData.pageImage2}
                              pageCount={userData.pageCount}
                              />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="leftColumnSubContainer">
                    <div className="leftColumnSubContainerHeader">
                        <p className="leftColumnSubContainerHeaderText">Vehicles</p>
                        <p className="leftColumnSubContainerHeaderSubText">See more</p>
                    </div>
                    <div className="leftColumnSubContainerBody2">
                    {vehicleData.map((vehicle, index) => (
                        <Link to="/vehiclespageownersview">
                          <UserVehicles
                            key={index}
                            vehicleName={vehicle.vehicleName}
                            vehicleImage={vehicle.vehicleImage}
                            vehicleModel={vehicle.vehicleModel}
                          />
                        </Link>
                      ))}
                    </div>
                </div>

            </div>
            <div className="rightColumn">
            <div className="add-new-update">
            <AddNewUpdate />
          </div>
            
                <div className="rightColumnSubContainer">
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
                  {loading && <div>Loading more...</div>}   
                </div>
                {loading && <div>Loading more...</div>}
            </div>
        </div>
        </>
    );
    };

    export default UserProfileContainer;