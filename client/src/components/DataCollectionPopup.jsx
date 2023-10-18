import { useState } from "react";
import "../css/DataCollectionPopup.css";
import StatusDots from "./StatusDots";

function DataCollectionPopup() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected option: ", selectedOption);
  };

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const totalSteps = 2;

  return (
    <div className="body">
      <div className="data-collection-popup">
        <div className="StatusDots">
          <StatusDots totalSteps={totalSteps} currentStep={currentStep} />
        </div>
        <div className="data-collection-popup-head">
          <h1>What is your gender?</h1>
          <p>
            This helps us find you more relevant content. We won't show it on
            your profile.
          </p>
        </div>
        <div className="data-collection-popup-fill">
          <form className="data-collection-popup-form" onSubmit={handleSubmit}>
            <label className="data-collection-popup-label">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={selectedOption === "female"}
                onChange={handleOptionChange}
              />
              Female
            </label>
            <label className="data-collection-popup-label">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={selectedOption === "male"}
                onChange={handleOptionChange}
              />
              Male
            </label>
            <label className="data-collection-popup-label">
              <input
                type="radio"
                name="gender"
                value="other"
                checked={selectedOption === "other"}
                onChange={handleOptionChange}
              />
              Other
            </label>
            <button
              className="data-collection-popup-btn"
              type="submit"
              onClick={handleNext}
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DataCollectionPopup;
