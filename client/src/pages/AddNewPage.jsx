import React, { useState } from "react";
import InputField from "../components/InputField";
import LoginInput from "../components/LoginInput";
import "../css/AddNewPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const AddNewPage = () => {
    const [currentStep, setCurrentStep] = useState(1);

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

    const [fileName, setFileName] = useState('Upload your file here');

    const handleFileChange = (e) => {
        if(e.target.files[0]){
            setFileName(e.target.files[0].name);
        }else{
            setFileName('Upload your file here');
        }
    };

    return ( 
        <div className="AddNewPageContainer">
            <div className="adn-title">SIGN UP YOUR SOUL ACCOUNT</div>
            <p className="adn-subTitle">Fill all required fields to go to the next step</p>
            {currentStep === 1 && (
                <div className="formOne">
                    <form className="adn-inputList">
                        <ul>
                            <li><InputField topic="Vehicle Type" placeholder="Type vehicle type" flexDirection="flex-row" alignContent="center" width="716px"/></li>
                            <li><InputField topic="Manufacturer" placeholder="Type manufacturer" flexDirection="flex-row" alignContent="center" width="716px"/></li>
                            <li><InputField topic="Model" placeholder="Type model" flexDirection="flex-row" alignContent="center" width="716px"/></li>
                            <li><InputField topic="Manufactured Year" placeholder="Type manufactured year" flexDirection="flex-row" alignContent="center" width="716px"/></li>
                            <li><InputField topic="Registration Number" placeholder="Type registration number" flexDirection="flex-row" alignContent="center" width="716px"/></li>
                        </ul>
                    </form>
                </div>
            )}
            {currentStep === 2 && (
                <div className="formTwo">
                     <form className="adn-inputList">
                        <ul>
                            <li><InputField topic="Fuel Type" placeholder="Type fuel type" flexDirection="flex-row" alignContent="center" width="716px"/></li>
                            <li><InputField topic="Engine Type" placeholder="Type engine type" flexDirection="flex-row" alignContent="center" width="716px"/></li>
                            <li><InputField topic="Transmission" placeholder="Type transmission" flexDirection="flex-row" alignContent="center" width="716px"/></li>
                            <li><InputField topic="Drivetrain" placeholder="Type Drivetrain" flexDirection="flex-row" alignContent="center" width="716px"/></li>
                            <li><InputField topic="Body Style" placeholder="Type body style" flexDirection="flex-row" alignContent="center" width="716px"/></li>
                        </ul>
                    </form>
                </div>
            )}
            {currentStep === 3 && (
                <div className="formThreeContainer">
                <div className="formThree">
                    <form className="adn-inputList left">
                        <ul>
                            <li><InputField topic="Color" placeholder="Type color" flexDirection="flex-column" alignContent="flex-start" width="436px"/></li>
                            <li><InputField topic="External Structures" placeholder="Type external structures" flexDirection="flex-column" alignContent="flex-start" width="436px"/></li>
                            <li><InputField topic="Interior Color" placeholder="Type interior color" flexDirection="flex-column" alignContent="flex-start" width="436px"/></li>
                        </ul>
                    </form>
                    <form className="adn-inputList right">
                        <ul>
                            <li><InputField topic="Seating Capacity" placeholder="Type seating capacity" flexDirection="flex-column" alignContent="flex-start" width="436px"/></li>
                            <li><InputField topic="Interior Material" placeholder="Type interior material" flexDirection="flex-column" alignContent="flex-start" width="436px"/></li>
                            <li><InputField topic="Infotainment System" placeholder="Type infotainment system" flexDirection="flex-column" alignContent="flex-start" width="436px"/></li>
                        </ul>
                    </form>
                </div>
                <form className="adn-inputList right">
                        <ul>
                            <li><InputField topic="Safety Features" placeholder="Type safety features" flexDirection="flex-column" alignContent="flex-start" width="1016px"/></li>
                        </ul>
                    </form>
                </div>
            )}
            {currentStep === 4 && (
                <div className="formFourContainer">
                <div className="formFour">
                    <form className="adn-inputList">
                        <ul>
                            <li><InputField topic="Suspension Type" placeholder="Type suspension type" flexDirection="flex-column" alignContent="flex-start" width="436px"/></li>
                            <li><InputField topic="Tire Type" placeholder="Type tire type" flexDirection="flex-column" alignContent="flex-start" width="436px"/></li>
                            <li><InputField topic="Torque" placeholder="Type torque" flexDirection="flex-column" alignContent="flex-start" width="436px"/></li>
                        </ul>
                    </form>
                    <form className="adn-inputList">
                        <ul>
                            <li><InputField topic="Wheels" placeholder="Type wheels" flexDirection="flex-column" alignContent="flex-start" width="436px"/></li>
                            <li><InputField topic="Fuel Efficiency" placeholder="Type fuel efficiency" flexDirection="flex-column" alignContent="flex-start" width="436px"/></li>
                            <li><InputField topic="Acceleration" placeholder="Type acceleration" flexDirection="flex-column" alignContent="flex-start" width="436px"/></li>
                        </ul>
                    </form>
                </div>
                <form className="adn-inputList">
                        <ul>
                            <li><InputField topic="Top Speed" placeholder="Type top speed" flexDirection="flex-column" alignContent="flex-start" width="1016px"/></li>
                        </ul>
                    </form>
                </div>
            )}
            {currentStep === 5 && (
                <div className="formFive">
                    <form className="adn-inputList">
                       <ul>
                            <li><InputField topic="Cargo Capacity" placeholder="Type cargo capacity" flexDirection="flex-row" alignContent="center" width="716px"/></li>
                            <li><InputField topic="Towing Capacity" placeholder="Type towing capacity" flexDirection="flex-row" alignContent="center" width="716px"/></li>
                            <li>
                                <label className="fileLable" id="label">
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                    <span id="span">{fileName}</span>
                                    <input id="input" className="fileInput" type="file" onChange={handleFileChange} />
                                </label>
                            </li>
                       </ul>
                    </form>
                </div>
            )}
            <div className="btnHolder">
                {currentStep < 5 && <button className="adn-next" onClick={handleNext}>Next</button>}
                {currentStep > 1 && <button className="adn-previous" onClick={handlePrevious}>Previous</button>}
            </div>
        </div>
    );
}
 
export default AddNewPage;
