import React from 'react'
import './footer.css'
import instagramm_icon from '../Components/assets/instagram_icon.png'
import whatsapp_icon from '../Components/assets/whatsapp_icon.png'
import pintest from '../Components/assets/pintester_icon.png'
import footer_logo from '../Components/assets/logo_big.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SMART</p>
      </div>
      <ul className="footer-links">
        <li>Companny</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagramm_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pintest} alt="" />
        </div>
      </div>
      <div className="footer-copiright">
        <hr />
        <p>Copyright @ 2023 - ALL RIGHT RESERVED</p>
      </div>
    </div>
  )
}

export default Footer
