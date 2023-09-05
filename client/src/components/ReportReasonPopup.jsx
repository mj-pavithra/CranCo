import { faAngleRight, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/ReportReasonPopup.css";

const ReportReasonPopup = () => {
    return ( 
        <>
            <div className="popUpBackground">
                <div className="popUpContainer color-white">
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
                                    <td className="left"><p>Nudity</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p>Violence</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p>Harassment</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p>Suicide or self-injury</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p>False information</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p>Spam</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p>Unauthorised sales</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="points">
                            <table>
                                <tr>
                                    <td className="left"><p>Something else</p></td>
                                    <td className="right"><FontAwesomeIcon icon={faAngleRight}/></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ReportReasonPopup;