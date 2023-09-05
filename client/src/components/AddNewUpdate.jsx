// import "../css/AddNewUpdate.css";
import {
  faCamera,
  faPaperPlane,
  faPlus,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import PostVideoPopUpWindow from "./PostVideoPopUpWindow";

function AddNewUpdate() {
  const [buttonColor, setButtonColor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [contentChanged, setContentChanged] = useState(false);
  const [writePost, setWritePost] = useState(false);
  const [uploadImage, setUploadImage] = useState(false);
  const [uploadVideo, setUploadVideo] = useState(false);
  const [caption, setPostText] = useState("");
  const [images, setImages] = useState([]);

  const handleDataSubmit = async () => {
    setIsLoading(true);

    const postData = new FormData();
    postData.append("caption", caption);

    if (Array.isArray(images) && images.length > 0) {
      images.forEach((image, index) => {
        if (image instanceof File) {
          postData.append("images", image); // Append images without []
        } else {
          console.error("Invalid image file at index", index);
        }
      });

      try {
        const response = await axios.post("http://localhost:8081/api/posts", postData, {
          headers: {
            "Content-Type": "multipart/form-data" // Set the Content-Type header correctly
          },
        });

        console.log("Data sent successfully:", response.data);
        setButtonColor("green");
        setIsLoading(false);

        setTimeout(() => {
          setButtonColor("");
          setIsLoading(false);
        }, 3000);
      } catch (error) {
        console.error("Error sending data:", error);
        setButtonColor("red");
        setIsLoading(false);
      }
    } else {
      console.error("Invalid images array");
      setButtonColor("red");
      setIsLoading(false);
    }
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
    handleDataSubmit(); // Remove textData here
  };

  const handleImageUpload = (event) => {
    const selectedImages = Array.from(event.target.files);

    console.log(
      "Selected images:",
      selectedImages.map((image) => image.name)
    );

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
                value={caption}
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
