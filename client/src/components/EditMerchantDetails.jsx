import "../css/EditMerchantDetails.css";
import { faAngleRight, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import axios from "axios";
import Btn from "./Btn";

const EditMerchantDetails = () => {

    //to close to popup
    const [isopen, setIsOpen] = useState(true);
    const handleClose = () => {
        setIsOpen(false);
    };

    //form Data state
    const [formData, setFormData] = useState({
        id: null,
        businessname: "",
        ownername: "",
        mobilenumber: "",
        email: "",
        address: "",
        bio: "",
    });

    //Retrieve the data from database
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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {}

        if(!formData.businessname.trim()){
            validationErrors.businessname = "Business name is required"
        }

        if(!formData.ownername.trim()){
            validationErrors.ownername = "Owner name is required";
        }

        if(!formData.mobilenumber.trim()){
            validationErrors.mobilenumber = "Mobile number is required";
        }else if(!/^\d{10}$/.test(formData.mobilenumber)){
            validationErrors.mobilenumber = "Enter a valid phone number";
        }

        if (!formData.email.trim()){
            validationErrors.email = "Email is required";
        }else if (!/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(formData.email)){
            validationErrors.email = "Enter a valid mail address";
        }

        setErrors(validationErrors);

        if(Object.keys(validationErrors).length === 0){
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
        }

    }

    return (
        <>
            {isopen && (
                <div className="editMerchantData">
                    <div className="editPopupContainer color-white">
                        <div className="closeContainer">
                            <FontAwesomeIcon icon={faX} />
                        </div>
                        <div className="topicContainer">
                            <p className="text-bold txt-16">Edit Details</p>
                        </div>
                        <form>
                            <table className="formContainer txt-09">
                                <tr>
                                    <td>
                                        <div className="lableContainer">
                                            <label htmlFor="businessname">Business Name</label>
                                            {/*<span className="error"></span>*/}
                                            {errors.businessname && (
                                                <span className="error">{errors.businessname}</span>
                                            )}
                                        </div>
                                        <input
                                            type="text"
                                            id="businessname"
                                            name="businessname"
                                            value={formData.businessname}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <div className="lableContainer">
                                            <label htmlFor="ownername">Owner name</label>
                                            {errors.ownername && (
                                                <span className="error">{errors.ownername}</span>
                                            )}
                                        </div>
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
                                        <div className="lableContainer">
                                            <label htmlFor="mobilenumber">Contact Us</label>
                                            {errors.mobilenumber && (
                                                <span className="error">{errors.mobilenumber}</span>
                                            )}
                                        </div>
                                        <input
                                            type="text"
                                            id="mobilenumber"
                                            name="mobilenumber"
                                            value={formData.mobilenumber}
                                            onChange={handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <div className="lableContainer">
                                            <label htmlFor="email">Email</label>
                                            {errors.email && (
                                                <span className="error">{errors.email}</span>
                                            )}
                                        </div>
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
                                        <div className="lableContainer">
                                            <label htmlFor="address">Address</label>
                                            {errors.address && (
                                                <span className="error">{errors.address}</span>
                                            )}
                                        </div>
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
                                        <div className="lableContainer">
                                            <label htmlFor="bio">Bio</label>
                                        </div>
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
                                        <Btn onClick={handleClose} buttonText={"Cancle"}/>
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
