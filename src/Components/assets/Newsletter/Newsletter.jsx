import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
       <h1>Get Exclusive Offers On Your Email</h1>
       <p>Subscibe To Our Newletter and Stay Updated</p>
      <div>
        <input type="email" placeholder='your email id' />
        <button>Subscribe</button>
      </div>
    </div>

  )
}

export default Newsletter
