import React, { useContext } from 'react';
import './ShopCategory.css';
import { ShopContext } from '../context/ShopContext';
import drop_down from '../components/Assests/down-arrow-icon.png';
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="Category Banner" />

      <div className='shop-category-indexSort'>
        <p>
          <span>Showing 1-12 </span>out of {all_product.length} products
        </p>
        <div className='shop-category-sort'>
          Sort by <img src={drop_down} alt="Sort Dropdown" className="dropdown-icon"  style={{ width: '20px', height: 'auto' }}/>
        </div>
      </div>

      <div className='shop-category-product'>
        {all_product.map((item) => {
          if (props.category === item.category) {
            console.log("category is matching");
            return <Item key={item._id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          }
          else{
            console.log(props.category);
            console.log("Not rendering");
            console.log(item);
          }
          return null;
        })}
      </div>
      <div className="shop-category-loadmore">
      Explore More

      </div>
    </div>
  );
};

export default ShopCategory;
