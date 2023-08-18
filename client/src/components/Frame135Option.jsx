// Frame135Option.js
import React from "react";
import '../css/Frame135Option.css'

const Frame135Option = ({ OptionIcon, OptionTxt }) => {

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
        <div className="Option">
            <img className="Icon" src={onError(OptionIcon)} alt="logo" />
            <p className="Text">{OptionTxt}</p>
        </div>
    );
};

export default Frame135Option;
