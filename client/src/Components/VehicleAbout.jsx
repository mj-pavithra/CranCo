import "../css/VehiclesPage.css";

function VehicleAbout({ brand, trim, condition, body_type, engine_capacity }) {
  return (
    <div className="vehicle-about">
      <label>
        <p>Brand</p>
        <p>{brand}</p>
      </label>
      <label>
        <p>Brand</p>
        <p>{trim}</p>
      </label>
      <label>
        <p>Brand</p>
        <p>{condition}</p>
      </label>
      <label>
        <p>Brand</p>
        <p>{body_type}</p>
      </label>
      <label>
        <p>Brand</p>
        <p>{engine_capacity}</p>
      </label>
    </div>
  );
}

export default VehicleAbout;
