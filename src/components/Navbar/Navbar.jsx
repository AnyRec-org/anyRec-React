import React from "react";
import "./navbar.scss";
import {IoMdMenu} from "react-icons/io"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <span><a href="#">anyRec</a></span>
      <ul>
        <li><a href="#">Recommend</a> </li>
        <li><Link to="./login"> Login </Link> </li>
        <button><IoMdMenu style={{verticalAlign: "middle"}} /></button>
      </ul>
    </nav>
  )
}

export default Navbar;
