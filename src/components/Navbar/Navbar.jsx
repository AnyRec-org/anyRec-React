import React from "react";
import "./navbar.scss";
import "../../sass/typography.scss";

function Navbar() {
  return (
    <div className="nav-container">
      <input type="checkbox" className="nav__checkbox" id="burger" />
      <div className="nav">
        <div className="nav__logo-box">
          <h1 className="nav__logo">anyREC</h1>
        </div>
        <div className="nav__menu">
          <a href="#" className="nav__link sub_header2">
            See Recommendations
          </a>
          <label htmlFor="burger" className="nav__button">
            <span class="nav__burger">&nbsp;</span>
          </label>
          <ul className="nav__list sub_header2">
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                Profile
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                History
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                About AnyRec
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                Meet the team
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                Saved Recommendations
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#" className="nav__link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav__list--overlay"></div>
    </div>
  );
}

export default Navbar;
