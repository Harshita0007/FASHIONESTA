import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img onClick={window.scrollTo(0,0)} src={image} alt={name} className="product-image" />
      </Link>
      <div className="item-info">
        <h3>{name}</h3>
        <div className="price">
          <span className="new-price">${new_price.toFixed(2)}</span>
          <span className="old-price">${old_price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
