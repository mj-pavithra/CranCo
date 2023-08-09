import MainContainer from "../containers/MainContainer";
import "../css/VehicleAboutEdit.css";

function VehicleAboutEdit() {
  return (
    <MainContainer>
      <div className="title-division">
        <p className="page-title">
          <b>Edit Your Vehicle Information</b>
        </p>
      </div>
      <div className="editing-form"></div>
    </MainContainer>
  );
}

export default VehicleAboutEdit;
