import React from 'react';
import '../css/ViewProductSideDetails.css';

const ViewProductSideDetails = () => {
    return (
        <div className="product-side-details">
            <div className="name">
                <h3>Kawasaki Ninja</h3>
                <div className="price">
                    <h4>Rs.500,000</h4>
                    <button className="editicon">
                        <img src=""></img>
                    </button>
                </div>
            </div> 
            <div className="vehicle-info">
                <h5>Vehicle Information</h5>
                <a className="edit" href=""><h6>Details</h6></a>
            </div> 
            <div className="profile">
                <div className="profilename">
                    <img src=""></img>
                    <h6>Black Panther</h6>
                </div>
            </div> 
        </div>
    );
}
