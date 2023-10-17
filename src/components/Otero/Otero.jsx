import React from 'react'
import './Otero.css';
import { feautres } from '../../constants/images';

const Otero = () => {
  return (
    <section className='col-main'>
      <div>
     <h2>HOW <span>TERE</span> WORKS</h2>
     <p className="col--center__txt">
     Download and install the tere app. Enter your phone<br />
     number and make your user account. when approved you<br />
      <span style={{ marginLeft: '10px' }}>may start driving</span>
     </p>
     </div>
     <div className="container-square__txt">
      <div className="txt-container">
        <div className="txt-1">
        <img src={one} alt="" />
        <p className="txt-p">REQUEST A RIDE</p>
          <p className="txt-p__1">
              Have to reach office or going<span>for shopping ?</span> Just put
              your<br />
              current location and destination<br />
              and search a ride that suits you
            </p>
        </div>
        <div className="txt-1">
        <img src={Two} alt="" />
        <p className="txt-p">INSTANT NOTIFICATIONS </p>
          <p className="txt-p__1">
          Get instant nottfication for<br />
              your rides and be in contact<br />
              with fellow riders all the time
            </p>
        </div>
        <div className="txt-1">
        <img src={Three} alt="" />
        <p className="txt-p">REQUEST A RIDE</p>
          <p className="txt-p__1">
              Have to reach office or going<span>for shopping ?</span> Just put
              your<br />
              current location and destination<br />
              and search a ride that suits you
            </p>
        </div>
        <div className="txt-1">
        <img src={one} alt="" />
        <p className="txt-p">REQUEST A RIDE</p>
          <p className="txt-p__1">
              Have to reach office or going<span>for shopping ?</span> Just put
              your<br />
              current location and destination<br />
              and search a ride that suits you
            </p>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Otero
