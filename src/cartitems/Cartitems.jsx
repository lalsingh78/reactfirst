import React from 'react'
import './cartitems.css'
import { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import remove_icon from '../Components/assets/cart_cross_icon.png'
const Cartitems = () =>{
    const { getTotalAmount, all_product ,cartitem, removeToCart} =useContext(ShopContext)

  return (
    <div className='cartitems'>
        <div className="cartitem-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
            {/* <div className="cartitems-format">
                <img src="" alt="" className='carticon-product-icon' />
                <p></p>
                <p></p>
                <button className='cartitems-quantity'></button>
                <p></p>
                <img src={remove_icon} onClick={removeToCart()} alt="" />
            </div> */}
            <hr />
            {all_product.map((e)=>{
                if(cartitem[e.id]>0)
                {
                    return <div> 
                        <div className='cartitem-format-main cartitems-formate'>
                            <img src={e.image} alt="" srcset="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>{e.new_price}</p>
                            <button className='cartitem-quantity'>{cartitem[e.id]}</button>
                            <p> ${e.new_price * cartitem[e.id] }</p>
                            <img className='carticon-remove-icon' src={remove_icon} alt="" onClick={()=>{removeToCart(e.id)}}/>
                        </div>
                    </div>
                }
                return null;
            })}
        <div className="cartitems-down">
            <div className="cartitem-total">
                <h1>cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>subtotal</p>
                        <p>${getTotalAmount()}</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <p>shipping</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalAmount()}</h3>
                    </div>
                </div>
                <button>PROCCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
               <p>If you have a promo code , Enter it here</p>
               <div className="cartitems-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Cartitems
