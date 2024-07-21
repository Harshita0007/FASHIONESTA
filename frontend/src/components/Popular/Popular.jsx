import React from 'react';
import './Popular.css';
import data_product from '../Assests/data'; // Verify the correct import path and file name
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => (
          <Item key={item.id} id={item.id} name={item.name} image={item.img} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
}

export default Popular;