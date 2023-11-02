import { useState, useEffect } from "react";
import "../css/VehicleProfileSettings.css";
import "../../src/index.css";
import MainContainer from "../containers/MainContainer.jsx";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function VehicleProfileSettings() {
  // const vehicleProfileId = "37";
  const { vehicleProfileId } = useParams();
  const [profileImage, setProfileImage] = useState("");
  const [profileName, setProfileName] = useState("");

  const [deleteCom, setDeleteCom] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Debugging: Check if vehicleProfileId is correctly extracted from the URL
    console.log("vehicleProfileId:", vehicleProfileId);
  }, [vehicleProfileId]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    // object requestData with the data to be sent
    e.preventDefault();

    const requestData = {
      profileImage: profileImage,
      profileName: profileName,
    };

    console.log(requestData);
    try {
      const response = await axios.put(
        `http://localhost:8081/api/v1/auth/vehicle-profiles/${vehicleProfileId}`,
        requestData
      );
      console.log("hari wada.:", response.data);
    } catch (err) {
      console.error(err);
      console.log("wada karan na.");
    }
  };

  const handleProfileImage = (requestData) => {
    setProfileImage(requestData.target.value);
  };

  const handleProfileName = (requestData) => {
    setProfileName(requestData.target.value);
  };

  const handleCancel = () => {
    setProfileImage("");
    setProfileName({ profileName });
  };

  const handleBackClick = () => {
    navigate("/vehiclespageownersview");
  };

  return (
    <MainContainer>
      <form className="vp-settings-submit" onSubmit={handleSubmit}>
        <h5 className="vp-setting-title">General Settings</h5>
        <div className="vpsettings-update-field">
          <label className="vpsettings-label">Change Soul Profile Image</label>
          <input
            type="file"
            className="vpsettings-input"
            placeholder={profileImage}
            value={profileImage}
            onChange={handleProfileImage}
          />
        </div>
        <div className="vpsettings-update-field">
          <label className="vpsettings-label">Change Soul Profile Name</label>
          <input
            type="text"
            className="vpsettings-input"
            placeholder={profileName}
            value={profileName}
            onChange={handleProfileName}
          />
        </div>
        <div className="vpsettings-button-cage">
          <button
            type="submit"
            className="vpsettings-submit-btn"
            onChange={handleCancel}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="vpsettings-submit-btn"
          >
            Save
          </button>
        </div>
      </form>
      <br />
      <form className="vp-settings-submit">
        <h5 className="vp-setting-title">Delete Soul Profile</h5>
        <p className="vp-setting-delete-statement">
          Deleting your soul profile will remove all your soul information from
          our database. This cannot be undone.
        </p>
        <div className="vpsettings-delete-field">
          <label className="vpsettings-label">
            To confirm this, type "DELETE"
          </label>
          <div className="delete-it">
            <input
              className="delete-cage"
              onChange={(e) => setDeleteCom(e.target.value)}
              value={deleteCom}
            ></input>
            <label classname="delete-announcement">
              Cannot perform the request.
            </label>
            <button type="submit" onSubmit={handleSubmit}>
              Delete
            </button>
          </div>
        </div>
      </form>
      <button className="vp-settings-back-btn" onClick={handleBackClick}>
        Back
      </button>
    </MainContainer>
  );
}

export default VehicleProfileSettings;
