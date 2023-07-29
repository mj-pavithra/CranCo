import React from "react";
import "../css/ViewProductPage.css";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import Hr from "../components/Hr";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Icon from "../components/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ViewProductPage = () => {
  const images = [
    "/assets/car_img_1.jpg",
    "/assets/car_img_2.jpg",
    "/assets/car_img_3.jpg",
  ];

  return (
    <div className="product-page">
      <div className="vpp-close-icon">
        <Icon icon={faX} size={"12px"} />
      </div>

      <div className="left-side-div">
        <div className="photos">
          <Carousel images={images} />
        </div>
      </div>

      <div className="right-side-div">
        <div className="layout-section-1">
          {/* product details */}
          <div className="price-info layout-section-2">
            <div className="txt-16 text-bold">Kawazaki ninja H2R</div>
            <div className="txt-14 text-medium">2,000,000 LKR</div>
          </div>
          <Hr />
          {/* sellers information */}
          <div className="profile-info layout-section-2">
            <div className="profile-info">
              <div className="text-semiBold">Seller information</div>
              <Link className="main-link color-primary">Details</Link>
            </div>
            <Link className="vpp-profile-link">
              <img
                className="vpp-profile-image"
                src="/assets/motorbike.jpeg"
                alt=""
              />
              <div className="profile-name">Suchith Sandunika</div>
            </Link>
          </div>
          <Hr />
          {/* vehicle information */}
          <div className="profile-info layout-section-2">
            <div className="profile-info">
              <div className="text-semiBold">Profile information</div>
              <Link className="main-link color-primary">Details</Link>
            </div>
            <Link className="vpp-profile-link">
              <img
                className="vpp-profile-image"
                src="/assets/motorbike.jpeg"
                alt=""
              />
              <div className="profile-name">Black Panther</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductPage;
