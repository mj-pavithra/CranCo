function PostPhotoPopUpWindow({ onSubmit, onContentChange, buttonColor, isLoading, contentChanged }) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Prepare the data to send
    const imageData = new FormData();
    imageData.append("type", "image");
    imageData.append("image", file);

    onSubmit(imageData);
  };

  return (
    <div className="media-upload-popup">
      <label className="label-for-media-uploader">Upload image</label>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      
    </div>
  );
}

export default PostPhotoPopUpWindow;
