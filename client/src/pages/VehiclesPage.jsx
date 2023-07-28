import "../components/NavigationBar";
import VehicleAbout from "../components/VehicleAbout";
import "../css/VehiclesPage.css";

const VehiclesPage = () => {
  return (
    <div>
      <div className="photobooth"></div>
      <div className="vehicle-about">
        <VehicleAbout
          name="Black Panther"
          label1="Brand"
          label2="Trim/ Edition"
          label3="Condition"
          label4="Body Type"
          label5="Engine Capacity"
          brand="Audi A6 Sedan Prestige"
          trim="45 TFSI" // Trim/Edition
          condition="Used"
          body="Aluminum" // Body type
          engine="273 lb-ft" // Engine capacity
        />
      </div>
      <div className="vehicle-description">
        <VehicleAbout
          label6="Description"
          description="My car is sexy. I love its sound."
        />
      </div>
      <div className="Posts">Posts</div>
    </div>
  );
};

export default VehiclesPage;
