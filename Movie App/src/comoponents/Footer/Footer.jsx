import React from 'react'
import "./Footer.css"
import yt from '../../assets/youtube_icon.png'
import x from '../../assets/twitter_icon.png'
import fb from '../../assets/facebook_icon.png'
import insta from '../../assets/instagram_icon.png'




const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={fb} alt="icon" />
        <img src={x} alt="icon" />
        <img src={insta} alt="icon" />
        <img src={yt} alt="icon" />

      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Card</li>
        <li>Media center</li>
        <li>Investor relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact us</li>
      </ul>
      <p className='copy-right'>1997-2024 Netflix, Inc.</p>
      
    </div>
  )
}

export default Footer
