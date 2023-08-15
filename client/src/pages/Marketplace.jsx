import React from "react";
import NavigationBar from "../components/NavigationBar";
import UserSidebar from "../components/UserSidebar";
import MidMaxBlock from "./MidMaxBlock";

const Marketplace = () => {
  // Sample data as JSON object
  const data = [
    { rowTitle: "car", items: ["CGE 5668", "CAS 9200", "CQP 5163", "ABC 1234", "XYZ 7890", "JKL 5678", "MNO 4567", "PQR 2345", "DEF 9012", "GHI 3456", "STU 6789"] , dis:"registered", image: ["/assets/car_img_3.jpg"]},
    { rowTitle: "motorbike", items: ["BMX 9461", "BCD 9234", "BQR 9913", "TUV 8265", "NOP 1234", "VWX 5678", "LMN 9012", "OPQ 3456", "RSV 6789", "JKL 4321", "XYZ 0987"], dis:"registered", image: "/assets/motorbike.jpeg" },
    { rowTitle: "truck", items: ["TRU 1111", "TRK 2222", "TUC 3333", "TUK 4444", "RCK 5555", "TRU 6666", "TRC 7777", "TRK 8888", "TUC 9999", "TUK 0000", "TRK 1212"], dis:"registered", image: "/assets/truck.jpeg" },
    { rowTitle: "scooter", items: ["SCO 1111", "SCT 2222", "SCP 3333", "SPO 4444", "SPR 5555", "SCQ 6666", "SCE 7777", "SCX 8888", "SCY 9999", "SCI 0000", "SCV 1212"], dis:"registered", image: "/assets/scooter.jpeg" },
    { rowTitle: "bus", items: ["BUS 1111", "BSC 2222", "BSO 3333", "BSK 4444", "BSX 5555", "BSE 6666", "BSY 7777", "BSC 8888", "BSX 9999", "BSS 0000", "BSC 1212"] , dis:"registered", image: "/assets/bus.jpeg"},
     // Add more data objects here as needed
  ];

  const action = "check vehicle";

  return (
    <>
      <NavigationBar />
      <body>
        <div className="div-1">
          <div className="div-left">
            <UserSidebar />
          </div>
          <div className={`div-max-middle `}>
            {data.map((blockData, index) => (
              <MidMaxBlock key={index} rowTitle={blockData.rowTitle} items={blockData.items} dis={blockData.dis} image={blockData.image} action={action}  type ="vehicle"/>
            ))}
          </div>
        </div>
      </body>
    </>
  );
};

export default Marketplace;
