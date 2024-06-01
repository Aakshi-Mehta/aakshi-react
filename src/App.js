import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import { Home } from "./components/Home";
import Login from "./components/login";
import SignUp from "./components/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
