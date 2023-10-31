import React, { useState } from "react";
import { faAngleRight, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import "../css/ReportReasonPopup.css";


const ReportReasonPopup = ({ postId }) => {
    const apiUrl = 'http://localhost:8081/api/v1/auth/complaints/'; // API URL
    
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const closePopup = () => {
    setShowPopup(false);
  };

    const sendReport = (reason) => {
      // Define the data you want to send in the request body
      postId = 4717979026205133000; //get it when click 3 dots > report
      //<ReportReasonPopup postId={postId} />
      const data = {
        reason: reason,
        postId: postId,
      };
  
      Axios.post(apiUrl, data)
        .then((response) => {
          // Handle a successful response from the server
          alert('Report submitted successfully');
        //   setPopupMessage('Report submitted successfully');
        //   setShowPopup(true);
          //console.log('Report submitted successfully', response.data);
          // You can also close the report popup or show a confirmation message here
        })
        .catch((error) => {
          // Handle errors or validation errors
          alert('Error submitting report');
        //   setPopupMessage('Error submitting report');
        //   setShowPopup(true);
          //console.error('Error submitting report', error);
        });
    };

    return ( 
        <>
            <div className="popUpBackground">
                <div className="reasonPopUpContainer color-white">
                    <div className="closeContainer">
                        <FontAwesomeIcon icon={faX}/>
                    </div>
                    <div className="topicContainer">
                        <p className="text-bold txt-16">Report</p>
                    </div>
                    <div className="textContainer">
                        <p className="text-bold txt-12">Please select a problem</p>
                        <p className="text-thin color-transparent-white txt-09">If someone is in immediate danger, get help before reporting to facebook. Don't wait.</p>
                    </div>
                    <div className="pointContainer">
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p onClick={() => sendReport('Nudity')}>Nudity</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p onClick={() => sendReport('Violence')}>Violence</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p onClick={() => sendReport('Harassment')}>Harassment</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p onClick={() => sendReport('Suicide or self-injury')}>Suicide or self-injury</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p onClick={() => sendReport('False Information')}>False information</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p onClick={() => sendReport('Spam')}>Spam</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p onClick={() => sendReport('Unauthorised sales')}>Unauthorised sales</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p onClick={() => sendReport('Something else')}>Something else</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Popup message
            {showPopup && (
                <div className="popup">
                <div className="popup-content">
                    <span className="close-popup" onClick={closePopup}>
                    &times;
                    </span>
                    <p>{popupMessage}</p>
                    <button className="ok-button" onClick={closePopup}>
                    OK
                    </button>
                </div>
                </div>
            )} */}
        </>
     );
}
 
export default ReportReasonPopup;