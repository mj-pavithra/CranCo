import { useEffect } from "react";
import "../components/NavigationBar";
import VehiclesAbout from "../components/VehicleAbout";
import "../css/VehiclesPage.css";
import Post from "../components/Post";
import Photobooth from "../components/Photobooth";
import MainContainer from "../containers/MainContainer";

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
    <MainContainer>
      <div className="photobooth-renderer">
        <Photobooth />
      </div>
      <div className="vehicle-about">
        <VehiclesAbout />
      </div>
      <div className="Posts">
        <Post />
      </div>
    </MainContainer>
  );
};

export default VehiclesPage;
