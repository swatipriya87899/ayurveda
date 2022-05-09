import { AppBar } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "./Navbar.css";
import Avatar from "@mui/material/Avatar";
import Avatar_Img from "../Images/Home_Page/Swati_Pic.jpg";
import Input from "@mui/material/Input";
import Search_Icon from "../Images/Home_Page/Search_icon.png";
import Location from "./Location";
import Search_Box from "./Search_Box";

const Navbar = () => {
  //search state
  const [search_val, setSearch_val] = useState("");
  
  return (
    <div>
      <Box>
        <AppBar className="appbar" position="static" style={{ width: "100vw" }}>
          <Toolbar className="navbar">
            <div className="name">Ayurveda</div>
            <Search_Box></Search_Box>
            <div className="home navbar_content">Home</div>
            <div className="book_appointment navbar_content">
              Book Appointment
            </div>
            <div className="avatar">
              <Avatar src={Avatar_Img}></Avatar>
              <div className="user_name">Swati Priya</div>
            </div>
            <Location></Location>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
