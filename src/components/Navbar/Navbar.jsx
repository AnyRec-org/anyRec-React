import React from "react";
import "./navbar.scss";
import "../../sass/typography.scss";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav__logo-box">
        <h1 className="nav__logo">anyREC</h1>
      </div>
      <div className="nav__menu">
        <a href="#" className="nav__link sub_header2">
          See Recommendations
        </a>
        <div className="nav__burger"></div>
      </div>
    </div>
  );
}

export default Navbar;
