import { useState } from "react";
import EachItem from "../components/Eachitem.jsx";
// import Btn from "../components/Btn";

function MidMaxBlock({ rowTitle, items, image, action, dis }) {
  // Define showGrid state and setShowGrid state setter
  const [showGrid, setShowGrid] = useState(false);

  return (
    <div className="mid-max-block">
      <h1 className="row-title">{rowTitle}</h1>
      <div className={showGrid ? "grid-container" : "row-container"}>
        {items.map((item, index) => (
          <EachItem
            key={index}
            itemName={item}
            dis={dis}
            img={image}
            action={action}
          />
        ))}
      </div>
      <button className="see-more-btn" onClick={() => setShowGrid(!showGrid)}>
        {showGrid ? "See Less" : "See More"}
      </button>
    </div>
  );
}

export default MidMaxBlock;
