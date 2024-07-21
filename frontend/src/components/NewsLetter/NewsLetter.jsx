import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsLetter'>
     <h1>Get Exculsive Offers On Your Email</h1> 
     <p>Subscribe to Our newsLetter and Stay updated</p>
     <div>
        <input type='email' placeholder='Your Email Id'/>
        <button>Subscribe</button>
     </div>
    </div>
  )
}

export default NewsLetter
