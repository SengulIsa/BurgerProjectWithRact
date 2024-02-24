import React from 'react';
import banner from '../assets/banner.png';
import '../Styles/Contact.css';

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${banner})`}}>
      </div>
      <div className='rightSide'>
        <h1>Contact US</h1>
        <form>
          <label>Name-Surname</label>
          <input type="text"  name='name' placeholder='Please Enter your Name and Surname...'/>
          <label>Email</label>
          <input type="email"  name='email' placeholder='Please Enter Your Mail'/>
          <label>Your Message</label>
          <textarea rows="6" name='message' placeholder='Enter Your Message'></textarea>

        </form>
      </div>
    </div>
  )
}

