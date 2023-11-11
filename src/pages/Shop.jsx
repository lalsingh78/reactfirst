import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../popular/Popular'
import Offers from '../offers/Offers'
import NewCollaction from '../newcollection/NewCollaction'
import Newsletter from '../Components/assets/Newsletter/Newsletter'
const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <div>
      <Offers/>
      </div>
      <NewCollaction/>
      <Newsletter/>
     
    </div>
  )
}

export default Shop
