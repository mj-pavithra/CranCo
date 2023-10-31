
import {
    faCamera,
    faPaperPlane,
    faPlus,
    faVideo,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React, { useState } from "react";
  import Cookies from "js-cookie";
  import configuredAxios from "../AxiosConfig";
  
  function AddLostVehicle() {
    const [buttonColor, setButtonColor] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [contentChanged, setContentChanged] = useState(false);
    const [writePost, setWritePost] = useState(false);
    const [uploadImage, setUploadImage] = useState(false);
    const [uploadVideo, setUploadVideo] = useState(false);
    const [caption, setPostText] = useState("");
    const [images, setImages] = useState([]);
    const userId = Cookies.get("user_id");
    const username = Cookies.get("user_name");
    
  
    const handleDataSubmit = async () => {
      setIsLoading(true);
  
      const postData = new FormData();
      postData.append("caption", caption);
      postData.append("userId", userId); 
      postData.append("username", username);
      postData.append("visibility", "public");
      postData.append("type", "regular");
  
      if (Array.isArray(images) && images.length > 0) {
        images.forEach((image, index) => {
          if (image instanceof File) {
            postData.append("images", image);
          } else {
            console.error("Invalid image file at index", index);
          }
        });
  
        try {
          const response = await configuredAxios.post("/api/posts", postData, {
            headers: {
              "Content-Type": "multipart/form-data"
            },
          });
  
          console.log("Data sent successfully:", response.data);
  
          // Change the button color to green on success
          setButtonColor("green");
          console.log("Button color changed to green");
  
          // Clear user inputs after 3 seconds
          setTimeout(() => {
            setButtonColor("");
            setIsLoading(false);
            setPostText(""); // Clear the text area
            setImages([]);   // Clear the images
            setWritePost(false); // Hide the text area and show image area
          }, 3000);
        } catch (error) {
          console.error("Error sending data:", error);
  
          // Change the button color to red on failure
          setButtonColor("red");
          console.log("Button color changed to red");
          setIsLoading(false);
        }
      } else {
        console.error("Invalid images array");
        setButtonColor("red");
        setIsLoading(false);
      }
    };
  
    // const afterSubmit = () => {
      
    //   setWritePost(true); 
    //   setUploadImage((uploadImage) => uploadImage);
    //   setUploadVideo((uploadVideo) => uploadVideo);
    // }
    
  
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
                  placeholder={`Any updates ${username}?`} 
                  value={caption}
                  onChange={handlePostTextChange}
                  style={{ backgroundColor: {setButtonColor} }}
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
          {/* {uploadVideo && (
            <div className="post-popup">
              <PostVideoPopUpWindow onSubmit={handleDataSubmit} />
            </div>
          )} */}
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
  
  export default AddLostVehicle;
  