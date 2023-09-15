import React, { useRef, useEffect, useState } from "react";
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
import PostMore from "./PostMore";

const Post = (isOwner) => {
  const images = [
    "/assets/car_img_1.jpg",
    "/assets/car_img_2.jpg",
    "/assets/car_img_3.jpg",
  ];

  const [liked, updateLiked] = useState(false);

  const handleLike = () => {
    updateLiked(!liked);
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
                <div className="fw-bold">
                  {sessionStorage.getItem("username")
                    ? sessionStorage.getItem("username")
                    : "Sanduni Nimsara"}
                </div>
              </Link>
              <div className="post-time fw-light">just now</div>
            </div>
          </div>

          <div className="post-header gap-1">
            <div className="popUp-main">
              <div ref={popupRef} className='icon-back-div'>
                <FontAwesomeIcon
                  className={`moreIcon ${popUp ? "active" : ""}`}
                  icon={faEllipsis}
                  onClick={() => handleMoreClick()}
                />
                {popUp && (
                  <div className="popUp-div">
                    <PostMore />
                  </div>
                )}
              </div>
            </div>
            <div className="">
              <Icon icon={faX} size={"12px"} />
            </div>
          </div>
        </div>

        {/* post cacpiton */}
        <div className="post-text post-padding pt-2 fw-semiBold"> </div>

        {/* image section */}
        <div className="post-image pt-2">
          <Carousel images={images} />
        </div>

        <div className="post-back pt-2">
          <div
            className={`post-header align-items-center gap-${
              liked === true ? "2" : "1"
            }`}
          >
            <div className="post-heart-div">
              <FontAwesomeIcon className="post-heart-icon" icon={faHeart} />
            </div>
            <span className="fw-light txt-09">{`${
              liked === true ? "You and " : ""
            } 13 ${liked === true ? " others" : ""}`}</span>
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
