import "../css/EditMerchantDetails.css";
import { faAngleRight, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";
import Btn from "./Btn";

const EditMerchantDetails = () => {
    const [isopen, setIsOpen] = useState(true);
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

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put("http://localhost:8081/api/businessUser/updatebuser/62", formData)
            .then((response) => {
                console.log(formData);
                handleClose();
                window.location.href="http://localhost:3000/merchantowner";
            })
            .catch((error) => {
                console.error("Error updating data:", error);
            });
    };

    return (
        <>
            {isopen && (
                <div className="editMerchantData">
                    <div className="editPopupContainer color-white">
                        <div className="closeContainer" onClick={handleClose}>
                            <FontAwesomeIcon icon={faX} />
                        </div>
                        <div className="topicContainer">
                            <p className="text-bold txt-16">Edit Details</p>
                        </div>
                        <form action="">
                            <table className="formContainer txt-09">
                                <tr>
                                    <td>
                                        <label htmlFor="businessname">Business Name</label>
                                        <input
                                            type="text"
                                            id="businessname"
                                            name="businessname"
                                            value={formData.businessname}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <label htmlFor="ownername">Owner name</label>
                                        <input
                                            type="text"
                                            id="ownername"
                                            name="ownername"
                                            value={formData.ownername}
                                            onChange={handleInputChange}
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
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <label htmlFor="address">Address</label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <label htmlFor="bio">Bio</label>
                                        <br />
                                        <textarea
                                            id="bio"
                                            name="bio"
                                            rows="4"
                                            cols="30"
                                            value={formData.bio || ""}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Btn onClick={handleSubmit} buttonText={"Update"}/>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditMerchantDetails;
