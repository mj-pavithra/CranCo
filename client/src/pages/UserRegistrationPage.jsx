import React from 'react'
import '../css/LoginPage.css'
import LoginInput from '../components/LoginInput'
import Checkbox from '../components/Checkbox'
import Btn from '../components/Btn'


const UserRegistrationPage = () => {
    return (
        <>
            <body>
                <div className='d-flex'>
                    <div className='side-div left-side color-white'>
                        <div className='d-flex flex-column initial-message-holder gap-4'>
                            <div className='main-title'>Join our<br />Community</div>
                            <div>Lorem ipsum dolor sit amet consectetu sit amet consectetur .</div>
                        </div>
                    </div>
                    <div className='side-div right-side'>
                        <div>
                            <div className='layout-cont-4'>
                                <div className='layout-cont-3'>
                                    <div className='section-1'>
                                        <img className='login_logo' src="/assets/logo.png" alt="" />
                                        <div className='sec1-message'>Sign in to CranCo</div>
                                    </div>
                                    <div className='layout-cont-2'>
                                        <form className='layout-cont-1' action="">
                                            <div>
                                                <LoginInput name={'name'} placeholder={'Enter your user name'} type={'text'} />
                                            </div>
                                            <div>
                                                <LoginInput name={'birth_date'} placeholder={'Enter your birthday'} type={'date'} />
                                            </div>
                                            <div>
                                                <LoginInput name={'password'} placeholder={'Enter your password'} type={'password'} />
                                            </div>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex flex-row gap-3 color-transparent-white'>
                                                    <Checkbox name={'remember_password'} id={'12'} /> <span>Remember me</span>
                                                </div>
                                                <div className='color-primary'>
                                                    Reset password
                                                </div>
                                            </div>
                                            <div className='pt-3'>
                                                <Btn type={'submit'} buttonText={'login'} width='fluid' />
                                            </div>
                                        </form>

                                        <div className='color-white txt-09 d-flex flex-column align-items-center'>
                                            <div>Don't you have an account? create an account</div>
                                            <div>Are you a business? Get started here</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default UserRegistrationPage