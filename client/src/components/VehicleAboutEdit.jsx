import { useState } from "react";
import "../css/VehicleAboutEdit.css";

function VehicleAboutEdit() {
  const [error, setError] = useState(false);

  const [brand, setBrand] = useState("");
  const [edition, setEdition] = useState("");
  const [condition, setCondition] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [model, setModel] = useState("");
  const [manuYear, setManuYear] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuel, setFuel] = useState("");
  const [mileage, setMileage] = useState("");

  const validationMsg = (
    <label className="vehicle-about-edit-vali">
      This field cannot be empty
    </label>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      brand.length == 0 ||
      edition.length == 0 ||
      condition.length == 0 ||
      bodyType.length == 0 ||
      engineCapacity.length == 0 ||
      model.length == 0 ||
      manuYear.length == 0 ||
      transmission.length == 0 ||
      fuel.length == 0 ||
      mileage.length == 0
    ) {
      setError(true);
    }
    console.log(
      brand,
      edition,
      condition,
      bodyType,
      engineCapacity,
      model,
      transmission,
      fuel,
      mileage
    );
  };

  <div className="vehicle-about-edit-container">
    <div className="title-division">
      <p className="page-title">
        <b>Edit Your Vehicle Information</b>
      </p>
    </div>
    <form className="vehicle-about-edit-form">
      <div className="vehicle-about-edit-div">
        <label className="vehicle-about-edit-label">Brand:</label>
        <input
          type="text"
          className="vehicle-about-edit-input"
          onChange={handleSubmit((e) => setBrand(e.target.value))}
        />
        {error && brand.length === 0 ? validationMsg : null}
        <br />
        <br />
        <label className="vehicle-about-edit-label">Trim/ Edition:</label>
        <input
          type="text"
          className="vehicle-about-edit-input"
          onChange={handleSubmit((e) => setEdition(e.target.value))}
        />
        {error && edition.length === 0 ? validationMsg : null}
        <br />
        <label className="vehicle-about-edit-label">Condition:</label>
        <input
          type="text"
          className="vehicle-about-edit-input"
          onChange={handleSubmit((e) => setCondition(e.target.value))}
        />
        {error && condition.length === 0 ? validationMsg : null}
        <br />
        <label className="vehicle-about-edit-label">Body Type:</label>
        <input
          type="text"
          className="vehicle-about-edit-input"
          onChange={handleSubmit((e) => setBodyType(e.target.value))}
        />
        {error && bodyType.length === 0 ? validationMsg : null}
        <br />
        <label className="vehicle-about-edit-label">Engine Capacity:</label>
        <input
          type="text"
          className="vehicle-about-edit-input"
          onChange={handleSubmit((e) => setEngineCapacity(e.target.value))}
        />
        {error && engineCapacity.length === 0 ? validationMsg : null}
        <br />
        <button className="edit-vehicle-about">Cancel</button>
      </div>
      <div className="vehicle-about-edit-div">
        <label className="vehicle-about-edit-label">Model:</label>
        <input
          type="text"
          className="vehicle-about-edit-input"
          onChange={handleSubmit((e) => setModel(e.target.value))}
        />
        {error && model.length === 0 ? validationMsg : null}
        <br />
        <label className="vehicle-about-edit-label">Year of Manufacture:</label>
        <input
          type="text"
          className="vehicle-about-edit-input"
          onChange={handleSubmit((e) => setManuYear(e.target.value))}
        />
        {error && manuYear.length === 0 ? validationMsg : null}
        <br />
        <label className="vehicle-about-edit-label">Transmission:</label>
        <input
          type="text"
          className="vehicle-about-edit-input"
          onChange={handleSubmit((e) => setTransmission(e.target.value))}
        />
        {error && transmission.length === 0 ? validationMsg : null}
        <br />
        <label className="vehicle-about-edit-label">Fuel Type:</label>
        <input
          type="text"
          className="vehicle-about-edit-input"
          onChange={handleSubmit((e) => setFuel(e.target.value))}
        />
        {error && fuel.length === 0 ? validationMsg : null}
        <br />
        <label className="vehicle-about-edit-label">Mileage:</label>
        <input
          type="text"
          className="vehicle-about-edit-input"
          onChange={handleSubmit((e) => setMileage(e.target.value))}
        />
        {error && mileage.length === 0 ? validationMsg : null}
        <br />
        <button className="edit-vehicle-about">Submit</button>
      </div>
    </form>
  </div>;
}

export default VehicleAboutEdit;
