import { faBookmark, faSquareMinus, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import configuredAxios from "../AxiosConfig";
import "../css/PostMore.css";
import Icon from "./Icon";
import ReportReasonPopUp from "./ReportReasonPopup";
import Cookies from "js-cookie";




const PostMore = ({postUsername, postID, onDeletePost}) => {

  const user_name = Cookies.get("user_name");
  console.log("deleting post owner is  : ", postUsername);
  console.log("Current user id is  : ", user_name);

  const deletePost = async () => {
    console.log("deleting post  : ", postID);
    try {
      const response = await configuredAxios.delete(`/api/v1/auth/posts/delete/${postID}`);
      console.log("Data sent successfully:", response.data);
      onDeletePost(postID);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  

  const [reasonContent, setReasonContent] = useState(false);

  const handleDivClick = () => {
    setReasonContent((reasonContent) => !reasonContent);
  };

  return ( 
    <>
    <div className="popUpContainer">
      <div className="savePost color-white">
        <Icon icon={faBookmark}/>
        <p>Save post</p>
      </div>
      <div className="savePost color-white" onClick={handleDivClick}>
        <Icon icon={faBan}/>
        <p>Report post</p>
        {
          reasonContent && (
            <div className="reasonContent">
              <ReportReasonPopUp/>
            </div>
          )
        }
      </div>
      <div className="savePost color-white">
        <Icon icon={faSquareMinus}/>
        <p>Hide post</p>
      </div>
      {postUsername === user_name && (
  <div className="savePost color-red" onClick={deletePost}>
    <Icon icon={faTrashCan} />
    <p>Delete post</p>
  </div>
)}


    </div>
    </>
   );
}
 
export default PostMore;