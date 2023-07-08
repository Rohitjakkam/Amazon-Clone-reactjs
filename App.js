import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js"
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/" element={<React.Fragment><Header /><Home /></React.Fragment>} />
        <Route path="/checkout" element={<React.Fragment><Header /><Checkout /></React.Fragment>} />
        {/* <Route path="/contact" element={} /> */}
        </Routes>    
      </div>
    </Router>
    
  );
}

export default App;
