import React from 'react'
import LoginInput from '../components/LoginInput'
import Checkbox from '../components/Checkbox'
import Btn from '../components/Btn'
import LoginPageContainer from '../containers/LoginPageContainer'
import { Link } from 'react-router-dom'


const RegistrationPageMerchant = () => {
    return (
        <LoginPageContainer>
            <div className='layout-cont-4'>
                <div className='layout-cont-3'>
                    <div className='section-1'>
                        <div className='sec1-message'>Sign in to CranCo</div>
                    </div>
                    <div className='layout-cont-2'>
                        <form className='layout-cont-1' action="">
                            <div>
                                <LoginInput name={'name'} placeholder={'Enter your user name'} type={'text'} />
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
                            <div>Already have an account? <Link className='link-main color-primary'>Log In</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </LoginPageContainer>
    )
}

export default RegistrationPageMerchant