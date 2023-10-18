import React, { useState } from "react";
import { faBookmark, faSquareMinus } from "@fortawesome/free-regular-svg-icons";
import "../css/PostMore.css";
import Icon from "./Icon";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import ReportReasonPopUp from "./ReportReasonPopup";

const PostMore = () => {

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
    </div>
    </>
   );
}
 
export default PostMore;