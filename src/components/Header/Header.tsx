import { Link } from "react-router-dom";
import React from "react";
import profileImg from "../../images/m header.png";
import "../../App"
import "./Header.scss"
interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  return (
    <div className="header">
      <h2 className="header-h2">{title}</h2>
      <Link to="/login">
        <div className="header-right-block">
          <p className="header-right-block-p">Jones Ferdinand</p>
          <div className="header-right-block-border">
            <img
              src={profileImg}
              alt="ProfileImage"
              className="header-right-block-img"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Header;
