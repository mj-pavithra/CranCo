import React, { useState } from "react";
import "../css/AddNewPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import axios from "../AxiosConfig";

const AddNewPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleManufacturer, setVehicleManufacturer] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleManuYear, setVehicleManuYear] = useState("");
  const [vehicleRegNo, setVehicleRegNo] = useState("");
  const [vehicleFuelType, setVehicleFuelType] = useState("");
  const [vehicleEngineType, setVehicleEngineType] = useState("");
  const [vehicleTransmission, setVehicleTransmission] = useState("");
  const [vehicleDriveTrain, setVehicleDriveTrain] = useState("");
  const [vehicleBodyStyle, setVehicleBodyStyle] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleSeatingCapacity, setVehicleSeatingCapacity] = useState("");
  const [vehicleExtStructure, setVehicleExtStructure] = useState("");
  const [vehicleIntMaterial, setVehicleIntMaterial] = useState("");
  const [vehicleIntColor, setVehicleIntColor] = useState("");
  const [vehicleInfoSys, setVehicleInfoSys] = useState("");
  const [vehicleSaftyFeat, setVehicleSaftyFeat] = useState("");
  const [vehicleSusType, setVehicleSusType] = useState("");
  const [vehicleWheels, setVehicleWheels] = useState("");
  const [vehicleTireType, setVehicleTireType] = useState("");
  const [vehicleFuelEffi, setVehicleFuelEffi] = useState("");
  const [vehicleTorque, setVehicleTorque] = useState("");
  const [vehicleAccel, setVehicleAccel] = useState("");
  const [vehicleTopSpeed, setVehicleTopSpeed] = useState("");
  const [vehicleCargoCapacity, setVehicleCargoCapacity] = useState("");
  const [vehicleTowingCapacity, setVehicleTowingCapacity] = useState("");

  const submitForm = async () => {
    const vehicleData = new FormData();
    vehicleData.append("vehicletype", vehicleType);
    vehicleData.append("vehicleManufacturer", vehicleManufacturer);
    vehicleData.append("vehicleRegNo", vehicleRegNo);
    vehicleData.append("vehicleModel", vehicleModel);
    vehicleData.append("vehicleManuYear", vehicleManuYear);
    // vehicleData.append("vehicleRegNo", vehicleRegNo);
    vehicleData.append("vehicleFuelType", vehicleFuelType);
    vehicleData.append("vehicleEngineType", vehicleEngineType);
    vehicleData.append("vehicleTransmission", vehicleTransmission);
    vehicleData.append("vehicleDriveTrain", vehicleDriveTrain);
    vehicleData.append("vehicleBodyStyle", vehicleBodyStyle);
    vehicleData.append("vehicleColor", vehicleColor);
    vehicleData.append("vehicleSeatingCapacity", vehicleSeatingCapacity);
    vehicleData.append("vehicleExtStructure", vehicleExtStructure);
    vehicleData.append("vehicleIntMaterial", vehicleIntMaterial);
    vehicleData.append("vehicleIntColor", vehicleIntColor);
    vehicleData.append("vehicleInfoSys", vehicleInfoSys);
    vehicleData.append("vehicleSaftyFeat", vehicleSaftyFeat);
    vehicleData.append("vehicleSusType", vehicleSusType);
    vehicleData.append("vehicleWheels", vehicleWheels);
    vehicleData.append("vehicleTireType", vehicleTireType);
    vehicleData.append("vehicleFuelEffi", vehicleFuelEffi);
    vehicleData.append("vehicleTorque", vehicleTorque);
    vehicleData.append("vehicleAccel", vehicleAccel);
    vehicleData.append("vehicleTopSpeed", vehicleTopSpeed);
    vehicleData.append("vehicleCargoCapacity", vehicleCargoCapacity);
    vehicleData.append("vehicleTowingCapacity", vehicleTowingCapacity);
    vehicleData.append("fileName", fileName);
    console.log(vehicleData);
    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/auth/vehicle-profiles/create",
        vehicleData,
        { headers: { "Content-Type": "multipart/formdata" } }
      );

      console.log("MEka thaama responce eka", response);
    } catch (e) {
      console.error(e);
      console.log(" wada karan nha ");
    }
  };

  const handleVehicleType = (e) => {
    setVehicleType(e.target.value);
  };

  const handleVehicleManu = (e) => {
    setVehicleManufacturer(e.target.value);
  };

  const handleVehicleModel = (e) => {
    setVehicleModel(e.target.value);
  };

  const handleVehicleManuYear = (e) => {
    setVehicleManuYear(e.target.value);
  };

  const handleVehicleRegNo = (e) => {
    setVehicleRegNo(e.target.value);
  };

  const handleVehicleFuelType = (e) => {
    setVehicleFuelType(e.target.value);
  };

  const handleVehicleEngineType = (e) => {
    setVehicleEngineType(e.target.value);
  };

  const handleVehicleTransmission = (e) => {
    setVehicleTransmission(e.target.value);
  };

  const handleVehicleDriveTrain = (e) => {
    setVehicleDriveTrain(e.target.value);
  };

  const handleVehicleBodyStyle = (e) => {
    setVehicleBodyStyle(e.target.value);
  };

  const handleVehicleColor = (e) => {
    setVehicleColor(e.target.value);
  };

  const handleVehicleSeatingCapacity = (e) => {
    setVehicleSeatingCapacity(e.target.value);
  };

  const handleVehicleExtStructure = (e) => {
    setVehicleExtStructure(e.target.value);
  };

  const handleVehicleIntMaterial = (e) => {
    setVehicleIntMaterial(e.target.value);
  };

  const handleVehicleIntColor = (e) => {
    setVehicleIntColor(e.target.value);
  };

  const handleVehicleInfoSys = (e) => {
    setVehicleInfoSys(e.target.value);
  };

  const handleVehicleSaftyFeat = (e) => {
    setVehicleSaftyFeat(e.target.value);
  };

  const handleVehicleSusType = (e) => {
    setVehicleSusType(e.target.value);
  };

  const handleVehicleWheels = (e) => {
    setVehicleWheels(e.target.value);
  };

  const handleVehicleTireType = (e) => {
    setVehicleTireType(e.target.value);
  };

  const handleVehicleFuelEffi = (e) => {
    setVehicleFuelEffi(e.target.value);
  };

  const handleVehicleTorque = (e) => {
    setVehicleTorque(e.target.value);
  };

  const handleVehicleAccel = (e) => {
    setVehicleAccel(e.target.value);
  };

  const handleVehicleTopSpeed = (e) => {
    setVehicleTopSpeed(e.target.value);
  };

  const handleVehicleCargoCapacity = (e) => {
    setVehicleCargoCapacity(e.target.value);
  };

  const handleVehicleTowingCapacity = (e) => {
    setVehicleTowingCapacity(e.target.value);
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [fileName, setFileName] = useState("Upload your file here");

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("Upload your file here");
    }
  };

  return (
    <div className="AddNewPageContainer">
      <div className="adn-title">Add Your Soul</div>
      <p className="adn-subTitle">
        Fill all required fields to go to the next step
      </p>
      <div className="content">
        {currentStep === 1 && (
          <div className="formOne">
            <ul>
              <li>
                <div className="topic">Vehicle type</div>
                <input
                  type="text"
                  placeholder=" vehicle type"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleType}
                  onChange={handleVehicleType}
                />
              </li>
              <li>
                <div className="topic">Manufacturer</div>
                <input
                  type="text"
                  placeholder=" Manufacturer"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleManufacturer}
                  onChange={handleVehicleManu}
                />
              </li>
              <li>
                <div className="topic">Vehicle Model</div>
                <input
                  type="text"
                  placeholder=" Vehicle Model"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleModel}
                  onChange={handleVehicleModel}
                />
              </li>
              <li>
                {/* <div
                  className={`inputFieldContainer 
                      flex - row
                      center`}
                > */}
                <div className="topic">Manufactured Year</div>
                <input
                  type="text"
                  placeholder=" Manufactured Year"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleManuYear}
                  onChange={handleVehicleManuYear}
                />
                {/* </div> */}
              </li>
              <li>
                <div className="topic">Registration Number</div>
                <input
                  type="text"
                  placeholder=" Registration Number"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleRegNo}
                  onChange={handleVehicleRegNo}
                />
              </li>
            </ul>
          </div>
        )}
        {currentStep === 2 && (
          <div className="formTwo">
            <ul>
              <li>
                <div className="topic">Fuel Type</div>
                <input
                  type="text"
                  placeholder=" Fuel Type"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleFuelType}
                  onChange={handleVehicleFuelType}
                />
              </li>
              <li>
                <div className="topic">Engine Type</div>
                <input
                  type="text"
                  placeholder=" Engine Type"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleEngineType}
                  onChange={handleVehicleEngineType}
                />
              </li>
              <li>
                <div className="topic">Transmission</div>
                <input
                  type="text"
                  placeholder=" Transmission"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleTransmission}
                  onChange={handleVehicleTransmission}
                />
              </li>
              <li>
                <div className="topic">Drive Train</div>
                <input
                  type="text"
                  placeholder=" Drive Train"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleDriveTrain}
                  onChange={handleVehicleDriveTrain}
                />
              </li>
              <li>
                <div className="topic">Body Style</div>
                <input
                  type="text"
                  placeholder=" Body Style"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleBodyStyle}
                  onChange={handleVehicleBodyStyle}
                />
              </li>
            </ul>
          </div>
        )}
        {currentStep === 3 && (
          <div className="formThreeContainer">
            <div className="formThree">
              <ul>
                <li>
                  <div className="topic">Colour</div>
                  <input
                    type="text"
                    placeholder=" Colour"
                    className={`inputField`}
                    style={{ width: "761px" }}
                    value={vehicleColor}
                    onChange={handleVehicleColor}
                  />
                </li>
                <li>
                  <div className="topic">Seating Capacity</div>
                  <input
                    type="text"
                    placeholder=" Seating Capacity"
                    className={`inputField`}
                    style={{ width: "761px" }}
                    value={vehicleSeatingCapacity}
                    onChange={handleVehicleSeatingCapacity}
                  />
                </li>
                <li>
                  <div className="topic">External Structure</div>
                  <input
                    type="text"
                    placeholder=" External Structure"
                    className={`inputField`}
                    style={{ width: "761px" }}
                    value={vehicleExtStructure}
                    onChange={handleVehicleExtStructure}
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <div className="topic">Interior Material</div>
                  <input
                    type="text"
                    placeholder=" Interior Material"
                    className={`inputField`}
                    style={{ width: "761px" }}
                    value={vehicleIntMaterial}
                    onChange={handleVehicleIntMaterial}
                  />
                </li>
                <li>
                  <div className="topic">Interior Colour</div>
                  <input
                    type="text"
                    placeholder=" Interior Colour"
                    className={`inputField`}
                    style={{ width: "761px" }}
                    value={vehicleIntColor}
                    onChange={handleVehicleIntColor}
                  />
                </li>
                <li>
                  <div className="topic">Infotainment System</div>
                  <input
                    type="text"
                    placeholder=" Infotainment System"
                    className={`inputField`}
                    style={{ width: "761px" }}
                    value={vehicleInfoSys}
                    onChange={handleVehicleInfoSys}
                  />
                </li>
              </ul>
            </div>
            <ul>
              <li>
                <div className="topic">Safty Features</div>
                <input
                  type="text"
                  placeholder=" Safty Features"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleSaftyFeat}
                  onChange={handleVehicleSaftyFeat}
                />
              </li>
            </ul>
          </div>
        )}
        {currentStep === 4 && (
          <div className="formFourContainer">
            <div className="formFour">
              <ul>
                <li>
                  <div className="topic">Suspension Type</div>
                  <input
                    type="text"
                    placeholder=" Suspension Type"
                    className={`inputField`}
                    style={{ width: "761px" }}
                    value={vehicleSusType}
                    onChange={handleVehicleSusType}
                  />
                </li>
                <li>
                  <div className="topic">Wheels</div>
                  <input
                    type="text"
                    placeholder=" Wheels"
                    className={`inputField`}
                    style={{ width: "761px" }}
                    value={vehicleWheels}
                    onChange={handleVehicleWheels}
                  />
                </li>
                <li>
                  <div className="topic">Tire Type</div>
                  <input
                    type="text"
                    placeholder=" Tire Type"
                    className={`inputField`}
                    style={{ width: "761px" }}
                    value={vehicleTireType}
                    onChange={handleVehicleTireType}
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <div className="topic">Fuel Efficiency</div>
                  <input
                    type="text"
                    placeholder=" Fuel Efficiency"
                    className={`inputField`}
                    style={{ width: "761px" }}
                    value={vehicleFuelEffi}
                    onChange={handleVehicleFuelEffi}
                  />
                </li>
                <li>
                  <div className="topic">Torque</div>
                  <input
                    type="text"
                    placeholder=" Torque"
                    className={`inputField`}
                    style={{ width: "761px" }}
                    value={vehicleTorque}
                    onChange={handleVehicleTorque}
                  />
                </li>
                <li>
                  <div className="topic">Acceleration</div>
                  <input
                    type="text"
                    placeholder=" Acceleration"
                    className={`inputField`}
                    style={{ width: "761px" }}
                    value={vehicleAccel}
                    onChange={handleVehicleAccel}
                  />
                </li>
              </ul>
            </div>
            <ul>
              <li>
                <div className="topic">Top Speed</div>
                <input
                  type="text"
                  placeholder=" Top Speed"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleTopSpeed}
                  onChange={handleVehicleTopSpeed}
                />
              </li>
            </ul>
          </div>
        )}
        {currentStep === 5 && (
          <div className="formFive">
            <ul>
              <li>
                <div className="topic">Cargo Capacity</div>
                <input
                  type="text"
                  placeholder=" Cargo Capacity"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleCargoCapacity}
                  onChange={handleVehicleCargoCapacity}
                />
              </li>
              <li>
                <div className="topic">Towing Capacity</div>
                <input
                  type="text"
                  placeholder=" Towing Capacity"
                  className={`inputField`}
                  style={{ width: "761px" }}
                  value={vehicleTowingCapacity}
                  onChange={handleVehicleTowingCapacity}
                />
              </li>
              <li className="upload-file">
                <label
                  className="fileLable"
                  id="label"
                  style={{ color: "var(--transparent-white)" }}
                >
                  <FontAwesomeIcon icon={faCloudArrowUp} />
                  <span id="span">{fileName}</span>
                  <input
                    id="input"
                    className="fileInput"
                    type="file"
                    name={fileName}
                    onChange={handleFileChange}
                    style={{ height: "200px" }}
                  />
                </label>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="btnHolder">
        {currentStep > 1 ? (
          <button className="adn-previous" onClick={handlePrevious}>
            Previous
          </button>
        ) : (
          <button className="adn-previous">Back</button>
        )}
        {currentStep < 5 ? (
          <button className="adn-next" onClick={handleNext}>
            Next
          </button>
        ) : (
          <button className="adn-next" onClick={submitForm}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default AddNewPage;
