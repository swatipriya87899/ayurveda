import React from 'react';
import carasoul_imag1 from '../Images/Home_Page/Carasoul_img1.png';
import './Carasoul.css'

const Carasoul = () => {
  return (
      <div className="carasoul">
          <img src={carasoul_imag1} style={{width:'100vw'}}></img>
      </div>
  )
}

export default Carasoul;