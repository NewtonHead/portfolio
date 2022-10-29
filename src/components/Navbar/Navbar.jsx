import React from "react";
import { useState } from "react";
import {FaBars} from "react-icons/fa"

function Navbar(props) {
  const [hidden, isHidden] = useState(true);
  const mediaQuerie = window.matchMedia('(max-width 600px)')
  
  const openDropdown = () => {
    if (hidden == true) {
      isHidden(false)
      document.getElementById('navbar-list').style.animation = 'growDown 300ms ease-in-out forwards'
      document.getElementById('navbar-list').classList.remove('hidden')
    } else {
      isHidden(true)
      document.getElementById('navbar-list').style.animation = ''
      document.getElementById('navbar-list').classList.add('hidden')
    }
  }

  return (
    <nav className="navbar">
      <span className="navbar-dropdown-button" onClick={openDropdown}><FaBars /></span>
      <ul id="navbar-list" className="hidden">
        {props.data.map((data, index) =>{
          return (
            <li key={index}>
              <a className={data.className + ' noselect'} href={"#" + data.text}>{data.text}</a>
              </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar;