import React, { useState } from 'react'
import '../css/NavigationBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'

function NavigationBar() {
    // navigation menu icons
    const [activeIcon, setActiveIcon] = useState('home');

    const handleIconClick = (iconName) => {
        setActiveIcon(iconName === activeIcon ? activeIcon : iconName);
    };

    // notification bell
    const [bellState, setBellState] = useState('off');

    const handleBellClick = () => {
        setBellState(bellState === 'off' ? 'on' : 'off')
    }

    return (
        <>
            <nav className='container-fluid navbar-main '>
                <div className="row">
                    <div className="col-4 navbar-main d-flex align-items-center">
                        <img className='navbar-logo' src="/assets/logo.png" alt="logo" />
                        <input type="text" className='navbar-search' placeholder='Search here' />
                    </div>
                    <div className="col-4 navbar-main d-flex align-items-center justify-content-center">
                        <div className={`navbar-icon-wrapper ${activeIcon === 'home' ? ' active' : ''}`} onClick={() => handleIconClick('home')}>
                            <FontAwesomeIcon className='navbar-icon' icon={faHome} />
                        </div>
                        <div className={`navbar-icon-wrapper ${activeIcon === 'marketplace' ? ' active' : ''}`} onClick={() => handleIconClick('marketplace')}>
                            <FontAwesomeIcon className='navbar-icon' icon={faShop} />
                        </div>
                    </div>
                    <div className="col-4 navbar-main d-flex align-items-center justify-content-end">
                        <FontAwesomeIcon className={`navbar-bell ${bellState === 'on' ? 'active' : ''}`} icon={faBell} onClick={() => handleBellClick()} />
                    </div>
                </div>
            </nav >
        </>
    );
}

export default NavigationBar;