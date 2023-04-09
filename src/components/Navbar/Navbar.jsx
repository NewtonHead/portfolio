import React, { useRef } from "react";
import { useState } from "react";
import {FaBars} from "react-icons/fa"

function Navbar(props) {
  const [hidden, isHidden] = useState(true);

  const navbarList = useRef(null)
  
  const openDropdown = (event) => {
    if (hidden === true) {
      isHidden(false);
      navbarList.current.classList.remove("hidden")
      navbarList.current.style.animation = "growDown 300ms ease-in-out forwards"
    } else {
      isHidden(true);
      navbarList.current.classList.add("hidden");
      navbarList.current.style.animation = ""
    }
  }

  return (
    <nav className="navbar oxford-blue-background">
      <span className="navbar-dropdown-button almond flex-centered absolute desktop-hidden" onClick={openDropdown}><FaBars /></span>
      <ul id="navbar-list" className="hidden absolute" ref={navbarList}>
        {props.data.map((data, index) =>{
          return (
            <li key={index}>
              <a className={data.className + ' noselect almond'} href={"#" + data.text}>{data.text}</a>
              </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar;