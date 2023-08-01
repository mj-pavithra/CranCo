import { useEffect } from "react";
import AllVehiclePhotosGrid from "../components/AllVehiclePhotosGrid";
import "../css/VehiclesPage.css";
import MainContainer from "../containers/MainContainer";

function AllVehiclePhotos() {
  const fetchVehiclePhotos = () => {
    // Backend to fetch vehicle photos
  };

  useEffect(() => {
    fetchVehiclePhotos();
  });

  return (
    <MainContainer>
      <AllVehiclePhotosGrid />
    </MainContainer>
  );
}

export default AllVehiclePhotos;
