import React from "react";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Product from '../Product/ProductPage'
import { Routes, Route } from 'react-router-dom';


function Routess() {
  return (
    <div className="App">

      <Navbar />
        <Routes>
          <Route path="/page" Component={<Product />} />
        </Routes>
      <Footer />

    </div>
  );
}

export default Routess;
