import React from "react";
import "./navbar.scss";
import {IoMdMenu} from "react-icons/io"

function Navbar() {
  return (
    <nav>
      <span>anyRec</span>
      <ul>
        <li><a href="#">Recommend</a> </li>
        <li><a href="#">Login</a> </li>
        <button><IoMdMenu /></button>
      </ul>
    </nav>
  )
}

export default Navbar;
