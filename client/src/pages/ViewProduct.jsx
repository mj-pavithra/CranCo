import React from "react";
import ViewProductSide from "../components/ViewProductSideDetails";

const ViewProduct = () => {
    return (
        <div>
            <div>
                <img src="../assets/car_img_1.jpg" alt="product" />
            </div>
            <div>
                <ViewProductSide/>
            </div>
            <div>
                <h6>Product Name</h6>
            </div>
        </div>
    );
    }
