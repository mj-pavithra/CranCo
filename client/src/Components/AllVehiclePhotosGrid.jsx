import "../css/VehiclesPage.css";

function AllVehiclePhotosGrid({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
}) {
  const dummyImage1 = "/assets/audiA4.jpeg";
  const dummyImage2 = "/assets/audiA4_rear.jpg";
  const dummyImage3 = "/assets/audiA4_out.jpeg";
  const dummyImage4 = "/assets/audiA4_side.jpeg";
  const dummyImage5 = "/assets/audiA4_front.jpeg";
  const dummyImage6 = "/assets/audiA4int_1.jpeg";
  const dummyImage7 = "/assets/audiA4_int_2.jpeg";
  const dummyImage8 = "/assets/audiA4_int3.jpeg";
  const dummyImage9 = "/assets/audiA4_int_4.jpeg";
  const dummyImage10 = "/assets/audiA4_int5.jpeg";

  return (
    <div className="all-vehicle-photos">
      <div className="all-photos-grid-container-left">
        <img src={image1 || dummyImage1} alt="image1" />
        <img src={image2 || dummyImage2} alt="image2" />
        <img src={image3 || dummyImage3} alt="image3" />
        <img src={image4 || dummyImage4} alt="image4" />
        <img src={image5 || dummyImage5} alt="image5" />
      </div>
      <div className="all-photos-grid-container-right">
        <img src={image6 || dummyImage6} alt="image6" />
        <img src={image7 || dummyImage7} alt="image7" />
        <img src={image8 || dummyImage8} alt="image8" />
        <img src={image9 || dummyImage9} alt="image9" />
        <img src={image10 || dummyImage10} alt="image10" />
      </div>
    </div>
  );
}

export default AllVehiclePhotosGrid;
