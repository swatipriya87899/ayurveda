import React from "react";
import './Header.css';

const Header = (props) => {
  return (
    <div className="header">
      <div className="hospital_heading">{props.heading}</div>
      <div style={{ display: "flex" }}>
        <div className="near_you">{props.subheading}</div>
        <div className="near_you_line"></div>
      </div>
    </div>
  );
};

export default Header;
