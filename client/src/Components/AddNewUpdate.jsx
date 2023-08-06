import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faVideo, faCamera } from "@fortawesome/free-solid-svg-icons";
import "../css/VehiclesPage.css";
import CreatePostPopUpWindow from "./CreatePostPopUpWindow";
import PostPhotoPopUpWindow from "./PostPhotoPopUpWindow";
import PostVideoPopUpWindow from "./PostVideoPopUpWindow";
import { useState } from "react";

function AddNewUpdate() {
  // write post
  const [writePost, setWritePost] = useState(false);
  const handlePlusClick = () => {
    setWritePost((writePost) => !writePost);
  };

  // upload image
  const [uploadImage, setUploadImage] = useState(false);
  const handleCameraClick = () => {
    setUploadImage((uploadImage) => !uploadImage);
  };

  // upload video
  const [uploadVideo, setUploadVideo] = useState(false);
  const handleVideoClick = () => {
    setUploadVideo((uploadVideo) => !uploadVideo);
  };
  return (
    <div className="add-new-update-cage">
      <div className="cage-title">
        <b>Publish New Update</b>
      </div>
      <hr
        style={{
          width: "100%",
          margin: "auto",
          borderTop: "2px solid var(--stroke)",
        }}
      />
      <div className="cage-form">
        <div className="buttons">
          <button
            onClick={handlePlusClick}
            className="create-post-btn"
            title="Add Post"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            onClick={handleCameraClick}
            className="create-post-btn"
            title="Add Photo"
          >
            <FontAwesomeIcon icon={faCamera} />
          </button>
          <button
            onClick={handleVideoClick}
            className="create-post-btn"
            title="Add Video"
          >
            <FontAwesomeIcon icon={faVideo} />
          </button>
        </div>
        {writePost && (
          <div className="post-popup">
            <CreatePostPopUpWindow />
          </div>
        )}
        {uploadImage && (
          <div className="post-popup">
            <PostPhotoPopUpWindow />
          </div>
        )}
        {uploadVideo && (
          <div className="post-popup">
            <PostVideoPopUpWindow />
          </div>
        )}
      </div>
      <hr
        style={{
          width: "100%",
          margin: "auto",
          borderTop: "2px solid var(--stroke)",
        }}
      />
    </div>
  );
}

export default AddNewUpdate;
