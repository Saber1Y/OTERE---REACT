import React from 'react'
import './Otero.css';
import  { data, images} from  '../../constants/index';
import Features from '../../container/Features/Features';

const Otero = () => {
  return (
    <section className='col-main'>
     <h2>HOW <span>TERE</span> WORKS</h2>
     <p className="col--center__txt">
     Download and install the tere app. Enter your phone<br />
     number and make your user account. when approved you<br />
      <span style={{ marginLeft: '10px' }}>may start driving</span>
     </p>
     <div className="container-square__txt">
      <div className="txt-container">
        {data.featuresData.map((item, index) => (
          <Features img={item.img} title={item.title} description={item.description} key={item.title + index} />
        ))}
     </div>
     <img src={images.Phone} alt="" className=''/>
     </div>
    </section>
  )
}

export default Otero
