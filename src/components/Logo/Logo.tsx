import React from "react";
import "./Logo.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <div className="logo-block">
        <img src={logo} alt="logo" className="logo" />
        <p>Dashboard Kit</p>
      </div>
    </Link>
  );
};

export default Logo;
