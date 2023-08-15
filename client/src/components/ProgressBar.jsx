import React, { useState } from 'react';
import "../css/ProgressBar.css";


const ProgressSteps = () => {
  const [currentActive, setCurrentActive] = useState(1);

  const circles = Array.from({ length: 4 }); // Change the length to match the number of circles

  const handleNext = () => {
    setCurrentActive(prev => (prev < circles.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentActive(prev => (prev > 1 ? prev - 1 : prev));
  };

  const update = () => {
    const activeCircles = circles.slice(0, currentActive);

    const progressWidth = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + '%';

    return (
      <>
        <div className="progress-container">
          <div className="progress" style={{ width: progressWidth }}></div>
          {circles.map((circle, index) => (
            <div
              key={index}
              className={`circles ${index < currentActive ? 'active' : ''}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <button className="btn" onClick={handlePrev} disabled={currentActive === 1}>
          Prev
        </button>
        <button className="btn" onClick={handleNext} disabled={currentActive === circles.length}>
          Next
        </button>
      </>
    );
  };

  return <div className="container">{update()}</div>;
};

export default ProgressSteps;
