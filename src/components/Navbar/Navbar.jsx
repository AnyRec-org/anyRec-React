import React from "react";
import "./navbar.scss";
import {IoMdMenu} from "react-icons/io"

function Navbar() {
  return (
    <nav>
      <span><a href="#">anyRec</a></span>
      <ul>
        <li><a href="#">Recommend</a> </li>
        <li><a href="#">Login</a> </li>
        <button><IoMdMenu style={{verticalAlign: "middle"}} /></button>
      </ul>
    </nav>
  )
}

export default Navbar;
