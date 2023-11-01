import React, {useState} from "react";
import "../css/ProfileCards.css";
import { Link } from "react-router-dom";
import UpdateCoverPhoto from "./UpdateCoverPhoto";
import UpdateProPic from "./UpdateProPic";
import Cookies from "js-cookie";
import configuredAxios from "../AxiosConfig";
import { useEffect } from "react";


const ProfileCard = ({ coverPhoto,profilePhoto,  editDP, profileName, likedPage1, likedPage2, likedPage3, likedPageCount, RalionshipState, addFriend , isOwner }) => {
    
    const [coverPhotoPrepared, setCoverPhotoPrepared] = useState("");
    const [proPicPrepared, setproPicPrepared] = useState("");

const getCoverPhoto = async () => {
  const email = Cookies.get("user_email");
  const getCoverPhoto = await configuredAxios.get(`/api/v1/auth/users/getCoverPhoto?email=${email}`);
  console.log(getCoverPhoto.data); 
  const coverPhotoDy = getCoverPhoto.data;

  function appendToLocalhost(coverPhotoDy) {
    // Use the map() function to process each element in the array
    // Remove square brackets from the file name using a regular expression
    const fileNameWithoutBrackets = coverPhotoDy.replace(/[[\] ]/g, "");

    // Append the base URL to the modified file name
    const baseUrl = "http://localhost:8081/api/resources/images/";
    return `${baseUrl}${fileNameWithoutBrackets}`;
  }

  const preparedCoverPhoto = appendToLocalhost(coverPhotoDy);
  setCoverPhotoPrepared(preparedCoverPhoto); // Update state with the prepared cover photo
  console.log(preparedCoverPhoto);
};

useEffect(() => {
  getCoverPhoto(); // Call the function when the component mounts
}, []); // Empty dependency array to mimic componentDidMount behavior

const getProPic = async () => {
    const email = Cookies.get("user_name");
    const getProPic = await configuredAxios.get(`/api/v1/auth/users/getProPic?email=${email}`);
    console.log(getProPic.data);
    const proPicDy = getProPic.data;
    function appendToLocalhost(proPicDy) {
        
        const fileNameWithoutBrackets = proPicDy.replace(/[[\] ]/g, "");
    
        // Append the base URL to the modified file name
        const baseUrl = "http://localhost:8081/api/resources/images/";
        return `${baseUrl}${fileNameWithoutBrackets}`;
      }
      const preparedProPic = appendToLocalhost(proPicDy);
        setproPicPrepared(preparedProPic); // Update state with the prepared cover photo
        console.log(preparedProPic);

    };

    
useEffect(() => {
    getProPic(); // Call the function when the component mounts
  }, []); 

    const onError = (originalImg) => {
        const altImg = "/assets/alt-image.jpeg";
      if (originalImg === null || originalImg === "") {
        return altImg;
      }
      return originalImg;
    };

    const [coverPhotoUploaderVisible, setCoverPhotoUploaderVisible] = useState(false);
    

    const handleCoverPhotoUploader = () => {
        setCoverPhotoUploaderVisible(!coverPhotoUploaderVisible);
    }
    const [proPicUploaderVisible, setProPicUploaderVisible] = useState(false);

    const handleProPicUploader = () => {
        setProPicUploaderVisible(!proPicUploaderVisible);
    }
  
    return (
   <div className="profileCard">
       <div className="profileCardtop">
           <img className="coverPhoto" alt="Error" src={onError(coverPhotoPrepared)} />
           {isOwner || (
               <div>
                   <button onClick={handleCoverPhotoUploader} className="editcp">Update cover photo</button>
                   {coverPhotoUploaderVisible && (
                       <div className="updateCoverPhoto">
                           <UpdateCoverPhoto />
                       </div>
                   )}
               </div>
           )}
       </div>
    <div className="profileCardmiddle">
        <img className="profilePhoto" src={onError(proPicPrepared)}/>
        {isOwner || 
            (<div>
                <img onClick={handleProPicUploader} className="editDP" alt="Error" src={onError(editDP)}/>
                {proPicUploaderVisible && (
                    <div className="updateProPic">
                        <UpdateProPic />
                    </div>
                )}
            </div>
        )}
    </div>
    <div className="profileCardbottom">
        <h1 className="profileName">{profileName} </h1>
        <div classname="pages">
            <img className="likedPage1" alt="Error" src={onError(likedPage1)}/>
            <img className="likedPage1 lp2" alt="Error" src={onError(likedPage2)}/>
            <Link to="/vehicles" style={{ textDecoration: "none", color: "inherit" }}>
              <img className="likedPage1 lp3" alt="Error" src={onError(likedPage3)}/>
            </Link>
            <h3 className="likedPageCount">{likedPageCount} Souls following</h3>
        </div>
        {isOwner && <h3 className="RalionshipState">{RalionshipState}</h3>}
        {isOwner && <button className="addFriend">{addFriend}</button>}
    </div>
   </div>
  );
};

export default ProfileCard;