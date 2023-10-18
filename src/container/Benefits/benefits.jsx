import React from 'react'
import './benefits.css'


const Benefits = ({ img, number, header, discrip }) => {
  return (
    <div className="features">
    <div className="features-col">
        <div className="features--main_row">
            <div className="features-row">
                <span style={{fontSize: '80px'}}>{number}</span>
                <p className="features-row__p">{header}</p>
            </div>

            <p className="features--main-text">
                    {discrip}
            </p>
        </div>
        <img src={img} alt="" />
    </div>
  </div>
  )
}

export default Benefits
