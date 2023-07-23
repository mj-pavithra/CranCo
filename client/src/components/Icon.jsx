import '../css/Icon.css'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon, size }) => {
    return (
        <div className='icon-back-div'>
            <FontAwesomeIcon icon={icon} size={size} />
        </div>
    )
}

export default Icon