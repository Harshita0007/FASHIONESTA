import React from 'react'
import './Breadcums.css'
import arrow_icon from '../Assests/breadcum.png'
const Breadcums = (props) => {
    const{product}=props;
  return (
    <div className='breadcum'>
      HOME  <img src={arrow_icon}  alt="" style={{ width:"10px", height:"10px" }}/>SHOP<img src={arrow_icon} alt="" style={{ width:"10px", height:"10px" }}/>{product.category} <img src={arrow_icon} alt='' style={{ width:"10px", height:"10px" }}/>{product.name}
    </div>
  )
}

export default Breadcums
