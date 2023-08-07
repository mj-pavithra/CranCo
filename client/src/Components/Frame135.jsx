import React from "react";
import "../css/Frame135.css";

const Frame135 = ({ img1, img2, text1  }) => {

    const onError = (originalImg) => {
        const altImg = "/assets/alt-image.jpeg";

        if (originalImg === null || originalImg === "") {
            return altImg;
        }
        if (!originalImg) {
            return altImg;
        }
        return originalImg;
    };


    return (
        <div className="Frame135">
            <div className="TopFrame135">
                <img className="TopFrame135Logo" src={onError(img1)} alt="logo" />
            </div>
            <div className="BottomFrame135">
                <div className="Option">
                    <img className="Icon" src={onError(img2)} alt="logo" />
                    <p className="Text">{text1}</p>
                </div>
            </div>

        </div>
        );
};

export default Frame135;