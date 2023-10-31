// Frame135.js
import React from "react";
import "../css/Frame135.css";
import Frame135Option from "../components/Frame135Option";
import { Link } from "react-router-dom";

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
                    // <Link to={option.linkto}>
                    <Frame135Option key={index} OptionIcon={option.img1} OptionTxt={option.text1} />
                // {/* </Link> */}
                ))}
                    
            </div>
          </div>
    );
};

export default Frame135;
