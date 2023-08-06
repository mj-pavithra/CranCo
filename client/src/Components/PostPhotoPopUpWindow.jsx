function PostPhotoPopUpWindow() {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Backend to save the image
    console.log("image Saved: ", file);
  };

  return (
    <div className="media-upload-popup">
      <label className="label-for-media-uploader">Upload image</label>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
}

export default PostPhotoPopUpWindow;
