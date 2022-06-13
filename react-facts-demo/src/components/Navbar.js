import React from 'react'
import logo from '../logo.svg'


export default function Navbar() {
    return (
        <nav className='header'>
            <img src={logo} className="logo"/>
            <h2>ReactFacts</h2>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}