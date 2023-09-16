import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import '../css/MerchantOtherView.css';
import MechantReview from "./MechantReview";
import MerchantOtherAbout from "./MerchantOtherAbout"; 
import MerchantOtherVehicleSale from "./MerchantOtherVehicleSale";
import MainContainer from "../containers/MainContainer"
import axios from "axios";

const MerchantOtherView = () => {

    const [formData, setFormData] = useState({
        id: null,
        businessname: "",
    });

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

    const data = {coverPhoto :"assets/cover_image.png", 
            profilePhoto:"assets/profile.jpg", 
            editDP: "assets/camera-solid.png", 
            profileName : formData.businessname,
            likedPage1 : "assets/page1.jpeg", 
            likedPage2 : "assets/page2.jpeg", 
            likedPage3 : "assets/page3.jpeg", 
            likedPageCount :"9", 
            RalionshipState:"", 
            addFriend : "Follow"};

    useEffect(() => {
        document.getElementById("defaultOpen").click();
    }, []);

    const openCity = (evt, cityName) => {

        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("main");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    };

    return (
        <MainContainer>
            <div className="merchantOtherView">
                <ProfileCard coverPhoto ={data.coverPhoto} profilePhoto ={data.profilePhoto} editDP ={data.editDP} profileName ={data.profileName} likedPage1 ={data.likedPage1} likedPage2 ={data.likedPage2} likedPage3 ={data.likedPage3} likedPageCount ={data.likedPageCount} RalionshipState ={data.RalionshipState} addFriend ={data.addFriend} isOwner='no'/>
                <div className="tab">
                    <button className="tablinks" onClick={(evt) => openCity(evt, 'about')} id="defaultOpen">About</button>
                    <button className="tablinks" onClick={(evt) => openCity(evt, 'vehicleForSale')}>Vehicles for Sales</button>
                    <button className="tablinks" onClick={(evt) => openCity(evt, 'soldVehicle')}>Sold Vehicles</button>
                    <button className="tablinks" onClick={(evt) => openCity(evt, 'review')}>Reviews</button>
                </div>

                <div id="about" className="main">
                    <MerchantOtherAbout/>
                </div>

                <div id="vehicleForSale" class="main">
                    <MerchantOtherVehicleSale/>
                </div>


                <div id="soldVehicle" class="main">
                    <MerchantOtherVehicleSale/>
                </div>


                <div id="review" class="main">
                    <MechantReview/>
                </div>

            </div>
        </MainContainer>
    );
}

export default MerchantOtherView;