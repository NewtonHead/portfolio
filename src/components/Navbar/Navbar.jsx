import React from "react";

function Navbar(props) {
  return (
    <nav class="navbar">
      <ul>
        {props.data.map((data, index) =>{
          return (
            <li className={data.className} key={index}>{data.text}</li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar;