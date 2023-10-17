import React from 'react'

const Features = ({ img, title, description }) => {
  return (
    <div>
       <div className="txt-1">
        <img src={img} alt="" />
        <p className="txt-p">{title}</p>
          <p className="txt-p__1">
             {description}
            </p>
        </div>
    </div>
  )
}



export default Features
