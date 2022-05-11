import React,{useState} from 'react'
import Carasoul from '../Components/Carasoul'
import Chatbot from '../Components/Chatbot'
import Footer from '../Components/Footer'
import Hospital_Details from '../Components/Hospital_Details'
import Navbar from '../Components/Navbar'
import Suggestion_Section from '../Components/Suggestion_Section'

const Home_Page = () => {

  return (
    <div>
        <Navbar></Navbar>
        <Carasoul></Carasoul>
        <Chatbot></Chatbot>
        <div style={{margin: "0px 30px"}}>
        <Hospital_Details></Hospital_Details>
        <Suggestion_Section></Suggestion_Section>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Home_Page