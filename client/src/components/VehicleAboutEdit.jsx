// import { useState } from "react";
// import "../css/VehicleAboutEdit.css";

// function VehicleAboutEdit() {
//   const [error, setError] = useState(false);

//   const [vehicleColor, setVehicleColor] = useState("");
//   const [vehicleBodyStyle, setVehicleBodyStyle] = useState("");
//   const [vehicleIntMaterial, setVehicleIntMaterial] = useState("");
//   const [vehicleIntColor, setVehicleIntColor] = useState("");
//   const [vehicleTireType, setVehicleTireType] = useState("");

//   const validationMsg = (
//     <label className="vehicle-about-edit-vali">
//       This field cannot be empty.
//     </label>
//   );

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       vehicleColor.length === 0 ||
//       vehicleBodyStyle.length === 0 ||
//       vehicleIntMaterial.length === 0 ||
//       vehicleIntColor.length === 0 ||
//       vehicleTireType.length === 0
//     ) {
//       setError(true);
//     } else {
//       setError(false);
//       console.log(
//         vehicleColor,
//         vehicleBodyStyle,
//         vehicleIntColor,
//         vehicleIntMaterial,
//         vehicleTireType
//       );
//     }
//   };

//   return (
//   <div className="vehicle-about-edit-container">
//     <div className="title-division">
//       <p className="page-title">
//         <b>Edit Your Vehicle Information</b>
//       </p>
//     </div>
//     {/* <form className="vehicle-about-edit-form"> */}
//       <div className="vehicle-about-edit-div">
//         <label className="vehicle-about-edit-label">Vehicle Color:</label>
//         <input
//           type="text"
//           className="vehicle-about-edit-input"
//           onChange={handleSubmit((e) => setVehicleColor(e.target.value))}
//         />
//         {error && vehicleColor.length === 0 ? validationMsg : null}
//         <br />
//         <br />
//         <label className="vehicle-about-edit-label">Body Style:</label>
//         <input
//           type="text"
//           className="vehicle-about-edit-input"
//           onChange={handleSubmit((e) => setVehicleBodyStyle(e.target.value))}
//         />
//         {error && vehicleBodyStyle.length === 0 ? validationMsg : null}
//         <br />
//         <label className="vehicle-about-edit-label">Interior Material:</label>
//         <input
//           type="text"
//           className="vehicle-about-edit-input"
//           onChange={handleSubmit((e) => setVehicleIntMaterial(e.target.value))}
//         />
//         {error && vehicleIntMaterial.length === 0 ? validationMsg : null}
//         <br />
//         <label className="vehicle-about-edit-label">Interior Color:</label>
//         <input
//           type="text"
//           className="vehicle-about-edit-input"
//           onChange={handleSubmit((e) => setVehicleIntColor(e.target.value))}
//         />
//         {error && vehicleIntColor.length === 0 ? validationMsg : null}
//         <br />
//         <label className="vehicle-about-edit-label">Tire Type:</label>
//         <input
//           type="text"
//           className="vehicle-about-edit-input"
//           onChange={handleSubmit((e) => setVehicleTireType(e.target.value))}
//         />
//         {error && vehicleTireType.length === 0 ? validationMsg : null}
//         <br />
//         <button className="edit-vehicle-about">Cancel</button>
//       </div>
//       {/* <div className="vehicle-about-edit-div">
//         <label className="vehicle-about-edit-label">Model:</label>
//         <input
//           type="text"
//           className="vehicle-about-edit-input"
//           onChange={handleSubmit((e) => setModel(e.target.value))}
//         />
//         {error && model.length === 0 ? validationMsg : null}
//         <br />
//         <label className="vehicle-about-edit-label">Year of Manufacture:</label>
//         <input
//           type="text"
//           className="vehicle-about-edit-input"
//           onChange={handleSubmit((e) => setManuYear(e.target.value))}
//         />
//         {error && manuYear.length === 0 ? validationMsg : null}
//         <br />
//         <label className="vehicle-about-edit-label">Transmission:</label>
//         <input
//           type="text"
//           className="vehicle-about-edit-input"
//           onChange={handleSubmit((e) => setTransmission(e.target.value))}
//         />
//         {error && transmission.length === 0 ? validationMsg : null}
//         <br />
//         <label className="vehicle-about-edit-label">Fuel Type:</label>
//         <input
//           type="text"
//           className="vehicle-about-edit-input"
//           onChange={handleSubmit((e) => setFuel(e.target.value))}
//         />
//         {error && fuel.length === 0 ? validationMsg : null}
//         <br />
//         <label className="vehicle-about-edit-label">Mileage:</label>
//         <input
//           type="text"
//           className="vehicle-about-edit-input"
//           onChange={handleSubmit((e) => setMileage(e.target.value))}
//         />
//         {error && mileage.length === 0 ? validationMsg : null}
//         <br /> */}
//         <button className="edit-vehicle-about">Submit</button>
//       </div>
//     {/* </form> */}
//     </div>
//   );
// }

// export default VehicleAboutEdit;
import { useState } from "react";
import "../css/VehicleAboutEdit.css";

function VehicleAboutEdit() {
  const [error, setError] = useState(false);
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleBodyStyle, setVehicleBodyStyle] = useState("");
  const [vehicleIntMaterial, setVehicleIntMaterial] = useState("");
  const [vehicleIntColor, setVehicleIntColor] = useState("");
  const [vehicleTireType, setVehicleTireType] = useState("");

  const validationMsg = (
    <label className="vehicle-about-edit-vali">
      This field cannot be empty.
    </label>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      vehicleColor.length === 0 ||
      vehicleBodyStyle.length === 0 ||
      vehicleIntMaterial.length === 0 ||
      vehicleIntColor.length === 0 ||
      vehicleTireType.length === 0
    ) {
      setError(true);
    } else {
      setError(false);
      console.log(
        vehicleColor,
        vehicleBodyStyle,
        vehicleIntColor,
        vehicleIntMaterial,
        vehicleTireType
      );
    }
  };

  return (
    <div className="vehicle-about-edit-container">
      <div className="title-division">
        <p className="page-title">
          <b>Edit Your Vehicle Information</b>
        </p>
      </div>
      <form className="vehicle-about-edit-form" onSubmit={handleSubmit}>
        <div className="vehicle-about-edit-div">
          <label className="vehicle-about-edit-label">Vehicle Color:</label>
          <input
            type="text"
            className="vehicle-about-edit-input"
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
          />
          {error && vehicleColor.length === 0 ? validationMsg : null}
          <br />
          <br />
          <label className="vehicle-about-edit-label">Body Style:</label>
          <input
            type="text"
            className="vehicle-about-edit-input"
            value={vehicleBodyStyle}
            onChange={(e) => setVehicleBodyStyle(e.target.value)}
          />
          {error && vehicleBodyStyle.length === 0 ? validationMsg : null}
          <br />
          <label className="vehicle-about-edit-label">Interior Material:</label>
          <input
            type="text"
            className="vehicle-about-edit-input"
            onChange={handleSubmit((e) =>
              setVehicleIntMaterial(e.target.value)
            )}
          />
          {error && vehicleIntMaterial.length === 0 ? validationMsg : null}
          <br />
          <label className="vehicle-about-edit-label">Interior Color:</label>
          <input
            type="text"
            className="vehicle-about-edit-input"
            onChange={handleSubmit((e) => setVehicleIntColor(e.target.value))}
          />
          {error && vehicleIntColor.length === 0 ? validationMsg : null}
          <br />
          <label className="vehicle-about-edit-label">Tire Type:</label>
          <input
            type="text"
            className="vehicle-about-edit-input"
            onChange={handleSubmit((e) => setVehicleTireType(e.target.value))}
          />
          {error && vehicleTireType.length === 0 ? validationMsg : null}
          <br />
          <button type="reset" className="edit-vehicle-about">
            Cancel
          </button>
          <button type="submit" className="edit-vehicle-about">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default VehicleAboutEdit;
