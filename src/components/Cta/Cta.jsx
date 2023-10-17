import React from 'react'
import './cta.css';

const Cta = () => {
  return (
  <div className='main-input__bar'>
     <div className="rec-container">
     <h5>
          Let’s go. Get a link<br />
          to download the app.
        </h5>
        <input type="form" className="input-form"
          placeholder="Enter mobile phone number" />
          <button type='button' className='btn-box cta-btn' style={{ marginLeft: '-2%', height: '50px'}}><span>APPLY TO DRIVE </span>
          </button>
     </div>
  </div>
  )
}

export default Cta