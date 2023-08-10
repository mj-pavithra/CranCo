import "../css/VehiclesPage.css";
import { useNavigate } from "react-router-dom";

function Photobooth({ image1, image2, image3 }) {
  //dummy images for testing purposes

  const dummyImage1 = "/assets/audiA4.jpeg";
  const dummyImage2 = "/assets/audiA4_rear.jpg";
  const dummyImage3 = "/assets/audiA4_out.jpeg";

  const navigate = useNavigate();
  return (
    <div className="photobooth">
      <div
        className="photo-1"
        style={{
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      >
        <img
          style={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
          className="vehicle-page-photo"
          src={image1 || dummyImage1}
          alt="audiA4"
        />
      </div>
      <div className="photo-2" style={{ borderTopRightRadius: "10px" }}>
        <img
          style={{ borderTopRightRadius: "10px" }}
          className="vehicle-page-photo"
          src={image2 || dummyImage2}
          alt="audiA4_rear"
        />
      </div>
      <div
        className="photo-3"
        style={{ borderBottomRightRadius: "10px", position: "relative" }}
      >
        <img
          style={{ borderBottomRightRadius: "10px" }}
          className="vehicle-page-photo"
          src={image3 || dummyImage3}
          alt="audiA4_out"
        />
        <button
          onClick={() => navigate("/AllVehiclePhotos")}
          className="show-all-photos"
          style={{ position: "absolute", bottom: "20px", right: "15px" }}
        >
          Show all photos
        </button>
      </div>
    </div>
  );
}

export default Photobooth;
