import { faBookmark, faSquareMinus } from "@fortawesome/free-regular-svg-icons";
import "../css/PostPopup.css";
import Icon from "./Icon";
import { faBan } from "@fortawesome/free-solid-svg-icons";

const PostPopup = () => {
  return ( 
    <>
    <div className="popUpContainer">
      <div className="savePost color-white">
        <Icon icon={faBookmark}/>
        <p>Save post</p>
      </div>
      <div className="savePost color-white">
        <Icon icon={faBan}/>
        <p>Report post</p>
      </div>
      <div className="savePost color-white">
        <Icon icon={faSquareMinus}/>
        <p>Hide post</p>
      </div>
    </div>
    </>
   );
}
 
export default PostPopup;