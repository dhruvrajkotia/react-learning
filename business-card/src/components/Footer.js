import React from 'react'
import TwitterIcon from '../images/Twitter Icon.svg'
import FacebookIcon from '../images/Facebook Icon.svg'
import InstagramIcon from '../images/Instagram Icon.svg'
import GithubIcon from '../images/GitHub Icon.svg'


export default function Footer() {
    return (
    <div className='footer'>
        <div><a href='https://twitter.com/dhruv_rajkotia' target={"_blank"} rel="noreferrer"><img src={TwitterIcon} alt='Twitter'/></a></div>
        <div><a href='https://www.facebook.com/dhruv3065/' target={"_blank"} rel="noreferrer"><img src={FacebookIcon} alt='Facebook'/></a></div>
        <div><a href='https://www.instagram.com/dhruv_rajkotia/' target={"_blank"} rel="noreferrer"><img src={InstagramIcon} alt='Instagram'/></a></div>
        <div><a href='https://github.com/dhruvrajkotia' target={"_blank"} rel="noreferrer"><img src={GithubIcon} alt='Github'/></a></div>
    </div>
    )
}