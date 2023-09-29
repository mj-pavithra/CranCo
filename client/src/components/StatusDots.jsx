import React, { useState } from "react";
import StatusDots from "./StatusDots";

function Popup() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const totalSteps = 2;

  return (
    <div>
      <StatusDots totalSteps={totalSteps} currentStep={currentStep} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Popup;
