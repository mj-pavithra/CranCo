import "../css/EditMerchantDetails.css";
import { faAngleRight, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EditMerchantDetails = () => {

    const[isopen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    }

    return ( 
        <>
        {isopen && (
        <div className="editMerchantData">
            <div className="editPopupContainer color-white">
                <div className="closeContainer" onClick={handleClose}>
                    <FontAwesomeIcon icon={faX}/>
                </div>
                <div className="topicContainer">
                    <p className="text-bold txt-16">Edit Details</p>
                </div>
                <form action="">
                    <table className="formContainer txt-09">
                        <tr>
                            <td>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" value="John"></input>
                            </td>
                            <td>
                                <label htmlFor="ownername">Owner name</label>
                                <input type="text" id="ownername" name="ownername" value="John"></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="phonenumber">Contact Us</label>
                                <input type="text" id="phonenumber" name="phonenumber" value="John"></input>
                            </td>
                            <td>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" name="email" value="John"></input>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" name="address" value="John"></input>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <label htmlFor="bio">Bio</label><br />
                                <textarea id="bio" name="bio" rows="4" cols="30"></textarea>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
        )}
        </>
     );
}
 
export default EditMerchantDetails;