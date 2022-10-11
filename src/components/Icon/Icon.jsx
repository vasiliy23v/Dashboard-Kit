import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_CONFIG } from "../../configs/homePageConfig";
import { ReactComponent as ReactLogo } from "../../images/3.svg";

const Icon = ({ li, activeToggler }) => {
  const activeToggleHandler = () => {
    activeToggler(li);
  };
  return (
    <Link to={li.path}>
      <div
        key={li.title}
        onClick={activeToggleHandler}
        className={`aside-nav-link ${li.isActive ? "active" : ""}`}
      >
        <img src={li.iconSrc} alt="img" />
        <p className="aside-nav-link-p">{li.title}</p>
      </div>
    </Link>
  );
};

export default Icon;
