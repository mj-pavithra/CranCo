import { useState } from "react";
import EachItem from "../components/Eachitem";
import { Link } from "react-router-dom";

function MidMaxBlock({ rowTitle, items, image, action, dis, type }) {
  // Define showGrid state and setShowGrid state setter
  const [showGrid, setShowGrid] = useState(false);
  let linkto = ""; // Use 'let' instead of 'const' here

  if (type === "user") {
    linkto = "/user";
  } else if (type === "vehicle") {
    linkto = "/vehicles";
  }

  return (
    <div className="mid-max-block">
      <h1 className="row-title">{rowTitle}</h1>
      <div className={showGrid ? "grid-container" : "row-container"}>
        {items.map((item, index) => (
          <Link className="link-unstyled" to={linkto} key={index}>
            <EachItem 
              itemName={item}
              dis={dis[index]}
              img={image[index]}  // Use image[index] to get the corresponding image for the item
              action={action}
              linkto={linkto}
            />
          </Link>
        ))}
      
      </div>
      <button className="see-more-btn" onClick={() => setShowGrid(!showGrid)}>
        {showGrid ? "See Less" : "See More"}
      </button>
    </div>
  );
}

export default MidMaxBlock;
