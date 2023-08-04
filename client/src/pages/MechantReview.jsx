import Review from "../components/Review";
import "../css/MerchantReview.css";
import StarRating from "../components/StarRating";


const MechantReview = () => {

    const userProfileImage = [
        "girl.png",
        "girl.png",
        "girl.png",
        "girl.png",
        "girl.png"
    ];

    const userName = "Sapuni Nisasala";
    const userRating = 2.3;
    const userDuty = "Wash my car";
    const userComment = "Efficient and thorough car wash services provided by your team! Our vehicles have never looked so clean and shiny. Thank you for your attention to detail and dedication to keeping our fleet in top-notch condition. Your reliable car wash duty is truly appreciated!";
    const dateTime = "03 July 2023 12:04";
    
    const avgRating = "4.8";
    const fontsize = "20px";

    return ( 
        <>
        <div className="summaryPart">
            <table className="ratingsPrecentage">
                <tr>
                    <td className="topic">5 star</td>
                    <td>
                        <div class="progressBar">
                            <div class="progressInsideBar" style={{width: "7%"}}></div>
                        </div>
                    </td>
                    <td className="rateCount">52</td>
                </tr>
                <tr>
                    <td className="topic">4 Star</td>
                    <td>
                        <div class="progressBar">
                            <div class="progressInsideBar" style={{width: "75%"}}></div>
                        </div>
                    </td>
                    <td className="rateCount">52</td>
                </tr>
                <tr>
                    <td className="topic">3 star</td>
                    <td>
                        <div class="progressBar">
                            <div class="progressInsideBar" style={{width: "50%"}}></div>
                        </div>
                    </td>
                    <td className="rateCount">52</td>
                </tr>
                <tr>
                    <td className="topic">2 star</td>
                    <td>
                        <div class="progressBar">
                            <div class="progressInsideBar" style={{width: "53%"}}></div>
                        </div>
                    </td>
                    <td className="rateCount">52</td>
                </tr>
                <tr>
                    <td className="topic">1 star</td>
                    <td>
                        <div class="progressBar">
                            <div class="progressInsideBar" style={{width: "20%"}}></div>
                        </div>
                    </td>
                    <td className="rateCount">52</td>
                </tr>
            </table>

            <div className="averageOfRating">
                <StarRating rating={avgRating} fontsize={fontsize}/>
                <div className="averageRating">
                    <p className="color-white txt-12">Average Star Rating: </p>
                    <p className="averageRate">4.8 out of 5</p>
                    <p className="color-white txt-08">546 votes</p>
                </div>
            </div>
        </div>

        <div className="allReviews">
            {userProfileImage.map((imgSrc, index) => (
                <Review
                    key={index}
                    userProfileImage={imgSrc}
                    userName={userName}
                    userRate={userRating}
                    userDuty={userDuty}
                    userComment={userComment}
                    dateTime={dateTime}
                />
            ))}
      </div>
            
        </>
     );
}
 
export default MechantReview;