import React, { createContext, useState } from 'react'
import all_product from '../Components/assets/all_product'


export const  ShopContext = createContext(null)
const getDefaultCart =()=>{
    let cart ={}
     for (let index = 0; index <all_product.length+1; index++) {
        cart[index]=0;        
     }
     return cart;
}
const Shopcontextprovider =(props)=>{
   
   const [cartitem, setcartitem] =useState(getDefaultCart())
    
    const addToCart =(itemId)=>{
        setcartitem((prev)=>({...prev, [itemId]:prev[itemId]+1}))
    }
    const removeToCart =(itemId)=>{
        setcartitem((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalAmount =()=>{
        let totalAmount =0;
        for(const item in cartitem){
           if(cartitem[item]>0){
            let iteminfo = all_product.find((product)=> product.id===Number(item));
            totalAmount += iteminfo.new_price * cartitem[item]
           }   
        }
        return totalAmount
    }
    const getTotalCartItem =()=>{
        let totalitem= 0;
        for(const item in cartitem){
            if(cartitem[item]>0){
                totalitem += cartitem[item]
            } 
        }
        return totalitem
    }
    const contextvalue={getTotalCartItem,getTotalAmount, all_product ,cartitem, addToCart, removeToCart}
    return( 
    <ShopContext.Provider value={contextvalue}>
        {props.children}
    </ShopContext.Provider>
    )
}
export default Shopcontextprovider

