import InputField from "../components/InputField";
import "../css/AddNewPage.css";

const AddNewPage = () => {
    return ( 
        <div className="AddNewPageContainer">
            <div className="adn-title">SIGN UP YOUR SOUL ACCOUNT</div>
            <p className="adn-subTitle">Fill all required field to go to next step</p>
            <div className="formOne">
                <div className="adn-inputList">
                    <ul>
                        <li><InputField topic="Vehicle Type" placeholder="Type vehicle type"/></li>
                        <li><InputField topic="Manufacturer" placeholder="Type manufacturer"/></li>
                        <li><InputField topic="Model" placeholder="Type model"/></li>
                        <li><InputField topic="Manufactured Year" placeholder="Type manufactured year"/></li>
                        <li><InputField topic="Registration Number" placeholder="Type registration number"/></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default AddNewPage;

