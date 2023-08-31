import React, { useState } from "react";
function PostPhotoPopUpWindow({
  onSubmit,
  onContentChange,
  buttonColor,
  isLoading,
  contentChanged,
}) {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const selectedImages = Array.from(event.target.files);
    const imageData = new FormData();
    // Update the state with the selected images
    setImages(selectedImages);
    selectedImages.forEach((image, index) => {
      imageData.append(`image${index}`, image);
    });

    // Notify parent of content change
    onContentChange();
    onSubmit(imageData);
  };

  return (
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
  );
}

export default PostPhotoPopUpWindow;
