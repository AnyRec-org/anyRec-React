import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"; 
import SearchedProduct from "./pages/SearchedProduct/SearchedProduct"

function App() {
  return (
    <div className="App">
      <Router basename="/anyRec-React">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={<SearchedProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
