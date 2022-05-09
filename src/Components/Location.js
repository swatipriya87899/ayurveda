import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Location.css";

const Location = () => {
  return (
    <div className="location">
      <LocationOnIcon style={{ color: "#42e38f" }}></LocationOnIcon>
      <div className="place">
        <div className="city">Kharari</div>
        <div className="exact_place">S E C Sasaram</div>
      </div>
      <KeyboardArrowDownIcon
        style={{ color: "#42e38f" }}
      ></KeyboardArrowDownIcon>
    </div>
  );
};

export default Location;
