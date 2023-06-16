import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header-section'>
        <div className='header-text'>
            <span className='header-text-title'> Marketing Place</span>
            <span className='header-text-subtitle'> Properity LISTING </span>
        </div>
        <img className='header-image' src='https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='wallpaper'/>
    </div>
  )
}

export default Header