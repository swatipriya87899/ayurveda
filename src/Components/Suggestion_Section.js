import React from 'react'
import Header from './Header'
import drinking_water from '../Images/Home_Page/drinking_water.png';
import './Suggestion_Section.css';

const Suggestion_Section = () => {
  return (
    <div className='suggestion_section'>
        <Header heading="Remedies On The Go" subheading="Necessary One"></Header>
        <div className='content'>
          <div className='drinking_water_image'>
          <img src={drinking_water} alt='drinking_water'></img>
          </div>
          <div className='suggestion'>Drink warm water <br></br> throughout <br></br> the day. </div>
        </div>
    </div>
  )
}

export default Suggestion_Section