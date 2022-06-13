import React from 'react'
import profile from '../images/profile.jpeg'

export default function Header() {
    return (
        <div className='header-container'>
            <img className='profile-picture' alt='prof-pic' src={profile}></img>
        </div>
    )
}