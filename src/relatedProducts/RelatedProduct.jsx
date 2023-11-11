import React from 'react'
import './Relatedproduct.css'
import Item from '../item/item'
import data_product from '../Components/assets/data'
const RelatedProduct = () => {
  return (
    <div className='relatedproduct'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
         {data_product.map((item, i)=>{
            return <Item  key={i}  id={item.id} name={item.name}image={item.image} new_price={item.new_price} old_price={item.old_price}/>
         })}
      </div>
    </div>
  )
}

export default RelatedProduct
