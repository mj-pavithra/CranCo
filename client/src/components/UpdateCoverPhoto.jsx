import "../css/UpdateCoverPhoto.css";
import React, { useState } from 'react';
import configuredAxios from "../AxiosConfig";
import Cookies from "js-cookie";

const UpdateCoverPhoto = () => {

    const [imgPreview, setImgPreview] = useState("");

    const uploadImage = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("coverPhoto", imgPreview);
            formData.append("userId", Cookies.get("user_id"));
            const response = await configuredAxios.post("/api/users/uploadCoverPhoto", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });
            console.log("Data sent successfully:", response.data);
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };


    const handleImagePreview = (e) => {
        const image = e.target.files[0];

        if(image){
            const read = new FileReader();
            read.onload = () => {
                setImgPreview(read.result);
            }
            read.readAsDataURL(image);
        }
    }

    // for cnacel btn
    const [isOpen, setIsOpen] = useState(true);

    const handleCancelBtn = () => {
        setIsOpen(false);
    };

    return (
        isOpen && (
            <div className="uploadPhotoContainer">
                <div className="uploadPhotoContent">
                    {imgPreview && (
                        <div>
                            <img src={imgPreview} className="imgPreview"/>
                        </div>
                    )}
                    <form>
                        <table className="buttonContainer">
                            <tbody>
                            <tr className="oneButton">
                                <td colSpan={2}>
                                    <input type="file" accept="image/*" onChange={handleImagePreview} required />
                                </td>
                            </tr>
                            <tr className="twoButtons">
                                <td>
                                    <button type="button" className="cancleBtn" onClick={uploadImage}>Upload</button>
                                </td>
                                <td>
                                    <button type="button" onClick={handleCancelBtn} className="cancleBtn">Cancel</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        )
    );
}

export default UpdateCoverPhoto;
