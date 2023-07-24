import '../css/Checkbox.css'
import React from 'react'

const Checkbox = ({ name, id }) => {
    return (
        <>
            <input className='checkbox' type="checkbox" name={name} id={id} />
        </>
    )
}

export default Checkbox