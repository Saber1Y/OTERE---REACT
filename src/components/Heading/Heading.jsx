import React from 'react'
import './heading.css';
import  playstore  from '../../assets/playstore.png'
import  A  from '../../assets/A.png'
import  Car  from '../../assets/Car.png'


const Heading = () => {
  return (
  
    <section className='hero-container'>
      <div className="hero-main">
        <h1 className="hero--main__txt">
        DOWNLOAD APP,
          SAVE MONEY, MAKE
          FRIENDS!
        </h1>
        <p>It's simple and it's free. Play your part in reducing the Carbon
          Footprint and help Mother Nature to
          sustain its beauty. So what are you waiting for
          Let's ride together
          </p>
          <div className='btn-container'>
            <button type="button" className='btn-box'>
              <img src={playstore} alt="playstore logo"/><span>DOWNLOAD</span>
            </button>
            <button type="button" className='btn-box'>
              <img src={A} alt="A"/><span>DOWNLOAD</span>
            </button>
          </div>
      </div>
      <div className="hero-img">
        <img src={Car} alt="" />
      </div>
    </section>
  )
}

export default Heading
Heading