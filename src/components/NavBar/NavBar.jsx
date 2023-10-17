import React from 'react'
import './navbar.css';
import { Otere } from '../../assets/Otere.png';


const NavBar = () => {
  return (
    <nav className='nav-container'>
      <img src={Otere} alt="" className='otero-image' />
      <div className="navbar-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">How tere Works</a></li>
          <li><a href="#">Tere benefits</a></li>
          <li>
            <a href="#"
              ><button className="btn"><span>Help Center</span></button></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
