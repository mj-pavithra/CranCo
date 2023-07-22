import React from 'react'
import NavigationBar from '../components/NavigationBar'

const HomePage = () => {
    return (
        <div>
            <NavigationBar />
            <body>
                <div >
                    <div className='div-1'>
                        <div className='div-left'></div>
                        <div className='div-middle'>
                            <div className='post-div-temp'></div>
                            <div className='post-div-temp'></div>
                            <div className='post-div-temp'></div>
                            <div className='post-div-temp'></div>
                            <div className='post-div-temp'></div>
                            <div className='post-div-temp'></div>
                        </div>
                        <div className='div-right'></div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default HomePage