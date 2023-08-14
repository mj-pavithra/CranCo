import ViewVehicleDetails from "../components/ViewVehicleDetails";
import "../css/MerchantAbout.css";

const MerchantOtherVehicleSale = () => {
    const images = ["assets/car_img_1.jpg", "assets/car_img_2.jpg", "assets/car_img_3.jpg", "assets/car_img_4.jpg", "assets/car_img_4.jpg", "assets/car_img_3.jpg", "assets/car_img_2.jpg", "assets/car_img_1.jpg"];
    const vehicleName = "Nissan GTR";
    const ownerName = "Himashi Nethmi";
    const des = "Lorem ipsum dolor sit amet consectetur. Conseqd sagittis nunc libero fames.";

    const imageRows = [];
    const numCols = 2;
    const numRows = Math.ceil(images.length / numCols); // Calculate the number of rows needed
    let index = 0;

    for (let i = 0; i < numRows; i++) {
        const rowImages = images.slice(index, index + numCols);
        while (rowImages.length < numCols) {
            // Add empty placeholders for incomplete rows
            rowImages.push(null);
        }
        const row = (
            <div className="row" key={i}>
                {rowImages.map((image, rowIndex) => (
                    <div className="column" key={rowIndex}>
                        {image && <ViewVehicleDetails image={image} vehicleName={vehicleName} ownerName={ownerName} des={des} />}
                    </div>
                ))}
            </div>
        );
        imageRows.push(row);
        index += numCols;
    }

    return (
        <>
            <div>
                {imageRows}
            </div>
        </>
    );
}

 
export default MerchantOtherVehicleSale;
