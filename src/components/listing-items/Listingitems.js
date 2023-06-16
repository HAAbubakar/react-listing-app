import React from 'react'
import './Listingitems.css'
function Listingitems() {
  return (
    <div className='listing-items'>
        <img className='listing-img' src='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt='house'/>
        <div className='listing-details'>
            <div className='listing-categories'>
                <span className='listing-category'>Sell</span>
                <span className='listing-category'>Buy</span>
            </div>
            <span className='listing-title'>Properity Avaiable</span>
            <hr/>
            <span className='lsiting-time'>2 days ago</span>
            
        </div>
        <p className='listing-description'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
    </div>
  )
}

export default Listingitems