import React from 'react'
import './Newcollaction.css'
import new_collection from '../Components/assets/new_collections'
import Item from '../item/item'
const NewCollaction = () => {
  return (
    <div className='newcollaction'>
      <h1>New Collection</h1>
      <hr />
      <div className='collections'>
        {new_collection.map((item, i)=>{
            return <Item key={i}  id={item.id} name={item.name}image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollaction
