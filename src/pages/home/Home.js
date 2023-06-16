import React from 'react';
import './Home.css';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Listing from '../../components/listing/Listing';

function Home() {
  return (
    <div>
      <Header/>
      <div className='Home-page'>
        <Listing />
        <Sidebar/>
        
      </div>
    </div>
  )
}

export default Home