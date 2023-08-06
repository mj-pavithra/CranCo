import React, { useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import NavigationBar from "../components/NavigationBar";
import '../css/MerchantOtherView.css';
import MerchantOwnVehicleSale from "./MerchantOwnVehicleSale";
import MerchantOtherVehicleSale from "./MerchantOtherVehicleSale"; 
import MechantReview from "./MechantReview";
import MerchantOwnerAbout from "./MerchantOwnerAbout";

const MerchantOwnerView = () => {

    const data = {coverPhoto :"assets/coverphoto.jpeg", 
            profilePhoto:"assets/profile.jpg", 
            editDP: "assets/camera-solid.png", 
            profileName : "Turbo Tyres", 
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
        <div className="merchantOtherView">
            <NavigationBar />
            <ProfileCard coverPhoto ={data.coverPhoto} profilePhoto ={data.profilePhoto} editDP ={data.editDP} profileName ={data.profileName} likedPage1 ={data.likedPage1} likedPage2 ={data.likedPage2} likedPage3 ={data.likedPage3} likedPageCount ={data.likedPageCount} RalionshipState ={data.RalionshipState} addFriend ={data.addFriend}/>
            <div className="tab">
                <button className="tablinks" onClick={(evt) => openCity(evt, 'vehicleForSale')} id="defaultOpen">Vehicles for Sales</button>
                <button className="tablinks" onClick={(evt) => openCity(evt, 'soldVehicle')}>Sold Vehicles</button>
                <button className="tablinks" onClick={(evt) => openCity(evt, 'review')}>Reviews</button>
                <button className="tablinks" onClick={(evt) => openCity(evt, 'about')}>About</button>
            </div>

            <div id="vehicleForSale" class="main">
                <MerchantOwnVehicleSale/>
            </div>


            <div id="soldVehicle" class="main">
                <MerchantOtherVehicleSale/>
            </div>


            <div id="review" class="main">
                <MechantReview/>
            </div>


            <div id="about" class="main">
                <MerchantOwnerAbout/>
            </div>
        </div>
    );
}

export default MerchantOwnerView;