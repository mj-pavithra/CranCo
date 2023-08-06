import React from "react";
import '../css/UserVehicles.css'


const altImg = "/assets/alt-image.jpeg";

const UserVehicles = ({ vehicleName, vehicleImage, vehicleModel }) => {
    const onError = (originalImg) => {
        if (originalImg === null || originalImg === "") {
            return altImg;
        }
        if (!originalImg) {
            return altImg;
        }
        return originalImg;
    };

    return (
        <div className="topContainer3">
            <div className="vehicleImgContainer">
                <img className="vehicleImg3" src={onError(vehicleImage)} alt="logo" />
            </div>
            <div className="detailContainer2">
                <p className="vehicleName2">{vehicleName}</p>
                <p className="vehicleModel2">{vehicleModel}</p>
            </div>
        </div>
    );
};

export default UserVehicles;
