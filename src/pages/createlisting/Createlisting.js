import React from 'react'
import './Createlisting.css'

function Createlisting() {
  return (
    <div className='create-listing'>
        <form className='create-listing-form'>
            <div className='create-listing-form-group'>
                <input autoFocus={true} type='text' placeholder='Property Title' className='create-listing-text'/>
                <label htmlFor='listingImg' className='create-listing-img-upload'>
                    <i class="upload-icon fa-solid fa-cloud-arrow-up"></i>
                </label>
                <input type='file' id='listingImg' style={{display:'none'}} />
            </div>
            <div className='create-listing-form-group'>
                <textarea className='create-listing-text create-listing-desc' placeholder='property description'></textarea>
            </div>
        </form>
        <button className='create-listing-button'>Submit</button>
    </div>
  )
}

export default Createlisting