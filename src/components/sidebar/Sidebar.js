import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar-section'>
        <div className='sidebar-subsection'>
            <span className='sidebar-title'>about me</span>
            <img className='sidebar-img' src='https://images.pexels.com/photos/6996168/pexels-photo-6996168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='wallpaper' />
            <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. </p>
        </div>
        <div className='sidebar-subsection'>
            <span className='sidebar-title'>categories</span>
            <ul className='sidebar-categories'>
                <li className='sidebar-category'>Buy</li>
                <li className='sidebar-category'>Sell</li>
                <li className='sidebar-category'>Rent</li>
                <li className='sidebar-category'>Commercial</li>
            </ul>
        </div>
        <div className='sidebar-subsection'>
            <span className='sidebar-title'>Follow us </span>
            <div className='sidebar-social'>
                <i className="sidebar-social-icon fa-brands fa-instagram fa-lg"></i>
                <i className="sidebar-social-icon fa-brands fa-facebook" ></i>
                <i className="sidebar-social-icon fa-brands fa-reddit fa-lg" ></i>
                <i className="sidebar-social-icon fa-brands fa-twitter"></i>
            </div>
        </div>
    </div>
  )
};

export default Sidebar