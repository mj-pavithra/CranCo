import { useNavigate } from "react-router-dom";
import "../css/VehiclesPage.css";
import { toggleDivsVisibility } from '../pages/VehiclesPageOwnersView';


function VehicleAboutOwnersView({
  brand,
  trim,
  condition,
  body_type,
  engine_capacity,
  model,
  mf_year,
  transmission,
  fuel_type,
  mileage,
  vehicleDescription,
  vehiclProfileName,
  toggleDivsVisibility ,
}) {
  const navigate = useNavigate();

  const dummyVehicleProfileName = "Black Panther";
  const dummyBrand = "Audi";
  const dummyTrim = "A4 Titanium Premium 40 TFSI";
  const dummyCondition = "Used";
  const dummyBody_type = "Compact Cars";
  const dummyEngine_capacity = "236 @ 1450";
  const dummyModel = "A4";
  const dummyMf_year = "2019";
  const dummyTransmission = "7-Speed S tronic";
  const dummyFuel_type = "Premium";
  const dummyMileage = "28,000,010 km";
  const dummyVehicleDescription =
    "My car is sexy. Melbourne white colour. Interior is nice. I enjoy changing the ambiance light to the colour of my choise.";
  return   (
    <div className="vehicle-about">
      <div className="vehicle-profile-name">
        <p>{vehiclProfileName || dummyVehicleProfileName}</p>
        
        <button
          className="edit-btn"
          onClick={() => navigate("/VehicleAboutEdit")}
        >
          Edit
        </button>
      </div>
      <div className="about-info-container">
        <div className="about-info">
          <p>
            Brand: <b>{brand || dummyBrand}</b>
          </p>
          <p>
            Model: <b>{model || dummyModel}</b>
          </p>
        </div>
        <div className="about-info">
          <p>
            Trim/ Edition: <b>{trim || dummyTrim}</b>
          </p>
          <p>
            Year of Manufacture: <b>{mf_year || dummyMf_year}</b>
          </p>
        </div>
        <div className="about-info">
          <p>
            Condition: <b>{condition || dummyCondition}</b>
          </p>
          <p>
            Transmission: <b>{transmission || dummyTransmission}</b>
          </p>
        </div>
        <div className="about-info">
          <p>
            Body Types: <b>{body_type || dummyBody_type}</b>
          </p>
          <p>
            Fuel Type: <b>{fuel_type || dummyFuel_type}</b>
          </p>
        </div>
        <div className="about-info">
          <p>
            Engine Capacity: <b>{engine_capacity || dummyEngine_capacity}</b>
          </p>
          <p>
            Mileage: <b>{mileage || dummyMileage}</b>
          </p>
        </div>
      </div>
      <div className="vehicle-description">
        <b>Description:</b> {vehicleDescription || dummyVehicleDescription}
      </div>
    </div>
    
  );
}

export default VehicleAboutOwnersView;
