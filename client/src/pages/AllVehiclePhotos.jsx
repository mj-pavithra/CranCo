import { useEffect } from "react";
import AllVehiclePhotosGrid from "../components/AllVehiclePhotosGrid";
import "../css/VehiclesPage.css";

function AllVehiclePhotos() {
  const fetchVehiclePhotos = () => {
    // Backend to fetch vehicle photos
  };

  useEffect(() => {
    fetchVehiclePhotos();
  });

  return (
    <div>
      <AllVehiclePhotosGrid />
    </div>
  );
}

export default AllVehiclePhotos;
