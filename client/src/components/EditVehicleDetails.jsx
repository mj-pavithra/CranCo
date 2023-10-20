import "../css/ViewVehicleDetails.css"
import Btn from "./Btn";
import { Link } from 'react-router-dom';

const EditVehicleDetails = ({image, vehicleName, ownerName, des}) => {

    return (
        <>
            <div className="vehicleDetailsView">
                <div className="imgContainer">
                    <img src={image} alt="" />
                </div>
                <div className="detailsContainer color-white">
                    <p className="txt-12 text-bold">{vehicleName}</p>
                    <div className="owner txt-08">
                        <p>Owned by</p>
                        <p className="text-bold">{ownerName}</p>
                    </div>
                    <p className="txt-08">{des}</p>
                </div>
                <div className="btnContainer">
                    <div className="editConatiner">
                        <Link to="/vehicles"><button className="viewDetails">View Details</button></Link>
                        <Link to="/vehicleaboutedit"><button className="editDetails">Edit Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditVehicleDetails;