import React from 'react'
import './breadcrums.css'
import arrow_icon from '../Components/assets/breadcrum_arrow.png'
const Breadcrums = (props) =>{
    const {product} =props;
    
  return(
    <div className='breadcrums' >
      HOME <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category}<img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrums
