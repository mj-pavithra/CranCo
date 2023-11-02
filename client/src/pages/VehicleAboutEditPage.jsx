import MainContainer from "../containers/MainContainer";
import VehicleAboutContainer from "../components/VehicleAboutContainer";
import "../css/VehicleAboutEdit.css";
import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making API requests

function VehicleAboutEditPage() {
  const [error, setError] = useState(false);

  // State variables for form fields and the existing vehicle data
  const [vehicleData, setVehicleData] = useState({
    vehicleColor: "",
    vehicleBodyStyle: "",
    vehicleIntMaterial: "",
    vehicleIntColor: "",
    vehicleTireType: "",
  });

  useEffect(() => {
    // Fetch the existing vehicle data using an API request
    axios
      .get("/api/v1/vehicle-profile/37") // Id shoul be dynamically passed
      .then((response) => {
        const existingVehicleData = response.data;
        setVehicleData({
          vehicleColor: existingVehicleData.vehicleColor,
          vehicleBodyStyle: existingVehicleData.vehicleBodyStyle,
          vehicleIntMaterial: existingVehicleData.vehicleIntMaterial,
          vehicleIntColor: existingVehicleData.vehicleIntColor,
          vehicleTireType: existingVehicleData.vehicleTireType,
        });
      })
      .catch((error) => {
        console.error("Error fetching vehicle data:", error);
      });
  }, []);

  const validationMsg = (
    <label className="vehicle-about-edit-vali">
      This field cannot be empty. If you have no changes in this field, please
      enter the existing data.
    </label>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      vehicleData.vehicleColor.length === 0 ||
      vehicleData.vehicleBodyStyle.length === 0 ||
      vehicleData.vehicleIntMaterial.length === 0 ||
      vehicleData.vehicleIntColor.length === 0 ||
      vehicleData.vehicleTireType.length === 0
    ) {
      setError(true);
    } else {
      setError(false);

      // Send the updated data to the server
      axios
        .put(`/api/v1/vehicle-profile/37`, vehicleData) // Id should be dynamically passed
        .then((response) => {
          console.log("Vehicle data updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating vehicle data:", error);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleData({
      ...vehicleData,
      [name]: value,
    });
  };

  return (
    <MainContainer>
      <div className="vehicle-about-edit-container">
        <div className="title-division">
          <p className="page-title">
            <b>Edit Your Vehicle Information</b>
          </p>
        </div>
        <form className="vehicle-about-edit-form" onSubmit={handleSubmit}>
          <div className="vehicle-about-edit-div">
            <label className="vehicle-about-edit-label">Vehicle Color:</label>
            <input
              type="text"
              className="vehicle-about-edit-input"
              name="vehicleColor"
              value={vehicleData.vehicleColor}
              onChange={handleInputChange}
            />
            {error && vehicleData.vehicleColor.length === 0
              ? validationMsg
              : null}
            <br />
            <br />
            <label className="vehicle-about-edit-label">Body Style:</label>
            <input
              type="text"
              className="vehicle-about-edit-input"
              name="vehicleBodyStyle"
              value={vehicleData.vehicleBodyStyle}
              onChange={handleInputChange}
            />
            {error && vehicleData.vehicleBodyStyle.length === 0
              ? validationMsg
              : null}
            <br />
            <label className="vehicle-about-edit-label">
              Interior Material:
            </label>
            <input
              type="text"
              className="vehicle-about-edit-input"
              name="vehicleIntMaterial"
              value={vehicleData.vehicleIntMaterial}
              onChange={handleInputChange}
            />
            {error && vehicleData.vehicleIntMaterial.length === 0
              ? validationMsg
              : null}
            <br />
            <label className="vehicle-about-edit-label">Interior Color:</label>
            <input
              type="text"
              className="vehicle-about-edit-input"
              name="vehicleIntColor"
              value={vehicleData.vehicleIntColor}
              onChange={handleInputChange}
            />
            {error && vehicleData.vehicleIntColor.length === 0
              ? validationMsg
              : null}
            <br />
            <label className="vehicle-about-edit-label">Tire Type:</label>
            <input
              type="text"
              className="vehicle-about-edit-input"
              name="vehicleTireType"
              value={vehicleData.vehicleTireType}
              onChange={handleInputChange}
            />
            {error && vehicleData.vehicleTireType.length === 0
              ? validationMsg
              : null}
            <br />
            <div className="button-cage">
              <button className="edit-vehicle-about">Cancel</button>
              <button className="edit-vehicle-about" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <VehicleAboutContainer />
    </MainContainer>
  );
}

export default VehicleAboutEditPage;
