import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./login.scss";
import "../../sass/typography.scss";
import "../../sass/utilities.scss";
import Button from "../../components/Button/Button";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="log-in">
        <div className="log-in__heading mb-lg">
          <h1 className="log-in__header header1 mb-sm">Log In</h1>
          <h2 className="log-in__sub-header sub_header1">
            Log In to make recommendations
          </h2>
        </div>

        <form action="#" className="log-in__form">
          <div className="log-in__form--group mb-mid">
            <label htmlFor="email" className="textfield_header1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="log-in__input body_text3"
            />
          </div>
          <div className="log-in__form--group mb-lg">
            <label htmlFor="password" className="textfield_header1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="log-in__input body_text3"
            />
          </div>
          <Button text={"Log In"} />
        </form>

        <div className="log-in__links body_text3">
          <a href="#" className="forgot-password mt-sm">
            Forgot Password?
          </a>

          <a href="#" className="sign-up mt-sm">
            Sign Up Instead
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
