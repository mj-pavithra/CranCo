import "../css/Review.css";
import React, { useState } from 'react';
import StarRating from "./StarRating";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Review = ({userProfileImage, userName, userRate, userDuty, userComment, dateTime}) => {

    const fontsize = "12px"

    const [count, setCount] = useState(0);

    const handleLikeClick = () => {
        setCount(count + 1);
    };

    return ( 
        <>
            <div className="reviewContainer">
                <div className="nameContainer">
                    <img src={userProfileImage} alt="" className="reviewProfilePic" />
                    <p className="reviewProfileName">{userName}</p>
                </div>
                <div className="reviewDetailsContainer">
                    <StarRating rating={userRate} fontsize={fontsize}/>
                    <p className="dutyDetails txt-07 color-transparent-white">{userDuty}</p>
                    <p className="comment txt-09 color-white">
                        {userComment}
                    </p>
                    <div className="likeContainer color-white">
                        <button className="like" onClick={handleLikeClick}>Like</button>
                        <span aria-hidden="true"> · </span>
                        <div className="likesCount">
                            <FontAwesomeIcon icon={faThumbsUp} /><span className="count">{count}</span>
                        </div>
                        <span aria-hidden="true"> · </span>
                        <span className="datetime">{dateTime}</span>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Review;