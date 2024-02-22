import React from 'react'
import BurgerLogo from '../assets/burgerlogo.png';
import {Link} from 'react-router-dom';
import '../Styles/Navbar.css';

export const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='main'>
                <img src={BurgerLogo} alt="" />
                <div className='mainLink'>
                    <Link to="/">Home</Link>
                    <Link to="/Menu">Menu</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact Us</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
