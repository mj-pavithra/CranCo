import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../css/VehiclesPage.css";

function CreatePostPopUpWindow({
  onSubmit,
  onContentChange,
  buttonColor,
  isLoading,
  contentChanged,
}) {
  const [postText, setPostText] = useState("");

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
    onContentChange(); // Notify parent of content change
  };

  const handlePostButtonClick = () => {
    // Prepare the data to send
    const postData = {
      type: "text",
      content: postText,
    };

    onSubmit(postData);
  };

  return (
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
  );
}

export default CreatePostPopUpWindow;
