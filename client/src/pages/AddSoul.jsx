import { useEffect, useState } from "react";
import "../css/AddSoul.css";
import axios from "axios";

function AddSoul() {
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
      .post("/api/v1/vehicle-profiles/37") // Id shoul be dynamically passed
      .then((response) => {
        const existingVehicleData = response.data;
        setVehicleData({
          vehicleProfileName: existingVehicleData.vehicleProfileName,
          vehicleProfileImage: existingVehicleData.vehicleProfileImage,
          vehicleType: existingVehicleData.vehicleType,
          vehicleManufacturer: existingVehicleData.vehicleManufacturer,
          vehicleManuYear: existingVehicleData.vehicleManuYear,
          vehicleRegNo: existingVehicleData.vehicleRegNo,
        });
      })
      .catch((error) => {
        console.error("Error fetching vehicle data:", error);
      });
  }, []);

  const validationMsg = (
    <label className="vehicle-about-edit-vali">
      This field cannot be empty.
    </label>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      vehicleData.vehicleProfileName.length === 0 ||
      vehicleData.vehicleProfileImage.length === 0 ||
      vehicleData.vehicleType.length === 0 ||
      vehicleData.vehicleManufacturer.length === 0 ||
      vehicleData.vehicleTireType.length === 0 ||
      vehicleData.vehicleManuYear.length === 0 ||
      vehicleData.vehicleRegNo.length === 0
    ) {
      setError(true);
    } else {
      setError(false);

      // Send the updated data to the server
      axios
        .put(`/api/v1/vehicle-profiles/37`, vehicleData) // Id should be dynamically passed
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
    <div className="addsoulpage">
      <form className="addsouldata" onSubmit={handleSubmit}>
        <div className="addsoultopic">
          <h3 className="topici">Add Your Vehicle</h3>
        </div>
        <div className="add_1">
          <div className="divtoflex">
            <label for="name" className="name-lab">
              Name
            </label>
            <input
              type="text"
              className="name-add"
              placeholder="eg: My Soul"
              name="vehicleProfileName"
              value={vehicleData.vehicleProfileName}
              onChange={handleInputChange}
            ></input>
            {error && vehicleData.vehicleProfileName.length === 0
              ? validationMsg
              : null}
          </div>
          <br />
          {/* <div className="divtoflex">
            <label for="pp" className="name-pp">
              Profile Picture
            </label>
            <input
              type="file"
              className="name-add"
              name="vehicleProfileImage"
              value={vehicleData.vehicleProfileImage}
              onChange={handleInputChange}
            ></input>
            {error && vehicleData.vehicleProfileImage.length === 0
              ? validationMsg
              : null}
          </div> */}
        </div>
        <br />
        <br />
        <div className="add_2">
          <div className="divtoflex">
            <label for="vehicleType" className="name-lab">
              Vehicle Type
            </label>
            <input
              type="text"
              className="name-add"
              placeholder="eg: Car"
              name="vehicleType"
              value={vehicleData.vehicleType}
              onChange={handleInputChange}
            ></input>
            {error && vehicleData.vehicleType.length === 0
              ? validationMsg
              : null}
          </div>
          <br />
          <div className="divtoflex">
            <label for="vehicleManufacturer" className="name-lab">
              Brand
            </label>
            <input
              type="text"
              className="name-add"
              placeholder="eg: Toyota"
              name="vehicleManufacturer"
              value={vehicleData.vehicleManufacturer}
              onChange={handleInputChange}
            ></input>
            {error && vehicleData.vehicleManufacturer.length === 0
              ? validationMsg
              : null}
          </div>
          <br />
          <div className="divtoflex">
            <label for="vehicleManuYear" className="name-lab">
              Manufactured Year
            </label>
            <input
              type="text"
              className="name-add"
              placeholder="eg: 2011"
              name="vehicleManuYear"
              value={vehicleData.vehicleManuYear}
              onChange={handleInputChange}
            ></input>
            {error && vehicleData.vehicleManuYear.length === 0
              ? validationMsg
              : null}
          </div>
          <br />
          <div className="divtoflex">
            <label for="vehicleRegNo" className="name-lab">
              Registration Number
            </label>
            <input
              type="text"
              className="name-add"
              placeholder="eg: xxx-xxxxxx"
              name="vehicleRegNo"
              value={vehicleData.vehicleRegNo}
              onChange={handleInputChange}
            ></input>
            {error && vehicleData.vehicleRegNo.length === 0
              ? validationMsg
              : null}
          </div>
        </div>
        <br />
        <br />
        <div className="add_3">
          <button className="submitbtn" type="reset">
            Cancel
          </button>
          <button className="submitbtn" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddSoul;
