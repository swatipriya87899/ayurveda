import React from 'react';
import './Footer.css';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import { Icon } from '@mui/material';

const Footer = () => {
    const social_medias = [
        {
            social_media:{FacebookSharpIcon},
            link:"s"
        },
        {
            social_media:{FacebookSharpIcon},
            link:"w"
        },
    ]
  return (
    <div className='footer'>
        <div className='follow'>
            <div>Follow us</div>
            {
                social_medias.map((item)=>{
                    // <item.social_media></item.social_media>
                    // <FacebookSharpIcon></FacebookSharpIcon>
                    <Icon icon={item.social_media}></Icon>
                })
            }
        </div>
    </div>
  )
}

export default Footer