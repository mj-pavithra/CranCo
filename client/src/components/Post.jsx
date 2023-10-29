import React, { useRef, useEffect, useState } from "react";
import "../css/Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faX, faHeart } from "@fortawesome/free-solid-svg-icons"
import {
  faPaperPlane,
  faComment as reg_comment,
  faHeart as reg_heart,
  faShareSquare as reg_share,
} from "@fortawesome/free-regular-svg-icons";
import axios from "axios"; // Import Axios
import configuredAxios from "../AxiosConfig";
import { Link } from "react-router-dom";
import LinkToProfile from "../functions/LinkToProfile";
import Carousel from "./Carousel";
import Hr from "./Hr";
import Icon from "./Icon";
import PostMore from "./PostMore";
import Cookies from "js-cookie";

const Post = ({
  isOwner,
  username,
  postId,
  postOwnerID,
  caption,
  imageLocations,
  date,
  images,
  time,
  id,
  likeCount,
}) => {
  const [writeComment, setWriteComment] = useState(false);
  const postUsername = username || "Default Username";
  const captionText = caption || "Default caption text";
  const postDate = date || "January 1, 2023";
  const postTime = time || "12:00 AM";
  const [Comment, setCommentText] = useState("");
  const [contentChanged, setContentChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const commentUsername = username || "Default Username";
  const commentText = caption || "Default caption text";
  const commentDate = date || "January 1, 2023";
  const commentTime = time || "12:00 AM";
console.log("post id ",postId);
console.log("post owner  ",username);
  function appendToLocalhost(arr) {
    // Use the map() function to process each element in the array
    const newArray = arr.map((element) => {
      // Remove square brackets from the file name using a regular expression
      const fileNameWithoutBrackets = element.replace(/[[\] ]/g, "");

      // Append the base URL to the modified file name
      const baseUrl = "http://localhost:8081/api/resources/images/";
      return `${baseUrl}${fileNameWithoutBrackets}`;
    });

    return newArray;
  }
  const handleLike = async () => {
    updateLiked(!liked);

    console.log("Like action triggered", id);
    // Prepare the data to send in the request
    const requestData = {
      userId: Cookies.get("user_id"), // Replace with the actual user ID
      liked: !liked, // Toggle the liked status
      postID: id, // Replace with the actual post ID
    };

    try {
      const response = await configuredAxios.put(
        "/api/posts/liked", // Your backend endpoint
        requestData
      );

      console.log("Like action response:", response.data);
      // You can handle the response from the server here, if needed.
    } catch (error) {
      console.error("Error sending like action:", error);
    }
  };

  const handleCommneting = async () => {
    console.log("Comment action triggered", id);
    // Prepare the data to send in the request
    const requestData = {
      userId: Cookies.get("user_id"), // Replace with the actual user ID
      comment: Comment, // Toggle the liked status
      postID: id, // Replace with the actual post ID
    };

    try {
      const response = await configuredAxios.post(
        "/api/posts/writeComment", // Your backend endpoint
        requestData
      );

      console.log("Comment action response:", response.data);
      // You can handle the response from the server here, if needed.
    } catch (error) {
      console.error("Error sending comment action:", error);
    }
  };

  imageLocations = appendToLocalhost(imageLocations);

  const fallbackImages = [
    "/assets/car_img_1.jpg",
    "/assets/car_img_2.jpg",
    "/assets/car_img_3.jpg",
  ];
  const postImages = imageLocations || fallbackImages;

  const [liked, updateLiked] = useState(false);

  const handleCommentClick = () => {
    setWriteComment((writeComment) => !writeComment);
  };
  const handleCommentTextChange = (event) => {
    setCommentText(event.target.value);
    handleContentChange();
  };
  const handleContentChange = () => {
    setContentChanged(true);
  };

  const [popUp, setPopup] = useState(false);

  const handleMoreClick = () => {
    setPopup((popUp) => !popUp);
  };

  const popupRef = useRef();

  useEffect(() => {
    const handleOutClick = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        setPopup(false);
      }
    };

    document.addEventListener("click", handleOutClick);

    return () => {
      document.addEventListener("click", handleOutClick);
    };
  }, []);

  const [more, setMore] = useState(false);

  const handleDotsClick = () => {
    setMore((more) => !more);
  };

  const moreRef = useRef();

  useEffect(() => {
    const handleOutClick = (event) => {
      if (
        moreRef.current &&
        !moreRef.current.contains(event.target)
      ) {
        setMore(false);
      }
    };

    document.addEventListener("click", handleOutClick);

    return () => {
      document.addEventListener("click", handleOutClick);
    };
  }, []);

  return (
    <>
      <div className="post">
        {/* top section */}
        <div className="post-back">
          <div className="post-header gap-3">
            <Link className="link-unstyled" to={LinkToProfile(isOwner)}>
              <img
                className="post-user-image"
                src="/assets/profile.jpg"
                alt=""
              />
            </Link>
            <div className="d-flex flex-column">
              <Link className="link-unstyled" to="/user">
                <div className="fw-bold">{postUsername}</div>
              </Link>
              <div className="post-time fw-light">
                {postDate} {postTime}
              </div>
              <div className="post-time fw-light">{captionText}</div>
            </div>
          </div>

          <div className="post-header gap-1">
            <div className="popUp-main">
              <div ref={moreRef} className='icon-back-div'>
                <FontAwesomeIcon
                  className={`moreIcon ${popUp ? "active" : ""}`}
                  icon={faEllipsis}
                  onClick={() => handleDotsClick()}
                />
                {more && (
                  <div className="popUp-div">
                    <PostMore postOwnerID={postOwnerID} postID ={postId}  />
                  </div>
                )}
              </div>
            </div>
            <div className="">
              <Icon icon={faX} size={"12px"} />
            </div>
          </div>
        </div>

        <div className="post-text post-padding pt-2 fw-semiBold"> </div>

        {/* image section */}
        <div className="post-image pt-2">
          <Carousel images={postImages} />
        </div>

        <div className="post-back pt-2">
          <div
            className={`post-header align-items-center gap-${liked === true ? "2" : "1"
              }`}
          >
            <div className="post-heart-div">
              <FontAwesomeIcon className="post-heart-icon" icon={faHeart} />
            </div>
            <span className="fw-light txt-09">{`${liked === true ? "You and " : ""
              } ${likeCount} ${liked === true ? " others" : ""}`}</span>
          </div>

          <div className="post-header txt-09 gap-2">
            <div className="">
              <span>5</span> comments
            </div>
          </div>
        </div>

        <div className="post-padding pt-2">
          <Hr />
        </div>

        <div className="post-back pt-2">
          <div
            className="col-4 post-action-div gap-2"
            onClick={() => handleLike()}
          >
            <FontAwesomeIcon
              className={`post-action-icon ${liked === true ? "active" : ""}`}
              icon={liked === true ? faHeart : reg_heart}
            />
            <div className="text-medium">Like</div>
          </div>

          <div
            className="col-4 post-action-div gap-2"
            onClick={handleCommentClick}
          >
            <FontAwesomeIcon className="post-action-icon" icon={reg_comment} />
            <div className="text-medium">Comment</div>
          </div>

          <div className="col-4 post-action-div gap-2">
            <FontAwesomeIcon className="post-action-icon" icon={reg_share} />
            <div className="text-medium">Share</div>
          </div>
        </div>
        <div className="comment-section">
          {writeComment && (
            <div className="post-popup">
              <div>
                <div className="cage-title">
                  <b>Add your thoughts</b>
                </div>
                <textarea
                  className="cage-textarea"
                  placeholder="your expressions will make or brake harts...!" // name should be passed.
                  value={Comment}
                  onChange={handleCommentTextChange}
                />
                <div className="popup-save-btn-division">
                  <button
                    onClick={handleCommneting}
                    className={`create-post-btn-in-popup }`}
                    disabled={isLoading || !contentChanged}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} title="Post" />
                  </button>
                </div>
              </div>
              <div className="d-flex flex-column ">
                <Link className="link-unstyled" to="/user">
                  <div className="fw-bold commentUsename" >{commentUsername}</div>
                </Link>
                <div className="post-time fw-light commentTime">
                  {commentDate} {commentTime}
                </div>
                <div className="post-time fw-light commentText">{commentText}</div>
              </div>
            </div>


          )}
        </div>
      </div>
    </>
  );
};

export default Post;
