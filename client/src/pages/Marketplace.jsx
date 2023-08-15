import React from "react";
import NavigationBar from "../components/NavigationBar";
import UserSidebar from "../components/UserSidebar";
import MidMaxBlock from "./MidMaxBlock";

const Marketplace = () => {
  // Sample data as JSON object
  const data = [
    { rowTitle: "car", items: ["CGE 5668", "CAS 9200", "CQP 5163", "ABC 1234", "XYZ 7890", "JKL 5678", "MNO 4567", "PQR 2345", "DEF 9012", ] , dis:"registered", image: ["/assets/car_img_3.jpg", "/assets/car_img_2.jpg", "/assets/car_img_1.jpg", "/assets/car_img_4.jpg", "/assets/car_img_5.jpeg", "/assets/car_img_6.jpeg", "/assets/car_img_7.jpeg", "/assets/car_img_8.jpeg", "/assets/car_img_9.jpg",]},
    { rowTitle: "motorbike", items: ["BMX 9461", "BCD 9234", "BQR 9913", "TUV 8265", "NOP 1234", "VWX 5678", "LMN 9012", "OPQ 3456", "RSV 6789", ], dis:"registered", image: ["/assets/motorbike1.jpeg", "/assets/motorbike2.jpg", "/assets/motorbike3.jpeg", "/assets/motorbike4.jpg", "/assets/motorbike5.jpeg", "/assets/motorbike6.jpeg", "/assets/motorbike7.jpg", "/assets/motorbike8.jpeg", "/assets/motorbike9.jpeg", ] },
    { rowTitle: "truck", items: ["TRU 1111", "TRK 2222", "TUC 3333", "TUK 4444", "RCK 5555", "TRU 6666", "TRC 7777", "TRK 8888", "TUC 9999", ], dis:"registered", image: ["/assets/truck1.jpeg",  "/assets/truck2.jpeg",  "/assets/truck3.jpg",  "/assets/truck4.jpeg",  "/assets/truck1.jpeg",  "/assets/truck1.jpeg",  "/assets/truck1.jpeg",  ] },
    { rowTitle: "scooter", items: ["SCO 1111", "SCT 2222", "SCP 3333", "SPO 4444", "SPR 5555", "SCQ 6666",  ], dis:"registered", image: ["/assets/scooter6.jpeg", "/assets/scooter7.jpeg", "/assets/scooter3.jpeg", "/assets/scooter4.jpeg", "/assets/scooter5.jpeg", "/assets/scooter6.jpeg", "/assets/scooter2.jpeg", "/assets/scooter8.jpeg", ] },
    { rowTitle: "bus", items: ["BUS 1111", "BSC 2222", "BSO 3333", "BSK 4444", "BSX 5555",  ] , dis:"registered", image: ["/assets/bus1.jpeg", "/assets/bus2.jpeg", "/assets/bus3.jpeg", "/assets/bus4.jpeg", "/assets/bus5.jpeg", "/assets/bus6.jpeg", "/assets/bus7.jpeg", "/assets/bus8.jpeg", "/assets/bus9.jpeg", ]},
     // Add more data objects here as needed
  ];                          

  const action = "check vehicle";

  return (
    <>
      <NavigationBar />
      <body>
        <div className="div-1">
          <div className="div-left">
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
