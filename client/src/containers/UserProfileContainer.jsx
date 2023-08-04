import React from "react";
import ProfileCard from "../components/ProfileCard";
import NavigationBar from "../components/NavigationBar";
import Post from "../components/Post";
import UserFriends from "../components/UserFriends";
import '../css/UserProfileContainer.css'

const data = {coverPhoto :"/assets/coverphoto.jpeg", 
            profilePhoto:"/assets/profile.jpg", 
            editDP: "/assets/camera-solid.png", 
            profileName : "MJ Pavithra", 
            likedPage1 : "/assets/page1.jpeg", 
            likedPage2 : "/assets/page2.jpeg", 
            likedPage3 : "/assets/page3.jpeg", 
            likedPageCount :"9", 
            RalionshipState:"friend of friend", 
            addFriend : "Add Friend"};

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
        "ProfilePicture": "/assets/propic6.jpeg",
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

const UserProfileContainer = () => {
    return (
        <>
        <NavigationBar />
        <ProfileCard coverPhoto ={data.coverPhoto} profilePhoto ={data.profilePhoto} editDP ={data.editDP} profileName ={data.profileName} likedPage1 ={data.likedPage1} likedPage2 ={data.likedPage2} likedPage3 ={data.likedPage3} likedPageCount ={data.likedPageCount} RalionshipState ={data.RalionshipState} addFriend ={data.addFriend} />
      
        <div className="wallcontainer">
            <div className="leftColumn">
                <div className="leftColumnSubContainer">
                    <div className="leftColumnSubContainerHeader">
                        <p className="leftColumnSubContainerHeaderText">Friends</p>
                        <p className="leftColumnSubContainerHeaderSubText">See more</p>
                    </div>
                    <div className="leftColumnSubContainerBody">
                        {userFriendsData.map((userData, index) => (
                            <UserFriends
                            key={index}
                            ProfilePicture={userData.ProfilePicture}
                            userName={userData.userName}
                            pageImage1={userData.pageImage1}
                            pageImage2={userData.pageImage2}
                            pageCount={userData.pageCount}
                            />
                        ))}
                    </div>
                </div>

            </div>
            <div className="rightColumn">
            
            <div className="rightColumnSubContainer">
                <Post/>
            </div>
            <div className="rightColumnSubContainer">
                <Post/>
            </div>
                
            </div>
        </div>
        </>
    );
    };

    export default UserProfileContainer;