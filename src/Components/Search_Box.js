import React,{useState} from 'react';
import './Search_Box.css';
import Input from "@mui/material/Input";
import Search_Icon from "../Images/Home_Page/Search_icon.png";
import Box from "@mui/material/Box";

const ariaLabel = { "aria-label": "description" };

const Search_Box = () => {
      //search state
  const [search_val, setSearch_val] = useState("");

  return (
    <div className="search_box">
    <Box component="form" noValidate autoComplete="off">
      <Input
        className="search"
        disableUnderline
        placeholder="Search Hospitals, treatments..."
        onChange={(event) => {
          setSearch_val(event.target.value);
        }}
        value={search_val}
        style={{ fontSize: "12px" }}
      />
        <img src={Search_Icon} className="search_icon_img"></img>
    </Box>
  </div>
  )
}

export default Search_Box