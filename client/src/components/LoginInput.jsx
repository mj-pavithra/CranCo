import '../css/LoginInput.css'
import React from 'react'

const LoginInput = ({ name, placeholder, type }) => {
    return (
        <>
            <div className='input-name'>{name}</div>
            <input className='input-div' type={type} placeholder={placeholder} name={name} />
        </>
    )
}

export default LoginInput