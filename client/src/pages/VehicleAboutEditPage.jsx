import VehicleAbout from "../components/VehicleAbout";
import MainContainer from "../containers/MainContainer";
import "../css/VehicleAboutEdit.css";

function VehicleAboutEdit() {
  return (
    <MainContainer>
      <div className="vehicle-about-edit-container">
        <div className="title-division">
          <p className="page-title">
            <b>Edit Your Vehicle Information</b>
          </p>
        </div>
        <form className="vehicle-about-edit-form">
          <div className="vehicle-about-edit-div">
            <label className="vehicle-about-edit-label">Brand:</label>
            <input type="text" className="vehicle-about-edit-input" />
            <br />
            <br />
            <label className="vehicle-about-edit-label">Trim/ Edition:</label>
            <input type="text" className="vehicle-about-edit-input" />
            <br />
            <label className="vehicle-about-edit-label">Condition:</label>
            <input type="text" className="vehicle-about-edit-input" />
            <br />
            <label className="vehicle-about-edit-label">Body Type:</label>
            <input type="text" className="vehicle-about-edit-input" />
            <br />
            <label className="vehicle-about-edit-label">Engine Capacity:</label>
            <input type="text" className="vehicle-about-edit-input" />
            <br />
            <button className="edit-vehicle-about">Cancel</button>
          </div>
          <div className="vehicle-about-edit-div">
            <label className="vehicle-about-edit-label">Model:</label>
            <input type="text" className="vehicle-about-edit-input" />
            <br />
            <label className="vehicle-about-edit-label">
              Year of Manufacture:
            </label>
            <input type="text" className="vehicle-about-edit-input" />
            <br />
            <label className="vehicle-about-edit-label">Transmission:</label>
            <input type="text" className="vehicle-about-edit-input" />
            <br />
            <label className="vehicle-about-edit-label">Fuel Type:</label>
            <input type="text" className="vehicle-about-edit-input" />
            <br />
            <label className="vehicle-about-edit-label">Mileage:</label>
            <input type="text" className="vehicle-about-edit-input" />
            <br />
            <button className="edit-vehicle-about">Submit</button>
          </div>
        </form>
      </div>
      <VehicleAbout />
    </MainContainer>
  );
}

export default VehicleAboutEdit;
