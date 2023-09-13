import "../css/MerchantAbout.css";
import Btn from "../components/Btn";
import EditMerchantDetails from "./EditMerchantDetails";
import React, { useState, useEffect } from "react";
import axios from "axios";

const MerchantAbout = ({showButton}) => {

    const [popUp, setPopup] = useState(false);
    const [formData, setFormData] = useState({
        id: null,
        businessname: "",
        ownername: "",
        mobilenumber: "",
        email: "",
        address: "",
        bio: "",
    });

    useEffect(() => {
        // Make an HTTP request to fetch the data from your server
        axios
            .get("http://localhost:8081/api/businessUser/viewbuser/62")
            .then((response) => {
                setFormData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleMoreClick = () => {
        setPopup((popUp) => !popUp);
    };

    return ( 
        <>
            <div className="merchantAboutContainer">
                <div className="contentContainer">
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="businessname">Business Name</label>
                                <input
                                    type="text"
                                    id="businessname"
                                    name="businessname"
                                    value={formData.businessname}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="ownername">Owner name</label>
                                <input
                                    type="text"
                                    id="ownername"
                                    name="ownername"
                                    value={formData.ownername}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="mobilenumber">Contact Us</label>
                                <input
                                    type="text"
                                    id="mobilenumber"
                                    name="mobilenumber"
                                    value={formData.mobilenumber}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="bio">Bio</label>
                                <br/>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    value={formData.bio}
                                ></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                {showButton &&
                    <div className="btnConainter">
                        <Btn buttonText="Edit" type="edit" onClick={() => handleMoreClick()}/>
                        {popUp && (
                        <div className="popUp-div">
                            <EditMerchantDetails/>
                        </div>
                        )}
                    </div>
                }
            </div>
        </>
     );
}
 
export default MerchantAbout;