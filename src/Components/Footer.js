import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import '../Styles/Footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
         <FacebookIcon/>
         <InstagramIcon/>
         <XIcon/>

        </div>
    <p>All Rights Reserved | Burger-Shop</p>
    </div>
  )
}
