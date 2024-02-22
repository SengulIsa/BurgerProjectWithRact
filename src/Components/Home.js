import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/banneryeni.jpg';
import '../Styles/Home.css';

export const Home = () => {
  return (
    <div className='mainPage' style={{backgroundImage:`url(${BannerImage})`}}>
      <div className='order'>
      <Link to="/Menu">
        <button>Give  Order !</button>
      </Link>

      </div>
    </div>
  )
}
