import React from 'react'
import './Topbar.css'
import { NavLink} from 'react-router-dom';

function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbar-left'>
        <i className="topbar-social fa-brands fa-instagram fa-lg"></i>
        <i className="topbar-social fa-brands fa-facebook" ></i>
        <i className="topbar-social fa-brands fa-reddit fa-lg" ></i>
        <i className="topbar-social fa-brands fa-twitter"></i>
        </div>
        <div className='topbar-center'>
        <ul className='topbar-listing'>
          <li className='top-list-item'> <NavLink to='/'>HOME</NavLink></li>
          <li className='top-list-item'>ABOUT</li>
          <li className='top-list-item'>CONTACT</li>
          <li className='top-list-item'><NavLink className={topbar-nav-link} to='/createlisting'>CREATE property</NavLink></li>
          <li className='top-list-item'>LOG OUT</li>
        </ul>
        </div>
        <div className='topbar-right'>
          <img className='topbar-dp' src='https://images.pexels.com/photos/6996168/pexels-photo-6996168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt='Profile_Pic'/>
          <i className="topbar-search fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar