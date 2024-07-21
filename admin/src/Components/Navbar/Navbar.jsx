import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png.png'; // Adjusted file extension if necessary
import profile from '../../assets/profile.webp';
import arrow from '../../assets/down-arrow-icon.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='brand'>
        <img src={logo} alt='Logo' className='nav-logo' />
        <div className='brand-text'>
          <h1>FASHIONSESTA</h1>
          <p className='admin-panel'>Admin Panel</p>
        </div>
      </div>
      <div className='profile'>
        <img src={profile} alt='Profile' className='nav-profile'  />
        <img src={arrow} alt='Down Arrow' className='nav-arrow' />
      </div>
    </div>
  );
};

export default Navbar;
