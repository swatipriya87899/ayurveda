import React from 'react';
import { Route, Routes } from "react-router";
import Home_Page from './Pages/Home_Page';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Home_Page/>} />
    </Routes>
  </>
  )
}

export default App