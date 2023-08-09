import "../css/VehiclesPage.css";

function PostVideoPopUpWindow() {
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    // Backend to save video.
    console.log("Video saved: ", file);
  };

  return (
    <div className="media-upload-popup">
      <label className="label-for-media-uploader">
        <i>Upload video</i>
      </label>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
    </div>
  );
}

export default PostVideoPopUpWindow;
