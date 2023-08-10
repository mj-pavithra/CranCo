// Frame135.js
import React from "react";
import "../css/Frame135.css";
import Frame135Option from "../components/Frame135Option";

const altImg = "/assets/alt-image.jpeg";

const Frame135 = ({ img1, optionList }) => {

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
        <div className="Frame135">
            <div className="TopFrame135">
                <img className="TopFrame135Logo" src={onError(img1)} alt="logo" />
            </div>
            <div className="BottomFrame135">
                {optionList.map((option, index) => (
                    <Frame135Option key={index} OptionIcon={option.img1} OptionTxt={option.text1} />
                ))}
            </div>
        </div>
    );
};

export default Frame135;
