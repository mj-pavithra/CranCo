import { useEffect } from "react";
import "../components/NavigationBar";
import "../css/VehiclesPage.css";
import Post from "../components/Post";
import PhotoboothVehicleOwner from "../components/PhotoboothVehicleOwner";
import MainContainer from "../containers/MainContainer";
import VehicleAboutOwnersView from "../components/VehicleAboutOwnersView";
import AddNewUpdate from "../components/AddNewUpdate";
import VehiclePageNavbar from "../components/VehiclePageNavbar";

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
      <div className="vehiclepage-navbar">
        <VehiclePageNavbar />
      </div>
      <div className="photobooth-renderer">
        <PhotoboothVehicleOwner />
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
