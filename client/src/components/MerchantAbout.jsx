import "../css/MerchantAbout.css";
import Btn from "../components/Btn";

const MerchantAbout = ({showButton}) => {
    return ( 
        <>
            <div className="merchantAboutContainer">
                <div className="contentContainer">
                    <div className="topicConianer">
                        <p>Name</p>
                        <p>Address</p>
                        <p>Contact Number</p>
                        <p>Email</p>
                        <p>Bio</p>
                    </div>
                    <div className="detailsConatiner text-semibold">
                        <p>Turbo Tyres</p>
                        <p>No: 326/2, Bopatta, Gothatuwa.</p>
                        <p>0710870961</p>
                        <p>turbotyres@gmail.com</p>
                        <p>Lorem ipsum dolor sit amet consectetur. Sed at in amet massa. Neque eget id odio nulla sed. Suspendisse vel sodales tortor sagittis. Massa in semper turpis vivamus eu aliquet eu sagittis.</p>
                    </div>
                </div>
                {showButton &&
                    <div className="btnConainter">
                        <Btn buttonText="Edit" type="edit"/>
                    </div>
                }
            </div>
        </>
     );
}
 
export default MerchantAbout;