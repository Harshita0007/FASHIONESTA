import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import add_product from '../../assets/add_product.png'; // Adjusted file path
import list from '../../assets/list.png'; // Adjusted file path

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{ textDecoration: "none" }}>
        <div className='sidebar-item'>
          <img src={add_product} alt='Add Product' className='sidebar-icon' />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} style={{ textDecoration: "none" }}>
        <div className='sidebar-item'>
          <img src={list} alt='Product List' className='sidebar-icon' />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
