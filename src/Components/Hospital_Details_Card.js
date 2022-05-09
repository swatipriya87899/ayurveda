import React, { useEffect } from "react";
import "./Hospital_Details_Card.css";
import direction_icon from "../Images/Home_Page/direction_icon.png";
import call_icon from "../Images/Home_Page/call_icon.png";
import Button from "./Button";

const Hospital_Details_Card = (props) => {
  return (
    <div className="hospital_details_card">
      <img src={props.image} className="hospital_details_card_image"></img>
      <div className="hospital_name">{props.city}</div>
      <div className="hospital_city">{props.city}</div>
      <div className="hospital_status">
        <div style={{textAlign:'left'}}>
          <div className="open_close">Closed</div>
          <div className="hospital_distance">125Km From Here</div>
        </div>
        <div className="contact_details">
          <div>
            <img src={direction_icon} alt="direction"></img>
          </div>
          <div>
            <img src={call_icon} alt="call"></img>
          </div>
        </div>
      </div>
      <Button></Button>
    </div>
  );
};

export default Hospital_Details_Card;
