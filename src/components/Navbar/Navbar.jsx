import React from "react";
import { useState } from "react";
import {FaBars} from "react-icons/fa"

function Navbar(props) {
  const [className, setClassName] = useState('hidden');
  
  const openDropdown = () => {
    if (className == 'hidden') {
      setClassName('');
      document.getElementById('navbar-list').style.animation = 'growDown 300ms ease-in-out forwards'
    } else {
      setClassName('hidden')
      document.getElementById('navbar-list').style.animation = ''
    }
  }

  return (
    <nav className="navbar">
      <span className="navbar-dropdown-button" onClick={openDropdown}><FaBars /></span>
      <ul className={className} id="navbar-list">
        {props.data.map((data, index) =>{
          return (
            <li className={data.className + ' noselect'} key={index}>{data.text}</li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar;