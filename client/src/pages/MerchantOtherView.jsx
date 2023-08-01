import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import NavigationBar from "../components/NavigationBar";
import '../css/MerchantOtherView.css';

const MerchantOtherView = () => {

    const coverImage = "assets/cover_image.png";
    const name = "Methuka Perera";
    const pages = [
        "girl.png",
        "girl.png",
        "girl.png",
        "girl.png",
        "girl.png",
        "girl.png",
        "girl.png",
    ];
    const status = "";

    const btnText = "Follow";
    const btnWidth = "300px";
    const btnType = "Follow";

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
            <ProfileCard coverImage={coverImage} name={name} pages={pages} status={status} btnText={btnText} btnWidth={btnWidth} btnType={btnType}/>
            <div className="tab">
                <button className="tablinks" onClick={(evt) => openCity(evt, 'vehicleForSale')} id="defaultOpen">Vehicles for Sales</button>
                <button className="tablinks" onClick={(evt) => openCity(evt, 'soldVehicle')}>Sold Vehicles</button>
                <button className="tablinks" onClick={(evt) => openCity(evt, 'review')}>Reviews</button>
                <button className="tablinks" onClick={(evt) => openCity(evt, 'about')}>About</button>
            </div>

            <div id="vehicleForSale" class="main">
                <h3>Vehicles for Sales</h3>
                <p>vehicle for Sale</p>
            </div>


            <div id="soldVehicle" class="main">
                <h3>Sold Vehicle</h3>
                <p>sold vehicle</p>
            </div>


            <div id="review" class="main">
                <h3>Review</h3>
                <p>review</p>
            </div>


            <div id="about" class="main">
                <h3>About</h3>
                <p>about</p>
            </div>
        </div>
    );
}

export default MerchantOtherView;