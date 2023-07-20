import React from "react";
import Navbar from '../Navbar/Navbar'
// import Home from "../Home/Home";
import Footer from '../Footer/Footer'
import Signup from '../Signup/Signup page'
// import { Routes,Route} from 'react-router';


function Routes() {
  return (
    <div className="App">
     
      <Navbar/>     
      {/* <Home/> */}
      {/* <Signup/> */}

      <Footer/>
      {/* <Routes>
        <Route path="/home" Component ={}/>
        <Route path="/page" Component={Footer}/> 
      </Routes>    */}

    </div>
  );
}

export default Routes;
