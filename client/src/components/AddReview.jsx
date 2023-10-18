import React, { useState } from "react";
import '../css/AddReview.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFaceAngry,
    faFaceLaughSquint,
    faFaceMeh,
    faFaceSmile,
    faFaceSmileBeam
} from "@fortawesome/free-solid-svg-icons";
import Btn from "./Btn";

const AddReview = () => {

    const [rate, setRate] = useState(0);

    const handleRate = (event) => {
        const selectedRate = parseInt(event.target.value);
        setRate(selectedRate);
    }

    return (
        <div className="addReviewContainer">
            <div className="commentSection">
                <textarea/>
                <div className="addReviewContent">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="rateCount">
                                        <p>Your rate: {rate}</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="starContainer">
                                        <input type="radio" id="rating1" name="rating" value={1} className="rateIcon" onChange={handleRate}/>
                                        <label htmlFor="rating1"><FontAwesomeIcon icon={faFaceAngry}/></label>
                                        <input type="radio" id="rating2" name="rating" value={2} className="rateIcon" onChange={handleRate}/>
                                        <label htmlFor="rating2"><FontAwesomeIcon  icon={faFaceMeh}/></label>
                                        <input type="radio" id="rating3" name="rating" value={3} className="rateIcon" onChange={handleRate}/>
                                        <label htmlFor="rating3"><FontAwesomeIcon icon={faFaceSmile}/></label>
                                        <input type="radio" id="rating4" name="rating" value={4} className="rateIcon" onChange={handleRate}/>
                                        <label htmlFor="rating4"><FontAwesomeIcon icon={faFaceSmileBeam}/></label>
                                        <input type="radio" id="rating5" name="rating" value={5} className="rateIcon" onChange={handleRate}/>
                                        <label htmlFor="rating5"><FontAwesomeIcon icon={faFaceLaughSquint}/></label>
                                    </div>
                                </td>
                                <td>
                                    <button>write review</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
