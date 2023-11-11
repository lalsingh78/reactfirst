import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/Shopcontext'
const Navbar = () => {
    const [menu, setmenu]=useState("shop")
    const {getTotalCartItem}= useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
        <p>SMART</p>
      </div>
      <ul className='nav-manu'>
        <li onClick={()=>{setmenu("shop")}}> <Link to="/">Shop </Link>{menu==="shop" ?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}> <Link to="/mens">Men</Link> {menu==="mens" ?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}> <Link to="/womens">Women </Link>{menu==="womens" ?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}> <Link to="/kids">Kids</Link> {menu==="kids" ?<hr/>:<></>}</li>
      </ul>
       <div className="nav-login-cart">
       <Link to="/login"> <button>Login</button></Link>
       <Link to="/cart"><img src={cart_icon} alt="" />
       <div className='nav-cart-count'>{getTotalCartItem()}</div>
       </Link>
      </div>
    </div>
  )
}

export default Navbar
