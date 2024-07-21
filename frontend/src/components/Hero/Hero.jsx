import React from 'react';
import './Hero.css';
import hand from '../Assests/hand-icon.png';
import arrow from '../Assests/thin-arrow-right-icon.png';
import hero from '../Assests/Hero.png';
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
        <div className='hand-icon'>
           <p>new</p>
           <img src={hand} alt="Hand Icon" style={{ width: '50px', height: 'auto' }} />
       </div>
      <p>collection</p>
      <p>for everyone</p>
      </div>
      <div className="hero-latest-btn">
      <div>Latest Collection</div>
       <img src={arrow} alt="Arrow Icon" style={{ width: '30px', height: 'auto' }} />
      </div>
     </div>

       <div>
       <div className="hero-rigth">
        <img src={hero} alt=""  />
        </div>
      </div>
     
     
     
    </div>
  )
}

export default Hero
