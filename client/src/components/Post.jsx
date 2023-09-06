import React, { useState } from "react";
import "../css/Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faX, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as reg_heart,
  faComment as reg_comment,
  faShareSquare as reg_share,
} from "@fortawesome/free-regular-svg-icons";
import Icon from "./Icon";
import Carousel from "./Carousel";
import Hr from "./Hr";
import { Link } from "react-router-dom";
import LinkToProfile from "../functions/LinkToProfile";

const Post = ({
  isOwner,
  username,
  caption,
  imageLocations,
  date,
  time,
}) => {
  const postUsername = username || "Default Username";
  const captionText = caption || "Default caption text";
  const postDate = date || "January 1, 2023";
  const postTime = time || "12:00 AM";

  const fallbackImages = [
    "/assets/car_img_1.jpg",
    "/assets/car_img_2.jpg",
    "/assets/car_img_3.jpg",
  ];
  const postImages = imageLocations || fallbackImages;

  const [liked, updateLiked] = useState(false);

  const handleLike = () => {
    updateLiked(!liked);
  };

  return (
    <>
      <div className="post">
        {/* top section */}
        <div className="post-back">
          <div className="post-header gap-3">
            <Link className="link-unstyled" to={LinkToProfile(isOwner)}>
              <img className="post-user-image" src="/assets/profile.jpg" alt="" />
            </Link>
            <div className="d-flex flex-column">
              <Link className="link-unstyled" to="/user">
                <div className="fw-bold">{postUsername}</div>
              </Link>
              <div className="post-time fw-light">{postDate} {postTime}</div>
              <div className="post-time fw-light">{captionText}</div>
            </div>
          </div>

          <div className="post-header gap-1">
            <div className="">
              <Icon icon={faEllipsis} size={"12px"} />
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
          <div className={`post-header align-items-center gap-${liked === true ? "2" : "1"}`}>
            <div className="post-heart-div">
              <FontAwesomeIcon className="post-heart-icon" icon={faHeart} />
            </div>
            <span className="fw-light txt-09">{`${liked === true ? "You and " : ""} 13 ${liked === true ? " others" : ""}`}</span>
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
          <div className="col-4 post-action-div gap-2" onClick={() => handleLike()}>
            <FontAwesomeIcon className={`post-action-icon ${liked === true ? "active" : ""}`} icon={liked === true ? faHeart : reg_heart} />
            <div className="text-medium">Like</div>
          </div>

          <div className="col-4 post-action-div gap-2">
            <FontAwesomeIcon className="post-action-icon" icon={reg_comment} />
            <div className="text-medium">Comment</div>
          </div>

          <div className="col-4 post-action-div gap-2">
            <FontAwesomeIcon className="post-action-icon" icon={reg_share} />
            <div className="text-medium">Share</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
