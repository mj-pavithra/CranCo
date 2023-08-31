// import "../css/AddNewUpdate.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faVideo, faCamera, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import PostVideoPopUpWindow from "./PostVideoPopUpWindow";

function AddNewUpdate() {
  const [buttonColor, setButtonColor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [contentChanged, setContentChanged] = useState(false);
  const [writePost, setWritePost] = useState(false);
  const [uploadImage, setUploadImage] = useState(false);
  const [uploadVideo, setUploadVideo] = useState(false);
  const [postText, setPostText] = useState("");
  const [images, setImages] = useState([]);
  
  const postData = new FormData();

  const handleDataSubmit = () => {
    setIsLoading(true);
  
    console.log("Data to be sent:", postData);
  
    axios
      .post("http://localhost:8081/api/posts", postData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        setButtonColor("green");
        setIsLoading(false);
  
        setTimeout(() => {
          setButtonColor("");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        setButtonColor("red");
        setIsLoading(false);
      });
  };
  

  const handleContentChange = () => {
    setContentChanged(true);
    setButtonColor("");
  };

  const handlePlusClick = () => {
    setWritePost((writePost) => !writePost);
  };

  const handleCameraClick = () => {
    setUploadImage((uploadImage) => !uploadImage);
  };

  const handleVideoClick = () => {
    setUploadVideo((uploadVideo) => !uploadVideo);
  };

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
    handleContentChange();
  };

  const handlePostButtonClick = () => {
    const postData = {
      type: "text",
      content: postText,
    };
    handleDataSubmit(postData);
  };

  const handleImageUpload = (event) => {
    const selectedImages = Array.from(event.target.files);
  
    console.log("Selected images:", selectedImages.map((image) => image.name));
  
    selectedImages.forEach((image, index) => {
      postData.append(`image${index}`, image);
    });
  
    setImages(selectedImages);
    handleContentChange();
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
          <div>
          <div className="cage-title">
            <b>Create a Post</b>
          </div>
          <textarea
            className="cage-textarea"
            placeholder="Any updates Kaveesha?" // name should be passed.
            value={postText}
            onChange={handlePostTextChange}
          />
          <div className="popup-save-btn-division">
            <button
              onClick={handlePostButtonClick}
              className={`create-post-btn-in-popup ${buttonColor}`}
              disabled={isLoading || !contentChanged}
            >
              <FontAwesomeIcon icon={faPaperPlane} title="Post" />
            </button>
          </div>
        </div>
          </div>
        )}
        {uploadImage && (
          <div className="post-popup">
          <div className="media-upload-popup">
          <label className="label-for-media-uploader">Upload images</label>
          <input
            type="file"
            name="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
          {/* Display selected image filenames */}
          {images.map((image, index) => (
            <div key={index}>{image.name}</div>
          ))}
        </div>
          </div>
        )}
        {uploadVideo && (
          <div className="post-popup">
            <PostVideoPopUpWindow onSubmit={handleDataSubmit} />
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

