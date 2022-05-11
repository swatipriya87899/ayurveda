import React from 'react';
import './Footer.css';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
   
  return (
    <div className='footer'>
        <div className='follow'>
            <div className='follow_us'>Follow us: </div>
            <div className='icon_background' style={{backgroundColor:"#064635"}}>
            <FacebookSharpIcon style={{ fill: 'white' , width:'25px', height:'25px'}}></FacebookSharpIcon>
            </div>
            <div className='icon_background'>
            <InstagramIcon style={{fill:'#064635'}}></InstagramIcon>
            </div>
            <div className='icon_background'>
            <TwitterIcon style={{fill:'#064635', width:'23px', height:'23px'}}></TwitterIcon>
            </div>
        </div>
    </div>
  )
}

export default Footer