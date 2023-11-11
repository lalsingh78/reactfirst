
import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './footer/Footer'
import men_banner from './Components/assets/banner_mens.png'
import womens_banner from './Components/assets/banner_women.png'
import kids_banner from './Components/assets/banner_kids.png'
export default class App extends Component {
  render() {
    return (
      <div>
       <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={womens_banner} category="women"/>}/>
          <Route path='/kids' element ={<ShopCategory banner={kids_banner} category="kid"/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
       </BrowserRouter>
       
      </div>
    )
  }
}

