import React from 'react'
import { data, images } from  '../../constants/index';
import './TereBenefits.css';
import Benefits from '../../container/benefits/Benefits';


const TereBenefits = () => {
  return (
    <div>
      <h2 className="feature-header"><span>TERE</span> BENEFITS</h2>
      <div className="features">
        <div className="features-col">
            <div className="features--main_row">
                {data.BenefitsData.map((benefits, index) => (
                  <Benefits number={benefits.number} header={benefits.header} discrip={benefits.discrip} img={benefits.img} key={benefits.number + index} />
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default TereBenefits
