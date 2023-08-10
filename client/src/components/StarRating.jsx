import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../css/Review.css'; 

const StarRating = ({ rating, fontsize }) => {

  useEffect(() => {
    setStarRating(rating);
  }, [rating]);

  function setStarRating(rating) {
    const stars = document.querySelectorAll('.star');

    stars.forEach((star, index) => {
      if (index < Math.floor(rating)) {
        star.classList.add('checked');
      } else {
        star.classList.remove('checked');
      }
    });
  }

  return ( 
    
    <div>
      <FontAwesomeIcon icon={faStar} className="star" style={{ fontSize: fontsize }}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar} className="star" style={{ fontSize: fontsize }}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar} className="star" style={{ fontSize: fontsize }}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar} className="star" style={{ fontSize: fontsize }}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faStar} className="star" style={{ fontSize: fontsize }}></FontAwesomeIcon>
    </div>

   );
}
 
export default StarRating;
