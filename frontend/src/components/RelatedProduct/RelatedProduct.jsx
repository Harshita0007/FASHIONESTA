import React from 'react'
import './RelatedProduct.css'
import data_products from '../Assests/data';
import Item from '../Item/Item';

const RelatedProduct = () => {
  return (
    <div className='relatedProduct'>
    <h1>Related Products</h1>
    <hr/>
    <div className='relatedProduct-list'>
      {data_products.map((item, i) => {
        return< Item key= {i} id={item.id} name={item.name} image={item.img} new_price={item.new_price} old_price={item.old_price} />
        })}
    </div>
    </div>
  )
}

export default RelatedProduct
