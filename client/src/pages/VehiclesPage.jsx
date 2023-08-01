import { useEffect } from "react";
import "../components/NavigationBar";
import VehiclesAbout from "../components/VehicleAbout";
import "../css/VehiclesPage.css";
import Post from "../components/Post";

const VehiclesPage = () => {
  const fetchVehicleAbouts = () => {
    // backend to fetch vehicle abouts
  };

  useEffect(() => {
    fetchVehicleAbouts();
  });

  const fetchVehiclePhotos = () => {
    //backend to fetch vehicle images
  };

  useEffect(() => {
    fetchVehiclePhotos();
  });

  return (
    <div>
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
            src="/assets/audiA4.jpeg"
            alt="audiA4"
          />
        </div>
        <div className="photo-2" style={{ borderTopRightRadius: "10px" }}>
          <img
            style={{ borderTopRightRadius: "10px" }}
            className="vehicle-page-photo"
            src="/assets/audiA4_rear.jpg"
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
            src="/assets/audiA4_out.jpeg"
            alt="audiA4_out"
          />
          <button
            className="show-all-photos"
            style={{ position: "absolute", bottom: "20px", right: "15px" }}
          >
            Show all photos
          </button>
        </div>
      </div>
      <div className="vehicle-about">
        <VehiclesAbout />
      </div>
      <div className="Posts">
        <Post />
      </div>
    </div>
  );
};

export default VehiclesPage;
