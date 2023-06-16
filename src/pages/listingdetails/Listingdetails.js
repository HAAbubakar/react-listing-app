import React from 'react';
import './Listingdetails.css';
import Detailpage from '../../components/detailpage/Detailpage';
import Sidebar from '../../components/sidebar/Sidebar';


function Listingdetails() {
  return (
    <div className='detail-page'>
      <Detailpage/>
      <Sidebar />
    </div>
  )
}

export default Listingdetails