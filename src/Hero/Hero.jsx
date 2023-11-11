import React from 'react'
import './Hero.css'
import hero_img from '../Components/assets/hero_image.png'
import arro_icon from '../Components/assets/arrow.png'
import hand_icon from '../Components/assets/hand_icon.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='hand-hand-icon'>
            <p> New </p>
            <img src={hand_icon} alt="" />

          </div>
          <p>Cllections</p>
          <p>for everyyone</p>
          <div className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={arro_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
