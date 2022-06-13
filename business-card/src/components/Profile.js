import React from 'react'
import ProfileDetails from './Profile/ProfileDetails'
import About from './Profile/About'
import Interest from './Profile/Interest'

export default function Profile() {
    return (<div className='profile'>
    <ProfileDetails/>
    <About/>
    <Interest/>
    </div>)
}