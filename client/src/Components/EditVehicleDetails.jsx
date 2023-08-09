import "../css/ViewVehicleDetails.css"
import Btn from "./Btn";

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
                        <Btn buttonText="View Details" />
                        <Btn buttonText="Edit Details" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditVehicleDetails;