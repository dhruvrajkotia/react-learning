import React from 'react'
import EmailIcon from '../../images/Icon.svg'
import LinkedIn from '../../images/Vector.svg'
export default function ProfileDetails() {
    return (
    <div className='profile-details'>
        <h1 className='profile-name'>Dhruv Rajkotia</h1>
        <h4 className='profile-designation'>Fullstack Developer</h4>
        <div className='profile-site'><a className='profile-link' target={"_blank"} rel="noreferrer" href='https://dhruvrajkotia.com'>dhruvrajkotia.com</a></div>
        <div className='contact'>
            <a className='link' href='mailto:dhruvrajkotia999@gmail.com'><button className='btn'><img className='icon' alt="Email" src={EmailIcon}/><p className='icon-text'>Email</p></button></a>
            <a className='link' target={"_blank"} rel="noreferrer" href='https://www.linkedin.com/in/dhruv-rajkotia-442a15a9/'><button className='btn linkedin'><img className='icon' alt="Linkdedin" src={LinkedIn}/><p className='icon-text linkedin-text'>LinkedIn</p></button></a>
        </div>
    </div>
    )
}