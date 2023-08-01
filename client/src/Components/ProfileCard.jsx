import React from 'react';
import '../css/ProfileCard.css';
import Btn from './Btn';

const ProfileCard = ({coverImage, name, pages, status, btnText, btnWidth, btnType}) => {

      const pageCount = pages.length;

    return ( 
        <div className="profileCardContainer">
            <div className="coverImageContainer">
                <img src={coverImage} alt="" className="coverImage" />
                <div className="profilePictureContainer">
                    <img src="assets/profile.jpg" alt="" className="profilePicture" />
                </div>
            </div>
            <div className="detailsContainer color-white">
                <div className="detailContent">
                    <p className='text-bold txt-14'>{name}</p>
                    <div className="pagedetailsContainer">
                        <ul className="pageContainer">
                            {pages.slice(0, 5).map((page, pageID) => (
                                <li key={pageID}>
                                    <img src={`${page}`} alt="" className="pageDP" />
                                </li>
                            ))}
                        </ul>
                        <p className="txt-10">{pageCount} pages</p>
                    </div>
                    <div className="status txt-09">
                        <p>{status}</p>
                    </div>
                </div>
                <div className="btnContainer">
                    <Btn buttonText={btnText} width={btnWidth} type={btnType}/>
                </div>
            </div>
        </div>
     );
}
 
export default ProfileCard;