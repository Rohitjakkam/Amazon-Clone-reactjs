import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js"
import Checkout from "./Checkout";
// Main part od app
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/" element={<React.Fragment><Header /><Home /></React.Fragment>} />
        <Route path="/checkout" element={<React.Fragment><Header /><Checkout /></React.Fragment>} />
         <Route path="/login" element={<React.Fragment><Login /></React.Fragment> } />
        </Routes>    
      </div>
    </Router>
    
  );
}

export default App;
