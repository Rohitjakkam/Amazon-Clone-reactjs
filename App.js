import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js"

function App() {
  return (
    <Router>
        <div className="app">
          {/* <Routes>
            <Route path="/checkout">
              <h1>Checkout page</h1>
            </Route>
            <Route path="/login">
              <h1>login page</h1>
            </Route>
            <Route path="/">
              <Header />
              <h1>Home page</h1>
            </Route>
          </Routes> */}
           <Header />
           <Home />
        
    </div>
    </Router>
    
  );
}

export default App;
