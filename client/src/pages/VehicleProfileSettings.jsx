import { useState } from "react";
import "../css/VehicleProfileSettings.css";

function VehicleProfileSettings() {
  const [profileImage, setProfileImage] = useState("");
  const [profileName, setProfileName] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to save the updated details here
    // You can access the new values in `profileImage` and `profileName` state variables

    console.log("Updated Profile Image:", profileImage);
    console.log("Updated Profile Name:", profileName);
  };

  const handleCancel = () => {
    // You can reset the input fields or perform any other necessary action
    // For example, you can clear the input fields
    setProfileImage("");
    setProfileName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="vpsettings-update-field">
          <label className="vpsettings-label">Change Soul Profile Image</label>
          <input
            type="file"
            className="vpsettings-input"
            placeholder={profileImage}
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
          />
        </div>
        <div className="vpsettings-update-field">
          <label className="vpsettings-label">Change Soul Profile Name</label>
          <input
            type="text"
            className="vpsettings-input"
            placeholder={profileName}
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
          />
        </div>
        <div className="vpsettings-button-cage">
          <button type="button" className="vpsettings-submit-btn">
            Cancel
          </button>
          <button type="submit" className="vpsettings-submit-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default VehicleProfileSettings;
