import React from "react";
import "../css/MerchantAbout.css";
import MerchantAbout from "../components/MerchantAbout";

const MerchantOwnerAbout = () => {
    const images = ["assets/car_img_1.jpg", "assets/car_img_2.jpg", "assets/car_img_3.jpg", "assets/car_img_4.jpg", "assets/car_img_4.jpg", "assets/car_img_3.jpg", "assets/car_img_2.jpg"]; // Replace with your image URLs

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
                        {image && <img src={image} alt="" />}
                    </div>
                ))}
            </div>
        );
        imageRows.push(row);
        index += numCols;
    }

    return (
        <>
            <div className="merchantOtherAboutConatiner">
                <div className="aboutConatiner">
                    <MerchantAbout showButton={true}/>
                </div>
                <p className="topic txt-16 color-white">Photo</p>
                <div className="imgConatiner">
                    {imageRows}
                </div>
            </div>
        </>
    );
}

export default MerchantOwnerAbout;
