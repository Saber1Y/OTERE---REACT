import React from 'react'
import './footer.css';
import { images } from '../../constants/index'

const Footer = () => {
  return (
   <footer className='footer-end_row'>
    <div className="footer-content">
            <img src={images.logo} alt="" />
        <div className="spaced--txt">
          <h3>Be Our Friend</h3>
          <p>3, Season Park, jakarta</p>
          <p>support@foodyar.co,id</p>
          <p>021-11-2222</p>
        </div>
        <div className="spaced--text">
          <h3>Be Our Friend</h3>
          <p>3, Season Park, jakarta</p>
          <p>support@foodyar.co,id</p>
          <p>021-11-2222</p>
        </div>
        <div className="button-container">
          <button className="footer-btn">
            <img src={images.playstore} width={{ width: '30px' }} height={{ height: '29px' }} />
            <span className="txt-box" style= {{ fontSize: '14px' }}>DOWNLOAD</span>
          </button>
          <button className="footer-btn">
            <img src={images.A} width={{ width: '30px' }} height={{ height: '29px' }} />
            <span className="txt-box" style= {{ fontSize: '14px' }}>DOWNLOAD</span>
          </button>
        </div>
      </div>
   </footer>
  )
}

export default Footer

