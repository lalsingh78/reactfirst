import React from 'react'
import './productdisplay.css'
import star_icon from '../Components/assets/star_icon.png'
import star_dul from '../Components/assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
const ProductDispaly = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext)
  return (
    <div className='product-display'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dul} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        {/* div.productdisplayright-description */}
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>s</div>
            <div>m</div>
            <div>l</div>
            <div>xl</div>
            <div>xxl</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category: <span>Women, T-shirt, crop Top</span></span></p>
        <p className='productdisplay-right-category'><span>text: <span>Modern Letest</span></span></p>
      </div>
    </div>
  )
}

export default ProductDispaly
