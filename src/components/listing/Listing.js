import React from 'react';
import './Listing.css';
import Listingitems from '../listing-items/Listingitems';
function Listing() {
  return (
    <div className='listing-section'>
      
      <Listingitems/>
      <Listingitems/>
      <Listingitems/>
      <Listingitems/>
      <Listingitems/>
      <Listingitems/>
    </div>
  )
};

export default Listing