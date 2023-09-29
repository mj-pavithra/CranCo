import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Comment.css";
import { faHeart } from"@fortawesome/free-solid-svg-icons" ;
import { faHeart as reg_heart } from "@fortawesome/free-regular-svg-icons";

const Comment = ({commentType}) => {

    const [liked, updateLiked] = useState(false);

    const handleLike = () => {
        updateLiked(!liked);
    };

    const containerStyle = {
        width: commentType === "comment" ? "600px" : "550px",
    };

    return ( 
        <>
        <div style={containerStyle} className="commentContainer">
            <div className="imgContainer">
                <img src="girl.png"/>
            </div>
            <div className="textConatiner ">
                <div className="name color-blue">
                    <p>Methmi Maheesha</p>
                </div>
                <div className="comment color-white">
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Urna magna a amet pellentesque lectus diam sollicitudin.
                    </p>
                </div>
                <div className="likeContainer color-blue">
                    <p onClick={() => handleLike()}>Like</p>
                    <p>Reply</p>
                    <FontAwesomeIcon 
                    className={`likeIcon ${liked === true ? "active" : ""}`}
                    icon={liked === true ? faHeart : reg_heart}/>
                    <span className="fw-light txt-09">{`${liked === false ? "13" : "14"}`}</span>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Comment;