import React, { useState } from "react";
// import InputField from "../components/InputField";
// import LoginInput from "../components/LoginInput";
import "../css/AddNewPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
// import NavigationBar from "../components/NavigationBar";
// import MainContainer from "../containers/MainContainer";
import axios from "axios";

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
        "http://localhost:8081/api/vehicle-profiles",
        vehicleData,
        { headers: { "Content-Type": "multipart/formdata" } }
      );

      console.log("MEka thaama responce eka", response);
    } catch (e) {
      console.error(e);
    }
  };

  const handleInput = (e) => {
    setVehicleType(e.target.value);
    setVehicleManufacturer(e.target.value);
    setVehicleModel(e.target.value);
    setVehicleManuYear(e.target.value);
    setVehicleRegNo(e.target.value);
    setVehicleFuelType(e.target.value);
    setVehicleEngineType(e.target.value);
    setVehicleTransmission(e.target.value);
    setVehicleDriveTrain(e.target.value);
    setVehicleBodyStyle(e.target.value);
    setVehicleColor(e.target.value);
    setVehicleSeatingCapacity(e.target.value);
    setVehicleExtStructure(e.target.value);
    setVehicleIntMaterial(e.target.value);
    setVehicleIntColor(e.target.value);
    setVehicleInfoSys(e.target.value);
    setVehicleSaftyFeat(e.target.value);
    setVehicleSusType(e.target.value);
    setVehicleWheels(e.target.value);
    setVehicleTireType(e.target.value);
    setVehicleFuelEffi(e.target.value);
    setVehicleTorque(e.target.value);
    setVehicleAccel(e.target.value);
    setVehicleTopSpeed(e.target.value);
    setVehicleCargoCapacity(e.target.value);
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
      <div className="adn-title">SIGN UP YOUR SOUL ACCOUNT</div>
      <p className="adn-subTitle">
        Fill all required fields to go to the next step
      </p>
      <div className="content">
        {currentStep === 1 && (
          <div className="formOne">
            <form className="adn-inputList">
              <ul>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Vehicle type</div>
                    <input
                      type="text"
                      placeholder=" vehicle type"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleType}
                      onChange={handleInput}
                    />
                  </div>
                </li>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Manufacturer</div>
                    <input
                      type="text"
                      placeholder=" Manufacturer"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleManufacturer}
                      onChange={handleInput}
                    />
                  </div>
                </li>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Vehicle Model</div>
                    <input
                      type="text"
                      placeholder=" Vehicle Model"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleModel}
                      onChange={handleInput}
                    />
                  </div>
                </li>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Manufactured Year</div>
                    <input
                      type="text"
                      placeholder=" Manufactured Year"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleManuYear}
                      onChange={handleInput}
                    />
                  </div>
                </li>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Registration Number</div>
                    <input
                      type="text"
                      placeholder=" Registration Number"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleRegNo}
                      onChange={handleInput}
                    />
                  </div>
                </li>
              </ul>
            </form>
          </div>
        )}
        {currentStep === 2 && (
          <div className="formTwo">
            <form className="adn-inputList">
              <ul>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Fuel Type</div>
                    <input
                      type="text"
                      placeholder=" Fuel Type"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleFuelType}
                      onChange={handleInput}
                    />
                  </div>
                </li>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Engine Type</div>
                    <input
                      type="text"
                      placeholder=" Engine Type"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleEngineType}
                      onChange={handleInput}
                    />
                  </div>
                </li>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Transmission</div>
                    <input
                      type="text"
                      placeholder=" Transmission"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleTransmission}
                      onChange={handleInput}
                    />
                  </div>
                </li>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Drive Train</div>
                    <input
                      type="text"
                      placeholder=" Drive Train"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleDriveTrain}
                      onChange={handleInput}
                    />
                  </div>
                </li>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Body Style</div>
                    <input
                      type="text"
                      placeholder=" Body Style"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleBodyStyle}
                      onChange={handleInput}
                    />
                  </div>
                </li>
              </ul>
            </form>
          </div>
        )}
        {currentStep === 3 && (
          <div className="formThreeContainer">
            <div className="formThree">
              <form className="adn-inputList left">
                <ul>
                  <li>
                    <div
                      className={`inputFieldContainer 
                      flex - row
                      center`}
                    >
                      <div className="topic">Colour</div>
                      <input
                        type="text"
                        placeholder=" Colour"
                        className={`inputField`}
                        style={{ width: "761px" }}
                        value={vehicleColor}
                        onChange={handleInput}
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      className={`inputFieldContainer 
                      flex - row
                      center`}
                    >
                      <div className="topic">Seating Capacity</div>
                      <input
                        type="text"
                        placeholder=" Seating Capacity"
                        className={`inputField`}
                        style={{ width: "761px" }}
                        value={vehicleSeatingCapacity}
                        onChange={handleInput}
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      className={`inputFieldContainer 
                      flex - row
                      center`}
                    >
                      <div className="topic">External Structure</div>
                      <input
                        type="text"
                        placeholder=" External Structure"
                        className={`inputField`}
                        style={{ width: "761px" }}
                        value={vehicleExtStructure}
                        onChange={handleInput}
                      />
                    </div>
                  </li>
                </ul>
              </form>
              <form className="adn-inputList right">
                <ul>
                  <li>
                    <div
                      className={`inputFieldContainer 
                      flex - row
                      center`}
                    >
                      <div className="topic">Interior Material</div>
                      <input
                        type="text"
                        placeholder=" Interior Material"
                        className={`inputField`}
                        style={{ width: "761px" }}
                        value={vehicleIntMaterial}
                        onChange={handleInput}
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      className={`inputFieldContainer 
                      flex - row
                      center`}
                    >
                      <div className="topic">Interior Colour</div>
                      <input
                        type="text"
                        placeholder=" Interior Colour"
                        className={`inputField`}
                        style={{ width: "761px" }}
                        value={vehicleIntColor}
                        onChange={handleInput}
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      className={`inputFieldContainer 
                      flex - row
                      center`}
                    >
                      <div className="topic">Infotainment System</div>
                      <input
                        type="text"
                        placeholder=" Infotainment System"
                        className={`inputField`}
                        style={{ width: "761px" }}
                        value={vehicleInfoSys}
                        onChange={handleInput}
                      />
                    </div>
                  </li>
                </ul>
              </form>
            </div>
            <form className="adn-inputList right">
              <ul>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Safty Features</div>
                    <input
                      type="text"
                      placeholder=" Safty Features"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleSaftyFeat}
                      onChange={handleInput}
                    />
                  </div>
                </li>
              </ul>
            </form>
          </div>
        )}
        {currentStep === 4 && (
          <div className="formFourContainer">
            <div className="formFour">
              <form className="adn-inputList">
                <ul>
                  <li>
                    <div
                      className={`inputFieldContainer 
                      flex - row
                      center`}
                    >
                      <div className="topic">Suspension Type</div>
                      <input
                        type="text"
                        placeholder=" Suspension Type"
                        className={`inputField`}
                        style={{ width: "761px" }}
                        value={vehicleSusType}
                        onChange={handleInput}
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      className={`inputFieldContainer 
                      flex - row
                      center`}
                    >
                      <div className="topic">Wheels</div>
                      <input
                        type="text"
                        placeholder=" Wheels"
                        className={`inputField`}
                        style={{ width: "761px" }}
                        value={vehicleWheels}
                        onChange={handleInput}
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      className={`inputFieldContainer 
                      flex - row
                      center`}
                    >
                      <div className="topic">Tire Type</div>
                      <input
                        type="text"
                        placeholder=" Tire Type"
                        className={`inputField`}
                        style={{ width: "761px" }}
                        value={vehicleTireType}
                        onChange={handleInput}
                      />
                    </div>
                  </li>
                </ul>
              </form>
              <form className="adn-inputList">
                <ul>
                  <li>
                    <div
                      className={`inputFieldContainer 
                      flex - row
                      center`}
                    >
                      <div className="topic">Fuel Efficiency</div>
                      <input
                        type="text"
                        placeholder=" Fuel Efficiency"
                        className={`inputField`}
                        style={{ width: "761px" }}
                        value={vehicleFuelEffi}
                        onChange={handleInput}
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      className={`inputFieldContainer 
                      flex - row
                      center`}
                    >
                      <div className="topic">Torque</div>
                      <input
                        type="text"
                        placeholder=" Torque"
                        className={`inputField`}
                        style={{ width: "761px" }}
                        value={vehicleTorque}
                        onChange={handleInput}
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      className={`inputFieldContainer 
                      flex - row
                      center`}
                    >
                      <div className="topic">Acceleration</div>
                      <input
                        type="text"
                        placeholder=" Acceleration"
                        className={`inputField`}
                        style={{ width: "761px" }}
                        value={vehicleAccel}
                        onChange={handleInput}
                      />
                    </div>
                  </li>
                </ul>
              </form>
            </div>
            <form className="adn-inputList">
              <ul>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Top Speed</div>
                    <input
                      type="text"
                      placeholder=" Top Speed"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleTopSpeed}
                      onChange={handleInput}
                    />
                  </div>
                </li>
              </ul>
            </form>
          </div>
        )}
        {currentStep === 5 && (
          <div className="formFive">
            <form className="adn-inputList">
              <ul>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Cargo Capacity</div>
                    <input
                      type="text"
                      placeholder=" Cargo Capacity"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleCargoCapacity}
                      onChange={handleInput}
                    />
                  </div>
                </li>
                <li>
                  <div
                    className={`inputFieldContainer 
                      flex - row
                      center`}
                  >
                    <div className="topic">Towing Capacity</div>
                    <input
                      type="text"
                      placeholder=" Towing Capacity"
                      className={`inputField`}
                      style={{ width: "761px" }}
                      value={vehicleTowingCapacity}
                      onChange={handleInput}
                    />
                  </div>
                </li>
                <li>
                  <label className="fileLable" id="label">
                    <FontAwesomeIcon icon={faCloudArrowUp} />
                    <span id="span">{fileName}</span>
                    <input
                      id="input"
                      className="fileInput"
                      type="file"
                      name={fileName}
                      onChange={handleFileChange}
                    />
                  </label>
                </li>
              </ul>
            </form>
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
