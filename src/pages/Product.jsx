import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../breadcrums/breadcrums'
import ProductDispaly from '../productdisplay/ProductDispaly'
import DescriptionBox from '../descriptionBox/DescriptionBox'
import RelatedProduct from '../relatedProducts/RelatedProduct'
const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
   
  // const product = all_product.find((e)=>e.id === Number(productId))?
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
        <Breadcrums product ={product}/>
        <ProductDispaly product ={product}/>
        <DescriptionBox/>
        <RelatedProduct/>
    </div>
  )
}

export default Product
