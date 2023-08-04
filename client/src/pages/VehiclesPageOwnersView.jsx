import { useEffect } from "react";
import "../components/NavigationBar";
import "../css/VehiclesPage.css";
import Post from "../components/Post";
import Photobooth from "../components/Photobooth";
import MainContainer from "../containers/MainContainer";
import VehicleAboutOwnersView from "../components/VehicleAboutOwnersView";
import AddNewUpdate from "../components/AddNewUpdate";

const VehiclesPageOwnersView = () => {
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
        <VehicleAboutOwnersView />
      </div>
      <div className="add-new-update">
        <AddNewUpdate />
      </div>
      <div className="Posts">
        <Post />
      </div>
    </MainContainer>
  );
};

export default VehiclesPageOwnersView;
