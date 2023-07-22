import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShop, faBell } from '@fortawesome/free-solid-svg-icons';

const Temp = () => {
    const [activeIcon, setActiveIcon] = useState('home');
    const [showNotifications, setShowNotifications] = useState(false);

    const notificationRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setShowNotifications(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleIconClick = (iconName) => {
        setActiveIcon(iconName === activeIcon ? null : iconName);
        setShowNotifications(false); // Hide the notification div when clicking any icon
    };

    const handleBellClick = () => {
        setShowNotifications((prevState) => !prevState); // Toggle the notification div visibility
    };

    return (
        <nav className='container-fluid navbar-main'>
            {/* Your existing navbar content... */}
            <div className="col-4 navbar-main d-flex align-items-center justify-content-center">
                <div className={`navbar-icon-wrapper ${activeIcon === 'home' ? 'active' : ''}`} onClick={() => handleIconClick('home')}>
                    <FontAwesomeIcon className='navbar-icon' icon={faHome} />
                </div>
                <div className={`navbar-icon-wrapper ${activeIcon === 'shop' ? 'active' : ''}`} onClick={() => handleIconClick('shop')}>
                    <FontAwesomeIcon className='navbar-icon' icon={faShop} />
                </div>
            </div>
            <div className="col-4 navbar-main d-flex align-items-center justify-content-end">
                <div ref={notificationRef} className="navbar-icon-wrapper">
                    <FontAwesomeIcon className={`navbar-icon ${showNotifications ? 'active' : ''}`} icon={faBell} onClick={handleBellClick} />
                    {showNotifications && (
                        <div className="notification-div">
                            {/* Add your notification content here */}
                            <p>Notification 1</p>
                            <p>Notification 2</p>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Temp;
