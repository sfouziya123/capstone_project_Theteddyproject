import React from "react";
import './Routes.css'
import Navbar from '../Navbar/Navbar'
import Home from "../Home/Home";
import Footer from '../Footer/Footer'


function Routes() {
  return (
    <div className="App">
     
      <Navbar/>     
      <Home/>
      <Footer/>

    </div>
  );
}

export default Routes;
