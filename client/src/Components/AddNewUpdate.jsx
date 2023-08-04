import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faVideo, faCamera } from "@fortawesome/free-solid-svg-icons";
import "../css/VehiclesPage.css";

function AddNewUpdate() {
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
          <button className="create-post-btn" title="Add Post">
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button className="create-post-btn" title="Add Photo">
            <FontAwesomeIcon icon={faCamera} />
          </button>
          <button className="create-post-btn" title="Add Video">
            <FontAwesomeIcon icon={faVideo} />
          </button>
        </div>
        <div className="post-popup">
          <div className="cage-title">
            <b>Create a Post</b>
          </div>
          <textarea
            className="cage-textarea"
            placeholder="Any updates Kaveesha?" // name should be passed.
          />
        </div>
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
