import React from "react";
import "../css/ViewVehicleDetails.css";
import Btn from "./Btn";

const ViewVehicleDetails = (props) => {
  return (
    <>
      <div className="main">
        <div className="image">

          <img src="/assets/car_img_4.jpg"/>

        </div>

        <div className="text">

          <h4>Nissan GTR</h4>
          <p>Owned by <b>Himashi Nethmi</b><br/><br/>
          Lorem ipsum dolor sit amet consectetur. Conseqd sagittis nunc libero fames
          
          </p>
          
          <div className="btn">

            <button className="vbtn">View Details</button>

          </div>
          

        </div>

      </div>
    </>
  );
};

export default ViewVehicleDetails;
